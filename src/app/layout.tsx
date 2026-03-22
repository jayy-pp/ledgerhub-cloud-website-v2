import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://ledgerhub.cloud";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LedgerHub — Smart Invoicing, Accounting & Inventory for Indian SMEs",
    template: "%s | LedgerHub",
  },
  description:
    "LedgerHub helps Indian SMEs simplify invoicing, accounting, and inventory management with 100% GST compliance. Trusted by 2,500+ businesses. Start your 7-day free trial.",
  keywords: [
    "GST billing software India",
    "invoicing software for small business",
    "accounting software India",
    "inventory management India",
    "GST compliant invoicing",
    "SME accounting software",
    "online billing software India",
    "ledger software",
    "LedgerHub",
    "cloud accounting India",
  ],
  authors: [{ name: "LedgerHub", url: siteUrl }],
  creator: "LedgerHub",
  publisher: "LedgerHub",
  category: "Business Software",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "LedgerHub",
    title: "LedgerHub — Smart Invoicing, Accounting & Inventory for Indian SMEs",
    description:
      "Simplify your business finances with LedgerHub. GST-compliant invoicing, smart accounting, and real-time inventory — built for India.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "LedgerHub" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LedgerHub — Smart Invoicing & Accounting for Indian SMEs",
    description: "GST-compliant invoicing, accounting & inventory. Trusted by 2,500+ Indian SMEs.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: "#135465",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "LedgerHub",
        url: siteUrl,
        logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-8460-488076",
          email: "support@ledgerhub.cloud",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Gujarati"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "SG Highway",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          postalCode: "382470",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.facebook.com/ledgerhub",
          "https://twitter.com/ledgerhub",
          "https://www.linkedin.com/company/ledgerhub",
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#software`,
        name: "LedgerHub",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        url: siteUrl,
        offers: { "@type": "Offer", price: "999", priceCurrency: "INR", description: "Business Plan (monthly)" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2500", bestRating: "5" },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "LedgerHub",
        potentialAction: { "@type": "SearchAction", target: `${siteUrl}/search?q={search_term_string}`, "query-input": "required name=search_term_string" },
      },
    ],
  };

  return (
    <html lang="en-IN" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "var(--font-inter), -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
