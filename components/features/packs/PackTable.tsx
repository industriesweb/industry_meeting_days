import { Button, ScrollArea } from "@radix-ui/themes";
import React from "react";

export default function PackTable() {
  return (
    <div className="w-full flex flex-col gap-4 h-[70vh]">
      <Button asChild color="purple">
        <a
          href="https://drive.google.com/uc?export=download&id=1ra4GUeDLbc2V1-UFSPekImGNVNaeFjHJ"
          download="Packs.pdf"
        >
          <i className="ri-download-line"></i>
          <span>Télécharger le tableau du pack en PDF</span>{" "}
        </a>
      </Button>
      <ScrollArea
        className="w-full h-full rounded-xl"
        type="hover"
        scrollbars="vertical"
      >
        <iframe
          className="w-full h-full shadow-sm shadow-black rounded-xl"
          src="https://drive.google.com/file/d/1ra4GUeDLbc2V1-UFSPekImGNVNaeFjHJ/preview"
          allow="autoplay"
          title="PDF Preview"
        />
      </ScrollArea>
    </div>
  );
}
