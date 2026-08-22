import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/leadership", label: "Women's Leadership" },
  { to: "/purpose", label: "Purpose Store" },
  { to: "/model", label: "Our Model" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/gallery", label: "Our Work" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !transparentOnTop || scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#F6F1E8] border-b border-gray-200 transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 sm:py-2 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Qurat-Al-Ain Bashar Foundation"
            className="h-14 w-14 object-contain sm:h-20 sm:w-20 lg:h-24 lg:w-24"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="text-[16px] xl:text-[17px] font-serif font-medium text-black transition-all duration-200 hover:text-gray-600"
              activeProps={{
                className:
                  "text-black border-b-2 border-black pb-1 font-semibold",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-black p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <X className="h-6 w-6 sm:h-7 sm:w-7" />
          ) : (
            <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
          )}
        </button>
      </div>

      {/* Mobile Navigation — full-screen overlay */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[56px] sm:top-[72px] bottom-0 z-40 bg-[#F6F1E8] border-t border-gray-200 transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-6 overflow-y-auto h-full">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: link.to === "/" }}
              className="border-b border-gray-200/70 px-2 py-4 text-lg font-serif font-medium text-black transition hover:text-[#A07A3A]"
              activeProps={{
                className:
                  "border-b border-gray-200/70 px-2 py-4 text-lg font-serif font-semibold text-[#A07A3A]",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8 px-2 text-xs uppercase tracking-[0.3em] text-ink/50">
            The Art of Giving
          </div>
        </nav>
      </div>
    </header>
  );
}
