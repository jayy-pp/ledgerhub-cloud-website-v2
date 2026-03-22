"use client";

import { Award } from "lucide-react";

const mediaLogos = [
  { name: "Economic Times", abbr: "ET" },
  { name: "Your Story", abbr: "YS" },
  { name: "Inc42", abbr: "Inc42" },
  { name: "Business Standard", abbr: "BS" },
  { name: "Hindustan Times", abbr: "HT" },
  { name: "NDTV Profit", abbr: "NDTV" },
];

const clientLogos = [
  "Tata Group",
  "Infosys",
  "Wipro",
  "HCL",
  "Mahindra",
  "Bajaj",
  "Reliance",
  "Godrej",
];

export default function TrustBar() {
  const doubledClients = [...clientLogos, ...clientLogos];

  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="container-custom">
        {/* As Seen In */}
        <div className="mb-8">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5 flex items-center justify-center gap-2">
            <Award size={14} />
            As Seen In
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {mediaLogos.map((media) => (
              <div
                key={media.name}
                className="px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 cursor-default"
                style={{
                  background: "#f8fafc",
                  color: "#94a3b8",
                  border: "1px solid #e2e8f0",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#135465";
                  (e.currentTarget as HTMLElement).style.background = "#e8f4f7";
                  (e.currentTarget as HTMLElement).style.borderColor = "#135465";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                  (e.currentTarget as HTMLElement).style.background = "#f8fafc";
                  (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                }}
              >
                {media.abbr}
              </div>
            ))}
          </div>
        </div>

        {/* Client logos ticker */}
        <div>
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
            Trusted by India&apos;s Leading Businesses
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(to right, white, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(to left, white, transparent)" }} />
            <div className="flex animate-ticker gap-8">
              {doubledClients.map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex-shrink-0 px-6 py-3 rounded-lg font-semibold text-sm whitespace-nowrap"
                  style={{
                    background: "#f8fafc",
                    color: "#64748b",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-gray-100">
          {[
            { icon: "🔒", label: "SSL Secured", sub: "256-bit encryption" },
            { icon: "🇮🇳", label: "Made in India", sub: "Built for Indian SMEs" },
            { icon: "📋", label: "GST Compliant", sub: "Always up to date" },
            { icon: "⚡", label: "99.9% Uptime", sub: "Enterprise-grade reliability" },
            { icon: "🏆", label: "Award-Winning", sub: "Best SME Software 2024" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2.5">
              <span className="text-2xl">{badge.icon}</span>
              <div>
                <div className="text-xs font-bold text-gray-900">{badge.label}</div>
                <div className="text-xs text-gray-500">{badge.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
