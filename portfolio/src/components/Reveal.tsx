"use client";

import { motion, type MotionProps } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
export const revealItem = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } } };

export function Reveal({ children, className, delay = 0, ...props }: MotionProps & { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px" }}
      variants={{ hidden: revealItem.hidden, visible: { ...revealItem.visible, transition: { ...revealItem.visible.transition, delay } } }}
      className={className}
      {...props}
    >{children}</motion.div>
  );
}
