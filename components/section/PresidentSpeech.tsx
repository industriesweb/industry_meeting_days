"use client";
import Image from "next/image";
import React from "react";
import Speech from "@/data/speech.json";
import TextFileViewer from "../ui/viewers/TextFileViewer";
import { motion } from "motion/react";
import MotionParent from "../ui/motions/MotionParent";

const PresidentSpeech = () => {
  return (
    <section
      className="w-full bg-gradient-to-b from-surface to-background scroll-mt-24"
      id="Orientations-Strategiques"
    >
      <div className="container relative flex flex-col px-4 mx-auto overflow-hidden sm:px-6 lg:px-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[3fr_1fr] items-start gap-x-14 py-8">
          <SpeechText />
          <PresidentImage />
        </div>
      </div>
    </section>
  );
};

const PresidentImage = () => {
  return (
    <div className="relative order-1 lg:order-2 w-full h-full overflow-hidden rounded-md aspect-square lg:aspect-auto border-4 border-accent">
      <Image
        src={Speech.president.imageUrl}
        alt="Aziz AKHANNOUCH"
        fill
        className="object-cover object-top w-full h-full"
        priority={true}
        sizes="100%"
      />
    </div>
  );
};

const SpeechText = () => {
  return (
    <div className="w-full  order-2 lg:order-1 flex flex-col gap-y-1  md:gap-y-2 relative z-20 bg-transparent text-text">
      <h1 className="w-full text-text-inverted lg:text-text px-2 py-2 text-xl font-bold max-lg:absolute max-lg:-translate-y-full rounded-b-md max-lg:bg-gradient-to-b from-transparent to-text md:text-4xl">
        <div className="flex items-center gap-x-1">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            className="w-1 h-8 duration-200 origin-bottom inline-block bg-accent"
          />
          <motion.span
            initial={{
              mask: "linear-gradient(to right,white 0%,transparent  0% )",
            }}
            whileInView={{
              mask: "linear-gradient(to right,white 100%, transparent  100%)",
            }}
            transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="duration-200 overflow-hidden text-nowrap capitalize py-1"
          >
            Hicham RAHIOUI
          </motion.span>
        </div>
      </h1>
      <MotionParent delay={0.2}>
        <h3 className="px-2 text-lg mt-2 font-semibold text-center lg:text-left text-text">
         Hicham RAHIOUI
        </h3>
      </MotionParent>
      <MotionParent delay={0.4}>
        <h3 className="px-2 text-base mt-2 font-medium text-center lg:text-left text-text">
          Président-Directeur Général Industricom Group
        </h3>
      </MotionParent>
      <MotionParent delay={0.6}>
        <div className="flex flex-col w-full px-2 py-4 gap-y-4 text-text/80">
          <TextFileViewer url={Speech.president.speechText} />
        </div>
      </MotionParent>
      <SpeechTexture />
    </div>
  );
};

const SpeechTexture = () => {
  return (
    <div className="absolute top-0 left-0 flex items-start z-0 w-full h-full py-2 select-none lg:w-1/2">
      <i className="ri-double-quotes-r text-[200px] text-text opacity-10"></i>
    </div>
  );
};

export default PresidentSpeech;
