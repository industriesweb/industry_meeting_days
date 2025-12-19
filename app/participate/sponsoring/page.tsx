import SponsoringHero from "@/components/section/sponsoring/SponsoringHero";
import PagePattern from "@/components/ui/patterns/PagePattern";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sponsoring",
};


export default function Sponsoring() {
  return (
    <div className="w-full min-h-dvh relative bg-gradient-to-b from-text to-accent">
      <main className="w-full h-full flex flex-col px-4 md:px-8">
        <SponsoringHero />
      </main>
      <PagePattern pattern="2" />
    </div>
  );
}
