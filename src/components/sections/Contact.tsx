import type { ComponentType, SVGProps } from "react";
import { motion } from "motion/react";
import { MessageCircle, Heart, User, MapPin, Clock, Star } from "lucide-react";
import { InstagramGlyph } from "../ui/InstagramGlyph";
import {
  contact,
  whatsappLinks,
  INSTAGRAM_URL,
  ADDRESS,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_DIRECTIONS_URL,
  googleRating,
} from "../../data/siteContent";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

const itemIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "Soul Pet": Heart,
  Profissional: User,
  WhatsApp: MessageCircle,
  Instagram: InstagramGlyph,
  Endereço: MapPin,
  "Horário de funcionamento": Clock,
};

export function Contact() {
  return (
    <section id="contato" className="bg-white py-20 sm:py-28">
      <div className="container-pad flex flex-col items-center gap-12">
        <SectionHeading title={contact.title} />

        <a
          href={googleRating.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-sage/20 bg-ivory px-5 py-2.5 text-sm font-medium text-deep-green transition-colors hover:border-sage/40"
        >
          <span className="flex items-center gap-0.5 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} aria-hidden="true" />
            ))}
          </span>
          {googleRating.score.toFixed(1)} · {googleRating.reviewCount} avaliações no Google
        </a>

        <div className="grid w-full max-w-5xl gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6 rounded-3xl border border-sage/15 bg-ivory p-8 shadow-card sm:p-10"
          >
            <dl className="grid gap-5 sm:grid-cols-2">
              {contact.items.map((item) => {
                const Icon = itemIcons[item.label] ?? Heart;
                const isWhatsapp = item.label === "WhatsApp";
                const isInstagram = item.label === "Instagram";
                const content = isWhatsapp ? (
                  <a href={whatsappLinks.default} target="_blank" rel="noopener noreferrer" className="hover:text-sage-dark">
                    {item.value}
                  </a>
                ) : isInstagram ? (
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-sage-dark">
                    {item.value}
                  </a>
                ) : (
                  item.value
                );

                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-sage-dark" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                        {item.label}
                      </dt>
                      <dd className="text-base font-medium text-deep-green">{content}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>

            <p className="rounded-2xl bg-sage/10 px-5 py-4 text-sm text-charcoal/70">
              {contact.pendingNote}
            </p>

            <Button
              href={whatsappLinks.default}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-fit"
              icon={<MessageCircle className="h-5 w-5" aria-hidden="true" />}
            >
              {contact.cta}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col overflow-hidden rounded-3xl border border-sage/15 shadow-card"
          >
            <iframe
              title={`Localização da Soul Pet no mapa - ${ADDRESS.full}`}
              src={GOOGLE_MAPS_EMBED_URL}
              className="h-72 w-full flex-1 border-0 sm:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={GOOGLE_MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-deep-green px-5 py-4 text-sm font-semibold text-ivory transition-colors hover:bg-sage"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Como chegar
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
