import type { Metadata, Viewport } from 'next'
import { Hanken_Grotesk, Source_Serif_4, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { siteConfig } from '@/lib/site'

/* Dezignee Design System type pairing:
   - Hanken Grotesk  → all UI (substitute for Styrene)
   - Source Serif 4  → display / headings (substitute for Tiempos)
   - JetBrains Mono  → code & merge tags                                    */
const fontSans = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})
const fontSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
})
const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

/* ▶︎ MOBILE FIX: the viewport export is what makes phones render at device
   width instead of a zoomed-out ~980px desktop canvas. In Next 14 App Router
   this MUST be a separate `viewport` export (not inside `metadata`), and
   themeColor lives here too (Next warns if it's left in metadata). */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // allow pinch-zoom for accessibility — do NOT set maximumScale/userScalable
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF9F5' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1814' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: '/manifest.webmanifest',
  keywords: [
    'MCP email editor',
    'AI email builder',
    'email editor',
    'email sequences',
    'embeddable email editor',
    'MCP',
    'SDK',
    'HTML email export',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: '/',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/twitter-image'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {/* a11y skip link (styled in globals.css) */}
        <a href="#main-content" className="skip-link">Skip to content</a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
