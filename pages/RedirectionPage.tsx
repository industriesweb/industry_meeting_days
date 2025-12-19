"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function RedirectionPage() {
  useEffect(() => {
    setTimeout(() => {
      redirect(
        "https://industricom-group.odoo.com/event/industry-meeting-days-2026-10/register"
      );
    }, 1000);
  }, []);
  return (
    <div className="w-full min-h-dvh bg-gradient-to-br from-accent-dark to-primary-dark flex flex-col items-center justify-center-safe">
      <span className="text-text-inverted text-xl">Redirection</span>
      <i className="size-6 border-x-2 rounded-full text-text-inverted animate-spin origin-center" />
    </div>
  );
}
