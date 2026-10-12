import { Sparkles, Zap, Salad, type LucideIcon } from "lucide-react";
import { integrativeCare, whatsappLinks } from "../../data/siteContent";
import { FadeIn } from "../animations/FadeIn";
import { ImageReveal } from "../animations/ImageReveal";
import { StaggerContainer, staggerItem } from "../animations/StaggerContainer";
import { Button } from "../ui/Button";
import { motion } from "motion/react";

const icons: Record<string, LucideIcon> = { Sparkles, Zap, Salad };

export function IntegrativeCare() {
  return (
    <section id="especialidades" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="container-pad grid items-center gap-14 lg:grid-cols-2">
        <FadeIn direction="left" className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-bl from-sage/20 via-gold/10 to-transparent blur-2xl"
            aria-hidden="true"
          />
          <ImageReveal
            src={integrativeCare.image}
            alt={integrativeCare.imageAlt}
            className="aspect-[4/5] w-full rounded-[2.5rem] border-4 border-white shadow-soft"
          />
        </FadeIn>

        <StaggerContainer className="flex flex-col gap-6">
          <motion.span variants={staggerItem} className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">
            {integrativeCare.eyebrow}
          </motion.span>
          <motion.h2 variants={staggerItem} className="text-balance text-3xl font-bold text-deep-green sm:text-4xl">
            {integrativeCare.title}
          </motion.h2>
          <motion.p variants={staggerItem} className="text-base leading-relaxed text-charcoal/75 sm:text-lg">
            {integrativeCare.text}
          </motion.p>

          <div className="flex flex-col gap-4">
            {integrativeCare.highlights.map((item) => {
              const Icon = icons[item.icon] ?? Sparkles;
              return (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="flex items-start gap-4 rounded-2xl bg-ivory p-5"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-sage/15 text-sage-dark">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-deep-green">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-charcoal/70">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={staggerItem}>
            <Button href={whatsappLinks.contact} target="_blank" rel="noopener noreferrer">
              {integrativeCare.button}
            </Button>
          </motion.div>
        </StaggerContainer>
      </div>
    </section>
  );
}
