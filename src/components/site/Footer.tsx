import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const WhatsApp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-label="WhatsApp">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 2C6.508 2 2.024 6.484 2.024 12.024c0 1.949.573 3.836 1.66 5.462L2 22l4.674-1.63a10.026 10.026 0 0 0 5.376 1.542h.005c5.541 0 10.026-4.485 10.026-10.025S17.596 2 12.05 2z" />
  </svg>
);

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/leadership", label: "Women's Leadership" },
  { to: "/model", label: "Our Model" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/gallery", label: "Our Work" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/quratalainbasharfoundation/?hl=en", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: WhatsApp, href: "https://wa.me/", label: "WhatsApp" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

type SocialsProps = {
  className?: string;
};

export function Socials({ className = "" }: SocialsProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socials.map(({ icon: Icon, href, label }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-600 transition hover:border-amber-400 hover:text-amber-400"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#2C2118] text-white">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:items-center md:justify-between">

        {/* Brand */}
        <div className="flex items-center gap-5">
          <img
            src={logo}
            alt="Foundation Logo"
            className="h-16 w-16 object-contain"
          />

          <div>
            <p className="font-cinzel text-lg font-semibold leading-tight">
              Qurat-Al-Ain Bashar Foundation
            </p>

            <p className="mt-1 font-cinzel text-xs uppercase tracking-[0.3em] text-amber-400">
              The Art of Giving
            </p>
          </div>
        </div>

        {/* Links */}
        <nav className="flex max-w-2xl flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-stone-300">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-cinzel transition hover:text-amber-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-600 text-stone-300 transition hover:border-amber-400 hover:text-amber-400"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="relative border-t border-white/10">
        <p className="px-6 py-5 text-center font-cinzel text-xs tracking-wide text-stone-500">
          © {new Date().getFullYear()} Qurat-Al-Ain Bashar Foundation ·
          Empowering Lives · Inspiring Futures
        </p>
      </div>
    </footer>
  );
}
