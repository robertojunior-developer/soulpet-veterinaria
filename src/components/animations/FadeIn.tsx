import type { ReactNode } from "react";
import { motion } from "motion/react";

type Direction = "up" | "down" | "left" | "right" | "none";

type Props = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
};

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
  none: {},
};

/** Fade genérico com direção configurável, usado em textos, ícones e elementos soltos. */
export function FadeIn({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance,
  once = true,
}: Props) {
  const offset = offsets[direction];
  const initial = {
    opacity: 0,
    x: distance !== undefined && offset.x !== undefined ? (offset.x < 0 ? -distance : distance) : offset.x,
    y: distance !== undefined && offset.y !== undefined ? (offset.y < 0 ? -distance : distance) : offset.y,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
