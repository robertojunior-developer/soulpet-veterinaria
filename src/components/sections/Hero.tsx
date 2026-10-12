import { motion } from "motion/react";
import { PawPrint, HeartHandshake, Leaf, ShieldCheck, ChevronDown } from "lucide-react";
import { hero, whatsappLinks } from "../../data/siteContent";
import { Button } from "../ui/Button";
import { RevealText } from "../animations/RevealText";
import { AnimatedButton } from "../animations/AnimatedButton";

const highlightIcons = [HeartHandshake, Leaf, ShieldCheck];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-deep-green"
    >
      {/* Fotografia de fundo cinematográfica com Ken Burns */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <img
          src={hero.image}
          alt=""
          fetchPriority="high"
          className="h-full w-full animate-ken-burns object-cover motion-reduce:animate-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-green/90 via-deep-green/60 to-deep-green/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-green/80 via-transparent to-transparent" />
      </div>

      <div className="container-pad flex flex-col items-start gap-7 py-32 sm:py-40">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full bg-ivory/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur-sm"
        >
          <PawPrint className="h-4 w-4" aria-hidden="true" />
          {hero.badge}
        </motion.span>

        <h1 className="max-w-3xl text-balance text-4xl font-extrabold uppercase leading-[1.08] text-ivory sm:text-5xl lg:text-6xl">
          <RevealText text={hero.title} delay={0.15} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="text-balance max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <AnimatedButton>
            <Button href={whatsappLinks.schedule} target="_blank" rel="noopener noreferrer" variant="ghost">
              {hero.ctaPrimary}
            </Button>
          </AnimatedButton>
          <AnimatedButton>
            <Button href="#servicos" variant="outline-light">
              {hero.ctaSecondary}
            </Button>
          </AnimatedButton>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6"
        >
          {hero.highlights.map((item, index) => {
            const Icon = highlightIcons[index] ?? HeartHandshake;
            return (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-ivory/80">
                <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
                {item}
              </li>
            );
          })}
        </motion.ul>
      </div>

      {/* Indicador de scroll */}
      <motion.a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.1, duration: 0.5 }, y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" } }}
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-ivory/70 motion-reduce:animate-none"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Role</span>
        <ChevronDown className="h-5 w-5" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
