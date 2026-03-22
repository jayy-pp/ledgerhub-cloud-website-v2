"use client";

import Image from "next/image";
import {
  FileText,
  BarChart3,
  Package,
  Settings2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// HACK #7: Benefits-first content — outcomes, not features
const services = [
  {
    id: "invoicing",
    icon: FileText,
    eyebrow: "Smart Invoicing",
    headline: "Get Paid Faster — Without Chasing Clients",
    description:
      "Your clients pay faster when invoices look professional and arrive instantly. LedgerHub creates stunning GST-compliant invoices in seconds — with auto-reminders so you never lose money chasing payments.",
    benefits: [
      "Generate professional invoices in under 60 seconds",
      "Automatic GST calculations — no manual math ever",
      "Auto-send payment reminders so you get paid on time",
      "20+ customizable templates for your brand",
    ],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Smart invoicing dashboard showing GST-compliant invoice creation",
    bgColor: "bg-slate-50",
    accent: "#135465",
    // HACK #4: Testimonial with intent
    testimonial: {
      quote: "I used to spend 3 hours every week on invoices. Now it takes 15 minutes total. LedgerHub changed everything.",
      name: "Rajesh Kumar",
      role: "Owner, Sunrise Enterprises, Ahmedabad",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    },
  },
  {
    id: "accounting",
    icon: BarChart3,
    eyebrow: "Smart Accounting",
    headline: "Know Exactly Where Your Money Is — Always",
    description:
      "Most business owners feel anxious about their finances because they're flying blind. LedgerHub gives you a real-time financial dashboard so you always know what's coming in, what's going out, and where you stand.",
    benefits: [
      "Real-time P&L so you make confident business decisions",
      "Automatic bank reconciliation — no surprises at month-end",
      "GST reports ready for filing in one click",
      "Expense tracking that catches where money is leaking",
    ],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Accounting dashboard showing financial analytics and profit reports",
    bgColor: "bg-white",
    accent: "#135465",
    testimonial: {
      quote: "For the first time in 8 years of running my business, I actually understand my finances. My CA loves LedgerHub too.",
      name: "Priya Mehta",
      role: "Director, Mehta Exports, Surat",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=60&h=60&fit=crop&crop=face",
    },
  },
  {
    id: "inventory",
    icon: Package,
    eyebrow: "Inventory Management",
    headline: "Never Run Out of Stock — or Sit on Dead Inventory",
    description:
      "Stockouts cost you sales. Overstocking kills your cash flow. LedgerHub's intelligent inventory system alerts you before problems happen — so you always have what you need, and nothing more.",
    benefits: [
      "Real-time stock alerts before you run out",
      "Automatic inventory sync across all sales channels",
      "Purchase order management to negotiate better deals",
      "Reduce dead stock by up to 30% with demand forecasting",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Inventory management system showing stock levels and warehouse tracking",
    bgColor: "bg-slate-50",
    accent: "#135465",
    testimonial: {
      quote: "We used to stockout during peak season every year. Since LedgerHub, our inventory is always perfect. Sales are up 35%.",
      name: "Amit Singh",
      role: "Managing Director, Singh Distributors, Pune",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    },
  },
  {
    id: "custom",
    icon: Settings2,
    eyebrow: "Custom Solutions",
    headline: "Your Business is Unique. Your Software Should Be Too.",
    description:
      "Off-the-shelf software forces you to change how you work. LedgerHub adapts to your workflows, your industry, your language. We build what your business actually needs.",
    benefits: [
      "Custom invoice and report templates for your brand",
      "Industry-specific modules for retail, manufacturing, services",
      "Multilingual support — Hindi, Gujarati, Tamil, and more",
      "API integrations with your existing tools",
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Custom business solutions being configured for specific industry needs",
    bgColor: "bg-white",
    accent: "#135465",
    testimonial: {
      quote: "We needed something tailored for our pharma distribution business. LedgerHub built exactly what we needed. Zero compromises.",
      name: "Dr. Sunita Verma",
      role: "CEO, Verma Pharma Distributors, Hyderabad",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face",
    },
  },
];

export default function ServicesSection() {
  const scrollToTrial = () => {
    const el = document.getElementById("trial");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="features" className="bg-white">
      {/* Section header */}
      <div className="section-py">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: "rgba(19,84,101,0.08)", color: "#135465" }}
            >
              Our Core Solutions
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Everything Your Business Needs.{" "}
              <span className="text-gradient">Nothing It Doesn&apos;t.</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              We&apos;ve talked to 500+ Indian business owners. These are the exact tools they said
              would save them the most time and money.
            </p>
          </div>
        </div>
      </div>

      {/* Service blocks — alternating layout */}
      <div id="solutions">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`${service.bgColor} section-py`}
            >
              <div className="container-custom">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: "rgba(19,84,101,0.1)" }}
                      >
                        <Icon size={20} style={{ color: "#135465" }} />
                      </div>
                      <span
                        className="text-sm font-bold uppercase tracking-wider"
                        style={{ color: "#135465" }}
                      >
                        {service.eyebrow}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                      {service.headline}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Benefits list */}
                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: "#135465" }}
                          />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* HACK #4: Testimonial with intent — placed right next to relevant claim */}
                    <div
                      className="rounded-xl p-5 mb-6"
                      style={{ background: "rgba(19,84,101,0.05)", borderLeft: "3px solid #135465" }}
                    >
                      <p className="text-gray-800 font-medium italic mb-3">
                        &ldquo;{service.testimonial.quote}&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <Image
                          src={service.testimonial.avatar}
                          alt={service.testimonial.name}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                        <div>
                          <div className="text-sm font-bold text-gray-900">
                            {service.testimonial.name}
                          </div>
                          <div className="text-xs text-gray-500">{service.testimonial.role}</div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={scrollToTrial}
                      className="flex items-center gap-2 font-semibold"
                      style={{ color: "#135465" }}
                      onMouseEnter={(e) => (e.currentTarget.style.gap = "12px")}
                      onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
                    >
                      Start free — explore {service.eyebrow}
                      <ArrowRight size={16} />
                    </button>
                  </div>

                  {/* Image */}
                  <div className={`relative ${isEven ? "" : "lg:order-1"}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl card-hover">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={700}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(19,84,101,0.2) 0%, transparent 60%)" }}
                      />
                    </div>
                    {/* Decorative element */}
                    <div
                      className="absolute -z-10 rounded-2xl"
                      style={{
                        inset: "20px -20px -20px 20px",
                        background: "rgba(19,84,101,0.08)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
