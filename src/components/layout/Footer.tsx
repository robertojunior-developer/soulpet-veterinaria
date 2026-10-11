import { MessageCircle } from "lucide-react";
import { InstagramGlyph } from "../ui/InstagramGlyph";
import { navLinks, siteMeta, whatsappLinks, INSTAGRAM_URL, INSTAGRAM_HANDLE, withBase } from "../../data/siteContent";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="container-pad grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <a href="#inicio" className="flex items-center gap-3" aria-label={`${siteMeta.name} - Início`}>
            <img
              src={withBase("images/logo.png")}
              alt={`Logomarca ${siteMeta.name}`}
              width={48}
              height={48}
              className="h-12 w-12 rounded-xl object-cover"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold text-ivory">{siteMeta.name}</span>
              <span className="text-xs uppercase tracking-[0.14em] text-ivory/60">{siteMeta.tagline}</span>
            </span>
          </a>
          <p className="max-w-xs text-sm leading-relaxed text-ivory/60">
            Cuidado veterinário integrativo, individualizado e acolhedor para cães e gatos.
          </p>
        </div>

        <nav aria-label="Links de navegação" className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ivory">Navegação</h3>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-ivory/65 transition-colors hover:text-gold">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ivory">Contato</h3>
          <a
            href={whatsappLinks.default}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-ivory/65 transition-colors hover:text-gold"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            (61) 99524-0505
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-ivory/65 transition-colors hover:text-gold"
          >
            <InstagramGlyph className="h-4 w-4" aria-hidden="true" />
            {INSTAGRAM_HANDLE}
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ivory">Soul Pet</h3>
          <p className="text-sm text-ivory/60">{siteMeta.professional}</p>
          <p className="text-sm text-ivory/60">{siteMeta.tagline}</p>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-pad flex flex-col items-center justify-between gap-2 py-6 text-xs text-ivory/50 sm:flex-row">
          <p>© {year} Soul Pet — Medicina Veterinária Integrativa. Todos os direitos reservados.</p>
          <p>{siteMeta.professional}</p>
        </div>
      </div>
    </footer>
  );
}
