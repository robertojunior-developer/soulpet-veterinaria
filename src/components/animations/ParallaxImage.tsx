import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  strength?: number;
};

/** Imagem com efeito parallax sutil via GSAP ScrollTrigger (desativado se prefers-reduced-motion). */
export function ParallaxImage({ src, alt, className = "", imgClassName = "", strength = 14 }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !wrapperRef.current || !imgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { yPercent: -strength },
        {
          yPercent: strength,
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, [strength]);

  return (
    <div ref={wrapperRef} className={`overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-[120%] w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
