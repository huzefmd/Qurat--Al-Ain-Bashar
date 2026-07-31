import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/leadership", label: "Women's Leadership" },
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

  const solid = !transparentOnTop || scrolled;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-[#F6F1E8] border-b border-gray-200 transition-all duration-300"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-1 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Qurat-Al-Ain Bashar Foundation"
            className="h-30 w-30 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="text-[17px] font-serif font-medium text-black transition-all duration-200 hover:text-gray-600"
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
          className="lg:hidden text-black"
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="bg-white border-t border-gray-200 shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-md px-3 py-3 text-base font-medium text-black transition hover:bg-gray-100"
                activeProps={{
                  className:
                    "rounded-md bg-gray-100 px-3 py-3 text-base font-semibold text-black",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}