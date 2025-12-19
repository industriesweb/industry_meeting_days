"use client";
import React, { useState } from "react";
import { Grid } from "@radix-ui/themes";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import StatisticsList from "@/data/statisticsList.json";

const StatisticsCards = () => {
  const [inView, setInView] = useState(false);
  const elements = String(StatisticsList.length);

  return (
    <motion.div
      className="w-full text-text-inverted z-20"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => setInView(true)}
    >
      <Grid
        align="center"
        justify="center"
        columns={{ initial: "2", md: elements }}
        className="justify-items-center"
      >
        {StatisticsList.map((st) => (
          <StatisticCard
            key={st.statisticLabel}
            icon={st.statisticIcon}
            label={st.statisticLabel}
            value={st.statisticValue}
            startAnimation={inView}
            isPlus={st.isPlus}
          />
        ))}
      </Grid>
    </motion.div>
  );
};

const StatisticCard = ({
  label,
  value,
  icon,
  startAnimation,
  isPlus,
}: {
  label: string;
  value: string;
  icon: string;
  startAnimation: boolean;
  isPlus: boolean;
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center size-44 gap-y-1 col-span-1 text-text-inverted">
      <h1 className="z-20 flex items-center justify-center relative text-4xl font-medium">
        <CountUp
          start={0}
          end={startAnimation ? parseInt(value) : 0}
          duration={2.5}
          separator=""
          useEasing={true}
        />
        {isPlus && <Plus className="absolute right-0 translate-x-full" />}
      </h1>
      <h4 className="z-20 text-center font-medium">{label}</h4>
      <div className="absolute z-0 size-32 opacity-20 flex items-center justify-center">
        <i className={`${icon} text-9xl text-text-inverted`}></i>
      </div>
    </div>
  );
};

export default StatisticsCards;
