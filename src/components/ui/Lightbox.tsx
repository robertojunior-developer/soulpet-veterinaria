import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: { src: string; alt: string }[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ images, activeIndex, onClose, onNavigate }: Props) {
  const isOpen = activeIndex !== null;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen || activeIndex === null) return;
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate((activeIndex + 1) % images.length);
      if (event.key === "ArrowLeft") onNavigate((activeIndex - 1 + images.length) % images.length);
    },
    [isOpen, activeIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && activeIndex !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Galeria de fotos Soul Pet"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-4"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar galeria"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-ivory transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate((activeIndex - 1 + images.length) % images.length);
            }}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-ivory transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>

          <motion.img
            key={images[activeIndex].src}
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-soft"
          />

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate((activeIndex + 1) % images.length);
            }}
            aria-label="Próxima foto"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-ivory transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
