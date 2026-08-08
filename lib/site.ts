export const siteConfig = {
  name: "Dezignee",
  description:
    "The MCP-native email editor. Chat to draft a campaign, refine every block by hand, and export email-safe HTML — or embed the whole workflow in your product via SDK and MCP.",
  /**
   * Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://dezignee.com).
   * Used for canonical URLs, OG URLs, and sitemap/robots.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://dezignee.com",
} as const

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString()
}
