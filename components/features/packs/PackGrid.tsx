"use client";
import React, { useState } from "react";
import PackCard from "./PackCard";
import PackList from "@/data/packList.json";
// import PackDetails from "./PackDetails";

export default function PackGrid() {
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-6">
        {PackList.map((pack, index) => (
          <PackCard
            key={index}
            title={pack.title}
            price={pack.price}
            benefits={pack.benefits}
            slug={pack.slug}
            setIsOpen={setOpenDetails}
          />
        ))}
      </div>
      {/* <PackDetails isOpen={openDetails} setIsOpen={setOpenDetails} /> */}
    </>
  );
}
