import { motion } from "motion/react";
import { PawPrint, HeartHandshake, Leaf, ShieldCheck } from "lucide-react";
import { hero, whatsappLinks } from "../../data/siteContent";
import { Button } from "../ui/Button";

const highlightIcons = [HeartHandshake, Leaf, ShieldCheck];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-ivory pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44"
    >
      {/* Organic background shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-sage/15 blur-3xl" />
        <div className="absolute -right-20 top-40 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-deep-green/10 blur-3xl" />
      </div>

      <div className="container-pad grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-sage/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-sage-dark">
            <PawPrint className="h-4 w-4" aria-hidden="true" />
            {hero.badge}
          </span>

          <h1 className="text-balance text-4xl font-medium leading-[1.1] text-deep-green sm:text-5xl lg:text-[3.4rem]">
            {hero.title}
          </h1>

          <p className="text-balance max-w-xl text-base leading-relaxed text-charcoal/75 sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href={whatsappLinks.default} target="_blank" rel="noopener noreferrer">
              {hero.ctaPrimary}
            </Button>
            <Button href="#servicos" variant="secondary">
              {hero.ctaSecondary}
            </Button>
          </div>

          <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
            {hero.highlights.map((item, index) => {
              const Icon = highlightIcons[index] ?? HeartHandshake;
              return (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-charcoal/75">
                  <Icon className="h-4 w-4 text-sage-dark" aria-hidden="true" />
                  {item}
                </li>
              );
            })}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sage/25 via-gold/10 to-transparent blur-2xl" />
          <img
            src={hero.image}
            alt={hero.imageAlt}
            width={624}
            height={777}
            fetchPriority="high"
            className="aspect-[4/5] w-full rounded-[2.5rem] border-4 border-white object-cover shadow-soft"
          />
        </motion.div>
      </div>
    </section>
  );
}
