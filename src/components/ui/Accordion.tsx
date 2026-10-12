import { useState, useId } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";

type Item = { question: string; answer: string };

export function Accordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
              isOpen ? "border-sage/50 shadow-card" : "border-sage/20"
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold transition-colors duration-300 sm:text-lg ${
                  isOpen ? "text-sage-dark" : "text-deep-green"
                }`}
              >
                {item.question}
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sage/10 text-sage-dark">
                  <Plus
                    className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm leading-relaxed text-charcoal/70 sm:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
