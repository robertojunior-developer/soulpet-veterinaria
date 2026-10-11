import { useState } from "react";
import { motion } from "motion/react";
import { Expand } from "lucide-react";
import { gallery } from "../../data/siteContent";
import { SectionHeading } from "../ui/SectionHeading";
import { Lightbox } from "../ui/Lightbox";

const sizeClasses: Record<string, string> = {
  large: "sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-square",
  medium: "sm:col-span-1 sm:row-span-2 aspect-[3/4]",
  small: "aspect-[4/5]",
};

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-pad flex flex-col items-center gap-14">
        <SectionHeading title={gallery.title} />

        <div className="grid w-full auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[180px]">
          {gallery.images.map((image, index) => (
            <motion.button
              type="button"
              key={image.src}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className={`group relative overflow-hidden rounded-3xl ${sizeClasses[image.size] ?? "aspect-square"}`}
              aria-label={`Ampliar imagem: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/30">
                <Expand
                  className="h-7 w-7 text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        images={gallery.images}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
