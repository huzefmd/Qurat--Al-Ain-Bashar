import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Link } from "@tanstack/react-router";

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
 
  image,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
 
  image: string;
  align?: "left" | "center";
}) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-20 sm:min-h-[70vh] sm:pt-24 md:min-h-[75vh]">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink/80" />
      <div
        className={`relative mx-auto w-full max-w-7xl px-5 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24 ${
          align === "center" ? "text-center" : ""
        }`}
      >
        {eyebrow && (
          <div className="mb-5 flex justify-center sm:mb-6">
            <span className="inline-flex items-center rounded-full border border-gold/40 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-sm sm:px-6 sm:py-2 sm:text-xs sm:tracking-[0.3em]">
              {eyebrow}
            </span>
          </div>
        )}
        <h1
          className="font-display text-3xl font-light leading-[1.05] text-ivory text-balance sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
       
      </div>
    </section>
  );
}

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-px flex-1 bg-[#C8A062]/70" />
      <svg
        width="22"
        height="10"
        viewBox="0 0 34 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden
      >
        <path d="M0 7H11" stroke="#C8A062" strokeWidth="1.4" />
        <path d="M23 7H34" stroke="#C8A062" strokeWidth="1.4" />
        <path d="M17 2L21 7L17 12L13 7L17 2Z" stroke="#C8A062" strokeWidth="1.4" />
        <circle cx="17" cy="7" r="1.6" fill="#C8A062" />
      </svg>
      <div className="h-px flex-1 bg-[#C8A062]/70" />
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  italicWord,
  accent,
  description,
  primaryCta,
  secondaryCta,
  variant = "light",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  italicWord?: string;
  accent?: string;
  description?: ReactNode;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  variant?: "light" | "dark";
  children?: ReactNode;
}) {
  const isDark = variant === "dark";
  const eyebrowCls = isDark
    ? "text-[#E7C77A] font-medium"
    : "text-[#C8A062] font-medium";
  const titleCls = isDark ? "text-ivory" : "text-ink";
  const italicCls = isDark ? "italic font-light text-gold" : "italic font-light text-[#A07A3A]";
  const accentCls = isDark ? "text-ivory" : "text-ink";
  const descCls = isDark ? "text-ivory/80" : "text-ink/80";
  const ruleCls = isDark ? "bg-[#E7C77A]/60" : "bg-[#C8A062]/70";
  const ornamentStroke = isDark ? "#E7C77A" : "#C8A062";

  return (
    <section
      className={`relative overflow-hidden ${isDark ? "bg-ink" : "bg-background"}`}
    >
      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-5 py-16 pt-24 sm:px-8 sm:py-20 sm:pt-28 md:py-24 md:pt-32 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          {eyebrow && (
            <p
              className={`font-sans text-[10px] uppercase tracking-[0.3em] animate-fade-up sm:text-[11px] sm:tracking-[0.5em] ${eyebrowCls}`}
            >
              {eyebrow}
            </p>
          )}

          <div className={`mt-5 flex items-center gap-3`}>
            <div className={`h-px flex-1 ${ruleCls}`} />
            <svg
              width="22"
              height="10"
              viewBox="0 0 34 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
              aria-hidden
            >
              <path d="M0 7H11" stroke={ornamentStroke} strokeWidth="1.4" />
              <path d="M23 7H34" stroke={ornamentStroke} strokeWidth="1.4" />
              <path
                d="M17 2L21 7L17 12L13 7L17 2Z"
                stroke={ornamentStroke}
                strokeWidth="1.4"
              />
              <circle cx="17" cy="7" r="1.6" fill={ornamentStroke} />
            </svg>
            <div className={`h-px flex-1 ${ruleCls}`} />
          </div>

          <h1
            className={`mt-5 font-serif text-[34px] leading-[1.1] tracking-[-0.01em] sm:mt-7 sm:text-5xl sm:leading-[1.05] md:text-6xl md:leading-[1.02] lg:text-[68px] animate-fade-up ${titleCls}`}
            style={{ animationDelay: "150ms" }}
          >
            {italicWord ? (
              <>
                {title}{" "}
                <span className={italicCls}>{italicWord}</span>
                {description ? null : null}
              </>
            ) : (
              title
            )}
          </h1>

          {accent && (
            <div
              className="mt-7 flex items-center gap-4 animate-fade-up"
              style={{ animationDelay: "250ms" }}
            >
              <span
                className={`h-px w-14 ${isDark ? "bg-ivory/50" : "bg-ink/60"}`}
              />
              <p
                className={`font-script text-xl sm:text-2xl md:text-3xl ${accentCls}`}
              >
                {accent}
              </p>
            </div>
          )}

          {description && (
            <p
              className={`mt-5 max-w-xl font-serif text-[15px] leading-[1.85] sm:mt-6 sm:text-[16px] sm:leading-[1.9] md:text-[17px] animate-fade-up ${descCls}`}
              style={{ animationDelay: "350ms" }}
            >
              {description}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div
              className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4 animate-fade-up"
              style={{ animationDelay: "450ms" }}
            >
              {primaryCta && (
                <Link
                  to={primaryCta.to}
                  className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 sm:px-7 sm:py-3.5 sm:text-[12px] sm:tracking-[0.25em] ${
                    isDark
                      ? "bg-gold text-ink hover:bg-[#E7C77A] hover:shadow-[0_10px_30px_-10px_rgba(231,199,122,0.45)]"
                      : "bg-ink text-ivory hover:bg-[#1a1410] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)]"
                  }`}
                >
                  {primaryCta.label}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.to}
                  className={`group inline-flex items-center gap-2 rounded-full border px-5 py-3 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 sm:px-7 sm:py-3.5 sm:text-[12px] sm:tracking-[0.25em] ${
                    isDark
                      ? "border-ivory/30 text-ivory hover:border-gold hover:text-gold"
                      : "border-ink/20 text-ink hover:border-[#C8A062] hover:text-[#A07A3A]"
                  }`}
                >
                  {secondaryCta.label}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              )}
            </div>
          )}

          {children && <div className="mt-8 sm:mt-10">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        prose-foundation
        mx-auto
        max-w-5xl
        px-4
        text-justify
        font-serif
        text-[15px]
        leading-[1.8]
        text-ink/85
        sm:px-6
        sm:text-[16px]
        sm:leading-[1.85]
        md:text-[17px]
        [&_p]:mb-5
        [&_p:last-child]:mb-0
        sm:[&_p]:mb-6
        [&_a]:text-terracotta
        [&_a]:underline
        [&_a]:decoration-terracotta/40
        [&_a]:underline-offset-4
        [&_a]:transition-colors
        [&_a:hover]:text-gold
        [&_blockquote]:my-6
        sm:[&_blockquote]:my-8
        [&_ul]:my-5
        [&_ul]:space-y-3
        sm:[&_ul]:my-6
        [&_ol]:my-5
        [&_ol]:space-y-3
        sm:[&_ol]:my-6
        [&_li]:leading-[1.8]
        sm:[&_li]:leading-[1.85]
        [&_strong]:font-semibold
        [&_strong]:text-ink
      "
    >
      {children}
    </div>
  );
}
