import React from "react";
import TicketsList from "@/data/ticketList.json";
import TicketCard from "./TicketCard";
export default function TicketsGrid() {
  return (
    <div className="w-full h-fit lg:h-auto grid grid-cols-1 sm:grid-cols-2 lg:min-h-full lg:flex items-center gap-4 *:rounded-md mt-2 p-4 ">
      {TicketsList.map((ticket, index) => (
        <TicketCard
          key={index}
          label={ticket.Label}
          description={ticket.description}
          href={ticket.href}
          image={ticket.image}
        />
      ))}
    </div>
  );
}
