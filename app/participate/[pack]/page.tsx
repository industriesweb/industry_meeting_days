import DynamicPackPage from "@/pages/DynamicPackPage";
import { notFound } from "next/navigation";
import React from "react";

export default async function DynamicPack({
  params,
}: {
  params: Promise<{ pack: string }>;
}) {
  const { pack } = await params;
  const allowedTypes = ["networking", "stand"] as const;

  if (!(allowedTypes as readonly string[]).includes(pack)) {
    notFound();
  }
  return <DynamicPackPage pack={pack} />;
}
