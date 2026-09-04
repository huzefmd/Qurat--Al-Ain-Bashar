import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Socials } from "@/components/site/Footer";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Qurat-Al-Ain Bashar Foundation" },
      { name: "description", content: "Get in touch with the Qurat-Al-Ain Bashar Foundation team." },
      { property: "og:title", content: "Contact — Qurat-Al-Ain Bashar Foundation" },
      { property: "og:description", content: "Get in touch with the Qurat-Al-Ain Bashar Foundation team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell transparentNav>
      <PageHero eyebrow="We'd love to hear from you" title="Contact" image={heroImg} />

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 sm:gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-terracotta sm:tracking-[0.3em]">Reach out</p>
            <h2 className="mt-3 font-display text-2xl font-light text-ink sm:text-3xl md:text-4xl">
              Start a conversation.
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-ink/75 sm:text-[15px]">
              Whether you'd like to collaborate, contribute, or simply learn more — we're here.
            </p>

            <div className="mt-8 space-y-5 sm:mt-10">
              <div className="flex gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-terracotta/10 text-terracotta">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-ink/50 sm:tracking-[0.2em]">Address</p>
                  <p className="mt-1 text-sm text-ink/80">Details coming soon</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-terracotta/10 text-terracotta">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-ink/50 sm:tracking-[0.2em]">Email</p>
                  <p className="mt-1 text-sm text-ink/80">Details coming soon</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-terracotta/10 text-terracotta">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-ink/50 sm:tracking-[0.2em]">Phone</p>
                  <p className="mt-1 text-sm text-ink/80">Details coming soon</p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10">
              <p className="text-xs uppercase tracking-[0.15em] text-ink/50 sm:tracking-[0.2em]">Follow</p>
              <Socials className="mt-3 text-ink/70" />
            </div>
          </div>

          <form
            className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm sm:p-8 md:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
              (e.target as HTMLFormElement).reset();
            }}
          >
            <div className="pb-5">
              <Field label="Name" name="name" required />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone " name="Phone " type="int " required />
            </div>

            <div className="mt-5">
              <Field label="Subject" name="subject" required />
            </div>
            <div className="mt-5">
              <label className="block text-xs uppercase tracking-[0.15em] text-ink/60 sm:tracking-[0.2em]">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition-opacity hover:opacity-90 sm:mt-8 sm:px-8 sm:py-3.5 sm:text-sm"
            >
              Send message
              <Send className="h-4 w-4" />
            </button>
            {sent && (
              <p className="mt-4 text-sm text-terracotta">
                Thank you — we'll be in touch soon.
              </p>
            )}
          </form>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.2em] text-ink/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
      />
    </div>
  );
}
