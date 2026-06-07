"use client"

import * as React from "react"
import Link from "next/link"
import { Calendar, Search, Tag } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string // ISO-ish string
  featured?: boolean
}

function formatDate(value: string) {
  try {
    return new Date(value).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    })
  } catch {
    return value
  }
}

export function BlogClient({ posts }: { posts: BlogPost[] }) {
  const categories = React.useMemo(() => {
    const unique = Array.from(new Set(posts.map((p) => p.category)))
    return ["All", ...unique]
  }, [posts])

  const [query, setQuery] = React.useState("")
  const [category, setCategory] = React.useState("All")

  const featured = React.useMemo(
    () => posts.filter((p) => p.featured),
    [posts]
  )

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts
      .filter((p) => (category === "All" ? true : p.category === category))
      .filter((p) => {
        if (!q) return true
        return (
          p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
        )
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1))
  }, [posts, query, category])

  return (
    <div className="space-y-10">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Articles
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Notes on AI email workflows and embedding.
        </h2>
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          This is a starter blog structure with search, categories, and featured
          posts. Swap in a CMS later (MDX, Contentlayer, Sanity, etc.) without
          changing the UI.
        </p>
      </header>

      <div className="grid gap-4 rounded-2xl border bg-card p-5 shadow-sm md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl border bg-background text-muted-foreground">
            <Search className="size-4" />
          </div>
          <div className="w-full">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts…"
              aria-label="Search posts"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:justify-end">
          {categories.map((c) => {
            const isActive = c === category
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs transition-colors",
                  isActive
                    ? "border-primary/30 bg-primary/10 text-foreground"
                    : "bg-background text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                )}
              >
                {c}
              </button>
            )
          })}
        </div>
      </div>

      {featured.length ? (
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
              <Tag className="size-4 text-primary" />
              Featured
            </div>
            <Badge variant="secondary" className="border-primary/20">
              Starter content
            </Badge>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border bg-card p-6 shadow-sm transition-colors hover:bg-muted/10"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="border-primary/20">
                    {post.category}
                  </Badge>
                  <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="size-3" />
                    {formatDate(post.date)}
                  </span>
                </div>
                <h3 className="mt-4 text-balance text-xl font-semibold tracking-tight group-hover:text-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-6">
                  <Button variant="outline" size="sm" className="pointer-events-none">
                    Read more
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight">All posts</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-medium text-foreground">{filtered.length}</span>{" "}
              result{filtered.length === 1 ? "" : "s"}.
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            Want a topic covered?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Tell us
            </Link>
            .
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group h-full rounded-2xl border bg-card p-6 shadow-sm transition-colors hover:bg-muted/10"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="border-primary/20">
                  {post.category}
                </Badge>
                <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="size-3" />
                  {formatDate(post.date)}
                </span>
              </div>
              <h3 className="mt-4 text-balance text-lg font-semibold tracking-tight">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <p className="mt-6 text-sm font-medium text-primary">
                Read more →
              </p>
            </Link>
          ))}
        </div>

        {!filtered.length ? (
          <div className="rounded-2xl border bg-card p-10 text-center shadow-sm">
            <p className="text-sm font-semibold tracking-tight">
              No posts found.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different search term or category.
            </p>
          </div>
        ) : null}
      </section>
    </div>
  )
}

