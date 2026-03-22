"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Zap, Phone, Mail, Building2, User } from "lucide-react";

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  businessType: string;
}

const businessTypes = [
  "Retail / Trading",
  "Manufacturing",
  "E-commerce",
  "Services / Consulting",
  "Food & Hospitality",
  "Healthcare / Pharma",
  "Construction / Real Estate",
  "Other",
];

const benefits = [
  "Full access to all Business features",
  "100% GST-compliant invoicing",
  "Inventory & accounting tools",
  "Priority setup support in Hindi",
  "Cancel anytime — no questions asked",
];

export default function TrialForm() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    businessType: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.fullName.trim()) e.fullName = "Name is required";
    if (!form.companyName.trim()) e.companyName = "Company name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email is required";
    if (!form.phone.trim() || !/^[0-9]{10}$/.test(form.phone.replace(/\s|-/g, "")))
      e.phone = "Valid 10-digit phone number required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="trial" className="section-py bg-slate-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ border: "1px solid #e2e8f0" }}
          >
            <div className="grid md:grid-cols-2">
              {/* Left panel */}
              <div
                className="p-8 md:p-12"
                style={{ background: "linear-gradient(135deg, #0f1923, #135465)" }}
              >
                <div className="mb-6">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold mb-4"
                    style={{ background: "rgba(249,115,22,0.2)", color: "#fb923c" }}
                  >
                    <Zap size={14} />
                    7-Day Free Trial — No Risk
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                    Start Growing Your Business Today
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    Join 2,500+ Indian SMEs who spend less time on paperwork and more time on what
                    matters — customers, products, and growth.
                  </p>
                </div>

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5 text-green-400" />
                      <span className="text-white/85 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Testimonial */}
                <div
                  className="rounded-xl p-4"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <p className="text-white/85 text-sm italic mb-3">
                    &ldquo;Signing up took 4 minutes. I sent my first invoice 10 minutes later. My client
                    actually called to compliment how professional it looked.&rdquo;
                  </p>
                  <p className="text-white/55 text-xs font-medium">
                    — Ananya Joshi, Owner, Joshi Consultants, Bangalore
                  </p>
                </div>
              </div>

              {/* Right: Form */}
              <div className="p-8 md:p-12 bg-white">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-8">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
                      style={{ background: "rgba(19,84,101,0.1)" }}
                    >
                      <CheckCircle2 size={36} style={{ color: "#135465" }} />
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                      🎉 Welcome to LedgerHub!
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Check your email at <strong>{form.email}</strong>
                    </p>
                    <p className="text-gray-500 text-sm mb-6">
                      Your trial is active. Our team will call you at{" "}
                      <strong>+91 {form.phone}</strong> within 2 hours to help you get set up.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ fullName: "", companyName: "", email: "", phone: "", businessType: "" }); }}
                      className="text-sm underline text-gray-400 hover:text-gray-600"
                    >
                      Submit another form
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-6">
                      Create Your Free Account
                    </h3>

                    <div className="space-y-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Full Name
                        </label>
                        <div className="relative">
                          <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            placeholder="Rajesh Kumar"
                            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm border transition-all outline-none"
                            style={{
                              borderColor: errors.fullName ? "#ef4444" : "#e2e8f0",
                              background: "#f8fafc",
                            }}
                            onFocus={(e) => (e.target.style.borderColor = "#135465")}
                            onBlur={(e) => (e.target.style.borderColor = errors.fullName ? "#ef4444" : "#e2e8f0")}
                          />
                        </div>
                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Company / Firm Name
                        </label>
                        <div className="relative">
                          <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            name="companyName"
                            value={form.companyName}
                            onChange={handleChange}
                            placeholder="Sunrise Enterprises"
                            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm border transition-all outline-none"
                            style={{
                              borderColor: errors.companyName ? "#ef4444" : "#e2e8f0",
                              background: "#f8fafc",
                            }}
                            onFocus={(e) => (e.target.style.borderColor = "#135465")}
                            onBlur={(e) => (e.target.style.borderColor = errors.companyName ? "#ef4444" : "#e2e8f0")}
                          />
                        </div>
                        {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Business Email
                        </label>
                        <div className="relative">
                          <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="rajesh@sunrise.in"
                            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm border transition-all outline-none"
                            style={{
                              borderColor: errors.email ? "#ef4444" : "#e2e8f0",
                              background: "#f8fafc",
                            }}
                            onFocus={(e) => (e.target.style.borderColor = "#135465")}
                            onBlur={(e) => (e.target.style.borderColor = errors.email ? "#ef4444" : "#e2e8f0")}
                          />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Mobile Number
                        </label>
                        <div className="relative">
                          <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                          <span className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-500 text-sm">+91</span>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="9876543210"
                            className="w-full pl-20 pr-4 py-3 rounded-xl text-sm border transition-all outline-none"
                            style={{
                              borderColor: errors.phone ? "#ef4444" : "#e2e8f0",
                              background: "#f8fafc",
                            }}
                            onFocus={(e) => (e.target.style.borderColor = "#135465")}
                            onBlur={(e) => (e.target.style.borderColor = errors.phone ? "#ef4444" : "#e2e8f0")}
                          />
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>

                      {/* Business Type */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Business Type <span className="font-normal text-gray-400">(optional)</span>
                        </label>
                        <select
                          name="businessType"
                          value={form.businessType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all"
                          style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: form.businessType ? "#0f1923" : "#94a3b8" }}
                          onFocus={(e) => (e.target.style.borderColor = "#135465")}
                          onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                        >
                          <option value="">Select your business type</option>
                          {businessTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base mt-6 transition-all"
                      style={{
                        background: loading ? "#94a3b8" : "#f97316",
                        color: "white",
                        cursor: loading ? "not-allowed" : "pointer",
                      }}
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Creating your account...
                        </>
                      ) : (
                        <>
                          <Zap size={17} />
                          Start My Free 7-Day Trial
                          <ArrowRight size={17} />
                        </>
                      )}
                    </button>

                    {/* HACK #9: CTA Booster */}
                    <p className="text-center text-xs text-gray-400 mt-3">
                      No credit card needed · Setup in 5 minutes · Cancel anytime
                    </p>

                    <p className="text-center text-xs text-gray-400 mt-2">
                      By signing up, you agree to our{" "}
                      <a href="#" className="underline">Terms</a> &{" "}
                      <a href="#" className="underline">Privacy Policy</a>. 🔒 SSL Secured
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
