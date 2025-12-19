import Image from "next/image";
import React from "react";

export default function TicketCard({ pack = "" }: { pack: string }) {
  const imgSrc =
    pack === "networking"
      ? "https://res.cloudinary.com/dzcarbymi/image/upload/v1763129673/imgi_39_abstract-digital-network-enhances-communication-cooperation-healthcare-providers_548264-96417_geabmt.png"
      : "https://res.cloudinary.com/dzcarbymi/image/upload/v1758879539/Industry_Meeting_Days_ouvre_sa_7%E1%B5%89_%C3%A9dition_13_cm7x39_plmhdw.png";
  return (
    <div className="w-full relative aspect-[3/1] md:aspect-[4/1] lg:aspect-[3/4] bg-gradient-to-l plan-card from-primary to-secondary rounded-md shadow-lg shadow-overlay flex flex-col items-center outline-2 outline-border justify-center">
      <Image
        src={imgSrc}
        alt={`pack`}
        fill
        className="w-full h-full object-cover inset-0 pointer-events-none select-none"
        // Responsive sizes for different breakpoints
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1536px) 25vw, 20vw"
        // Performance optimizations
        //   priority={shouldPrioritize}
        //   loading={shouldPrioritize ? "eager" : "lazy"}
        // Image quality and format optimization
        quality={85} // Good balance between quality and file size
        // Performance hints
        decoding="async"
        // Prevent layout shift
        // Additional optimization for modern formats
        unoptimized={false}
      />
      <div className="size-full backdrop-blur-md text-xl font-medium text-text-inverted flex items-center justify-center relative capitalize">
        {pack}
      </div>
    </div>
  );
}
