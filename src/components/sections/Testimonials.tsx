import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { InstagramGlyph } from "../ui/InstagramGlyph";
import { testimonials, INSTAGRAM_URL, googleRating } from "../../data/siteContent";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-ivory py-20 sm:py-28">
      <div className="container-pad flex flex-col items-center gap-10">
        <SectionHeading
          title={testimonials.title}
          subtitle="Avaliações reais de tutores no perfil verificado da Soul Pet no Google."
        />

        {testimonials.hasTestimonials && testimonials.googleReviews ? (
          <>
            <a
              href={googleRating.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-sage/20 bg-white px-5 py-2.5 text-sm font-medium text-deep-green transition-colors hover:border-sage/40"
            >
              <span className="flex items-center gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} aria-hidden="true" />
                ))}
              </span>
              {googleRating.score.toFixed(1)} · {googleRating.reviewCount} avaliações no Google
            </a>

            <div className="grid w-full gap-6 sm:grid-cols-3">
              {testimonials.googleReviews.map((review, index) => (
                <motion.figure
                  key={review}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className="flex flex-col gap-4 rounded-3xl border border-sage/15 bg-white p-7 shadow-card"
                >
                  <span className="flex items-center gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} aria-hidden="true" />
                    ))}
                  </span>
                  <blockquote className="text-sm leading-relaxed text-charcoal/75">
                    “{review}”
                  </blockquote>
                  <figcaption className="mt-auto text-xs font-semibold uppercase tracking-wide text-sage-dark">
                    Avaliação no Google
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex max-w-xl flex-col items-center gap-6 rounded-3xl border border-sage/20 bg-white p-10 text-center shadow-card"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage/15 text-sage-dark">
              <Quote className="h-7 w-7" aria-hidden="true" />
            </span>
            <p className="text-balance text-base leading-relaxed text-charcoal/75 sm:text-lg">
              {testimonials.emptyState.text}
            </p>
            <Button href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" variant="secondary">
              <InstagramGlyph className="h-4 w-4" aria-hidden="true" />
              {testimonials.emptyState.cta}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
