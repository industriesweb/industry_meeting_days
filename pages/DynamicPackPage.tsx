import RegistrationForm from "@/components/features/registration-form/RegistrationForm";
import TicketCard from "@/components/ui/cards/TicketCard";
import React from "react";

export default function DynamicPackPage({pack}:{pack:string}) {
  return (
    <div className="w-full min-h-dvh bg-gradient-to-r pt-24 from-primary to-accent-dark ">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-6 gap-4 py-2 px-6">
        <div className="w-full">
          <TicketCard pack={pack} />
        </div>
        <div className="w-full lg:col-span-5">
          <RegistrationForm type={pack} />
        </div>
      </div>
    </div>
  );
}
