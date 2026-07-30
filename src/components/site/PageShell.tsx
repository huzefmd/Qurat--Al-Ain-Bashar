import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

interface Props {
  children: ReactNode;
  transparentNav?: boolean;
}

export function PageShell({ children, transparentNav = false }: Props) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav transparentOnTop={transparentNav} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  align?: "left" | "center";
}) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden pt-24 sm:min-h-[75vh]">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink/80" />
      <div
        className={`relative mx-auto w-full max-w-7xl  px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24  ${
          align === "center" ? "text-center" : ""
        }`}
      >
        {eyebrow && (
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-gold/40 bg-white/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold backdrop-blur-sm">
              {eyebrow}
            </span>
          </div>
        )}
        <h1
          className="font-display text-4xl font-light leading-[1.05] text-ivory text-balance sm:text-6xl lg:text-7xl animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-6 max-w-2xl text-base leading-relaxed text-ivory/85 sm:text-lg animate-fade-up ${
              align === "center" ? "mx-auto" : ""
            }`}
            style={{ animationDelay: "160ms" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-10xl space-y-10 px-6 text-center text-[26px] leading-[2.1] tracking-[0.01em] text-ink sm:px-8 lg:px-12 font-serif">
      {children}
    </div>
  );
}
