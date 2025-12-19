import React from "react";
import SectionBlock from "../shared/SectionBlock";
import ParticipationPropertiesGrid from "../features/participation-properties/ParticipationPropertiesGrid";

export default function ParticipationProperties() {
  return (
    <SectionBlock
      title="Pourquoi Participer ?"
      id="Pourquoi-Participer"
      texture
      bgPattern="bg-pattern-2"
      background="text-text-inverted bg-gradient-to-b from-text to-accent-dark"
    >
      <ParticipationPropertiesGrid />
    </SectionBlock>
  );
}
