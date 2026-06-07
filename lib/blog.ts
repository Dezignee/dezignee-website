export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string // ISO-ish string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-first-email-sequences",
    title: "AI-first email sequences: a workflow that ships",
    excerpt:
      "Go from a campaign goal to a polished multi-step sequence using chat-first drafting + visual refinement.",
    category: "AI",
    date: "2026-01-10",
    featured: true,
  },
  {
    slug: "embedding-an-email-editor",
    title: "Embedding an email editor without months of build time",
    excerpt:
      "A practical approach to SDK embedding: lifecycle hooks, theming, exports, and governance.",
    category: "Developer",
    date: "2025-12-18",
    featured: true,
  },
  {
    slug: "mcp-for-email-workflows",
    title: "Using MCP to automate generation, QA, and publishing",
    excerpt:
      "Connect generation tools, linting checks, and exports into a predictable workflow with MCP primitives.",
    category: "Developer",
    date: "2025-11-22",
    featured: false,
  },
  {
    slug: "email-design-that-renders",
    title: "Email design that renders: patterns that hold up",
    excerpt:
      "Layout, spacing, and hierarchy choices that survive real-world email clients and dark mode.",
    category: "Email Marketing",
    date: "2025-10-08",
    featured: false,
  },
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

