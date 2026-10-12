import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { InstagramGlyph } from "../ui/InstagramGlyph";
import { testimonials, INSTAGRAM_URL, googleRating } from "../../data/siteContent";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { HoverCard } from "../animations/HoverCard";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const reviews = testimonials.googleReviews ?? [];

  function scrollToSlide(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActiveSlide(index);
  }

  return (
    <section id="depoimentos" className="bg-ivory py-20 sm:py-28">
      <div className="container-pad flex flex-col items-center gap-10">
        <SectionHeading
          title={testimonials.title}
          subtitle="Avaliações reais de tutores no perfil verificado da Soul Pet no Google."
        />

        {testimonials.hasTestimonials && reviews.length > 0 ? (
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

            <div className="relative w-full">
              <div
                ref={trackRef}
                className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {reviews.map((review, index) => (
                  <HoverCard
                    key={review}
                    className="w-[85%] flex-shrink-0 snap-start sm:w-[45%] lg:w-[31%]"
                  >
                    <motion.figure
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                      className="flex h-full flex-col gap-4 rounded-3xl border border-sage/15 bg-white p-7 shadow-card"
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
                  </HoverCard>
                ))}
              </div>

              {/* Controles do carrossel */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => scrollToSlide(Math.max(activeSlide - 1, 0))}
                  aria-label="Depoimento anterior"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-sage/30 text-deep-green transition-colors hover:bg-sage/10"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <div className="flex items-center gap-2">
                  {reviews.map((review, index) => (
                    <button
                      key={review}
                      type="button"
                      onClick={() => scrollToSlide(index)}
                      aria-label={`Ir para depoimento ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeSlide === index ? "w-6 bg-deep-green" : "w-2 bg-sage/30"
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => scrollToSlide(Math.min(activeSlide + 1, reviews.length - 1))}
                  aria-label="Próximo depoimento"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-sage/30 text-deep-green transition-colors hover:bg-sage/10"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
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
