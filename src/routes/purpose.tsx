import { createFileRoute } from '@tanstack/react-router'
import { PageShell, PageHero } from "@/components/site/PageShell";
import heroImg from "@/assets/hero-gallery.jpg";

export const Route = createFileRoute('/purpose')({
    head: () => ({
        meta: [
            { title: "Purpose Work / Gallery — Qurat-Al-Ain Bashar Foundation" },
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
            { property: "og:url", content: "/purpose" },
        ],
        links: [{ rel: "canonical", href: "/purpose" }],
    }),
    component: purpose,
})

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

function purpose() {
    return (
        <PageShell transparentNav>
            <PageHero
                eyebrow="From Creativity to  community "
                title="Purpose Store"
                image={heroImg}
            />

            <section className="px-6 py-12">
                <div className="mx-auto max-w-4xl">


                    <div className="space-y-5  text-[15px] text-ink/85 font-serif  md:text-[17px] sm:text-[16px]  text-justify">

                        <p>
                            Purpose Store is the creative expression of its founder,
                            <strong> Shifa Sultana</strong> — a curated collection where her
                            artistry, ideas, and passion for thoughtful design come together.
                        </p>

                        <p>
                            Every piece in the store is part of Shifa Sultana’s creative journey,
                            reflecting her exploration of art, fashion, design and craftsmanship.
                            From wearable creations to artworks and thoughtfully crafted pieces,
                            Purpose Store brings together her collection of work in one space —
                            created to be experienced, appreciated and owned.
                        </p>

                        <p>
                            But the purpose goes beyond the creation itself.
                        </p>

                        <p>
                            A portion of the earnings from Purpose Store is contributed to the
                            foundation, allowing Shifa Sultana’s artistry to become a source of
                            meaningful social impact. What begins as creativity becomes
                            contribution; what is created with purpose helps create purpose for
                            others.
                        </p>

                        <p className="font-medium text-gray-900">
                            Art. Expression. Purpose.
                        </p>

                        <p>
                            Purpose Store is not simply a place to shop. It is a space where
                            Shifa Sultana’s artistry meets a larger purpose — where every creation
                            carries a story, and every purchase becomes part of a journey toward
                            meaningful change.
                        </p>

                        <p className="pt-16 text-center">
                            <strong className="text-gray-900">
                                Explore Shifa Sultana’s Collection
                            </strong>
                            <br />
                            Discover the artistry. Own a piece of the vision. Be part of the
                            purpose.
                        </p>

                    </div>

                </div>
            </section>

            {/* <section className="px-4 py-16 sm:px-6 sm:py-6 lg:px-8 lg:py-2">
                <div className="mx-auto max-w-7xl">
                    <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {categories.map((cat, i) => (
                            <div
                                key={cat}
                                className={`group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br ${tints[i % tints.length]} shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg`}
                            >
                                <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
                                    
                                    <div>
                                        

                                    </div>

                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                            </div>
                        ))}
                        <div>

                        </div>
                    </div>
                </div>
            </section> */}


            <section className="px-4 py-16 sm:px-6 sm:py-6 lg:px-8 lg:py-2 mb-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {categories.map((cat, i) => (
                            <div
                                key={cat}
                                className={`group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br ${tints[i % tints.length]
                                    } shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                            >
                                {/* Bottom buttons only */}
                                <div className="absolute inset-x-5 bottom-5 z-10 flex gap-3 sm:inset-x-6 sm:bottom-6">
                                    {/* WhatsApp / Shop Now */}
                                    <a
                                        href="https://wa.me/919740725637"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex flex-1 items-center justify-center gap-2 rounded-full
               bg-[#A07A3A] px-4 py-3.5
               font-sans text-xs font-semibold uppercase tracking-[0.15em]
               text-white shadow-lg shadow-black/10
               transition-all duration-300
               hover:-translate-y-0.5 hover:bg-[#8B6830]
               hover:shadow-xl hover:shadow-[#A07A3A]/25
               active:translate-y-0"
                                    >
                                        <span>Shop Now</span>
                                        <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </a>

                                    {/* Instagram / Explore */}
                                    <a
                                        href="https://www.instagram.com/quratalainbasharfoundation?stkn=MXFrem5scXBjbnc0Zw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex flex-1 items-center justify-center gap-2 rounded-full
               border border-[#A07A3A]/40 bg-white/80 px-4 py-3.5
               font-sans text-xs font-semibold uppercase tracking-[0.15em]
               text-[#A07A3A] shadow-lg shadow-black/5
               backdrop-blur-md
               transition-all duration-300
               hover:-translate-y-0.5 hover:border-[#A07A3A]
               hover:bg-[#A07A3A] hover:text-white
               hover:shadow-xl hover:shadow-[#A07A3A]/20
               active:translate-y-0"
                                    >
                                        <span>Explore</span>
                                        <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                                            ↗
                                        </span>
                                    </a>
                                </div>

                                {/* Hover overlay */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PageShell>
    );

}
