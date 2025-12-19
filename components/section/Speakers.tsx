import React from "react";
import SectionBlock from "../shared/SectionBlock";
import SpeakersGrid from "../features/speakers/SpeakersGrid";

export default function Speakers() {
  return (
    <SectionBlock
      title="Intervenants"
      background="text-text"
      id="Intervenants"
      texture
      bgPattern="bg-pattern-2"
    >
      <SpeakersGrid />
    </SectionBlock>
  );
}
