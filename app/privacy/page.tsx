import type { Metadata } from "next"

import { LegalDoc, type LegalSection } from "@/components/legal/legal-doc"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Dezignee collects, uses, discloses, stores, and protects your information.",
  alternates: { canonical: "/privacy" },
}

const sections: LegalSection[] = [
  {
    id: "introduction",
    heading: "Introduction",
    body: (
      <>
        <p>
          Dezignee (&ldquo;Dezignee,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your
          privacy and is committed to protecting your personal information.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, disclose, store, and protect information when you visit
          the Dezignee website, create or use a Dezignee account, or access our products and services, including our
          email editor, dashboard, embedded editor, software development kits (&ldquo;SDKs&rdquo;), APIs, Model
          Context Protocol (&ldquo;MCP&rdquo;) servers, artificial intelligence-powered features (&ldquo;AI
          Features&rdquo;), and related services (collectively, the &ldquo;Service&rdquo;).
        </p>
        <p>
          By accessing or using the Service, you acknowledge the practices described in this Privacy Policy. If you
          do not agree with this Privacy Policy, you should not use the Service.
        </p>
        <p>This Privacy Policy may be updated from time to time. The date at the top of this page indicates when it was last revised.</p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    body: (
      <>
        <p>
          We collect information directly from you, automatically when you interact with the Service, and, where
          applicable, from third-party services that you choose to connect with Dezignee.
        </p>
        <p>The information we may collect includes the following.</p>

        <h3 className="mt-4 font-semibold text-foreground/90">Account Information</h3>
        <p>When you create or use a Dezignee account, we may collect information such as:</p>
        <ul>
          <li>Your name;</li>
          <li>Email address;</li>
          <li>Authentication information;</li>
          <li>Workspace and organization information; and</li>
          <li>Information provided through supported authentication methods, such as Google OAuth or magic-link authentication.</li>
        </ul>
        <p>We use this information to create, authenticate, secure, and manage your account and provide the Service.</p>

        <h3 className="mt-4 font-semibold text-foreground/90">Workspace Content</h3>
        <p>When you use Dezignee, you may create, upload, import, process, or store content within your workspace.</p>
        <p>This may include:</p>
        <ul>
          <li>Emails;</li>
          <li>Email sequences;</li>
          <li>Templates;</li>
          <li>Designs and layouts;</li>
          <li>Text and other content;</li>
          <li>Images and other assets;</li>
          <li>Merge tags and personalization data;</li>
          <li>AI prompts and instructions; and</li>
          <li>Other content that you choose to provide through the Service.</li>
        </ul>
        <p>The information contained within Workspace Content depends on what you or your organization chooses to provide.</p>

        <h3 className="mt-4 font-semibold text-foreground/90">Usage and Device Information</h3>
        <p>When you access or use the Service, we may automatically collect certain technical and usage information, including:</p>
        <ul>
          <li>IP address;</li>
          <li>Browser type;</li>
          <li>Device information;</li>
          <li>Operating system;</li>
          <li>Log information;</li>
          <li>Pages and features accessed;</li>
          <li>Dates and times of access;</li>
          <li>Product interactions;</li>
          <li>Error and diagnostic information; and</li>
          <li>Product analytics.</li>
        </ul>
        <p>We use this information to operate, maintain, secure, troubleshoot, analyze, and improve the Service.</p>

        <h3 className="mt-4 font-semibold text-foreground/90">Billing Information</h3>
        <p>If you purchase a paid subscription or other paid services, payment information is processed through our payment processor.</p>
        <p>Dezignee may maintain information related to your subscription, such as your:</p>
        <ul>
          <li>Subscription plan;</li>
          <li>Billing status;</li>
          <li>Payment status;</li>
          <li>AI credit usage; and</li>
          <li>Transaction-related records.</li>
        </ul>
        <p>Dezignee does not store full payment card numbers.</p>
      </>
    ),
  },
  {
    id: "how-we-use",
    heading: "How We Use Your Information",
    body: (
      <>
        <p>We may use information collected through the Service to:</p>
        <ul>
          <li>Provide, operate, maintain, and improve Dezignee;</li>
          <li>Create and manage user accounts and workspaces;</li>
          <li>Authenticate users and protect accounts;</li>
          <li>Provide the email editor, embedded editor, APIs, SDKs, MCP servers, and other product functionality;</li>
          <li>Provide and operate AI Features;</li>
          <li>Process AI prompts and return generated content;</li>
          <li>Calculate and meter AI credit usage;</li>
          <li>Process subscriptions and billing;</li>
          <li>Provide customer support;</li>
          <li>Respond to inquiries and requests;</li>
          <li>Send administrative and service-related communications;</li>
          <li>Analyze usage and improve product performance;</li>
          <li>Develop and improve features and functionality;</li>
          <li>Diagnose technical problems;</li>
          <li>Protect against fraud, abuse, security incidents, and unauthorized access;</li>
          <li>Enforce our applicable terms and policies;</li>
          <li>Comply with legal obligations; and</li>
          <li>Establish, exercise, or defend legal claims.</li>
        </ul>
        <p>
          We may also use aggregated or de-identified information to understand how the Service is used and to
          improve our products, provided such information does not reasonably identify an individual.
        </p>
      </>
    ),
  },
  {
    id: "ai-features",
    heading: "Artificial Intelligence Features",
    body: (
      <>
        <p>
          Dezignee provides AI-powered functionality that can assist users in generating, editing, transforming, or
          otherwise working with content.
        </p>
        <p>When you use these AI Features, certain information must be processed to generate the requested result.</p>

        <h3 className="mt-4 font-semibold text-foreground/90">AI Inputs</h3>
        <p>
          When you use AI Features, we process the prompts, instructions, document content, design information, or
          other context you provide or choose to make available to the AI Feature (&ldquo;AI Inputs&rdquo;).
        </p>
        <p>AI Inputs may contain personal information depending on what you choose to submit.</p>
        <p>
          You are responsible for ensuring that you have the necessary rights and permissions to submit information
          through Dezignee&rsquo;s AI Features.
        </p>

        <h3 className="mt-4 font-semibold text-foreground/90">AI-Generated Content</h3>
        <p>
          AI Features may generate text, designs, recommendations, modifications, or other results in response to
          your AI Inputs (&ldquo;AI-Generated Content&rdquo;).
        </p>
        <p>
          AI-Generated Content is provided to assist you with your work. You are responsible for reviewing
          AI-Generated Content before using, sending, publishing, or otherwise relying on it.
        </p>

        <h3 className="mt-4 font-semibold text-foreground/90">AI Usage Information</h3>
        <p>We may collect information about your use of AI Features, including:</p>
        <ul>
          <li>The AI Feature used;</li>
          <li>AI credit consumption;</li>
          <li>Request timestamps;</li>
          <li>Performance and diagnostic information; and</li>
          <li>Other usage metadata.</li>
        </ul>
        <p>
          This information may be used to operate the Service, calculate credit usage, manage billing, troubleshoot
          issues, detect abuse, and improve product performance.
        </p>

        <h3 className="mt-4 font-semibold text-foreground/90">How AI Inputs Are Processed</h3>
        <p>
          To provide certain AI Features, Dezignee may transmit AI Inputs and relevant context to third-party
          artificial intelligence service providers that process information on our behalf.
        </p>
        <p>These providers generate or assist in generating the requested output, which is then returned through the Dezignee Service.</p>
        <p>We seek to limit information transmitted to third-party AI providers to what is reasonably necessary to provide the requested AI functionality.</p>
        <p>The third-party provider used may vary depending on the feature, model availability, product configuration, or customer account.</p>

        <h3 className="mt-4 font-semibold text-foreground/90">Bring Your Own AI Provider</h3>
        <p>Certain Dezignee plans or configurations may allow customers to connect or use their own AI model provider credentials or API keys.</p>
        <p>
          When you choose to use your own provider credentials, AI requests may be processed under your relationship
          with that provider and may also be subject to that provider&rsquo;s terms, privacy policy, data retention
          practices, and other policies.
        </p>
        <p>You should review the privacy and data-processing practices of any third-party AI provider you choose to connect to Dezignee.</p>

        <h3 className="mt-4 font-semibold text-foreground/90">Sensitive Information and AI Features</h3>
        <p>
          We recommend that you do not submit sensitive personal information through Dezignee&rsquo;s AI Features
          unless it is necessary and you have appropriate authorization to do so.
        </p>
        <p>Sensitive information may include information such as:</p>
        <ul>
          <li>Government identification numbers;</li>
          <li>Financial account credentials;</li>
          <li>Payment card information;</li>
          <li>Health or medical information;</li>
          <li>Biometric or genetic information;</li>
          <li>Information revealing racial or ethnic origin;</li>
          <li>Political opinions;</li>
          <li>Religious or philosophical beliefs;</li>
          <li>Sexual orientation; or</li>
          <li>Other information classified as sensitive or special-category data under applicable privacy laws.</li>
        </ul>
        <p>
          If you submit personal information belonging to another person, you are responsible for ensuring that you
          have an appropriate legal basis, permission, or authorization to process that information through the
          Service.
        </p>

        <h3 className="mt-4 font-semibold text-foreground/90">Automated Processing</h3>
        <p>Dezignee&rsquo;s AI Features automatically generate or modify content based on the information and instructions provided by users.</p>
        <p>These features are intended to assist users with content creation and related workflows.</p>
        <p>Users can review, edit, reject, replace, or otherwise modify AI-Generated Content before deciding whether to use or publish it.</p>
        <p>
          Dezignee&rsquo;s AI Features are not intended to independently make decisions that produce legal or
          similarly significant effects concerning individuals.
        </p>
      </>
    ),
  },
  {
    id: "how-we-share",
    heading: "How We Share Information",
    body: (
      <>
        <p>We do not sell your personal information.</p>
        <p>We may disclose information in the following circumstances.</p>

        <h3 className="mt-4 font-semibold text-foreground/90">Service Providers and Subprocessors</h3>
        <p>We use third-party service providers and subprocessors to help operate the Service.</p>
        <p>These providers may support functions such as:</p>
        <ul>
          <li>Cloud hosting and infrastructure;</li>
          <li>Artificial intelligence processing;</li>
          <li>Payment processing;</li>
          <li>Authentication;</li>
          <li>Email delivery;</li>
          <li>Analytics;</li>
          <li>Monitoring and security; and</li>
          <li>Other infrastructure necessary to operate Dezignee.</li>
        </ul>
        <p>
          These providers may process information only as necessary to perform services for Dezignee and subject to
          applicable contractual and legal requirements.
        </p>
        <p>A current list of subprocessors may be made available upon request.</p>

        <h3 className="mt-4 font-semibold text-foreground/90">Workspace Members</h3>
        <p>
          Workspace Content may be accessible to other authorized members of your organization or workspace
          depending on your account configuration and permissions.
        </p>

        <h3 className="mt-4 font-semibold text-foreground/90">APIs and Access Credentials</h3>
        <p>Information may be accessible through APIs, SDKs, MCP servers, API keys, or other integrations when you or your organization enables such access.</p>
        <p>You are responsible for protecting credentials and access keys associated with your account and for managing who is authorized to access your workspace.</p>

        <h3 className="mt-4 font-semibold text-foreground/90">Legal Requirements</h3>
        <p>We may disclose information when we reasonably believe disclosure is necessary to:</p>
        <ul>
          <li>Comply with applicable law, regulation, legal process, or governmental request;</li>
          <li>Protect the rights, property, or safety of Dezignee, our users, or others;</li>
          <li>Investigate fraud, abuse, or security incidents; or</li>
          <li>Enforce our agreements and policies.</li>
        </ul>

        <h3 className="mt-4 font-semibold text-foreground/90">Business Transfers</h3>
        <p>
          If Dezignee is involved in a merger, acquisition, financing, reorganization, sale of assets, bankruptcy, or
          similar business transaction, information may be transferred as part of that transaction, subject to
          applicable law.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies and Similar Technologies",
    body: (
      <>
        <p>
          Dezignee may use cookies and similar technologies to operate the website and Service, maintain sessions,
          understand how users interact with our products, improve performance, and support analytics.
        </p>
        <p>
          Depending on your browser and applicable law, you may be able to control or disable certain cookies through
          your browser settings or other controls made available by Dezignee.
        </p>
        <p>Disabling certain cookies may affect the functionality of the Service.</p>
      </>
    ),
  },
  {
    id: "data-retention",
    heading: "Data Retention",
    body: (
      <>
        <p>We retain account information and Workspace Content for as long as reasonably necessary to provide the Service and maintain your account.</p>
        <p>You may be able to delete certain content through the Service or request deletion of your account.</p>
        <p>
          Following account deletion, certain information may remain for a limited period in backups, logs, security
          systems, billing records, or other systems where retention is reasonably necessary for legal, security,
          fraud-prevention, accounting, dispute-resolution, or operational purposes.
        </p>
        <p>Information processed by third-party providers may also be subject to their applicable retention and deletion practices.</p>
        <p>We may retain aggregated or de-identified information that can no longer reasonably be associated with an identifiable individual.</p>
      </>
    ),
  },
  {
    id: "data-security",
    heading: "Data Security",
    body: (
      <>
        <p>We use reasonable technical and organizational measures designed to protect information processed through Dezignee.</p>
        <p>These measures include protections such as:</p>
        <ul>
          <li>Encryption of information in transit;</li>
          <li>Access controls;</li>
          <li>Scoped API keys and credentials; and</li>
          <li>Restrictions on access to systems and information.</li>
        </ul>
        <p>Users are responsible for maintaining the confidentiality and security of their account credentials, API keys, and other authentication information.</p>
        <p>
          No method of transmission over the internet or electronic storage is completely secure. Accordingly, while
          we take measures designed to protect your information, we cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: "international-data-processing",
    heading: "International Data Processing",
    body: (
      <>
        <p>Dezignee and its service providers may process information in countries other than the country in which you reside.</p>
        <p>As a result, your information may be subject to the laws of jurisdictions different from your own.</p>
        <p>Where required by applicable law, we take appropriate measures regarding international transfers of personal information.</p>
      </>
    ),
  },
  {
    id: "your-rights",
    heading: "Your Privacy Rights",
    body: (
      <>
        <p>Depending on your location and applicable law, you may have rights regarding your personal information.</p>
        <p>These rights may include the right to:</p>
        <ul>
          <li>Request access to personal information we hold about you;</li>
          <li>Request correction of inaccurate information;</li>
          <li>Request deletion of your personal information;</li>
          <li>Request a copy or export of certain information;</li>
          <li>Object to or restrict certain processing;</li>
          <li>Withdraw consent where processing is based on consent; and</li>
          <li>Lodge a complaint with an applicable data protection authority.</li>
        </ul>
        <p>Certain rights may be subject to exceptions or limitations under applicable law.</p>
        <p>
          To exercise a privacy right, contact us at <a href="mailto:info@dezignee.com">info@dezignee.com</a>.
        </p>
        <p>We may need to verify your identity before fulfilling certain requests.</p>
      </>
    ),
  },
  {
    id: "embedded-deployments",
    heading: "Embedded Deployments and End Users",
    body: (
      <>
        <p>Dezignee may be embedded into software products, websites, or applications operated by other businesses.</p>
        <p>
          If you interact with Dezignee through a product operated by one of our customers, that business may
          determine why and how your personal information is processed.
        </p>
        <p>
          In these circumstances, the Dezignee customer may act as the data controller or business responsible for
          your information, while Dezignee may process information on its behalf as a service provider or data
          processor.
        </p>
        <p>
          If you are an end user of a business that has embedded Dezignee into its product and wish to exercise
          privacy rights relating to information controlled by that business, you should generally direct your
          request to that business.
        </p>
        <p>Where appropriate, Dezignee will assist its customers in responding to valid privacy requests as required by applicable law and contractual obligations.</p>
      </>
    ),
  },
  {
    id: "third-party-links",
    heading: "Third-Party Links and Services",
    body: (
      <>
        <p>The Dezignee website or Service may contain links to, or integrations with, third-party websites, applications, or services.</p>
        <p>These third parties operate independently from Dezignee and may maintain their own privacy policies and practices.</p>
        <p>
          Dezignee is not responsible for the privacy practices, security, or content of third-party services. We
          encourage you to review the privacy policies of third-party services before providing information to them.
        </p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    heading: "Children’s Privacy",
    body: (
      <>
        <p>Dezignee is intended for businesses and professional users and is not directed to children.</p>
        <p>We do not knowingly collect personal information from children in violation of applicable law.</p>
        <p>
          If you believe that a child has provided personal information to Dezignee inappropriately, please contact
          us at <a href="mailto:info@dezignee.com">info@dezignee.com</a> so that we can review the matter and take
          appropriate action.
        </p>
      </>
    ),
  },
  {
    id: "marketing-communications",
    heading: "Marketing Communications",
    body: (
      <>
        <p>
          If you receive marketing communications from Dezignee, you may opt out of future marketing emails by using
          the unsubscribe mechanism provided in those communications or by contacting us.
        </p>
        <p>
          Even if you opt out of marketing communications, we may continue to send transactional or service-related
          communications, including account, billing, security, and important product notices.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    heading: "Changes to This Privacy Policy",
    body: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes to our products, business
          practices, technologies, legal requirements, or other factors.
        </p>
        <p>When we update this Privacy Policy, we will revise the &ldquo;Last updated&rdquo; date at the top of this page.</p>
        <p>
          If we make material changes, we may provide additional notice through the Service, our website, email, or
          another appropriate method where required by applicable law.
        </p>
        <p>We encourage you to review this Privacy Policy periodically.</p>
      </>
    ),
  },
  {
    id: "contact",
    heading: "Contact Us",
    body: (
      <p>
        If you have questions, concerns, or requests regarding this Privacy Policy or Dezignee&rsquo;s privacy
        practices, contact us at:
        <br />
        <br />
        Dezignee
        <br />
        Email: <a href="mailto:info@dezignee.com">info@dezignee.com</a>
      </p>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      updated="August 29, 2026"
      intro={
        <>
          How we collect, use, disclose, store, and protect information across the Dezignee website, product, and AI
          features.
        </>
      }
      sections={sections}
    />
  )
}
