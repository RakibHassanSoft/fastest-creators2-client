"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

/* ---------------- REAL SVG ICONS ---------------- */

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#1877F2]">
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2V12h2.2v-2c0-2.2 1.3-3.4 3.3-3.4.9 0 1.8.1 2 .1v2.3h-1.4c-1.1 0-1.4.7-1.4 1.3v1.7h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#EA4335"
      d="M12 10.2v3.9h5.5c-.2 1.4-1.6 4-5.5 4a6.5 6.5 0 1 1 0-13 6 6 0 0 1 4.2 1.6l2.8-2.7A10 10 0 1 0 12 22c6 0 10-4 10-10 0-.7-.1-1.2-.2-1.8H12z"
    />
  </svg>
);

const MapsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#34A853"
      d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#0A66C2]">
    <path d="M20.45 20.45h-3.55v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.95v5.71H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

const ShopifyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#7AB55C]">
    <path d="M16 3.2c-.7-.2-1.5-.4-2.2-.4-2.5 0-4.4 1.6-5 4.1l-1 4.4-2 .5v12.6l10-2.2V3.2z" />
  </svg>
);

/* ---------------- DATA ---------------- */

const platformScrapers = [
  {
    title: "Facebook Scraping System",
    icon: FacebookIcon,
    points: [
      "Posts, pages & comments extraction",
      "Ads & engagement analytics",
      "Audience insights tracking",
    ],
  },
  {
    title: "Google Search Intelligence",
    icon: GoogleIcon,
    points: [
      "SERP tracking automation",
      "Keyword & competitor analysis",
      "Ads intelligence extraction",
    ],
  },
  {
    title: "Google Maps Data Engine",
    icon: MapsIcon,
    points: [
      "Business listings scraping",
      "Reviews & rating analysis",
      "Geo location intelligence",
    ],
  },
  {
    title: "LinkedIn Lead Engine",
    icon: LinkedInIcon,
    points: [
      "B2B lead extraction",
      "Job roles & company data",
      "Decision maker profiling",
    ],
  },
  {
    title: "E-commerce Intelligence",
    icon: ShopifyIcon,
    points: [
      "Product & pricing tracking",
      "Stock monitoring systems",
      "Competitor intelligence",
    ],
  },
];

/* ---------------- COMPONENT ---------------- */

const ApifyServices = () => {
  return (
    <section className="bg-white text-black py-24">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Apify Scraping &{" "}
          <span className="text-blue-600">Data Engineering</span>
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Enterprise-grade scraping systems, automation pipelines and scalable
          data infrastructure for modern SaaS and businesses.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {platformScrapers.map((item, i) => (
          <div
  key={i}
  className="aspect-square border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center hover:border-blue-400 hover:shadow-xl transition bg-white"
>

  {/* ICON (TOP CENTER) */}
  <div className="w-28  h-28 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm">
    <item.icon />
  </div>

  {/* TITLE */}
  <h3 className="text-lg font-semibold mt-4">
    {item.title}
  </h3>

  {/* STEP LIST */}
  <ul className="mt-5 space-y-3 text-sm text-gray-600 text-left w-full">

    {item.points.map((p, idx) => (
      <li key={idx} className="flex items-start gap-2">

        {/* step number */}
        <span className="min-w-5 text-xs font-semibold text-blue-600">
          {String(idx + 1).padStart(2, "0")}.
        </span>

        <span className="leading-relaxed">{p}</span>

      </li>
    ))}

  </ul>

  {/* FOOTER BADGE */}
  <div className="mt-auto text-[11px] text-gray-400 pt-4">
    Apify Powered System
  </div>

</div>
        ))}

        {/* MORE CARD */}
        <div className="aspect-square border border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center text-center hover:border-blue-500 transition cursor-pointer group">

          <p className="mt-3 text-gray-600 group-hover:text-blue-600 font-medium">
            More Systems Available
          </p>

        </div>

      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto text-center mt-24 px-6">

        <h2 className="text-3xl md:text-4xl font-semibold">
          Build scalable scraping systems with Apify
        </h2>

        <p className="text-gray-600 mt-4">
          Production-ready automation systems used for data-driven SaaS products.
        </p>

        <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-500 transition inline-flex items-center gap-2">
          Start Project <ArrowRight size={16} />
        </button>

      </div>

    </section>
  );
};

export default ApifyServices;