import { motion } from "motion/react";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { whatsappLinks } from "../../data/siteContent";

type Props = {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
};

export function ServiceCard({ title, description, Icon, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="group flex flex-col gap-5 rounded-3xl border border-sage/15 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-sage/40 hover:shadow-soft"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/10 text-sage-dark transition-colors duration-300 group-hover:bg-deep-green group-hover:text-ivory">
        <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-deep-green">{title}</h3>
        <p className="text-sm leading-relaxed text-charcoal/70">{description}</p>
      </div>
      <a
        href={whatsappLinks.service(title)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-sage-dark transition-colors hover:text-deep-green"
      >
        Saiba mais
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </a>
    </motion.article>
  );
}
