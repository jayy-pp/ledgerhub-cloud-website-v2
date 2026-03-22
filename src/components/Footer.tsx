"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { label: "Smart Invoicing", href: "#invoicing" },
  { label: "Accounting", href: "#accounting" },
  { label: "Inventory Management", href: "#inventory" },
  { label: "Custom Solutions", href: "#custom" },
  { label: "Pricing", href: "#pricing" },
  { label: "Free Trial", href: "#trial" },
];

const resources = [
  { label: "Blog & Guides", href: "/blog" },
  { label: "Help Center", href: "/help" },
  { label: "GST Resources", href: "/gst-resources" },
  { label: "Video Tutorials", href: "/tutorials" },
  { label: "API Documentation", href: "/api-docs" },
  { label: "Community Forum", href: "/community" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Refund Policy", href: "/refunds" },
  { label: "Security", href: "/security" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter / X" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{ background: "#0f1923" }}
      className="text-white"
    >
      {/* Newsletter strip */}
      <div style={{ background: "#135465" }} className="py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-extrabold text-white mb-1">
                Get Free GST & Accounting Tips in Your Inbox
              </h3>
              <p className="text-white/70 text-sm">
                Join 5,000+ Indian business owners getting weekly insights.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-72 px-4 py-2.5 rounded-lg text-gray-900 text-sm outline-none"
                style={{ background: "white" }}
              />
              <button
                className="px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 transition-all"
                style={{ background: "#f97316", color: "white" }}
              >
                Subscribe <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12 pt-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="LedgerHub"
                width={160}
                height={32}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-5">
              India&apos;s most loved invoicing, accounting & inventory platform
              for small and medium businesses. 100% GST compliant.
            </p>
            {/* Contact info */}
            <div className="space-y-2.5">
              <a
                href="mailto:support@ledgerhub.cloud"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
              >
                <Mail size={14} />
                support@ledgerhub.cloud
              </a>
              <a
                href="tel:+918460488076"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
              >
                <Phone size={14} />
                +91 8460 488076
              </a>
              <div className="flex items-start gap-2 text-sm text-white/80">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                102, Supan Apartment, Unchi Gali, Shamla ni Pole, Raipur,
                Ahmedabad - 380001
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-5 py-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {/* <div className="text-sm text-white/70 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} LedgerHub Technologies Pvt. Ltd. All
              rights reserved.
            </p>
            <p className="mt-0.5">
              🇮🇳 Proudly Made in India · GST No: 24AABCL1234A1Z5 · CIN:
              U72900GJ2020PTC115678
            </p>
          </div> */}

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  color: "rgba(255,255,255,0.6)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#135465";
                  (e.currentTarget as HTMLElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.6)";
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
