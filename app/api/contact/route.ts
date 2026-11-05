const limits = {
  fullName: 120,
  email: 254,
  companyName: 160,
  website: 500,
  businessType: 80,
  improvements: 3000,
  teamSize: 80,
  projectLocation: 160,
};

export async function POST(request: Request) {
  const error = (message: string, status: number) =>
    Response.json({ message }, { status });

  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return error("Request origin is not allowed.", 403);
  }
  if (request.headers.get("content-type")?.split(";")[0] !== "application/json") {
    return error("Invalid request format.", 415);
  }
  if (Number(request.headers.get("content-length")) > 16384) {
    return error("Your message is too long.", 413);
  }

  const body = await request.text().catch(() => "");
  if (body.length > 16384) return error("Your message is too long.", 413);

  let data: Record<string, unknown>;
  try {
    data = JSON.parse(body);
    if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error();
  } catch {
    return error("Invalid request format.", 400);
  }

  if (data.companyFax !== "" ||
      typeof data.requestId !== "string" ||
      !/^[a-f0-9-]{36}$/i.test(data.requestId)) {
    return error("Your request could not be processed. Please try again.", 400);
  }

  const fields = {} as Record<keyof typeof limits, string>;
  for (const key of Object.keys(limits) as (keyof typeof limits)[]) {
    const value = data[key];
    if (typeof value !== "string" || value.trim().length > limits[key]) {
      return error("Check your entries and shorten any long answers.", 400);
    }
    fields[key] = value.trim();
  }

  if (data.type !== "quote" && data.type !== "consultation") {
    return error("Choose a quote or a consultation.", 400);
  }
  const isQuote = data.type === "quote";
  const missingDetails = isQuote ? !fields.projectLocation : !fields.companyName || !fields.businessType;
  if (!fields.fullName || missingDetails ||
      !fields.improvements || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return error("Check the required fields and your email address.", 400);
  }

  const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_INBOX } = process.env;
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_INBOX) {
    return error("Online requests are currently unavailable. Please call the number on this page.", 503);
  }

  const sent = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `walo-contact/${data.requestId}`,
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_INBOX],
      reply_to: fields.email,
      subject: isQuote ? "New Walo construction quote request" : "New Walo consultation request",
      text: [
        `Name: ${fields.fullName}`,
        `Email: ${fields.email}`,
        ...(isQuote
          ? [`Project location: ${fields.projectLocation}`]
          : [
            `Company: ${fields.companyName}`,
            `Website: ${fields.website || "Not provided"}`,
            `Business type: ${fields.businessType}`,
            `Team size: ${fields.teamSize || "Not provided"}`,
          ]),
        "",
        fields.improvements,
      ].join("\n"),
    }),
    signal: AbortSignal.timeout(10000),
  }).then((response) => response.ok).catch(() => false);

  if (!sent) {
    return error("We couldn't send your request. Please try again or call the number on this page.", 502);
  }
  return Response.json({ accepted: true }, { status: 201 });
}
