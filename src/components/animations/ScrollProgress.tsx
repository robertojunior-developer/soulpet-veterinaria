import { motion, useScroll, useSpring } from "motion/react";

/** Barra fina no topo da página indicando o progresso de leitura/scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-sage via-gold to-sage"
      aria-hidden="true"
    />
  );
}
