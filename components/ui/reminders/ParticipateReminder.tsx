"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ParticipateReminder() {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast((t) => <ReminderContent key={t.id} />, {
        duration: 15000,
        className: "min-w-xs lg:min-w-sm !bg-transparent !py-0 !px-0",
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <Toaster position="bottom-right" />;
}

const ReminderContent = () => {
  return (
    <div className="min-w-full size-full relative flex flex-col items-center gap-y-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Subtle top accent line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-accent" />

      {/* Title */}
      <h1 className="text-2xl 2xl:text-3xl font-normal text-gray-900 relative text-center tracking-tight">
        Toujours avec nous ?
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-center italic text-base 2xl:text-lg relative max-w-md leading-relaxed font-normal">
        Rejoignez-nous dès maintenant et saisissez cette chance{" "}
      </p>

      {/* CTA Button */}
      <Link
        href="/participate"
        className="px-8 py-3 mt-4 text-base font-medium text-white bg-accent hover:bg-primary rounded-lg transition-colors duration-200 focus:outline-none"
      >
        Participer Maintenant
      </Link>
    </div>
  );
};
