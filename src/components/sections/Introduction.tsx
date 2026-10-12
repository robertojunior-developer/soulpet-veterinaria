import { HeartHandshake, Leaf, ShieldCheck, type LucideIcon } from "lucide-react";
import { introduction } from "../../data/siteContent";
import { FadeIn } from "../animations/FadeIn";
import { ImageReveal } from "../animations/ImageReveal";
import { Button } from "../ui/Button";

const icons: Record<string, LucideIcon> = { HeartHandshake, Leaf, ShieldCheck };

export function Introduction() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Decoração orgânica discreta */}
      <div
        className="pointer-events-none absolute -right-28 top-1/3 h-80 w-80 rounded-full bg-sage/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-pad grid items-center gap-14 lg:grid-cols-2">
        <FadeIn direction="left" className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">
            {introduction.eyebrow}
          </span>
          <h2 className="text-balance text-3xl font-bold text-deep-green sm:text-4xl lg:text-5xl">
            {introduction.title}
          </h2>
          <p className="text-balance text-base leading-relaxed text-charcoal/75 sm:text-lg">
            {introduction.text}
          </p>

          <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5">
            {introduction.cards.map((card) => {
              const Icon = icons[card.icon] ?? Leaf;
              return (
                <li key={card.title} className="flex items-center gap-2 text-sm font-medium text-charcoal/75">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage/15 text-sage-dark">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  {card.title}
                </li>
              );
            })}
          </ul>

          <div>
            <Button href={introduction.buttonHref} variant="secondary">
              {introduction.button}
            </Button>
          </div>
        </FadeIn>

        <FadeIn direction="right" className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold/20 via-sage/10 to-transparent blur-2xl"
            aria-hidden="true"
          />
          <ImageReveal
            src={introduction.image}
            alt={introduction.imageAlt}
            className="aspect-[4/5] w-full rounded-[2.5rem] border-4 border-white shadow-soft"
          />
        </FadeIn>
      </div>
    </section>
  );
}
