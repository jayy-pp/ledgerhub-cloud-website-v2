"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, FileText, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 2500,
    suffix: "+",
    label: "Indian SMEs Trust Us",
    desc: "From solo traders to 500-person companies",
  },
  {
    icon: FileText,
    value: 750,
    prefix: "₹",
    suffix: "Cr+",
    label: "Invoices Processed",
    desc: "Across 30+ industries in India",
  },
  {
    icon: TrendingUp,
    value: 99.9,
    suffix: "%",
    label: "Uptime Guaranteed",
    desc: "Enterprise-grade reliability you can count on",
  },
  {
    icon: Award,
    value: 4.9,
    suffix: "/5",
    label: "Average Rating",
    desc: "From verified customer reviews",
  },
];

function AnimatedNumber({ target, prefix = "", suffix = "", decimals = 0 }: {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 2000;
          const start = Date.now();
          const tick = () => {
            const progress = Math.min((Date.now() - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // cubic ease out
            setCurrent(eased * target);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const display = decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toLocaleString("en-IN");

  return (
    <div ref={ref}>
      {prefix}{display}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="section-py" style={{ background: "linear-gradient(135deg, #0f1923 0%, #135465 100%)" }}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-2">
            By the Numbers
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Trusted. Proven. Delivering Results.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map(({ icon: Icon, value, prefix, suffix, label, desc, ...rest }) => (
            <div
              key={label}
              className="text-center p-6 rounded-2xl transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(249,115,22,0.15)" }}
              >
                <Icon size={22} style={{ color: "#f97316" }} />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1">
                <AnimatedNumber
                  target={value}
                  prefix={prefix || ""}
                  suffix={suffix || ""}
                  decimals={value % 1 !== 0 ? 1 : 0}
                />
              </div>
              <div className="text-sm font-bold text-white/90 mb-1">{label}</div>
              <div className="text-xs text-white/50">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
