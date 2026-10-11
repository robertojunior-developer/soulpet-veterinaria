import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, siteMeta, whatsappLinks, withBase } from "../../data/siteContent";
import { Button } from "../ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-ivory/90 shadow-card backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-pad flex h-20 items-center justify-between sm:h-24">
        <a href="#inicio" className="flex items-center gap-3" aria-label={`${siteMeta.name} - Início`}>
          <img
            src={withBase("images/logo.png")}
            alt={`Logomarca ${siteMeta.name}`}
            width={52}
            height={52}
            className="h-11 w-11 rounded-xl object-cover sm:h-[52px] sm:w-[52px]"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold text-deep-green sm:text-xl">
              {siteMeta.name}
            </span>
            <span className="text-[11px] uppercase tracking-[0.14em] text-sage-dark sm:text-xs">
              {siteMeta.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-deep-green"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={whatsappLinks.default} target="_blank" rel="noopener noreferrer">
            Agendar Consulta
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-deep-green/5 text-deep-green lg:hidden"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-ivory shadow-card lg:hidden"
          >
            <nav
              className="container-pad flex flex-col gap-1 py-4"
              aria-label="Navegação mobile"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-charcoal/85 transition-colors hover:bg-sage/10 hover:text-deep-green"
                >
                  {link.label}
                </a>
              ))}
              <Button
                href={whatsappLinks.default}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full"
              >
                Agendar Consulta
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
