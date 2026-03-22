"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Star,
  CheckCircle2,
  TrendingUp,
  Shield,
  Zap,
  Play,
} from "lucide-react";

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=80&h=80&fit=crop&crop=face",
];

const notifications = [
  {
    name: "Arjun Sharma",
    action: "just created an invoice",
    location: "Mumbai",
    time: "2 min ago",
  },
  {
    name: "Priya Patel",
    action: "started free trial",
    location: "Ahmedabad",
    time: "5 min ago",
  },
  {
    name: "Vikram Singh",
    action: "upgraded to Business",
    location: "Delhi",
    time: "8 min ago",
  },
  {
    name: "Meera Nair",
    action: "generated GST report",
    location: "Bangalore",
    time: "12 min ago",
  },
];

export default function Hero() {
  const [notifIndex, setNotifIndex] = useState(0);
  const [showNotif, setShowNotif] = useState(false);

  useEffect(() => {
    // Show first notification after 3 seconds
    const initialTimer = setTimeout(() => {
      setShowNotif(true);
    }, 3000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!showNotif) return;
    // Rotate notifications every 6 seconds
    const interval = setInterval(() => {
      setShowNotif(false);
      setTimeout(() => {
        setNotifIndex((i) => (i + 1) % notifications.length);
        setShowNotif(true);
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, [showNotif]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const currentNotif = notifications[notifIndex];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden py-20"
      style={{
        background:
          "linear-gradient(135deg, #0f1923 0%, #135465 55%, #1a7a93 100%)",
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      {/* Gradient orbs */}
      <div
        className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #1a7a93, transparent)" }}
      />
      <div
        className="absolute bottom-20 left-20 w-64 h-64 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #f97316, transparent)" }}
      />

      <div className="container-custom relative z-10 pt-32 md:pt-36 lg:pt-40 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* HACK #1: Social Proof Above the Fold — customer avatars */}
            <div className="flex items-center gap-3 mb-8 mt-4">
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white overflow-hidden"
                    style={{ zIndex: avatars.length - i }}
                  >
                    <Image
                      src={src}
                      alt={`Happy customer ${i + 1}`}
                      width={36}
                      height={36}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#f97316" stroke="#f97316" />
                  ))}
                  <span className="text-white/90 text-sm font-semibold ml-1">
                    4.9/5
                  </span>
                </div>
                <p className="text-white/70 text-xs">
                  Loved by 2,500+ Indian SMEs
                </p>
              </div>
            </div>

            {/* HACK #2: Eyebrow Copy */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-5"
              style={{
                background: "rgba(249,115,22,0.15)",
                color: "#fb923c",
                border: "1px solid rgba(249,115,22,0.3)",
              }}
            >
              <Zap size={14} />
              For GST-Registered Indian Businesses Who Want to Scale
            </div>

            {/* HACK #3: Conversational, human headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Tired of Messy{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f97316, #fb923c)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Spreadsheets?
              </span>
              <br />
              We&rsquo;ll Handle Your Books.
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              LedgerHub makes invoicing, accounting, and inventory{" "}
              <strong className="text-white">embarrassingly simple</strong> —
              with 100% GST compliance built in. You focus on growing your
              business, we handle the rest.
            </p>

            {/* CTAs + HACK #9: CTA Booster */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-3">
              <button
                onClick={() => scrollTo("trial")}
                className="btn-primary text-base px-7 py-4"
              >
                Start 7-Day Free Trial
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollTo("features")}
                className="btn-secondary text-base px-7 py-4"
              >
                <Play size={16} fill="currentColor" />
                See How It Works
              </button>
            </div>
            {/* HACK #9: CTA Booster */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-green-400" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-green-400" />
                Setup in 5 minutes
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-green-400" />
                Cancel anytime
              </span>
            </div>

            {/* HACK #1: Key stats as social proof */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-white/15">
              {[
                { value: "2,500+", label: "Indian SMEs" },
                { value: "₹750Cr+", label: "Invoices Processed" },
                { value: "99.9%", label: "Uptime SLA" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-extrabold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product mockup / dashboard */}
          <div className="relative">
            {/* Main card */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden animate-float">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="LedgerHub dashboard showing invoices and accounting analytics"
                width={800}
                height={540}
                className="w-full object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(19,84,101,0.4) 0%, transparent 60%)",
                }}
              />

              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      icon: TrendingUp,
                      label: "Revenue",
                      value: "+28%",
                      color: "#10b981",
                    },
                    {
                      icon: Shield,
                      label: "GST Filed",
                      value: "On Time",
                      color: "#3b82f6",
                    },
                    {
                      icon: Zap,
                      label: "Invoices",
                      value: "Auto-Gen",
                      color: "#f97316",
                    },
                  ].map(({ icon: Icon, label, value, color }) => (
                    <div
                      key={label}
                      className="bg-white/95 backdrop-blur-sm rounded-lg p-3 text-center"
                    >
                      <Icon
                        size={18}
                        style={{ color }}
                        className="mx-auto mb-1"
                      />
                      <div className="text-xs font-bold text-gray-900">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-xl shadow-lg p-2 sm:p-3 flex items-center gap-2"
              style={{ border: "1px solid rgba(19,84,101,0.1)" }}
            >
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 size={16} className="text-green-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900">
                  GST Compliant
                </div>
                <div className="text-xs text-gray-500">Auto-calculated</div>
              </div>
            </div>

            <div
              className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white rounded-xl shadow-lg p-2 sm:p-3 flex items-center gap-2"
              style={{ border: "1px solid rgba(249,115,22,0.15)" }}
            >
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                <TrendingUp size={16} className="text-orange-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900">
                  Revenue Up 28%
                </div>
                <div className="text-xs text-gray-500">vs last quarter</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HACK #1: Real-time social proof notification */}
      <div
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 max-w-xs"
        style={{
          opacity: showNotif ? 1 : 0,
          transform: showNotif ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.4s ease",
          pointerEvents: "none",
        }}
      >
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #135465, #1a7a93)" }}
          >
            <Zap size={16} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {currentNotif.name} from {currentNotif.location}
            </p>
            <p className="text-xs text-gray-500">
              {currentNotif.action} · {currentNotif.time}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
