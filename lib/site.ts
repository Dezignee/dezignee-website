export const siteConfig = {
  name: "Dezignee",
  description:
    "AI-first email editor for dashboard workflows and embeddable SDKs. Generate templates and sequences with chat-first AI, then refine visually and export clean HTML.",
  /**
   * Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://dezignee.com).
   * Used for canonical URLs, OG URLs, and sitemap/robots.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString()
}

