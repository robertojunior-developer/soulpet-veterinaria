import { motion } from "motion/react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
};

/** Revela a imagem com um clip-path animado, dando efeito de "cortina" ao entrar no viewport. */
export function ImageReveal({ src, alt, className = "", imgClassName = "", delay = 0 }: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, delay, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "right" }}
        className="absolute inset-0 z-10 bg-deep-green"
      />
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        initial={{ scale: 1.15, opacity: 0.6 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, delay, ease: "easeOut" }}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
