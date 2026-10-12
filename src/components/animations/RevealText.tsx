import { motion } from "motion/react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

const container = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.09, delayChildren: delay },
  }),
};

const word = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/** Revela o texto palavra a palavra (efeito editorial para títulos). */
export function RevealText({ text, className = "", delay = 0, as = "span" }: Props) {
  const Tag = motion[as];
  const words = text.split(" ");

  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={container}
      custom={delay}
      className={className}
      style={{ display: "inline" }}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
          <motion.span variants={word} style={{ display: "inline-block" }}>
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
