import PackGrid from "@/components/features/packs/PackGrid";
import SectionBlock from "@/components/shared/SectionBlock";
import React from "react";

export default function SponsoringHero() {
  return (
    <SectionBlock title="Sponsoring" background="text-text-inverted">
      <h3 className="w-full md:w-1/2 text-center mb-8">
        Choisissez la formule adaptée et valorisez votre engagement au cœur de
        l’innovation agricole et hydrique.
      </h3>
      <PackGrid />
    </SectionBlock>
  );
}
