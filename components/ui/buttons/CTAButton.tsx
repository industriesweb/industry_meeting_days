import Link from "next/link";
import React from "react";
import event from "@/data/event.json";

export default function CTAButton({
  element,
  className,
}: {
  element?: "header" | "hero";
  className?: string;
}) {
  const screenClassName = element == "header" ? "hidden md:flex" : "flex";
  return (
    <div className={`w-full h-full  items-center ${screenClassName} `}>
      <Link href={event.header.cta.path}>
        <button
          className={` ${className} h-auto bg-transparent border-2 border-background box-border backdrop-blur-2xl participate relative cursor-pointer duration-75 hover:bg-background hover:text-text text-background px-6 py-0.5 rounded`}
        >
          {element == "header"
            ? event.header.cta.title
            : event.header.ctaHero.title}
        </button>
      </Link>
    </div>
  );
}
