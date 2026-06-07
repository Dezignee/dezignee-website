import Link from "next/link"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { blogPosts, getBlogPostBySlug } from "@/lib/blog"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  const title = post?.title ?? params.slug.replaceAll("-", " ")
  const description =
    post?.excerpt ??
    "A placeholder blog post page. Add MDX/CMS content later and render it here."

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/blog/${params.slug}`,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime: post?.date ? new Date(post.date).toISOString() : undefined,
      tags: post?.category ? [post.category] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-image"],
    },
  }
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getBlogPostBySlug(params.slug)
  const title = post?.title ?? params.slug.replaceAll("-", " ")
  const meta = [post?.category, post?.date].filter(Boolean).join(" · ")

  return (
    <section className="border-b bg-background">
      <div className="container py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="border-primary/20">
              Blog post
            </Badge>
            {meta ? (
              <span className="text-xs text-muted-foreground">{meta}</span>
            ) : null}
          </div>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {post?.excerpt ??
              "This is a placeholder blog detail page. Add MDX/CMS content later and render it here."}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild>
              <Link href="/blog">Back to blog</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Suggest a topic</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

