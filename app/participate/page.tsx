import React from "react";
import ParticipateHero from "@/components/section/participate/ParticipateHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Participer",
};

export default function Participate() {
  return (
    <div className="w-full min-h-dvh relative bg-gradient-to-br from-primary to-accent">
      <main className="w-full h-full flex flex-col px-4 md:px-8">
          <ParticipateHero />
      </main>
    </div>
  );
}
