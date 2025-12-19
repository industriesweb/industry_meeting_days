'use client';

import { domAnimation, LazyMotion, motion } from "motion/react";
import { ReactNode } from 'react';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MotionParent = ({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay }}
        className={className}
      >
        {children}
      </motion.div>
    </LazyMotion>
  );
};

export default MotionParent;