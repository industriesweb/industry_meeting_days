"use client";
import dynamic from "next/dynamic";
import React from "react";
import {zeroPad} from "react-countdown";

const  CountDown = dynamic(() => import("react-countdown"), {
  ssr: false,
});

const EventCountDown = ({ date }: { date: string }) => {
  return (
    <div className="w-full py-10 xl:py-0">
      <CountDown
        date={date}
        zeroPadTime={2}
        zeroPadDays={2}
        renderer={({ days, hours, minutes, seconds }) => (
          <>
            <div className="w-full flex items-center justify-evenly ">
              <CountCard label="jours" value={zeroPad(days)} />
              <CountSeparator />
              <CountCard label="heures" value={zeroPad(hours)} />
              <CountSeparator />
              <CountCard label="minutes" value={zeroPad(minutes)} />
              <CountSeparator />
              <CountCard label="secondes" value={zeroPad(seconds)} />
            </div>
          </>
        )}
      />
    </div>
  );
};

const CountCard = ({ label, value }: { label: string; value: string }) => {
  return (
    <div
      key={label}
      className="size-16 md:size-24 2xl:size-32 bg-background/20 shadow-2xl flex flex-col items-center justify-center rounded-md aspect-square outline-2 outline-background/50"
    >
      <h1 className="text-lg md:text-3xl xl:text-5xl text-background font-semibold">{value}</h1>
      <p className="text-sm font-light text-background capitalize">{label}</p>
    </div>
  );
};

const CountSeparator = () => {
  return <span className="text-sm lg:text-4xl text-background font-semibold">:</span>;
};

export default EventCountDown;
