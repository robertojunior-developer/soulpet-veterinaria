import { motion } from "motion/react";
import { HeartHandshake, Leaf, ShieldCheck, type LucideIcon } from "lucide-react";
import { introduction } from "../../data/siteContent";
import { SectionHeading } from "../ui/SectionHeading";

const icons: Record<string, LucideIcon> = { HeartHandshake, Leaf, ShieldCheck };

export function Introduction() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-pad flex flex-col items-center gap-14">
        <SectionHeading title={introduction.title} subtitle={introduction.text} />

        <div className="grid w-full gap-6 sm:grid-cols-3">
          {introduction.cards.map((card, index) => {
            const Icon = icons[card.icon] ?? Leaf;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 rounded-3xl border border-sage/15 bg-ivory p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sage/15 text-sage-dark">
                  <Icon className="h-8 w-8" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-deep-green">{card.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal/70">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
