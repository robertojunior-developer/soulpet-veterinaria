import type { ReactNode } from "react";
import { motion } from "motion/react";

type Props = {
  children: ReactNode;
  className?: string;
};

/** Microinteração padrão para CTAs: leve "lift" + escala no hover/tap. */
export function AnimatedButton({ children, className = "" }: Props) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
