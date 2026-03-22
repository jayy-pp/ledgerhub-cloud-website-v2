import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import ComparisonTable from "@/components/ComparisonTable";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import BlogSection from "@/components/BlogSection";
import TLDRSection from "@/components/TLDRSection";
import TrialForm from "@/components/TrialForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LedgerHub — Smart Invoicing, Accounting & Inventory for Indian SMEs",
  description:
    "LedgerHub helps 2,500+ Indian businesses simplify GST-compliant invoicing, accounting, and inventory management. Start your free 7-day trial — no credit card required.",
  openGraph: {
    title: "LedgerHub — Smart Invoicing, Accounting & Inventory for Indian SMEs",
    description:
      "Stop drowning in spreadsheets. Get GST-compliant invoices, real-time accounting, and smart inventory — all in one platform built for India.",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* 1. Hero with social proof above fold (Hack #1, #2, #3, #9) */}
        <Hero />

        {/* 2. Trust signals — media logos + client logos (Hack #1) */}
        <TrustBar />

        {/* 3. Key metrics that build credibility (Hack #1 — numbers) */}
        <StatsSection />

        {/* 4. Core services — benefits-first layout (Hack #7) with testimonials (Hack #4) */}
        <ServicesSection />

        {/* 5. How it works — 3-step process */}
        <HowItWorks />

        {/* 6. Comparison table (Hack #6) */}
        <ComparisonTable />

        {/* 7. Testimonials with intent (Hack #4, #5 TLDW) */}
        <TestimonialsSection />

        {/* 8. Pricing with CTA booster (Hack #9) */}
        <PricingSection />

        {/* 9. Blog content marketing section */}
        <BlogSection />

        {/* 10. TL;DR CTA panel (Hack #8) + CTA Booster (Hack #9) */}
        <TLDRSection />

        {/* 11. Trial form */}
        <TrialForm />

        {/* 12. FAQ */}
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
