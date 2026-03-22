"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Zap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  {
    label: "Solutions",
    href: "#solutions",
    children: [
      {
        label: "Smart Invoicing",
        href: "#invoicing",
        desc: "GST-compliant bills in seconds",
      },
      {
        label: "Accounting",
        href: "#accounting",
        desc: "Real-time financial clarity",
      },
      {
        label: "Inventory",
        href: "#inventory",
        desc: "Track stock, prevent loss",
      },
      {
        label: "Custom Solutions",
        href: "#custom",
        desc: "Tailored for your industry",
      },
    ],
  },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
    setSolutionsOpen(false);
  };

  const toggleMobileMenu = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setMobileOpen(!mobileOpen);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 "
      style={{
        background: scrolled ? "#fff" : "#fff",
        color: scrolled ? "#000" : "#000",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 30px rgba(0,0,0,0.08)" : "none",
        padding: scrolled ? "0.75rem 0" : "0.75rem 0",
      }}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/logo.png"
            alt="LedgerHub"
            width={180}
            height={36}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button
                  className="flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                  style={{
                    color: "#374151",
                  }}
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  {link.label}
                  <ChevronDown size={14} />
                </button>
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200"
                  style={{
                    opacity: solutionsOpen ? 1 : 0,
                    pointerEvents: solutionsOpen ? "auto" : "none",
                    transform: solutionsOpen
                      ? "translateY(0)"
                      : "translateY(-8px)",
                  }}
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  {link.children.map((child) => (
                    <button
                      key={child.label}
                      onClick={() => scrollTo(child.href)}
                      className="w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors border-b border-gray-50 last:border-0"
                    >
                      <div className="font-medium text-sm text-gray-900">
                        {child.label}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {child.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 rounded-lg font-medium text-sm transition-colors hover:bg-white/10"
                style={{
                  color: "#374151",
                }}
              >
                {link.label}
              </button>
            ),
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => scrollTo("#trial")}
            className="px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            style={{ color: "#135465" }}
          >
            Sign In
          </button>
          <button
            onClick={() => scrollTo("#trial")}
            className="btn-primary text-sm px-5 py-2.5"
          >
            <Zap size={15} />
            Start Free Trial
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg"
          style={{ color: scrolled ? "#135465" : "white" }}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          disabled={isAnimating}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="lg:hidden fixed inset-0 bg-white z-40 transition-all duration-300 overflow-y-auto"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transform: mobileOpen ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="flex flex-col p-6 pt-20 gap-2">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-4">
                  Solutions
                </div>
                {link.children.map((child) => (
                  <button
                    key={child.label}
                    onClick={() => scrollTo(child.href)}
                    className="w-full text-left px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-slate-50"
                  >
                    {child.label}
                    <span className="block text-xs text-gray-400">
                      {child.desc}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium text-left hover:bg-slate-50 text-lg"
              >
                {link.label}
              </button>
            ),
          )}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <button
              onClick={() => scrollTo("#trial")}
              className="w-full btn-primary text-base py-4"
            >
              <Zap size={16} />
              Start 7-Day Free Trial
            </button>
            <p className="text-center text-xs text-gray-400 mt-2">
              No credit card required
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
