"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import Image from "next/image";

/* ---------------- SVG ICONS ---------------- */

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-24 h-24 fill-[#1877F2]">
    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.6v-2.9h2.6V9.4c0-2.6 1.6-4 3.9-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5v1.8h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-24 h-24">
    <defs>
      <linearGradient id="ig" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#f58529" />
        <stop offset="50%" stopColor="#dd2a7b" />
        <stop offset="100%" stopColor="#8134af" />
      </linearGradient>
    </defs>
    <path
      fill="url(#ig)"
      d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 4.5A5.5 5.5 0 1017.5 12 5.5 5.5 0 0012 6.5zm0 9A3.5 3.5 0 1115.5 12 3.5 3.5 0 0112 15.5zM18 6.3a1.2 1.2 0 11-1.2-1.2A1.2 1.2 0 0118 6.3z"
    />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-24 h-24">
    <path
      fill="#EA4335"
      d="M12 10.2v3.9h5.5a4.7 4.7 0 01-2 3.1l3.2 2.5c1.9-1.8 3-4.4 3-7.5 0-.7-.1-1.3-.2-2H12z"
    />
    <path
      fill="#34A853"
      d="M12 22a9.8 9.8 0 006.8-2.5l-3.2-2.5a6.2 6.2 0 01-9.3-3.2l-3.3 2.6A10 10 0 0012 22z"
    />
    <path
      fill="#FBBC05"
      d="M2.7 14.4a10 10 0 010-4.8l3.3 2.6a6 6 0 000  -0.4z"
    />
    <path
      fill="#4285F4"
      d="M12 4a5.6 5.6 0 013.9 1.5l2.9-2.9A10 10 0 002.7 9.6l3.3 2.6A6.1 6.1 0 0112 4z"
    />
  </svg>
);

/* ---------------- MAIN PAGE ---------------- */

const DigitalMarketingPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const services = [
    {
      title: "Facebook Ads",
      icon: <FacebookIcon />,
      description:
        "Targeted Facebook campaigns to generate leads, sales, and brand awareness with precise audience segmentation.",
      features: ["Audience Targeting", "Retargeting", "Conversion Tracking"],
    },
    {
      title: "Instagram Marketing",
      icon: <InstagramIcon />,
      description:
        "High-converting Instagram ads and content strategy to grow engagement and build your brand visually.",
      features: ["Reels Strategy", "Story Ads", "Influencer Reach"],
    },
    {
      title: "Google Ads",
      icon: <GoogleIcon />,
      description:
        "Search, display, and YouTube ads to capture high-intent users and maximize ROI.",
      features: ["Search Ads", "Display Ads", "YouTube Ads"],
    },
  ];

  const faqs = [
    {
      q: "How much budget do I need to start ads?",
      a: "We recommend starting with at least $300–$1000/month depending on your business goals and competition.",
    },
    {
      q: "How quickly can I see results?",
      a: "You can see initial results within 3–7 days, but optimized performance usually takes 2–4 weeks.",
    },
    {
      q: "Do you handle creatives and copy?",
      a: "Yes, we create ad creatives, copywriting, and optimize campaigns continuously for best performance.",
    },
    {
      q: "Which platform is best for my business?",
      a: "It depends. Facebook/Instagram are great for brand awareness and leads, while Google Ads capture high-intent buyers.",
    },
  ];

  return (
    <div className="bg-white text-black">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <p className="text-blue-600 uppercase tracking-widest text-xs font-bold mb-4">
              Digital Marketing Agency
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
              Grow Faster with{" "}
              <span className="text-blue-600">Facebook, Instagram</span> &
              <span className="text-blue-600"> Google Ads</span>
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              We help businesses generate high-quality leads, increase sales,
              and scale profitably using data-driven advertising strategies.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition shadow-lg">
                Get Free Strategy
              </button>

              <button className="px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition">
                View Case Studies
              </button>
            </div>

            {/* TRUST */}
            <div className="flex items-center gap-6 mt-8 text-sm text-gray-500">
              <span>✔ 100+ Clients</span>
              <span>✔ 4.9 Rating</span>
              <span>✔ ROI Focused</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* MAIN CARD */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-xl">
              <p className="text-sm text-gray-500 mb-4">Campaign Performance</p>

              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Ad Spend</span>
                  <span className="font-bold text-gray-900">$12,500</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Revenue</span>
                  <span className="font-bold text-green-600">$48,200</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">ROAS</span>
                  <span className="font-bold text-gray-900">3.8x</span>
                </div>
              </div>

              {/* PROGRESS */}
              <div className="mt-6">
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 w-[75%]" />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Campaign Growth +75%
                </p>
              </div>
            </div>

            {/* FLOATING TAGS */}
            <div className="absolute -top-6 -left-6 bg-white border border-gray-200 px-4 py-2 rounded-xl text-xs font-semibold shadow-md">
              Facebook Ads
            </div>

            <div className="absolute -bottom-6 right-0 bg-white border border-gray-200 px-4 py-2 rounded-xl text-xs font-semibold shadow-md text-pink-600">
              Instagram Growth
            </div>

            <div className="absolute top-1/2 -right-8 bg-white border border-gray-200 px-4 py-2 rounded-xl text-xs font-semibold shadow-md text-green-600">
              Google Ads ROI
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Advertising Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-gray-200 hover:border-blue-500 transition shadow-sm hover:shadow-lg"
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{s.description}</p>

              <ul className="space-y-2">
                {s.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={14} className="text-blue-600" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS / HOW WE WORK */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-center mb-14">
            <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How We Scale Your Ads Professionally
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              We follow a proven, data-driven process to ensure consistent
              growth, better ROI, and scalable advertising performance.
            </p>
          </div>

          {/* STEPS */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Research & Strategy",
                desc: "We analyze your business, competitors, and audience to build a strong ad strategy.",
              },
              {
                title: "Creative Production",
                desc: "We design high-converting creatives, ad copies, and visuals tailored for each platform.",
              },
              {
                title: "Campaign Launch",
                desc: "We launch and structure campaigns with proper targeting, budget allocation, and tracking.",
              },
              {
                title: "Optimization & Scaling",
                desc: "We continuously optimize ads, reduce cost, and scale profitable campaigns.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-xl hover:border-blue-500 transition"
              >
                {/* NUMBER */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold mb-4">
                  {i + 1}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* EXTRA TRUST LINE */}
          <div className="mt-14 text-center">
            <p className="text-sm text-gray-500">
              ✔ Data-driven decisions • ✔ Continuous testing • ✔ ROI-focused
              execution
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center mb-16">
      <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">
        Case Studies
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Before vs After — Real Campaign Improvements
      </h2>
      <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
        We fix broken ad systems and turn them into scalable revenue machines.
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "E-commerce Brand",
          img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200",
          before: ["CTR 0.8%", "CPC $1.20", "No retargeting"],
          after: ["CTR 2.9%", "CPC $0.45", "Retargeting system"],
        },
        {
          title: "Local Service Business",
          img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200",
          before: ["No tracking", "Bad targeting", "Low leads"],
          after: ["Full tracking", "Laser targeting", "3x leads"],
        },
        {
          title: "SaaS Startup",
          img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
          before: ["No funnel", "Broad ads", "Low ROAS"],
          after: ["Full funnel", "Segmented ads", "ROAS 4.2x"],
        },
      ].map((item, i) => (
        <div
          key={i}
          className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-2xl transition"
        >

          {/* IMAGE FIXED (IMPORTANT FOR TS) */}
          <div className="relative w-full h-52">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* CONTENT */}
          <div className="p-6">

            <h3 className="text-lg font-bold text-gray-900 mb-5">
              {item.title}
            </h3>

            {/* BEFORE */}
            <div className="mb-5">
              <p className="text-xs font-bold text-red-500 uppercase mb-2">
                Before
              </p>
              <div className="space-y-2">
                {item.before.map((b, idx) => (
                  <div
                    key={idx}
                    className="text-sm text-gray-600 bg-red-50 px-3 py-2 rounded-lg"
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* AFTER */}
            <div>
              <p className="text-xs font-bold text-green-600 uppercase mb-2">
                After
              </p>
              <div className="space-y-2">
                {item.after.map((a, idx) => (
                  <div
                    key={idx}
                    className="text-sm text-gray-700 bg-green-50 px-3 py-2 rounded-lg"
                  >
                    {a}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* FAQ (IMPROVED PREMIUM UI) */}
<section className="py-24 bg-linear-to-b from-white to-gray-50">
  <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

    {/* LEFT */}
    <div>
      <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">
        FAQ
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Everything You Need to Know
      </h2>

      <p className="text-gray-600 mb-8">
        Clear answers about strategy, budget, timelines, and results.
      </p>

      <div className="space-y-3 text-sm text-gray-500">
        <p>✔ Transparent reporting</p>
        <p>✔ ROI-focused execution</p>
        <p>✔ Weekly optimization</p>
      </div>
    </div>

    {/* RIGHT */}
    <div className="space-y-4">

      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            className={`rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "border-blue-500 shadow-xl bg-white"
                : "border-gray-200 bg-white hover:border-blue-300"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="font-semibold text-gray-900">
                {faq.q}
              </span>

              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full transition ${
                  isOpen
                    ? "bg-blue-600 text-white rotate-180"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <ChevronDown size={16} />
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-5 text-sm text-gray-600">
                {faq.a}
              </div>
            </div>
          </div>
        );
      })}

    </div>
  </div>
</section>

    </div>
  );
};

export default DigitalMarketingPage;
