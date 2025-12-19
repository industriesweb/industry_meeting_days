import React from "react";
import GalleryGrid from "../features/gallery/GalleryGrid";
import SectionBlock from "../shared/SectionBlock";

export default function Gallery() {
  return (
    <SectionBlock
      title="Galerie"
      id="Retour-En-Images"
      background="bg-gradient-to-r from-secondary-dark to-primary-dark text-text-inverted z-20"
    >
      <GalleryGrid />
    </SectionBlock>
  );
}
