import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar } from "lucide-react";

const posts = [
  {
    slug: "gst-filing-guide-2025",
    category: "GST & Compliance",
    title: "Complete GST Filing Guide for Indian Small Businesses in 2025",
    excerpt:
      "Step-by-step guide to GSTR-1, GSTR-3B, and annual return filing. Everything you need to stay compliant without hiring an extra accountant.",
    readTime: "8 min read",
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    imageAlt: "GST filing guide for Indian businesses",
  },
  {
    slug: "invoice-best-practices",
    category: "Invoicing Tips",
    title: "7 Invoice Mistakes That Are Delaying Your Payments (And How to Fix Them)",
    excerpt:
      "Most delayed payments aren't the client's fault — they're caused by invoice errors you can fix in 10 minutes. Here's what to change today.",
    readTime: "6 min read",
    date: "March 8, 2025",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Professional invoice best practices",
  },
  {
    slug: "inventory-management-sme",
    category: "Inventory",
    title: "How Indian Retailers Reduced Dead Stock by 40% With Smarter Inventory Tracking",
    excerpt:
      "Dead inventory is one of the biggest hidden costs for Indian SMEs. Here's the exact system 300+ retailers used to fix it — without expensive consultants.",
    readTime: "10 min read",
    date: "February 28, 2025",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Inventory management for Indian retailers",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="section-py bg-white">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12">
          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: "rgba(19,84,101,0.08)", color: "#135465" }}
            >
              Business Resources & Insights
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Free Guides to Grow Your Business
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 font-semibold text-sm"
            style={{ color: "#135465" }}
          >
            View all articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl overflow-hidden shadow-sm card-hover"
              style={{ border: "1px solid #e2e8f0" }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(19,84,101,0.08)", color: "#135465" }}
                  >
                    {post.category}
                  </span>
                </div>
                <h3 className="font-extrabold text-gray-900 mb-2 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-brand transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-400 border-t border-gray-100 pt-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-semibold"
            style={{ color: "#135465" }}
          >
            View all articles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
