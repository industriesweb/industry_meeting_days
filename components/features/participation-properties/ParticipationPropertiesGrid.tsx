import React from "react";
import ParticipationPropertiesList from "@/data/participationPropertiesList.json";
import ParticipationPropertiesCard from "./ParticipationPropertiesCard";

export default function ParticipationPropertiesGrid() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center gap-6 mt-8 text-text-inverted">
      {ParticipationPropertiesList.map((property, index) => (
        <ParticipationPropertiesCard
          key={property.title}
          icon={property.icon}
          title={property.title}
          description={property.description}
          delay={index * 0.05}
        />
      ))}
    </div>
  );
}
