"use client";

// HACK #8: TL;DR CTA Panel — for visitors who skip to the bottom
// HACK #9: CTA Booster — line below the button removes fear of clicking

import { ArrowRight, CheckCircle2, Zap, Star } from "lucide-react";

export default function TLDRSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-py" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* HACK #8: TL;DR headline for skimmers */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold mb-5"
            style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
          >
            TL;DR — Here&apos;s the Bottom Line
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            Stop Wasting Time on Paperwork.
            <br />
            Start Growing Your Business.
          </h2>

          <p className="text-xl text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">
            LedgerHub gives Indian SMEs the accounting, invoicing, and inventory tools they need — all
            in one platform, all GST-compliant, at a price every business can afford.
          </p>

          {/* Key summary bullets for skimmers */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10 text-left max-w-3xl mx-auto">
            {[
              "GST-compliant invoices in 60 seconds",
              "Real-time accounting & P&L dashboard",
              "Inventory alerts before you run out",
              "GSTR reports ready in one click",
              "Mobile app for iOS & Android",
              "Support in Hindi, English & more",
            ].map((point) => (
              <div key={point} className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5 text-white" />
                <span className="text-white/90 text-sm font-medium">{point}</span>
              </div>
            ))}
          </div>

          {/* Stars social proof */}
          <div className="flex items-center justify-center gap-2 mb-7">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} fill="white" stroke="white" />
            ))}
            <span className="text-white font-bold ml-1">4.9/5 from 2,500+ reviews</span>
          </div>

          {/* Main CTA */}
          <button
            onClick={() => scrollTo("trial")}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-extrabold text-lg transition-all"
            style={{
              background: "white",
              color: "#f97316",
              boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 30px 80px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.2)";
            }}
          >
            <Zap size={22} />
            Start My Free 7-Day Trial
            <ArrowRight size={22} />
          </button>

          {/* HACK #9: CTA Booster — removes ALL fear */}
          <div className="flex flex-wrap items-center justify-center gap-5 mt-4">
            <span className="flex items-center gap-1.5 text-white/80 text-sm">
              <CheckCircle2 size={15} className="text-white" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5 text-white/80 text-sm">
              <CheckCircle2 size={15} className="text-white" />
              Setup in 5 minutes
            </span>
            <span className="flex items-center gap-1.5 text-white/80 text-sm">
              <CheckCircle2 size={15} className="text-white" />
              Cancel anytime, no questions
            </span>
            <span className="flex items-center gap-1.5 text-white/80 text-sm">
              <CheckCircle2 size={15} className="text-white" />
              30-day money-back guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
