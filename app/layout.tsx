import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Walo Innovated Solutions | Systems, Automation & AI Consulting",
  description:
    "Walo helps growing businesses design and implement operations, automation, and AI assistants so teams can work smarter, not just harder. Based in Charlotte, NC.",
  keywords: [
    "business automation",
    "AI consulting",
    "operations consulting",
    "systems design",
    "CRM optimization",
    "Charlotte NC",
  ],
  authors: [{ name: "Walo Innovated Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://walois.com",
    siteName: "Walo Innovated Solutions",
    title: "Walo Innovated Solutions | Systems, Automation & AI Consulting",
    description:
      "Walo helps growing businesses design and implement operations, automation, and AI assistants so teams can work smarter, not just harder.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
