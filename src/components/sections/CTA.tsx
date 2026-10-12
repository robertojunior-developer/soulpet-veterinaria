import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { ctaSection, whatsappLinks } from "../../data/siteContent";
import { Button } from "../ui/Button";
import { AnimatedButton } from "../animations/AnimatedButton";

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden py-24 text-ivory sm:py-28">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <img
          src={ctaSection.image}
          alt={ctaSection.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-deep-green/85" />
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sage/20 blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container-pad flex flex-col items-center gap-6 text-center"
      >
        <h2 className="text-balance max-w-3xl text-3xl font-extrabold uppercase sm:text-4xl lg:text-5xl">
          {ctaSection.title}
        </h2>
        <p className="text-balance max-w-xl text-base text-ivory/75 sm:text-lg">{ctaSection.text}</p>
        <AnimatedButton>
          <Button
            href={whatsappLinks.schedule}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            icon={<MessageCircle className="h-5 w-5" aria-hidden="true" />}
          >
            {ctaSection.button}
          </Button>
        </AnimatedButton>
      </motion.div>
    </section>
  );
}
