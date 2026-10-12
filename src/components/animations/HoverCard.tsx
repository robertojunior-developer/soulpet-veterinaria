import type { ReactNode } from "react";
import { motion } from "motion/react";

type Props = {
  children: ReactNode;
  className?: string;
  lift?: number;
};

/** Card com hover-lift padronizado (usado em serviços, depoimentos, galeria). */
export function HoverCard({ children, className = "", lift = 6 }: Props) {
  return (
    <motion.div
      whileHover={{ y: -lift }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
