import RegistrationForm from "@/components/features/registration-form/RegistrationForm";
import PagePattern from "@/components/ui/patterns/PagePattern";
import { notFound } from "next/navigation";
import React from "react";

const allowedTypes = [
  "silver",
  "gold",
  "platinum",
  "prestige",
  "officiel",
] as const;

export default async function Page({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  if (!(allowedTypes as readonly string[]).includes(type)) {
    notFound();
  }
  return ( 
    <div className="w-full min-h-dvh relative bg-gradient-to-b from-text to-accent flex items-center justify-center">
      <main className="w-full h-full flex flex-col items-center justify-center px-4 md:px-8 pt-16 pb-8">
        <RegistrationForm type={type} />
      </main>
      <PagePattern pattern="2" />
    </div>
  );
}
