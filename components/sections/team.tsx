import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"

const TEAM = [
  {
    name: "Muneeb-Ur-Rehman",
    role: "Founder",
    bio: "Building Dezignee from the ground up — product, engineering, and everything in between. Obsessed with making AI-powered tooling that developers actually want to use.",
    photo: "/team/Muneeb.png",
    objectPosition: "50% 8%",
    linkedin: "https://linkedin.com/in/muneebrehman2542",
  },
  {
    name: "Saleha Fahd",
    role: "Marketing Manager",
    bio: "Shapes how Dezignee shows up in the world — from launch strategy to the words on this page. Focused on reaching the developers and teams who will get the most from the product.",
    photo: "/team/Saleha.png",
    objectPosition: "50% 10%",
    linkedin: "https://linkedin.com/in/saleha-fahd-25a924294",
  },
]

export function Team() {
  return (
    <section className="border-t border-border">
      <div className="site-rail py-24">
        {/* Section header */}
        <header className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.04em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-terracotta" aria-hidden="true" />
            Team
          </p>
          <h2 className="font-display mt-3.5 text-balance text-[38px] leading-[1.12] text-foreground">
            The people building Dezignee.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            A small team with a big focus: shipping the email tool we always wished existed.
          </p>
        </header>

        {/* Cards — two up, capped so they don't stretch thin at wide viewports */}
        <div className="mx-auto mt-14 grid max-w-[720px] gap-6 sm:grid-cols-2">
          {TEAM.map((person) => (
            <article
              key={person.name}
              className="group rounded-lg border border-border bg-card shadow-[0_1px_2px_rgba(40,34,25,0.05)] transition-all motion-safe:hover:-translate-y-0.5 hover:border-input hover:shadow-[0_4px_12px_rgba(40,34,25,0.07)]"
            >
              {/* 4:5 portrait photo */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-lg">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: person.objectPosition }}
                  sizes="(min-width: 640px) 360px, 100vw"
                />
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl text-foreground">
                      {person.name}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-terracotta">
                      {person.role}
                    </p>
                  </div>
                  {/* LinkedIn — matches footer social button pattern */}
                  <Link
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${person.name} on LinkedIn`}
                    className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-input hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
                  >
                    <Linkedin className="size-4" />
                  </Link>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {person.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Quiet footer line instead of a second big CTA */}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Want to reach us?{" "}
          <Link
            href="/contact"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Get in touch
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
