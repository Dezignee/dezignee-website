import type { Metadata } from "next"

import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of service for Dezignee (placeholder).",
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsPage() {
  return (
    <section className="border-t bg-background">
      <div className="container py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Badge variant="secondary" className="border-primary/20">
            Legal
          </Badge>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            This page is a placeholder. Replace it with your real terms before
            shipping.
          </p>

          <div className="mt-10 space-y-8">
            <section className="space-y-2">
              <h2 className="text-lg font-semibold tracking-tight">
                Using the service
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Define acceptable use, account requirements, and any
                restrictions.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold tracking-tight">Billing</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Describe trial periods, billing cadence, cancellations, and
                refunds (if applicable).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold tracking-tight">
                Limitations
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Outline warranties, liability limitations, and dispute handling
                terms as required by your jurisdiction.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

