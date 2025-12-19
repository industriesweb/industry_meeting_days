import TicketsGrid from "@/components/features/tickets/TicketsGrid";
import SectionBlock from "@/components/shared/SectionBlock";
import React from "react";

export default function ParticipateHero() {
  return (
    <SectionBlock title="Participer" background="text-text-inverted">
      <h3 className="w-1/2 text-center mb-8"></h3>
      <TicketsGrid />
    </SectionBlock>
  );
}
