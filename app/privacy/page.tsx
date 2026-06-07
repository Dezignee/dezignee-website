import type { Metadata } from "next"

import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for Dezignee (placeholder).",
  alternates: {
    canonical: "/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <section className="border-t bg-background">
      <div className="container py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Badge variant="secondary" className="border-primary/20">
            Legal
          </Badge>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            This page is a placeholder. Replace it with your real privacy policy
            before shipping.
          </p>

          <div className="mt-10 space-y-8">
            <section className="space-y-2">
              <h2 className="text-lg font-semibold tracking-tight">
                What we collect
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Add the data categories you collect (account information, usage
                analytics, billing, support communications, etc.).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold tracking-tight">
                How we use data
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Explain how data is used to provide the service, improve the
                product, and respond to support requests.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold tracking-tight">Contact</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Provide a privacy contact email and your company details (if
                applicable).
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

