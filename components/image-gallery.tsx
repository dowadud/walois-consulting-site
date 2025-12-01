"use client";

import { ImageWithOverlay } from "@/components/image-with-overlay";
import { ScaleOnScroll } from "@/components/animations/scale-on-scroll";
import { FadeIn } from "@/components/animations/fade-in";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2940&auto=format&fit=crop",
    alt: "Modern workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop",
    alt: "Professional consultation",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2874&auto=format&fit=crop",
    alt: "Team strategy session",
  },
  {
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop",
    alt: "Data analysis",
  },
];

export function ImageGallery() {
  return (
    <div>
      <FadeIn>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Transforming How Businesses Operate
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From strategy to implementation, we deliver results
          </p>
        </div>
      </FadeIn>
      
      <div className="grid gap-6 md:grid-cols-2">
        {galleryImages.map((image, index) => (
          <ScaleOnScroll key={index} delay={index * 0.1}>
            <ImageWithOverlay
              src={image.src}
              alt={image.alt}
              className="h-[350px]"
            />
          </ScaleOnScroll>
        ))}
      </div>
    </div>
  );
}

