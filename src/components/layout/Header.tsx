import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Phone, Clock } from "lucide-react";
import { InstagramGlyph } from "../ui/InstagramGlyph";
import {
  navLinks,
  siteMeta,
  whatsappLinks,
  withBase,
  topBar,
  INSTAGRAM_URL,
} from "../../data/siteContent";
import { Button } from "../ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* Barra superior */}
      <AnimatePresence initial={false}>
        {!isScrolled && (
          <motion.div
            initial={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="hidden overflow-hidden bg-deep-green text-ivory sm:block"
          >
            <div className="container-pad flex h-9 items-center justify-between text-xs">
              <div className="flex items-center gap-5">
                <a
                  href={whatsappLinks.contact}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition-colors hover:text-gold"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  {topBar.phoneDisplay}
                </a>
                <span className="flex items-center gap-1.5 text-ivory/70">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {topBar.hours}
                </span>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-gold"
              >
                <InstagramGlyph className="h-3.5 w-3.5" aria-hidden="true" />
                {topBar.instagramHandle}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Barra principal */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "bg-ivory/95 shadow-card backdrop-blur-md" : "bg-gradient-to-b from-charcoal/40 to-transparent"
        }`}
      >
        <div
          className={`container-pad flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16 sm:h-18" : "h-20 sm:h-24"
          }`}
        >
          <a href="#inicio" className="flex items-center gap-3" aria-label={`${siteMeta.name} - Início`}>
            <img
              src={withBase("images/logo.png")}
              alt={`Logomarca ${siteMeta.name}`}
              width={52}
              height={52}
              className={`rounded-xl object-cover transition-all duration-300 ${
                isScrolled ? "h-9 w-9 sm:h-10 sm:w-10" : "h-11 w-11 sm:h-[52px] sm:w-[52px]"
              }`}
            />
            <span className="flex flex-col leading-tight">
              <span
                className={`font-display text-lg font-bold transition-colors duration-300 sm:text-xl ${
                  isScrolled ? "text-deep-green" : "text-ivory"
                }`}
              >
                {siteMeta.name}
              </span>
              <span
                className={`text-[11px] uppercase tracking-[0.14em] transition-colors duration-300 sm:text-xs ${
                  isScrolled ? "text-sage-dark" : "text-ivory/80"
                }`}
              >
                {siteMeta.tagline}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-active={activeHash === link.href}
                className={`link-underline text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-charcoal/80 hover:text-deep-green data-[active=true]:text-deep-green"
                    : "text-ivory/90 hover:text-ivory data-[active=true]:text-ivory"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href={whatsappLinks.schedule} target="_blank" rel="noopener noreferrer">
              Agendar Consulta
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 lg:hidden ${
              isScrolled ? "bg-deep-green/5 text-deep-green" : "bg-ivory/10 text-ivory"
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
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
                href={whatsappLinks.schedule}
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
