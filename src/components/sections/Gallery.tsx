import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Expand } from "lucide-react";
import { gallery, galleryCategories } from "../../data/siteContent";
import { SectionHeading } from "../ui/SectionHeading";
import { Lightbox } from "../ui/Lightbox";

const sizeClasses: Record<string, string> = {
  large: "sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-square",
  medium: "sm:col-span-1 sm:row-span-2 aspect-[3/4]",
  small: "aspect-[4/5]",
};

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<(typeof galleryCategories)[number]>("Todos");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredImages = useMemo(
    () =>
      activeCategory === "Todos"
        ? gallery.images
        : gallery.images.filter((image) => image.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-pad flex flex-col items-center gap-10">
        <SectionHeading title={gallery.title} subtitle={gallery.subtitle} />

        {/* Filtros de categoria */}
        <div className="flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Filtrar galeria por categoria">
          {galleryCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-deep-green text-ivory shadow-card"
                  : "bg-ivory text-charcoal/70 hover:bg-sage/15 hover:text-deep-green"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid w-full auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[180px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => {
              const globalIndex = gallery.images.indexOf(image);
              return (
                <motion.button
                  layout
                  type="button"
                  key={image.src + image.category}
                  onClick={() => setActiveIndex(globalIndex)}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={`group relative overflow-hidden rounded-3xl ${sizeClasses[image.size] ?? "aspect-square"}`}
                  aria-label={`Ampliar imagem: ${image.alt}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 flex flex-col items-center justify-end gap-2 bg-gradient-to-t from-charcoal/70 via-charcoal/0 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Expand className="h-6 w-6 text-ivory" aria-hidden="true" />
                    <span className="translate-y-2 text-xs font-semibold uppercase tracking-wide text-ivory transition-transform duration-300 group-hover:translate-y-0">
                      {image.category}
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
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
