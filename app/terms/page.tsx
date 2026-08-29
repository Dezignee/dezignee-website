import type { Metadata } from "next"

import { LegalDoc, type LegalSection } from "@/components/legal/legal-doc"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your access to and use of Dezignee.",
  alternates: { canonical: "/terms" },
}

const sections: LegalSection[] = [
  {
    id: "agreement",
    heading: "Agreement",
    body: (
      <>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of Dezignee&rsquo;s websites,
          applications, email builder, dashboard, software development kits (&ldquo;SDKs&rdquo;), APIs, MCP servers,
          artificial intelligence features, and related products and services (collectively, the
          &ldquo;Service&rdquo;).
        </p>
        <p>
          By creating an account, purchasing a subscription, accessing the Service, integrating Dezignee into your
          product, or otherwise using the Service, you agree to these Terms. If you are using the Service on behalf
          of a company or other organization, you represent that you have authority to bind that organization to
          these Terms. In that case, &ldquo;you&rdquo; and &ldquo;your&rdquo; refer to that organization.
        </p>
        <p>If you do not agree to these Terms, you may not use the Service.</p>
      </>
    ),
  },
  {
    id: "the-service",
    heading: "The Service",
    body: (
      <>
        <p>
          Dezignee provides software and tools for creating, editing, managing, generating, and integrating email
          and related content, including an embeddable drag-and-drop email builder, AI-powered functionality,
          developer tools, SDKs, APIs, MCP servers, dashboards, templates, and related services.
        </p>
        <p>
          Certain features, functionality, usage limits, integrations, or services may vary depending on your
          subscription plan.
        </p>
        <p>
          We may improve, modify, add, remove, or discontinue features of the Service from time to time. Where a
          change materially affects a paid customer&rsquo;s use of the Service, we will use commercially reasonable
          efforts to provide reasonable notice where practicable.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    heading: "Accounts and Workspaces",
    body: (
      <>
        <p>You may be required to create an account to access some or all of the Service.</p>
        <p>You agree to provide accurate and current account information and to keep that information updated.</p>
        <p>You are responsible for:</p>
        <ul>
          <li>maintaining the confidentiality and security of your login credentials, API keys, access tokens, secrets, and other authentication credentials;</li>
          <li>all activity conducted through your account and workspaces;</li>
          <li>managing users whom you authorize to access your account or workspace; and</li>
          <li>promptly notifying us if you become aware of unauthorized access to or use of your account.</li>
        </ul>
        <p>You may not share credentials in a manner that circumvents account, user, subscription, or usage restrictions.</p>
        <p>
          You must be legally capable of entering into a binding agreement in your jurisdiction. If you use the
          Service on behalf of an organization, you represent that you are authorized to do so.
        </p>
      </>
    ),
  },
  {
    id: "license",
    heading: "License and Right to Use the Service",
    body: (
      <>
        <p>
          Subject to your compliance with these Terms and payment of all applicable fees, Dezignee grants you a
          limited, non-exclusive, non-transferable, revocable right to access and use the Service during your
          applicable subscription or authorized usage period.
        </p>
        <p>
          Where your subscription or agreement permits embedded use, Dezignee also grants you the right to
          integrate or embed applicable portions of the Service, including the email builder, SDK, APIs, or other
          developer functionality, within your own software, website, platform, or application (&ldquo;Customer
          Application&rdquo;).
        </p>
        <p>You may make embedded functionality available to your authorized customers and end users as part of your Customer Application, provided that:</p>
        <ul>
          <li>the Service is not offered or resold as a standalone competing product unless expressly authorized by Dezignee;</li>
          <li>your customers and end users are subject to terms that appropriately restrict misuse of the Service;</li>
          <li>you remain responsible for activity occurring through your implementation of the Service; and</li>
          <li>you comply with the technical, usage, subscription, and other limitations applicable to your account.</li>
        </ul>
        <p>No rights are granted except those expressly stated in these Terms.</p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    heading: "Restrictions and Acceptable Use",
    body: (
      <>
        <p>You may not, and may not permit others to:</p>
        <ul>
          <li>reverse engineer, decompile, disassemble, or attempt to discover the source code, underlying algorithms, models, or non-public technology of the Service except where such restriction is prohibited by applicable law;</li>
          <li>copy, modify, distribute, sell, lease, sublicense, or create derivative products from the Service except as expressly permitted by these Terms;</li>
          <li>circumvent or attempt to circumvent usage limits, authentication systems, security controls, credit systems, rate limits, or access restrictions;</li>
          <li>interfere with, overload, disrupt, damage, or compromise the Service or infrastructure used to provide it;</li>
          <li>introduce malware, malicious code, viruses, or other harmful technology;</li>
          <li>access the Service for the purpose of building or training a substantially competing product through unauthorized extraction or copying of Dezignee technology;</li>
          <li>use automated methods to scrape or extract information from the Service except through interfaces expressly provided or authorized by Dezignee;</li>
          <li>use the Service for unlawful, fraudulent, deceptive, abusive, defamatory, harassing, or harmful activities;</li>
          <li>upload, create, distribute, or use content that infringes another person&rsquo;s intellectual property, privacy, publicity, or other rights;</li>
          <li>send or facilitate unlawful or unsolicited bulk communications or spam;</li>
          <li>impersonate another person or organization or misrepresent the origin of communications; or</li>
          <li>use the Service in violation of applicable laws or regulations.</li>
        </ul>
        <p>
          You are responsible for ensuring that your use of the Service and any communications created or
          distributed using it comply with applicable laws, including applicable privacy, data protection,
          marketing, electronic communications, and anti-spam laws.
        </p>
        <p>Depending on your activities and jurisdiction, these may include CAN-SPAM, GDPR, UK GDPR, and other applicable regulations.</p>
        <p>
          Dezignee may investigate suspected violations and suspend or restrict access where reasonably necessary to
          protect the Service, Dezignee, our customers, or third parties.
        </p>
      </>
    ),
  },
  {
    id: "embedded-end-users",
    heading: "End Users of Embedded Services",
    body: (
      <>
        <p>
          If you integrate Dezignee into a Customer Application and allow your customers or end users to interact
          with the Service, you are responsible for your implementation and your relationship with those end users.
        </p>
        <p>You must ensure that your end users are subject to terms that prohibit activities that would violate these Terms if performed directly by you.</p>
        <p>You are responsible for obtaining any permissions, notices, and consents required for information submitted to Dezignee through your Customer Application.</p>
        <p>
          Dezignee is not responsible for your Customer Application, your relationship with your end users, or
          claims arising from products or services you provide independently of Dezignee.
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
          The Service may include features that use artificial intelligence or machine learning (&ldquo;AI
          Features&rdquo;) to generate, modify, analyze, import, optimize, or otherwise process content.
        </p>
        <p>
          Information, prompts, instructions, files, designs, text, images, or other materials submitted to AI
          Features are referred to as &ldquo;AI Inputs.&rdquo; Content produced through AI Features is referred to
          as &ldquo;AI-Generated Content.&rdquo;
        </p>

        <h3 className="mt-4 font-semibold text-foreground/90">Your Responsibility for AI Content</h3>
        <p>AI-Generated Content may contain errors, inaccuracies, omissions, biases, or inappropriate or unexpected results.</p>
        <p>You are responsible for reviewing AI-Generated Content before using, publishing, sending, distributing, or relying upon it.</p>
        <p>Dezignee does not guarantee that AI-Generated Content will:</p>
        <ul>
          <li>be accurate or complete;</li>
          <li>be unique or original;</li>
          <li>be suitable for a particular purpose;</li>
          <li>be free from similarities to third-party content; or</li>
          <li>qualify for copyright or other intellectual property protection.</li>
        </ul>
        <p>You are responsible for determining whether your use of AI-Generated Content complies with applicable laws and third-party rights.</p>

        <h3 className="mt-4 font-semibold text-foreground/90">Prohibited AI Uses</h3>
        <p>You may not use AI Features to generate or facilitate content or activities that:</p>
        <ul>
          <li>violate applicable law;</li>
          <li>facilitate fraud or intentional deception;</li>
          <li>unlawfully infringe intellectual property or privacy rights;</li>
          <li>contain or distribute malicious software;</li>
          <li>facilitate unlawful discrimination, abuse, exploitation, or harassment;</li>
          <li>exploit or sexualize minors;</li>
          <li>facilitate serious physical harm or unlawful dangerous activities; or</li>
          <li>circumvent safeguards, rate limits, or technical restrictions imposed by Dezignee or its service providers.</li>
        </ul>

        <h3 className="mt-4 font-semibold text-foreground/90">AI Service Providers</h3>
        <p>
          Dezignee may use third-party technology and AI service providers to deliver AI Features. Your AI Inputs
          may therefore be processed by service providers as necessary to provide the requested functionality,
          subject to our Privacy Policy and applicable contractual and data-protection obligations.
        </p>
        <p>
          AI Features may depend on services outside Dezignee&rsquo;s direct control. We therefore do not guarantee
          continuous availability, performance, or functionality of any particular AI Feature or underlying model.
        </p>
        <p>We may add, replace, update, or discontinue AI models or providers as the Service evolves.</p>
      </>
    ),
  },
  {
    id: "ai-credits",
    heading: "AI Credits and Usage",
    body: (
      <>
        <p>Certain AI Features may consume credits or other usage-based units (&ldquo;AI Credits&rdquo;).</p>
        <p>The number of AI Credits consumed may depend on the feature, model, request, complexity, or amount of processing involved.</p>
        <p>Your subscription may include a specified amount of AI Credits. Additional credits may be available through add-ons, credit packages, upgrades, or usage-based charges, depending on your plan.</p>
        <p>Applicable credit allocations, usage rates, limits, expiration rules, and pricing will be displayed in the Service, on our pricing page, or otherwise communicated to you.</p>
        <p>Unless otherwise expressly stated, AI Credits:</p>
        <ul>
          <li>have no cash value;</li>
          <li>may not be transferred or resold;</li>
          <li>are not redeemable for cash; and</li>
          <li>are non-refundable once purchased or consumed, except where required by law.</li>
        </ul>
        <p>We may establish reasonable rate limits, input limits, concurrency restrictions, or other technical limitations to protect the Service and maintain reliable operation.</p>
      </>
    ),
  },
  {
    id: "customer-content",
    heading: "Customer Content",
    body: (
      <>
        <p>
          You retain ownership of emails, templates, designs, images, files, prompts, data, merge-tag information,
          and other materials that you or your authorized users upload, create, submit, or store through the
          Service (&ldquo;Customer Content&rdquo;).
        </p>
        <p>You grant Dezignee and its service providers a limited, worldwide right to host, reproduce, transmit, display, process, modify, and otherwise use Customer Content only as reasonably necessary to:</p>
        <ul>
          <li>provide and operate the Service;</li>
          <li>perform functionality requested by you;</li>
          <li>maintain and secure the Service;</li>
          <li>troubleshoot technical issues;</li>
          <li>comply with applicable law; and</li>
          <li>enforce these Terms.</li>
        </ul>
        <p>This license does not transfer ownership of your Customer Content to Dezignee.</p>
        <p>
          You represent and warrant that you have all rights, permissions, and lawful bases necessary to provide
          Customer Content to Dezignee and allow it to be processed as contemplated by these Terms.
        </p>
      </>
    ),
  },
  {
    id: "ai-generated-ownership",
    heading: "AI-Generated Content Ownership",
    body: (
      <>
        <p>
          As between you and Dezignee, and to the extent permitted by applicable law, Dezignee does not claim
          ownership of AI-Generated Content created for you through your authorized use of the Service.
        </p>
        <p>The legal status and copyright eligibility of AI-generated material may vary by jurisdiction.</p>
        <p>
          Because AI systems may generate similar content for different users, Dezignee cannot guarantee that
          AI-Generated Content is unique or that another user will not receive similar output.
        </p>
        <p>
          You are responsible for determining whether AI-Generated Content is appropriate for your intended use and
          whether any additional rights, licenses, disclosures, or permissions are required.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    heading: "Dezignee Intellectual Property",
    body: (
      <>
        <p>Dezignee and its licensors retain all rights, title, and interest in and to the Service and related technology, including:</p>
        <ul>
          <li>software and source code;</li>
          <li>SDKs and APIs;</li>
          <li>MCP servers and associated technology;</li>
          <li>interfaces and components;</li>
          <li>documentation;</li>
          <li>designs and systems;</li>
          <li>algorithms and processes;</li>
          <li>trademarks, logos, and branding;</li>
          <li>improvements and modifications; and</li>
          <li>all related intellectual property rights.</li>
        </ul>
        <p>Except for the limited rights expressly granted under these Terms, no rights to Dezignee&rsquo;s intellectual property are transferred to you.</p>
        <p>
          Feedback, suggestions, or recommendations you voluntarily provide regarding the Service may be used by
          Dezignee without restriction or compensation to improve its products and services.
        </p>
      </>
    ),
  },
  {
    id: "aggregated-data",
    heading: "Aggregated and De-Identified Data",
    body: (
      <>
        <p>
          Dezignee may generate aggregated or de-identified information concerning use and performance of the
          Service, provided that such information does not reasonably identify you, your organization, or
          individual end users.
        </p>
        <p>We may use such information to operate, analyze, secure, improve, and develop the Service and to produce aggregated statistics and insights.</p>
        <p>Our handling of personal information is governed by our Privacy Policy.</p>
      </>
    ),
  },
  {
    id: "billing",
    heading: "Subscriptions, Fees, and Billing",
    body: (
      <>
        <p>Certain features of the Service require a paid subscription.</p>
        <p>Paid subscriptions may be offered on monthly, annual, usage-based, or other billing arrangements communicated when you subscribe.</p>
        <p>Unless otherwise stated, subscription fees are billed in advance.</p>
        <p>
          By providing a payment method, you authorize Dezignee and its payment processor to charge applicable
          subscription fees, usage charges, add-ons, taxes, and other amounts associated with your account.
        </p>
        <p>Subscriptions automatically renew for successive billing periods unless you cancel before the applicable renewal date or unless otherwise specified in your order or agreement.</p>
        <p>Cancellation prevents future renewal but does not ordinarily provide a refund for the remaining portion of a billing period.</p>
        <p>Fees are non-refundable except where:</p>
        <ul>
          <li>expressly stated otherwise by Dezignee;</li>
          <li>required by applicable law; or</li>
          <li>agreed in writing between you and Dezignee.</li>
        </ul>
        <p>You remain responsible for applicable taxes, duties, levies, or similar governmental charges associated with your purchase, other than taxes imposed on Dezignee&rsquo;s income.</p>
      </>
    ),
  },
  {
    id: "failed-payments",
    heading: "Failed Payments",
    body: (
      <>
        <p>If a payment fails or becomes overdue, we may notify you and attempt to process the payment again.</p>
        <p>If amounts remain unpaid, Dezignee may restrict or suspend access to paid functionality until the outstanding balance is resolved.</p>
        <p>You remain responsible for amounts properly incurred before suspension or termination.</p>
      </>
    ),
  },
  {
    id: "pricing-changes",
    heading: "Pricing Changes",
    body: (
      <>
        <p>We may change subscription pricing, usage rates, AI Credit pricing, plan limits, or other fees.</p>
        <p>
          For existing paid subscriptions, material pricing changes will generally take effect on a future billing
          or renewal period after reasonable notice, unless a different arrangement has been agreed with you.
        </p>
        <p>Continued use of the applicable paid Service after a pricing change takes effect constitutes acceptance of the new pricing.</p>
      </>
    ),
  },
  {
    id: "third-party-services",
    heading: "Third-Party Services",
    body: (
      <>
        <p>
          The Service may integrate with or depend upon third-party products, platforms, hosting providers,
          authentication providers, payment processors, AI providers, APIs, or other services.
        </p>
        <p>Third-party services are governed by their own terms and policies.</p>
        <p>
          Dezignee does not control and is not responsible for third-party services, including their availability,
          security, functionality, policies, or changes to their services.
        </p>
        <p>A failure or change in a third-party service may affect some functionality within Dezignee.</p>
      </>
    ),
  },
  {
    id: "security",
    heading: "Security",
    body: (
      <>
        <p>Dezignee will use commercially reasonable administrative, technical, and organizational measures designed to protect the Service and information processed through it.</p>
        <p>However, no internet-based system can be guaranteed to be completely secure.</p>
        <p>
          You are responsible for implementing reasonable security controls for your own systems and for protecting
          credentials, API keys, integrations, devices, and Customer Applications used to access Dezignee.
        </p>
        <p>You must promptly notify us if you become aware of a security incident involving your Dezignee account or credentials.</p>
      </>
    ),
  },
  {
    id: "privacy",
    heading: "Privacy and Data Protection",
    body: (
      <>
        <p>Our collection, use, storage, and sharing of personal information is described in the Dezignee Privacy Policy.</p>
        <p>
          Where applicable, you are responsible for ensuring that you have an appropriate lawful basis, consent, or
          other authorization to provide personal information to Dezignee for processing through the Service.
        </p>
        <p>If you use Dezignee to process personal information on behalf of your customers or end users, you remain responsible for your own compliance with applicable data-protection laws.</p>
        <p>Where required and separately agreed, additional data-processing terms may apply.</p>
      </>
    ),
  },
  {
    id: "confidentiality",
    heading: "Confidentiality",
    body: (
      <>
        <p>
          In connection with the Service, either party may receive non-public information belonging to the other
          party that reasonably should be understood to be confidential (&ldquo;Confidential Information&rdquo;).
        </p>
        <p>Each party agrees to:</p>
        <ul>
          <li>use the other party&rsquo;s Confidential Information only as necessary to perform or exercise rights under these Terms;</li>
          <li>take reasonable measures to protect it; and</li>
          <li>not disclose it to third parties except to employees, contractors, professional advisers, or service providers who need access and are subject to appropriate confidentiality obligations.</li>
        </ul>
        <p>Confidential Information does not include information that the receiving party can demonstrate:</p>
        <ul>
          <li>was lawfully known without confidentiality obligations before disclosure;</li>
          <li>becomes publicly available through no breach of these Terms;</li>
          <li>is lawfully received from another source without confidentiality restrictions; or</li>
          <li>was independently developed without use of the other party&rsquo;s Confidential Information.</li>
        </ul>
        <p>A party may disclose Confidential Information where required by law, regulation, or valid legal process.</p>
      </>
    ),
  },
  {
    id: "suspension",
    heading: "Suspension",
    body: (
      <>
        <p>We may suspend or restrict access to all or part of the Service where reasonably necessary because:</p>
        <ul>
          <li>you materially violate these Terms;</li>
          <li>required payments remain overdue;</li>
          <li>your use presents a security risk;</li>
          <li>your use could adversely affect the Service or other customers;</li>
          <li>your use may expose Dezignee or others to legal liability;</li>
          <li>we reasonably suspect fraud or unlawful activity; or</li>
          <li>suspension is required by law or a competent authority.</li>
        </ul>
        <p>Where circumstances permit, we will use reasonable efforts to notify you of the suspension and provide an opportunity to resolve the issue.</p>
      </>
    ),
  },
  {
    id: "termination",
    heading: "Term and Termination",
    body: (
      <>
        <p>These Terms remain in effect while you access or use the Service.</p>
        <p>You may stop using the Service at any time. Paid subscriptions may be cancelled according to the cancellation process available through your account or otherwise provided by Dezignee.</p>
        <p>Dezignee may terminate or suspend your access if:</p>
        <ul>
          <li>you materially breach these Terms;</li>
          <li>you fail to pay amounts when due and do not resolve the failure after notice;</li>
          <li>your use creates a material security, operational, or legal risk;</li>
          <li>we are required to do so by law; or</li>
          <li>we discontinue the applicable Service.</li>
        </ul>
        <p>Upon termination, your right to access and use the Service ends.</p>
        <p>Termination does not relieve either party of obligations that accrued before termination.</p>
        <p>
          Provisions that by their nature should survive termination, including provisions concerning intellectual
          property, confidentiality, payment obligations, disclaimers, indemnification, limitations of liability,
          and dispute provisions, will continue to apply.
        </p>
      </>
    ),
  },
  {
    id: "data-after-termination",
    heading: "Data Following Termination",
    body: (
      <>
        <p>Following termination or expiration of your account, access to Customer Content may cease.</p>
        <p>You are responsible for exporting Customer Content you wish to retain before terminating your account where export functionality is available.</p>
        <p>
          Dezignee may delete Customer Content after termination in accordance with our data-retention practices,
          except where retention is required by law, necessary for legitimate security or compliance purposes, or
          contained in backup systems pending ordinary deletion cycles.
        </p>
      </>
    ),
  },
  {
    id: "representations",
    heading: "Representations and Warranties",
    body: (
      <>
        <p>You represent and warrant that:</p>
        <ul>
          <li>you have authority to enter into these Terms;</li>
          <li>your use of the Service will comply with applicable law;</li>
          <li>you have the rights and permissions necessary for Customer Content you provide;</li>
          <li>your Customer Application and use of Dezignee will not knowingly infringe third-party rights; and</li>
          <li>you will not use the Service in violation of these Terms.</li>
        </ul>
      </>
    ),
  },
  {
    id: "disclaimers",
    heading: "Disclaimer of Warranties",
    body: (
      <>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo;</p>
        <p>
          DEZIGNEE DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING IMPLIED
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
        </p>
        <p>DEZIGNEE DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, COMPLETELY SECURE, OR THAT ALL DEFECTS WILL BE CORRECTED.</p>
        <p>
          DEZIGNEE DOES NOT GUARANTEE THAT CONTENT, RESULTS, RECOMMENDATIONS, OR AI-GENERATED CONTENT PRODUCED
          THROUGH THE SERVICE WILL BE ACCURATE, COMPLETE, UNIQUE, RELIABLE, OR SUITABLE FOR YOUR PARTICULAR PURPOSE.
        </p>
        <p>BETA, EXPERIMENTAL, PREVIEW, OR EARLY-ACCESS FEATURES MAY BE MODIFIED OR DISCONTINUED AT ANY TIME AND ARE PROVIDED WITHOUT ADDITIONAL WARRANTY.</p>
      </>
    ),
  },
  {
    id: "indemnification",
    heading: "Indemnification",
    body: (
      <>
        <p>
          To the extent permitted by applicable law, you agree to indemnify, defend, and hold harmless Dezignee, its
          affiliates, officers, directors, employees, contractors, and service providers from third-party claims,
          damages, losses, liabilities, and reasonable expenses arising from or relating to:
        </p>
        <ul>
          <li>your Customer Content;</li>
          <li>your Customer Application;</li>
          <li>your or your end users&rsquo; unlawful or unauthorized use of the Service;</li>
          <li>your violation of these Terms;</li>
          <li>your violation of applicable law;</li>
          <li>your infringement or violation of a third party&rsquo;s rights; or</li>
          <li>your or your end users&rsquo; use, publication, or distribution of AI-Generated Content.</li>
        </ul>
        <p>Dezignee will provide reasonable notice of a covered claim and reasonable cooperation in its defense.</p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    heading: "Limitation of Liability",
    body: (
      <>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, DEZIGNEE AND ITS AFFILIATES, LICENSORS, SERVICE
          PROVIDERS, AND SUPPLIERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, BUSINESS, GOODWILL, DATA, OR USE,
          ARISING FROM OR RELATED TO THE SERVICE OR THESE TERMS.
        </p>
        <p>THIS INCLUDES DAMAGES ARISING FROM:</p>
        <ul>
          <li>interruption or unavailability of the Service;</li>
          <li>loss or corruption of data;</li>
          <li>third-party services;</li>
          <li>AI-Generated Content;</li>
          <li>reliance on output produced through AI Features; or</li>
          <li>modification, suspension, or discontinuation of a feature.</li>
        </ul>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, DEZIGNEE&rsquo;S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR
          RELATING TO THE SERVICE OR THESE TERMS WILL NOT EXCEED THE AMOUNTS YOU PAID TO DEZIGNEE FOR THE SERVICE
          DURING THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
        </p>
        <p>If applicable law does not permit a particular limitation or exclusion, that limitation will apply only to the maximum extent permitted by law.</p>
      </>
    ),
  },
  {
    id: "service-changes",
    heading: "Service Changes and Availability",
    body: (
      <>
        <p>Dezignee continually develops and improves the Service.</p>
        <p>We may add, modify, replace, or discontinue functionality from time to time.</p>
        <p>
          We do not guarantee the continued availability of any particular feature, integration, AI model,
          third-party service, API version, SDK functionality, or experimental capability unless expressly agreed
          otherwise in writing.
        </p>
        <p>We may perform scheduled or emergency maintenance that temporarily affects Service availability.</p>
      </>
    ),
  },
  {
    id: "force-majeure",
    heading: "Force Majeure",
    body: (
      <p>
        Dezignee will not be liable for delay or failure to perform caused by events beyond its reasonable control,
        including natural disasters, war, terrorism, civil unrest, labor disputes, governmental actions, internet or
        telecommunications failures, power outages, cloud infrastructure failures, cyberattacks, failures of
        third-party providers, or other events that could not reasonably have been prevented.
      </p>
    ),
  },
  {
    id: "assignment",
    heading: "Assignment",
    body: (
      <>
        <p>
          You may not assign or transfer these Terms or your rights under them without Dezignee&rsquo;s prior
          written consent, except as part of a merger, acquisition, corporate reorganization, or sale of
          substantially all of your relevant assets, provided the successor agrees to these Terms.
        </p>
        <p>Dezignee may assign or transfer these Terms in connection with a merger, acquisition, restructuring, sale of assets, financing, or other corporate transaction.</p>
      </>
    ),
  },
  {
    id: "changes",
    heading: "Changes to These Terms",
    body: (
      <>
        <p>
          We may update these Terms from time to time to reflect changes to the Service, our business practices,
          legal requirements, or other operational considerations.
        </p>
        <p>When changes are material, we will provide reasonable notice through the Service, by email, or by another appropriate method.</p>
        <p>The updated Terms will identify their effective or last-updated date.</p>
        <p>
          Your continued use of the Service after updated Terms become effective constitutes acceptance of those
          Terms to the extent permitted by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "general",
    heading: "General Terms",
    body: (
      <>
        <p>
          These Terms, together with any applicable order form, subscription agreement, Privacy Policy,
          data-processing terms, and other terms expressly incorporated by reference, constitute the entire
          agreement between you and Dezignee concerning the Service unless you have entered into a separate written
          agreement with Dezignee governing the same subject matter.
        </p>
        <p>If a provision of these Terms is held invalid or unenforceable, the remaining provisions will remain in effect.</p>
        <p>A failure by either party to enforce a provision of these Terms is not a waiver of its right to do so later.</p>
        <p>The parties are independent contractors. These Terms do not create a partnership, joint venture, franchise, agency, fiduciary, or employment relationship.</p>
        <p>Section headings are provided for convenience and do not affect interpretation.</p>
      </>
    ),
  },
  {
    id: "governing-law",
    heading: "Governing Law and Disputes",
    body: (
      <>
        <p>These Terms and any dispute arising from them will be governed by the laws applicable to Dezignee&rsquo;s contracting entity, without regard to conflict-of-law principles.</p>
        <p>
          The courts or dispute-resolution forum having jurisdiction over Dezignee&rsquo;s contracting entity will
          have jurisdiction over disputes arising from these Terms, unless applicable law requires otherwise or a
          separate written agreement between you and Dezignee provides otherwise.
        </p>
        <p>The specific governing jurisdiction may also be identified in an applicable order form or enterprise agreement.</p>
      </>
    ),
  },
  {
    id: "contact",
    heading: "Contact",
    body: (
      <p>
        Questions, legal notices, or concerns regarding these Terms may be sent to:
        <br />
        <br />
        Dezignee
        <br />
        216-B, Phase 5, DHA
        <br />
        Lahore, Pakistan
        <br />
        Email: <a href="mailto:info@dezignee.com">info@dezignee.com</a>
      </p>
    ),
  },
]

export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms of Service"
      updated="August 2026"
      intro={<>The ground rules for using Dezignee — what you can expect from us, and what we expect from you.</>}
      sections={sections}
    />
  )
}
