import React from "react";
import Image from "next/image";
import event from "@/data/event.json";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="w-24 md:w-36 aspect-[3/1] relative">
        <Image
          alt="logo"
          src={event.header.logo}
          fill
          sizes="100%"
          decoding="async"
          className="w-full h-full object-cover"
          style={{ objectFit: "cover" }}
          quality={85}
          priority
        />
      </div>
    </Link>
  );
}
