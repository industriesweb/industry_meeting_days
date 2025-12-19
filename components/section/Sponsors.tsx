import React from "react";
import SectionBlock from "../shared/SectionBlock";
import SponsorsGrid from "../features/sponsors/SponsorsGrid";

export default function Sponsors() {
  return (
    <SectionBlock
      title="Partenaires"
      id="Partenaires"
      background="bg-gradient-to-r from-secondary-dark to-primary-dark text-text-inverted"
    >
      <SponsorsGrid />
    </SectionBlock>
  );
}
