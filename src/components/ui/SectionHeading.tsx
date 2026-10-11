import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  children,
}: Props) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const titleColor = tone === "dark" ? "text-ivory" : "text-deep-green";
  const subtitleColor = tone === "dark" ? "text-ivory/70" : "text-charcoal/70";
  const eyebrowColor = tone === "dark" ? "text-gold" : "text-sage-dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col gap-4 ${alignment} max-w-2xl`}
    >
      {eyebrow && (
        <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowColor}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-balance text-3xl font-medium sm:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {subtitle && <p className={`text-balance text-base sm:text-lg ${subtitleColor}`}>{subtitle}</p>}
      {children}
    </motion.div>
  );
}
