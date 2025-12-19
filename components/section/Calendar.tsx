import React from "react";
import SectionBlock from "../shared/SectionBlock";
import CalendarSlides from "../features/calendar/CalendarSlides";

export default function Calendar() {
  return (
    <SectionBlock
      title="Nos Événements"
      background="bg-gradient-to-r from-background to-surface text-text overflow-hidden relative z-10"
      texture
      bgPattern="bg-pattern-2"
    >
      <CalendarSlides />
    </SectionBlock>
  );
}


