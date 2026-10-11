import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { about, whatsappLinks } from "../../data/siteContent";
import { Button } from "../ui/Button";

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-sage/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-pad grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-gold/20 via-sage/10 to-transparent blur-2xl" />
          <img
            src={about.image}
            alt={about.imageAlt}
            width={657}
            height={784}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[2.5rem] border-4 border-white object-cover shadow-soft"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">
            Sobre a profissional
          </span>
          <h2 className="text-balance text-3xl font-medium text-deep-green sm:text-4xl">
            {about.title}
          </h2>
          <p className="text-lg font-semibold text-deep-green">{about.name}</p>
          <p className="text-base leading-relaxed text-charcoal/75">{about.description}</p>

          <div className="flex flex-col gap-3">
            {about.formation.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-ivory px-5 py-4 text-sm text-charcoal/80"
              >
                <GraduationCap className="mt-0.5 h-5 w-5 flex-shrink-0 text-sage-dark" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>

          <div>
            <Button href={whatsappLinks.about} target="_blank" rel="noopener noreferrer">
              {about.cta}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
