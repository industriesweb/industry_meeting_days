import ContactForm from "@/components/features/contact-form/ContactForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <div className="w-full min-h-dvh bg-gradient-to-br from-text to-accent">
      <main className="flex flex-col py-16">
        <ContactForm />
      </main>
    </div>
  );
}
