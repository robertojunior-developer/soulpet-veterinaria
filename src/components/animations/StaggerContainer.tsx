import type { ReactNode } from "react";
import { motion } from "motion/react";

type Props = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

const container = {
  hidden: {},
  visible: (props: { stagger: number; delay: number }) => ({
    transition: { staggerChildren: props.stagger, delayChildren: props.delay },
  }),
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/** Container que aplica entrada em stagger aos filhos diretos (usar com `motion.div variants={staggerItem}`). */
export function StaggerContainer({ children, className = "", stagger = 0.1, delay = 0 }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={container}
      custom={{ stagger, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
