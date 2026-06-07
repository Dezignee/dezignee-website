import type { MetadataRoute } from "next"

import { absoluteUrl } from "@/lib/site"
import { blogPosts } from "@/lib/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes = [
    "/",
    "/features",
    "/pricing",
    "/docs",
    "/blog",
    "/contact",
    "/about",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
  }))

  const postRoutes = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
  }))

  return [...staticRoutes, ...postRoutes]
}

