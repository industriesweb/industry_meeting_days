"use client";
import { Box, Tabs } from "@radix-ui/themes";
import React, { useState } from "react";
import ProgrammeCard from "./ProgrammeCard";
import programmeData from "@/data/programmeList.json";
import { ProgrammeList } from "@/types/ProgrammeCardTypes";
import ProgrammeDownload from "./ProgrammeDownload";
const Programme: ProgrammeList = programmeData;

export default function ProgrammeTabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  // Detect if day2 exists
  const hasDay2 = Boolean(Programme.day2);

  return (
    <>
    <ProgrammeDownload/>
      {Programme.day1 && (
        <div className="relative w-full py-2 mt-8">
          {/* Highlight Bar */}
          <div
            className={`${
              activeTab === "tab1"
                ? "translate-x-0"
                : hasDay2
                ? "translate-x-full"
                : "translate-x-0"
            } absolute ${
              hasDay2 ? "w-1/2" : "w-full"
            } duration-300 h-10 md:h-14 bg-accent z-10 mt-2 rounded-md left-0 top-0 p-2 pointer-events-none`}
          />

          <Tabs.Root
            defaultValue="tab1"
            onValueChange={(value) => setActiveTab(value)}
          >
            <Tabs.List className="**:!bg-transparent *:!font-medium **:!text-sm md:**:!text-base h-10 !shadow-md md:!h-14 relative !bg-surface/80 !rounded-md">
              <Tabs.Trigger
                className={`${
                  hasDay2 ? "!w-1/2" : "!w-full"
                } !h-full tab-style !relative`}
                value="tab1"
              >
                {Programme.day1.dayDate}
              </Tabs.Trigger>

              {hasDay2 && (
                <Tabs.Trigger className="!w-1/2 !h-full tab-style" value="tab2">
                  {Programme.day2?.dayDate}
                </Tabs.Trigger>
              )}
            </Tabs.List>

            <Box
              pt="6"
              className="bg-gradient-to-b from-transparent py-2 rounded-b-md *:duration-300"
            >
              <Tabs.Content value="tab1" className="flex flex-col gap-y-2">
                {Programme.day1.programme.map((prg, index) => (
                  <ProgrammeCard
                    key={index}
                    time={prg.time}
                    title={prg.title}
                    subTitles={prg.subTitles}
                    activities={prg.activities}
                    delay={index}
                  />
                ))}
              </Tabs.Content>

              {hasDay2 && (
                <Tabs.Content value="tab2" className="flex flex-col gap-y-2">
                  {Programme.day2?.programme.map((prg, index) => (
                    <ProgrammeCard
                      key={index}
                      time={prg.time}
                      title={prg.title}
                      subTitles={prg.subTitles}
                      activities={prg.activities}
                      delay={index}
                    />
                  ))}
                </Tabs.Content>
              )}
            </Box>
          </Tabs.Root>
        </div>
      )}
    </>
  );
}
