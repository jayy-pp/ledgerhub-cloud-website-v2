"use client";

import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

// HACK #6: Comparison Table — LedgerHub vs alternatives
const features = [
  { feature: "GST Auto-calculation", ledgerhub: true, excel: false, others: "Partial" },
  { feature: "Real-time Inventory Sync", ledgerhub: true, excel: false, others: false },
  { feature: "Professional Invoice Templates", ledgerhub: "20+ templates", excel: "DIY only", others: "5 basic" },
  { feature: "Automatic Payment Reminders", ledgerhub: true, excel: false, others: "Paid add-on" },
  { feature: "Bank Reconciliation", ledgerhub: true, excel: "Manual", others: "Partial" },
  { feature: "GSTR Report Generation", ledgerhub: true, excel: false, others: "Partial" },
  { feature: "Mobile App (iOS + Android)", ledgerhub: true, excel: false, others: "Basic app" },
  { feature: "Multi-language Support", ledgerhub: "7 languages", excel: false, others: "Hindi only" },
  { feature: "Time to create first invoice", ledgerhub: "< 2 minutes", excel: "30+ minutes", others: "15 minutes" },
  { feature: "CA / Accountant sharing", ledgerhub: true, excel: "Email only", others: "Paid add-on" },
  { feature: "Customer support (India)", ledgerhub: "24/7 in Hindi", excel: false, others: "Email only" },
  { feature: "Starting price", ledgerhub: "₹999/mo", excel: "₹5,000+/yr (Excel license)", others: "₹1,500+/mo" },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <CheckCircle2 size={20} className="text-green-500" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <XCircle size={20} className="text-red-400" />
      </div>
    );
  }
  return <span className="text-sm font-medium text-gray-700">{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section id="comparison" className="section-py bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(19,84,101,0.08)", color: "#135465" }}
          >
            How We Stack Up
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Why 2,500+ Businesses Chose LedgerHub Over Alternatives
          </h2>
          <p className="text-gray-500 text-lg">
            We&apos;re not here to trash the competition. We just want to make sure you have all the facts
            to make the best decision for your business.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl shadow-lg" style={{ border: "1px solid #e2e8f0" }}>
          <table className="w-full" style={{ minWidth: "640px" }}>
            <thead>
              <tr>
                <th
                  className="text-left px-6 py-4 font-semibold text-gray-500 text-sm"
                  style={{ background: "#f8fafc", borderBottom: "2px solid #e2e8f0", width: "35%" }}
                >
                  Feature
                </th>
                <th
                  className="text-center px-4 py-4 text-sm font-bold"
                  style={{
                    background: "linear-gradient(135deg, #135465, #1a7a93)",
                    color: "white",
                    borderBottom: "2px solid #0d3d4a",
                    width: "21.67%",
                  }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-base">LedgerHub</span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: "#f97316" }}
                    >
                      Best Choice ⭐
                    </span>
                  </div>
                </th>
                <th
                  className="text-center px-4 py-4 font-semibold text-gray-500 text-sm"
                  style={{ background: "#f8fafc", borderBottom: "2px solid #e2e8f0", width: "21.67%" }}
                >
                  Excel / Sheets
                </th>
                <th
                  className="text-center px-4 py-4 font-semibold text-gray-500 text-sm"
                  style={{ background: "#f8fafc", borderBottom: "2px solid #e2e8f0", width: "21.67%" }}
                >
                  Other Software
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr
                  key={row.feature}
                  style={{ background: i % 2 === 0 ? "white" : "#f8fafc", borderBottom: "1px solid #e2e8f0" }}
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">{row.feature}</td>
                  <td
                    className="px-4 py-4 text-center"
                    style={{ background: i % 2 === 0 ? "rgba(19,84,101,0.04)" : "rgba(19,84,101,0.07)" }}
                  >
                    <Cell value={row.ledgerhub} />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <Cell value={row.excel} />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <Cell value={row.others} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom nudge */}
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-5 text-lg">
            Ready to make the switch? It only takes 5 minutes.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("trial");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary px-8 py-4"
          >
            Try LedgerHub Free for 7 Days
            <ArrowRight size={18} />
          </button>
          <p className="text-sm text-gray-400 mt-2">No credit card · Setup in 5 minutes · Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
