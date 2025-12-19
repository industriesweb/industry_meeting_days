"use client";
import { ScrollArea } from "@radix-ui/themes";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

export default function PackCard({
  title,
  price,
  benefits,
  slug,
  setIsOpen
}: {
  title: string;
  price: string;
  benefits: string[];
  slug: string;
  setIsOpen:Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="w-full flex flex-col items-center justify-between aspect-[9/14] bg-gradient-to-b from-secondary to-transparent backdrop-blur-[2px] rounded-lg shadow-xl shadow-text/50 overflow-hidden plan-card">
      <PackCardHeader title={title} price={price} />
      <PackCardContent benefits={benefits} />
      <PackCardFooter type={slug} setIsOpen={setIsOpen} />
    </div>
  );
}

const PackCardHeader = ({ title, price }: { title: string; price: string }) => {
  return (
    <div className="w-full aspect-video flex flex-col items-center justify-center gap-y-1 relative overflow-hidden">
      <h2 className="text-5xl 2xl:text-3xl font-normal italic tracking-wider text-shadow-sm text-shadow-overlay">
        {title}
      </h2>
      {/* <h1 className="relative">
        <span className="text-text-inverted text-4xl 2xl:text-5xl font-semibold text-shadow-xs text-shadow-text">
          {price}
        </span>
        <span className="absolute text-xs 2xl:text-base">MAD</span>
      </h1> */}
      <span className="text-text-inverted/10 select-none pointer-events-none text-9xl text-nowrap font-semibold absolute left-1/4 top-2">
        Pack
      </span>
    </div>
  );
};

const PackCardContent = ({ benefits }: { benefits: string[] }) => {
  return (
    <ScrollArea
      type="hover"
      scrollbars="vertical"
      className="!w-full !flex-1 !flex"
    >
      <div className="w-full h-full flex flex-col items-center gap-y-2">
        {benefits?.map((benefit, index) => (
          <PackCardBenefit key={index} title={benefit} />
        ))}
      </div>
    </ScrollArea>
  );
};

const PackCardBenefit = ({ title }: { title: string }) => {
  return (
    <div className="w-5/6 grid grid-cols-[20px_1fr] gap-x-2 items-start">
      <CheckCircle2 className="size-5 content-center mt-0.5" />
      <p className="text-base content-start block">{title}</p>
    </div>
  );
};

const PackCardFooter = ({
  type,
  setIsOpen,
}: {
  type: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-full h-24 flex flex-col items-center justify-evenly gap-y-0.5">
      <Link
        href={`sponsoring/booking/${type}`}
        className="w-full group flex items-center justify-center"
      >
        <button className="w-5/6 h-10 font-medium rounded-md bg-background text-text group-hover:scale-95 cursor-pointer duration-100">
          Réserver
        </button>
      </Link>
      {/* <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="cursor-pointer underline"
      >
        Détails
      </button> */}
    </div>
  );
};
