import React from "react";
import MotionParent from "@/components/ui/motions/MotionParent";



export default function ParticipationPropertiesCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}) {

  return (
    <MotionParent delay={delay}>
      <div className="w-full h-72 flex flex-col px-2 py-1 items-center gap-y-4 ">
        <div className="w-full flex items-center justify-center h-14">
          {icon && <i className={`size-12 text-accent-light text-5xl ${icon} `}/>}
        </div>
        <div className="w-full h-10 text-xl text-secondary-light font-semibold align-middle text-center">
          {title}
        </div>
        <div className="w-full text-justify text-text-inverted last-line whitespace-pre-line">
          {description}
        </div>
      </div>
    </MotionParent>
  );
}
