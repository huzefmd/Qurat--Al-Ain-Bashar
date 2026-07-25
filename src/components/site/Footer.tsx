import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const WhatsApp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 2C6.508 2 2.024 6.484 2.024 12.024c0 1.949.573 3.836 1.66 5.462L2 22l4.674-1.63a10.026 10.026 0 0 0 5.376 1.542h.005c5.541 0 10.026-4.485 10.026-10.025S17.596 2 12.05 2z"/>
  </svg>
);

export function Socials({ className = "", iconClass = "h-5 w-5" }: { className?: string; iconClass?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-opacity hover:opacity-70">
        <Instagram className={iconClass} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="transition-opacity hover:opacity-70">
        <Facebook className={iconClass} />
      </a>
      <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="transition-opacity hover:opacity-70">
        <WhatsApp className={iconClass} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="transition-opacity hover:opacity-70">
        <Twitter className={iconClass} />
      </a>
    </div>
  );
}

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/leadership", label: "Women's Leadership" },
  { to: "/model", label: "Our Model" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/gallery", label: "Our Work" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-ink text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-12 object-contain" />
            <div>
              <p className="font-display text-lg leading-tight">Qurat-Al-Ain Bashar Foundation</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">The art of giving</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/70">
            A women-founded, women-led, and women-operated NGO uniting art, athleticism, and altruism to inspire lasting social change.
          </p>
          <Socials className="mt-6 text-ivory/80" />
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Explore</p>
          <ul className="space-y-2 text-sm text-ivory/80">
            {footerLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Believe</p>
          <p className="font-display text-xl leading-snug text-ivory">
            "Talent is more than a gift — it is a responsibility."
          </p>
          <p className="mt-4 text-xs text-ivory/60">Built by Women. Led by Women. Serving Humanity.</p>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-ivory/50 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Qurat-Al-Ain Bashar Foundation. All rights reserved.</p>
          <p>Empowering Lives. Inspiring Futures.</p>
        </div>
      </div>
    </footer>
  );
}
