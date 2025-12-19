import React from "react";

export default function PagePattern({ pattern }: { pattern?: "1" | "2" }) {
  const PatternType = pattern === "1" ? "bg-pattern" : "bg-pattern-2";
  return (
    <div
      className={`absolute inset-0 w-full h-full ${PatternType} mix-blend-difference`}
    />
  );
}
