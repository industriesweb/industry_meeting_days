import React from "react";
import SpeakerCard from "./SpeakerCard";
import SpeakersList from "@/data/speakersList.json";
export default function SpeakersGrid() {
  return (
    <>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-4">
        {SpeakersList.map((speaker, index) => (
          <SpeakerCard key={speaker.id} speaker={speaker} delay={index / 30} />
        ))}
      </div>
    </>
  );
}
