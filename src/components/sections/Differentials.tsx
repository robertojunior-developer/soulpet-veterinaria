import { motion } from "motion/react";
import { Eye, HeartPulse, Layers, Users, type LucideIcon } from "lucide-react";
import { differentials } from "../../data/siteContent";
import { SectionHeading } from "../ui/SectionHeading";

const icons: Record<string, LucideIcon> = { Eye, HeartPulse, Layers, Users };

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-deep-green py-20 text-ivory sm:py-28">
      <div className="container-pad flex flex-col items-center gap-14">
        <SectionHeading
          title={differentials.title}
          align="center"
          tone="dark"
          eyebrow="Diferenciais Soul Pet"
        />

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.items.map((item, index) => {
            const Icon = icons[item.icon] ?? Eye;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="flex flex-col gap-4 rounded-3xl border border-ivory/15 bg-ivory/5 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-ivory/10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/20 text-gold">
                  <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-ivory">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ivory/70">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
