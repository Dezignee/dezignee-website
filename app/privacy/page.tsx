import type { Metadata } from "next"

import { LegalDoc, type LegalSection } from "@/components/legal/legal-doc"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Dezignee collects, uses, and protects your data.",
  alternates: { canonical: "/privacy" },
}

const sections: LegalSection[] = [
  {
    id: "overview",
    heading: "Overview",
    body: (
      <p>
        This Privacy Policy explains how Dezignee (&ldquo;we,&rdquo; &ldquo;us&rdquo;)
        collects, uses, and shares information when you use our email editor,
        dashboard, SDK, MCP servers, and related services (the &ldquo;Service&rdquo;).
        By using the Service you agree to the practices described here.
      </p>
    ),
  },
  {
    id: "data-we-collect",
    heading: "Information we collect",
    body: (
      <>
        <p>We collect information in a few ways:</p>
        <ul>
          <li><strong>Account data</strong> — name, email, and authentication details (Google OAuth or magic-link).</li>
          <li><strong>Workspace content</strong> — the emails, sequences, templates, assets, and merge-tag data you create or upload.</li>
          <li><strong>Usage &amp; device data</strong> — log data, IP address, browser, and product analytics.</li>
          <li><strong>Billing data</strong> — handled by our payment processor; we store plan, status, and credit usage, not full card numbers.</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    heading: "How we use information",
    body: (
      <>
        <p>We use information to:</p>
        <ul>
          <li>Provide, maintain, and secure the Service.</li>
          <li>Power AI features — generating and editing email content from your prompts.</li>
          <li>Meter AI credit usage and process billing.</li>
          <li>Respond to support requests and send service communications.</li>
          <li>Improve the product and detect abuse.</li>
        </ul>
      </>
    ),
  },
  {
    id: "ai-subprocessors",
    heading: "AI &amp; subprocessors",
    body: (
      <p>
        AI features send the prompt and relevant document context to third-party
        model providers to generate results. On Business plans you may bring your
        own model API key, in which case generation runs under your provider
        account. We use a small set of subprocessors for hosting, payments, email
        delivery, and analytics; a current list is available on request.
      </p>
    ),
  },
  {
    id: "sharing",
    heading: "How we share information",
    body: (
      <p>
        We do not sell your personal information. We share it only with
        subprocessors acting on our behalf, when required by law, or as part of a
        business transfer. Workspace content is accessible to members of your
        workspace and to anyone you grant access via API keys.
      </p>
    ),
  },
  {
    id: "retention",
    heading: "Data retention",
    body: (
      <p>
        We retain account and workspace data for as long as your account is active
        and as needed to provide the Service. You can delete content or request
        account deletion; some records may be retained as required for legal,
        security, or accounting purposes.
      </p>
    ),
  },
  {
    id: "your-rights",
    heading: "Your rights",
    body: (
      <p>
        Depending on where you live, you may have rights to access, correct,
        export, or delete your personal information, and to object to certain
        processing. To exercise these rights, contact us at the address below.
      </p>
    ),
  },
  {
    id: "security",
    heading: "Security",
    body: (
      <p>
        We use technical and organizational measures — encryption in transit,
        scoped API keys, and access controls — to protect your data. No method of
        transmission or storage is completely secure, so we cannot guarantee
        absolute security.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Contact us",
    body: (
      <p>
        Questions about this policy? Email <a href="mailto:privacy@dezignee.com">privacy@dezignee.com</a>.
      </p>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      updated="June 2026"
      intro={
        <>
          Your trust matters. This page describes what we collect, why, and the
          choices you have.
        </>
      }
      disclaimer={
        <>
          <strong>Template notice:</strong> this policy is a starting template that
          reflects how the product works — it has not been reviewed by counsel.
          Have a lawyer review and finalize it before launch.
        </>
      }
      sections={sections}
    />
  )
}
