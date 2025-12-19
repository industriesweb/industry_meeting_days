import React from "react";
import StatisticsCards from "../features/statistics/StatisticsCards";

export default function Statistics() {
  return (
    <section
      className="relative w-full bg-gradient-to-b from-accent-dark to-text scroll-mt-24 z-20 mb-1"
      id="Statistiques"
    >
      <div className="container flex items-center px-4 mx-auto lg:h-52 sm:px-6 lg:px-8">
        <StatisticsCards />
      </div>
      <div className="absolute inset-0 w-full h-full  bg-pattern-2 opacity-50 -z-0 mix-blend-difference" />
    </section>
  );
}
