"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    eyebrow: "7-Day Free Trial",
    monthlyPrice: 0,
    annualPrice: 0,
    period: "Free for 7 days",
    description: "Perfect for trying LedgerHub before you commit.",
    cta: "Start Free Trial",
    popular: false,
    features: [
      "Up to 10 clients",
      "50 invoices per month",
      "Basic GST compliance",
      "5 invoice templates",
      "Email support",
      "Mobile app access",
    ],
    missing: ["Inventory management", "GSTR reports", "Payment reminders"],
  },
  {
    id: "business",
    name: "Business",
    eyebrow: "Most Popular — Best Value",
    monthlyPrice: 1299,
    annualPrice: 999,
    period: "per month · billed annually · excl. GST @18%",
    description: "Everything you need to run your business smoothly.",
    cta: "Start Free Trial",
    popular: true,
    features: [
      "Unlimited clients & invoices",
      "Full GST compliance & GSTR reports",
      "Inventory management",
      "Automatic payment reminders",
      "Bank reconciliation",
      "20+ invoice templates",
      "Priority phone & email support",
      "CA sharing portal",
      "Mobile app (iOS + Android)",
    ],
    missing: [],
    savings: "Save ₹3,600/year",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    eyebrow: "For Larger Businesses",
    monthlyPrice: 3499,
    annualPrice: 2999,
    period: "per month · billed annually · excl. GST @18%",
    description: "Advanced features for multi-branch, high-volume operations.",
    cta: "Contact Sales",
    popular: false,
    features: [
      "Everything in Business",
      "Multi-branch support",
      "Custom invoice themes & branding",
      "API integrations",
      "Dedicated account manager",
      "Advanced user permissions & roles",
      "E-way bill generation",
      "Payroll & attendance module",
      "White-label option",
    ],
    missing: [],
    savings: "Save ₹6,000/year",
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-py bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(19,84,101,0.08)", color: "#135465" }}
          >
            Transparent Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Affordable for Every Indian SME
          </h2>
          <p className="text-gray-500 text-lg mb-6">
            Start free. Upgrade when you&apos;re ready. All plans include core GST features.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 rounded-full" style={{ background: "#e2e8f0" }}>
            <button
              onClick={() => setAnnual(false)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                background: !annual ? "white" : "transparent",
                color: !annual ? "#135465" : "#64748b",
                boxShadow: !annual ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2"
              style={{
                background: annual ? "white" : "transparent",
                color: annual ? "#135465" : "#64748b",
                boxShadow: annual ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
              }}
            >
              Annual
              <span
                className="text-xs px-1.5 py-0.5 rounded-full font-bold"
                style={{ background: "#f97316", color: "white" }}
              >
                Save 23%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl overflow-hidden ${plan.popular ? "shadow-2xl" : "shadow-md card-hover"}`}
              style={{
                border: plan.popular ? "2px solid #135465" : "1px solid #e2e8f0",
                transform: plan.popular ? "scale(1.03)" : "scale(1)",
                background: plan.popular ? "linear-gradient(135deg, #0f1923, #135465)" : "white",
              }}
            >
              {plan.popular && (
                <div
                  className="text-center py-2.5 text-sm font-bold text-white"
                  style={{ background: "#f97316" }}
                >
                  ⭐ Most Popular — Best Value
                </div>
              )}

              <div className="p-7">
                <div
                  className="text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: plan.popular ? "rgba(255,255,255,0.6)" : "#94a3b8" }}
                >
                  {plan.popular ? plan.eyebrow : plan.name}
                </div>
                <h3
                  className="text-2xl font-extrabold mb-2"
                  style={{ color: plan.popular ? "white" : "#0f172a" }}
                >
                  {plan.popular ? "Business" : plan.name}
                </h3>
                <p
                  className="text-sm mb-5"
                  style={{ color: plan.popular ? "rgba(255,255,255,0.65)" : "#64748b" }}
                >
                  {plan.description}
                </p>

                <div className="mb-2">
                  <span
                    className="text-4xl font-extrabold"
                    style={{ color: plan.popular ? "white" : "#0f172a" }}
                  >
                    {plan.monthlyPrice === 0
                      ? "Free"
                      : `₹${annual ? plan.annualPrice : plan.monthlyPrice}`}
                  </span>
                  {plan.monthlyPrice > 0 && (
                    <span
                      className="text-sm ml-1"
                      style={{ color: plan.popular ? "rgba(255,255,255,0.6)" : "#64748b" }}
                    >
                      /mo
                    </span>
                  )}
                </div>
                <p
                  className="text-xs mb-1"
                  style={{ color: plan.popular ? "rgba(255,255,255,0.5)" : "#94a3b8" }}
                >
                  {plan.period}
                </p>
                {plan.savings && annual && (
                  <p className="text-xs font-bold text-green-400 mb-5">{plan.savings}</p>
                )}

                <button
                  onClick={() => scrollTo(plan.id === "enterprise" ? "contact" : "trial")}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm mb-6 transition-all"
                  style={{
                    background: plan.popular ? "#f97316" : "transparent",
                    color: plan.popular ? "white" : "#135465",
                    border: plan.popular ? "none" : "2px solid #135465",
                  }}
                >
                  {plan.popular && <Zap size={15} />}
                  {plan.cta}
                  <ArrowRight size={15} />
                </button>

                {/* HACK #9: CTA Booster */}
                <p
                  className="text-xs text-center mb-6"
                  style={{ color: plan.popular ? "rgba(255,255,255,0.5)" : "#94a3b8" }}
                >
                  {plan.id === "starter"
                    ? "No credit card required"
                    : plan.id === "enterprise"
                    ? "Custom pricing available"
                    : "7-day free trial included · Cancel anytime"}
                </p>

                <div
                  className="border-t pt-5"
                  style={{ borderColor: plan.popular ? "rgba(255,255,255,0.15)" : "#e2e8f0" }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-3"
                    style={{ color: plan.popular ? "rgba(255,255,255,0.5)" : "#94a3b8" }}
                  >
                    What&apos;s included:
                  </p>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={15}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: plan.popular ? "#4ade80" : "#135465" }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: plan.popular ? "rgba(255,255,255,0.8)" : "#374151" }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Money back guarantee */}
        <div className="mt-12 text-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl"
            style={{ background: "white", border: "1px solid #e2e8f0" }}
          >
            <span className="text-3xl">🛡️</span>
            <div className="text-left">
              <div className="font-bold text-gray-900 text-sm">30-Day Money-Back Guarantee</div>
              <div className="text-xs text-gray-500">Not happy? Get a full refund. No questions asked.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
