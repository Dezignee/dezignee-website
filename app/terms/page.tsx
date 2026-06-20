import type { Metadata } from "next"

import { LegalDoc, type LegalSection } from "@/components/legal/legal-doc"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of Dezignee.",
  alternates: { canonical: "/terms" },
}

const sections: LegalSection[] = [
  {
    id: "agreement",
    heading: "Agreement",
    body: (
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use
        of Dezignee&apos;s email editor, dashboard, SDK, MCP servers, and related
        services (the &ldquo;Service&rdquo;). By creating an account or using the
        Service, you agree to these Terms.
      </p>
    ),
  },
  {
    id: "accounts",
    heading: "Accounts &amp; workspaces",
    body: (
      <p>
        You&apos;re responsible for your account, your workspaces, and activity
        under your API keys. Keep credentials secure, and make sure anyone you
        invite follows these Terms. You must be old enough to form a binding
        contract in your jurisdiction.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    heading: "Acceptable use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Send unlawful, deceptive, or unsolicited bulk email (spam) using content created with the Service.</li>
          <li>Violate others&apos; rights, or upload content you don&apos;t have the right to use.</li>
          <li>Abuse, reverse-engineer, or overload the Service, APIs, or MCP servers.</li>
          <li>Use AI features to generate prohibited or harmful content.</li>
        </ul>
        <p>You are responsible for complying with email regulations (such as CAN-SPAM and GDPR) for messages you send.</p>
      </>
    ),
  },
  {
    id: "billing",
    heading: "Plans, credits &amp; billing",
    body: (
      <p>
        Paid plans are billed in advance on a monthly or annual basis through our
        payment processor. AI usage is metered in credits per your plan; usage
        beyond your included credits is billed as overage or covered by add-on
        credit buckets. Fees are non-refundable except where required by law. We
        may change pricing with reasonable notice.
      </p>
    ),
  },
  {
    id: "your-content",
    heading: "Your content",
    body: (
      <p>
        You retain ownership of the emails, templates, and assets you create
        (&ldquo;Your Content&rdquo;). You grant us a limited license to host,
        process, and display Your Content solely to provide the Service —
        including sending it to AI providers to power generation features.
      </p>
    ),
  },
  {
    id: "ip",
    heading: "Our intellectual property",
    body: (
      <p>
        The Service, including its software, design, and brand, is owned by
        Dezignee and protected by law. These Terms don&apos;t grant you any rights
        to our trademarks or to use the Service except as expressly permitted.
      </p>
    ),
  },
  {
    id: "termination",
    heading: "Termination",
    body: (
      <p>
        You may stop using the Service at any time. We may suspend or terminate
        access if you breach these Terms or use the Service in a way that creates
        risk or legal exposure. On termination, your right to use the Service ends;
        certain provisions survive.
      </p>
    ),
  },
  {
    id: "disclaimers",
    heading: "Disclaimers &amp; liability",
    body: (
      <p>
        The Service is provided &ldquo;as is&rdquo; without warranties of any kind.
        To the maximum extent permitted by law, Dezignee is not liable for
        indirect, incidental, or consequential damages, and our total liability is
        limited to the amounts you paid in the 12 months before the claim.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "Changes &amp; contact",
    body: (
      <p>
        We may update these Terms from time to time; material changes will be
        communicated through the Service. Questions? Email{" "}
        <a href="mailto:legal@dezignee.com">legal@dezignee.com</a>.
      </p>
    ),
  },
]

export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms of Service"
      updated="June 2026"
      intro={<>The ground rules for using Dezignee — what you can expect from us, and what we expect from you.</>}
      disclaimer={
        <>
          <strong>Template notice:</strong> these terms are a starting template that
          reflects how the product works — they have not been reviewed by counsel.
          Have a lawyer review and finalize them before launch.
        </>
      }
      sections={sections}
    />
  )
}
