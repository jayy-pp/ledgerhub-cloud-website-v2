"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "Is LedgerHub really free for 7 days? What's the catch?",
        a: "No catch. You get full access to all Business plan features for 7 days — no credit card required. At the end of the trial, you choose a plan that fits your needs, or you can stop without paying anything. We believe in earning your trust before asking for money.",
      },
      {
        q: "How long does setup take?",
        a: "Most users are sending their first invoice within 15 minutes of signing up. If you have an existing client list or product catalog, our one-click import gets you up and running even faster. We also offer free onboarding calls for new users.",
      },
      {
        q: "Do I need any accounting or tech experience?",
        a: "None at all. LedgerHub is designed for business owners, not accountants. Everything is in plain language, and our UI is designed so simple that your 60-year-old uncle could use it. We also have video tutorials and 24/7 support in Hindi and English.",
      },
    ],
  },
  {
    category: "GST & Compliance",
    questions: [
      {
        q: "Is LedgerHub fully GST compliant?",
        a: "Yes — 100%. All invoice templates include the correct GST format, HSN codes are auto-suggested, and our tax calculations are always accurate. We update the software within 24 hours of any GST rule change, so you're always compliant without doing anything yourself.",
      },
      {
        q: "Can I generate GSTR-1, GSTR-3B, and other reports?",
        a: "Yes. Business and Enterprise plans include one-click generation of all GSTR reports in the format required for filing. You can also export in Excel or JSON format for your CA to file directly. We're also integrated with the GST portal for direct filing (coming Q2 2025).",
      },
      {
        q: "What if GST rules change?",
        a: "We track every GST notification and update the platform automatically. You don't need to do anything. Our compliance team monitors the GST council announcements and pushes updates typically within 24-48 hours of any change.",
      },
    ],
  },
  {
    category: "Features & Capabilities",
    questions: [
      {
        q: "Can I manage multiple businesses from one account?",
        a: "Yes. Enterprise plan users can manage up to 5 businesses (branches, companies, or GST numbers) from a single login. You can switch between them with one click and keep their data completely separate.",
      },
      {
        q: "Does it work on mobile?",
        a: "Yes, we have native apps for both iOS and Android. You can create invoices, check inventory levels, and view your financial dashboard on the go. The apps are fully offline-capable, so you can work even without internet.",
      },
      {
        q: "Can I customize invoice templates?",
        a: "Absolutely. All plans include 5+ templates, and Business+ users can fully customize with your logo, colors, font, and layout. Enterprise users can create unlimited custom templates and even white-label the entire experience.",
      },
    ],
  },
  {
    category: "Pricing & Support",
    questions: [
      {
        q: "Can I cancel anytime?",
        a: "Yes — no lock-in contracts, no cancellation fees, no drama. If you cancel before your renewal date, you can use the software until the end of the period you've paid for. Annual plan users who cancel get a prorated refund for unused months.",
      },
      {
        q: "What support do you offer?",
        a: "Starter: Email support (48hr response). Business: Priority email + phone support (in Hindi & English, business hours). Enterprise: Dedicated account manager + 4-hour response SLA. All users get access to our knowledge base, video tutorials, and community forum.",
      },
      {
        q: "Is my data secure?",
        a: "Your data is protected by 256-bit SSL encryption, stored on ISO 27001-certified servers in India, and backed up automatically every 4 hours. We comply with India's PDPA and never sell your data. You can export or delete all your data at any time.",
      },
    ],
  },
];

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section id="faq" className="section-py bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(19,84,101,0.08)", color: "#135465" }}
          >
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            You&apos;ve Got Questions. We&apos;ve Got Honest Answers.
          </h2>
          <p className="text-gray-500 text-lg">
            If you don&apos;t find what you need, just chat with us — we&apos;re real people.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((category) => (
            <div key={category.category} className="mb-10">
              <h3
                className="text-sm font-bold uppercase tracking-wider mb-4"
                style={{ color: "#135465" }}
              >
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.questions.map((item) => {
                  const isOpen = openItem === item.q;
                  return (
                    <div
                      key={item.q}
                      className="rounded-xl overflow-hidden transition-all"
                      style={{
                        border: isOpen ? "1px solid #135465" : "1px solid #e2e8f0",
                        background: isOpen ? "rgba(19,84,101,0.03)" : "white",
                      }}
                    >
                      <button
                        className="w-full flex items-center justify-between px-6 py-4 text-left"
                        onClick={() => setOpenItem(isOpen ? null : item.q)}
                      >
                        <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                        <ChevronDown
                          size={18}
                          className="flex-shrink-0 transition-transform"
                          style={{
                            color: "#135465",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5">
                          <p className="text-gray-600 leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div
          className="max-w-2xl mx-auto mt-10 rounded-2xl p-7 text-center"
          style={{ background: "rgba(19,84,101,0.06)", border: "1px solid rgba(19,84,101,0.15)" }}
        >
          <MessageCircle size={32} className="mx-auto mb-3" style={{ color: "#135465" }} />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Still Have Questions?</h3>
          <p className="text-gray-600 mb-4">
            Our team is available Mon–Sat, 9am–7pm IST. Response in under 2 hours for paid plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:support@ledgerhub.cloud"
              className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              style={{ background: "#135465", color: "white" }}
            >
              Email Us
            </a>
            <a
              href="tel:+918460488076"
              className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              style={{ background: "transparent", color: "#135465", border: "2px solid #135465" }}
            >
              Call +91 8460 488076
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
