import { GraduationCap } from "lucide-react";
import { about, whatsappLinks } from "../../data/siteContent";
import { Button } from "../ui/Button";
import { FadeIn } from "../animations/FadeIn";
import { ImageReveal } from "../animations/ImageReveal";
import { StaggerContainer, staggerItem } from "../animations/StaggerContainer";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="profissional" className="relative overflow-hidden bg-ivory py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-sage/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-pad grid items-center gap-14 lg:grid-cols-2">
        <FadeIn direction="left" className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-gold/20 via-sage/10 to-transparent blur-2xl"
            aria-hidden="true"
          />
          <ImageReveal
            src={about.image}
            alt={about.imageAlt}
            className="aspect-[4/5] w-full rounded-[2.5rem] border-4 border-white shadow-soft"
          />
        </FadeIn>

        <StaggerContainer className="flex flex-col gap-6">
          <motion.span variants={staggerItem} className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">
            {about.eyebrow}
          </motion.span>
          <motion.h2 variants={staggerItem} className="text-balance text-3xl font-bold text-deep-green sm:text-4xl">
            {about.title}
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg font-semibold text-deep-green">
            {about.name}
          </motion.p>
          <motion.p variants={staggerItem} className="text-base leading-relaxed text-charcoal/75">
            {about.description}
          </motion.p>

          <motion.div variants={staggerItem} className="flex flex-col gap-3">
            {about.formation.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 text-sm text-charcoal/80 shadow-card"
              >
                <GraduationCap className="mt-0.5 h-5 w-5 flex-shrink-0 text-sage-dark" aria-hidden="true" />
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div variants={staggerItem}>
            <Button href={whatsappLinks.contact} target="_blank" rel="noopener noreferrer">
              {about.cta}
            </Button>
          </motion.div>
        </StaggerContainer>
      </div>
    </section>
  );
}
