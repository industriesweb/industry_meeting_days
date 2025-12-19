import { ProgrammeCardTypes } from "@/types/ProgrammeCardTypes";
import { DotIcon } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

interface ProgrammeCardsProps extends ProgrammeCardTypes {
  delay?: number;
}

export default function ProgrammeCard({
  time,
  title,
  subTitles,
  activities,
  delay = 0,
}: ProgrammeCardsProps) {
  return (
    <motion.article
      className="w-full grid lg:grid-cols-[2fr_8fr] p-8 items-center gap-x-4 text-text rounded-md bg-gradient-to-br from-surface to-background-alt shadow-md shadow-muted relative z-30"
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      exit={{ opacity: 0, x: 200 }}
      transition={{ duration: 0.4 }}
    >
      {/* Time */}
      <time
        className="flex text-lg font-semibold lg:justify-center lg:text-xl text-secondary"
        dateTime={time}
        itemProp="startDate"
      >
        {time}
      </time>

      {/* Content */}
      <div className="flex flex-col gap-y-2">
        <h3
          className="text-lg font-semibold lg:text-xl text-primary"
          itemProp="name"
        >
          {title}
        </h3>

        {subTitles?.length ? (
          <ul className="flex flex-col list-none text-text-inverse gap-y-1 capitalize font-medium">
            {subTitles?.map((subtitle, index) => (
              <li
                key={index}
                className="grid grid-cols-[24px_1fr] items-start text-sm gap-x-2 text-text-inverse"
                itemProp="description"
              >
                <DotIcon className="size-5" /> {subtitle}
              </li>
            ))}
          </ul>
        ) : null}

        {activities?.length ? (
          <ul className="flex flex-col px-4 gap-y-1">
            {activities.map((activity, index) => (
              <li
                key={index}
                className="grid grid-cols-[24px_1fr] items-start text-sm gap-x-2 text-text-inverse"
              >
                <DotIcon className="size-5" /> {activity}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </motion.article>
  );
}
