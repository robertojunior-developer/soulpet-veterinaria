import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { ctaSection, whatsappLinks } from "../../data/siteContent";
import { Button } from "../ui/Button";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-deep-green py-20 text-ivory sm:py-24">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sage/20 blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container-pad flex flex-col items-center gap-6 text-center"
      >
        <h2 className="text-balance max-w-3xl text-3xl font-medium sm:text-4xl lg:text-5xl">
          {ctaSection.title}
        </h2>
        <p className="text-balance max-w-xl text-base text-ivory/75 sm:text-lg">{ctaSection.text}</p>
        <Button
          href={whatsappLinks.default}
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          icon={<MessageCircle className="h-5 w-5" aria-hidden="true" />}
        >
          {ctaSection.button}
        </Button>
      </motion.div>
    </section>
  );
}
