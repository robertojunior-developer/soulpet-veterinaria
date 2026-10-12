import { banner, whatsappLinks } from "../../data/siteContent";
import { ParallaxImage } from "../animations/ParallaxImage";
import { FadeIn } from "../animations/FadeIn";
import { AnimatedButton } from "../animations/AnimatedButton";
import { Button } from "../ui/Button";

export function Banner() {
  return (
    <section className="relative isolate overflow-hidden">
      <ParallaxImage
        src={banner.image}
        alt={banner.imageAlt}
        className="absolute inset-0 -z-10 h-full w-full"
        strength={10}
      />
      <div className="absolute inset-0 -z-10 bg-deep-green/70" aria-hidden="true" />

      <div className="container-pad flex flex-col items-center gap-6 py-24 text-center sm:py-32">
        <FadeIn>
          <h2 className="text-balance max-w-2xl text-3xl font-extrabold uppercase leading-tight text-ivory sm:text-4xl lg:text-5xl">
            {banner.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-balance max-w-lg text-base text-ivory/85 sm:text-lg">{banner.text}</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <AnimatedButton>
            <Button href={whatsappLinks.schedule} target="_blank" rel="noopener noreferrer" variant="ghost">
              {banner.button}
            </Button>
          </AnimatedButton>
        </FadeIn>
      </div>
    </section>
  );
}
