import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import heroImg from "@/assets/hero-gallery.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Our Work / Gallery — Qurat-Al-Ain Bashar Foundation" },
      {
        name: "description",
        content:
          "A community of visual artists, musicians, dancers, athletes, writers, designers and more — the talents behind our work.",
      },
      { property: "og:title", content: "Our Work / Gallery — Qurat-Al-Ain Bashar Foundation" },
      {
        property: "og:description",
        content:
          "A community of visual artists, musicians, dancers, athletes, writers, designers and more.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const categories = [
  "Visual Artists",
  "Musicians",
  "Dancers",
  "Actors & Theatre Performers",
  "Writers & Poets",
  "Photographers",
  "Filmmakers",
  "Designers (Graphic, Fashion, Interior, Product)",
  "Sculptors",
  "Digital Artists",
  "Illustrators",
  "Animators",
  "Content Creators",
  "Architects",
  "Craftspeople and Artisans",
  "Culinary Artists (Chefs, Bakers)",
  "Traditional & Folk Artists",
];

// gradient tints to give each placeholder card its own visual identity
const tints = [
  "from-terracotta/20 to-gold/10",
  "from-gold/25 to-cream",
  "from-ink/15 to-terracotta/10",
  "from-cream to-gold/20",
  "from-terracotta/25 to-cream",
  "from-gold/15 to-ink/10",
];

function Gallery() {
  return (
    <PageShell transparentNav>
      <PageHero
        eyebrow="A community of talent"
        title="Our Work / Gallery"
        image={heroImg}
      />

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">We have</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-light text-ink sm:text-5xl">
            Seventeen disciplines. One shared purpose.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <div
                key={cat}
                className={`group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br ${tints[i % tints.length]} shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <p className="font-display text-6xl font-light text-ink/15">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-terracotta">
                      Category
                    </p>
                    <h3 className="mt-2 font-display text-2xl leading-tight text-ink">
                      {cat}
                    </h3>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
