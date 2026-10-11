import { motion, useReducedMotion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { whatsappLinks } from "../../data/siteContent";

export function WhatsAppFloatingButton() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={whatsappLinks.default}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.6, y: 20 }}
      animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      whileHover={reduceMotion ? undefined : { scale: 1.08 }}
      whileTap={reduceMotion ? undefined : { scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" strokeWidth={0} />
      <span className="sr-only">Falar com a Soul Pet no WhatsApp</span>
    </motion.a>
  );
}
