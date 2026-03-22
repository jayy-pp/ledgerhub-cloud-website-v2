"use client";

import { UserPlus, Settings, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Sign Up in 5 Minutes",
    description:
      "Create your account, add your business details and GST number. No paperwork. No waiting. You're live immediately.",
    detail: "Works on web, iOS & Android",
  },
  {
    step: "02",
    icon: Settings,
    title: "Customize for Your Business",
    description:
      "Add your logo, choose invoice templates, set up your product/service catalog. LedgerHub adapts to how you already work.",
    detail: "One-time setup, use forever",
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Watch Your Business Grow",
    description:
      "Send invoices, track payments, manage inventory — all from one dashboard. Spend your time on customers, not paperwork.",
    detail: "Most users save 8+ hours/week",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-py bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(249,115,22,0.1)", color: "#f97316" }}
          >
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Up and Running in One Afternoon
          </h2>
          <p className="text-gray-500 text-lg">
            We&apos;ve designed LedgerHub so even non-accountants can get started without any training.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden lg:block absolute top-20 left-[16.5%] right-[16.5%] h-0.5"
            style={{ background: "linear-gradient(to right, #135465, #1a7a93, #f97316)" }}
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map(({ step, icon: Icon, title, description, detail }) => (
              <div key={step} className="relative text-center">
                {/* Step number + icon */}
                <div className="flex flex-col items-center mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 shadow-lg relative z-10"
                    style={{ background: "linear-gradient(135deg, #135465, #1a7a93)" }}
                  >
                    <Icon size={28} className="text-white" />
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: "#f97316" }}
                    >
                      {step.replace("0", "")}
                    </div>
                  </div>
                </div>

                <div
                  className="bg-slate-50 rounded-2xl p-6 card-hover"
                  style={{ border: "1px solid #e2e8f0" }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: "#f97316" }}
                  >
                    {detail}
                  </span>
                </div>

                {/* Arrow between steps on mobile */}
                {parseInt(step) < steps.length && (
                  <div className="flex justify-center mt-4 lg:hidden">
                    <ArrowRight size={20} className="text-gray-300 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              const el = document.getElementById("trial");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary px-8 py-4 text-base"
          >
            Get Started for Free
            <ArrowRight size={18} />
          </button>
          <p className="text-sm text-gray-400 mt-2">No credit card · No risk · Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
