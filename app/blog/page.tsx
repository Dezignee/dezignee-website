import type { Metadata } from "next"

import { Hero } from "@/components/sections/hero"
import { BlogClient } from "@/components/blog/blog-client"
import { blogPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Product updates, AI email best practices, and developer resources for embedding and MCP workflows.",
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  return (
    <>
      <Hero
        badge="Blog"
        title={
          <>
            Learn what we’re building—and how to{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
              ship better email
            </span>
            .
          </>
        }
        description={
          <>
            Product updates, AI workflows, and practical developer notes for
            embedding the editor and integrating MCP.
          </>
        }
        primaryCta={{ href: "/pricing", label: "Get Started" }}
        secondaryCta={{ href: "/docs", label: "SDK Quick Start" }}
      />

      <section className="border-t bg-background">
        <div className="container py-16 sm:py-20">
          <BlogClient posts={[...blogPosts]} />
        </div>
      </section>
    </>
  )
}

