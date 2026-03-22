"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

// HACK #4: Testimonials with intent — each paired with a specific pain point scenario
const scenarios = [
  {
    scenario: "If you're drowning in paperwork every month...",
    testimonials: [
      {
        quote: "I was spending 4-5 hours every month on invoicing and GST filings. Now it takes me 30 minutes. LedgerHub gave me back my weekends.",
        name: "Rajesh Agarwal",
        role: "Owner",
        company: "Agarwal Traders, Jaipur",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
        rating: 5,
        metric: "4.5 hrs/month saved",
      },
      {
        quote: "My CA used to spend 2 days every quarter reconciling our books. With LedgerHub, it's done automatically. He's actually grateful I switched.",
        name: "Sunita Kapoor",
        role: "Director",
        company: "Kapoor Exports, Ludhiana",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
        rating: 5,
        metric: "2 days saved per quarter",
      },
    ],
  },
  {
    scenario: "If you're worried about GST compliance...",
    testimonials: [
      {
        quote: "I was terrified of getting a GST notice. LedgerHub takes care of all the calculations automatically. I haven't had a single compliance issue in 2 years.",
        name: "Mohammed Iqbal",
        role: "Proprietor",
        company: "Iqbal Construction, Hyderabad",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
        rating: 5,
        metric: "Zero compliance issues",
      },
      {
        quote: "Our previous software had a bug that miscalculated GST for 3 months. We didn't catch it until the CA noticed. LedgerHub's accuracy is bulletproof.",
        name: "Kavya Reddy",
        role: "CFO",
        company: "Reddy Pharma, Bangalore",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=face",
        rating: 5,
        metric: "100% GST accuracy",
      },
    ],
  },
  {
    scenario: "If you're scaling a growing business...",
    testimonials: [
      {
        quote: "We went from 50 to 500 invoices a month without hiring an extra person. LedgerHub scales with you without breaking the bank.",
        name: "Arjun Mehta",
        role: "Founder",
        company: "Mehta Online Store, Pune",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
        rating: 5,
        metric: "10x volume, same team",
      },
      {
        quote: "LedgerHub connected all our sales channels — Flipkart, Amazon, and our own website — into one inventory. We eliminated stockouts completely.",
        name: "Priyanka Singh",
        role: "CEO",
        company: "Singh Fashion House, Surat",
        avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=80&h=80&fit=crop&crop=face",
        rating: 5,
        metric: "Zero stockouts in 18 months",
      },
    ],
  },
];

export default function TestimonialsSection() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const currentScenario = scenarios[activeScenario];
  const currentTestimonial = currentScenario.testimonials[activeTestimonial];

  const nextTestimonial = () => {
    if (activeTestimonial < currentScenario.testimonials.length - 1) {
      setActiveTestimonial(activeTestimonial + 1);
    } else {
      setActiveScenario((activeScenario + 1) % scenarios.length);
      setActiveTestimonial(0);
    }
  };

  const prevTestimonial = () => {
    if (activeTestimonial > 0) {
      setActiveTestimonial(activeTestimonial - 1);
    } else {
      const prev = (activeScenario - 1 + scenarios.length) % scenarios.length;
      setActiveScenario(prev);
      setActiveTestimonial(scenarios[prev].testimonials.length - 1);
    }
  };

  return (
    <section className="section-py" style={{ background: "linear-gradient(135deg, #0f1923, #135465)" }}>
      <div className="container-custom">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(249,115,22,0.15)", color: "#fb923c" }}
          >
            Real Stories, Real Results
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Businesses Just Like Yours Are Thriving
          </h2>
          <p className="text-white/60 text-lg">
            Don&apos;t just take our word for it.
          </p>
        </div>

        {/* Scenario tabs — HACK #4: Match testimonial to visitor situation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {scenarios.map((s, i) => (
            <button
              key={i}
              onClick={() => { setActiveScenario(i); setActiveTestimonial(0); }}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: activeScenario === i ? "#f97316" : "rgba(255,255,255,0.1)",
                color: activeScenario === i ? "white" : "rgba(255,255,255,0.7)",
                border: `1px solid ${activeScenario === i ? "#f97316" : "rgba(255,255,255,0.15)"}`,
              }}
            >
              {s.scenario}
            </button>
          ))}
        </div>

        {/* Main testimonial */}
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-12 relative"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <Quote
              size={48}
              className="absolute top-6 right-6 opacity-10 text-white"
            />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} size={20} fill="#f97316" stroke="#f97316" />
              ))}
            </div>

            {/* HACK #5: TLDW — pull key metric as headline */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold mb-4"
              style={{ background: "rgba(249,115,22,0.2)", color: "#fb923c" }}
            >
              📊 {currentTestimonial.metric}
            </div>

            <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-8">
              &ldquo;{currentTestimonial.quote}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover border-2 border-white/30"
                />
                <div>
                  <div className="font-bold text-white">{currentTestimonial.name}</div>
                  <div className="text-white/60 text-sm">
                    {currentTestimonial.role}, {currentTestimonial.company}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{ background: "rgba(249,115,22,0.8)", color: "white" }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {scenarios.flatMap((s, si) =>
              s.testimonials.map((_, ti) => (
                <button
                  key={`${si}-${ti}`}
                  onClick={() => { setActiveScenario(si); setActiveTestimonial(ti); }}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: si === activeScenario && ti === activeTestimonial ? "24px" : "8px",
                    background: si === activeScenario && ti === activeTestimonial
                      ? "#f97316"
                      : "rgba(255,255,255,0.3)",
                  }}
                />
              ))
            )}
          </div>
        </div>

        {/* All testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {scenarios[0].testimonials.concat(scenarios[1].testimonials.slice(0, 1)).map((t) => (
            <div
              key={t.name}
              className="rounded-xl p-5"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#f97316" stroke="#f97316" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">&ldquo;{t.quote.substring(0, 120)}...&rdquo;</p>
              <div className="flex items-center gap-2">
                <Image src={t.avatar} alt={t.name} width={32} height={32} className="rounded-full object-cover" />
                <div>
                  <div className="text-xs font-bold text-white">{t.name}</div>
                  <div className="text-xs text-white/50">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
