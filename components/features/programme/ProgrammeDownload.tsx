import { Download } from "lucide-react";
import React from "react";

export default function ProgrammeDownload() {
  return (
    <div className="w-full flex items-center justify-end -mb-8">
      <a
        href={`https://drive.google.com/uc?export=download&id=${process.env.NEXT_PUBLIC_PROGRAMME_FILE_ID}`}
        download="Programme AgriWater.pdf"
        className="w-fit text-xs shadow shadow-overlay p-2 bg-gradient-to-br from-accent to-primary  text-text-inverted rounded font-medium flex items-center justify-center gap-x-2 cursor-pointer hover:from-surface hover:to-surface-alt hover:text-primary"
      >
        <Download className="size-3 md:size-4" /> <span className="">Télécharger le programme</span>
      </a>
    </div>
  );
}
