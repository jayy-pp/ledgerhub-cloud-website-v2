'use client';

import Script from 'next/script';

interface StructuredDataProps {
  data: object;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Additional structured data schemas for different pages
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LedgerHub",
  "url": "https://ledgerhub.cloud",
  "logo": "https://ledgerhub.cloud/images/logo.png",
  "description": "Smart invoicing, accounting & inventory management software for Indian SMEs with 100% GST compliance.",
  "foundingDate": "2020",
  "founders": [
    {
      "@type": "Person",
      "name": "LedgerHub Team"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "102, Supan Apartment, Unchi Gali, Shamla ni Pole, Raipur",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380001",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8460-488076",
    "email": "support@ledgerhub.cloud",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi", "Gujarati"]
  },
  "sameAs": [
    "https://www.facebook.com/ledgerhub",
    "https://twitter.com/ledgerhub",
    "https://www.linkedin.com/company/ledgerhub"
  ]
};

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "LedgerHub",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Accounting Software",
  "operatingSystem": "Web, iOS, Android",
  "url": "https://ledgerhub.cloud",
  "description": "GST-compliant invoicing, accounting & inventory management software for Indian SMEs",
  "softwareVersion": "2.0",
  "datePublished": "2020-01-01",
  "author": {
    "@type": "Organization",
    "name": "LedgerHub"
  },
  "offers": {
    "@type": "Offer",
    "price": "999",
    "priceCurrency": "INR",
    "description": "Business Plan (monthly)",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2500",
    "bestRating": "5",
    "worstRating": "1"
  },
  "featureList": [
    "GST-compliant invoicing",
    "Real-time accounting",
    "Inventory management",
    "Financial reporting",
    "Multi-user access",
    "Cloud synchronization",
    "Mobile app support"
  ]
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
