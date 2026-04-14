"use client";

import React from "react";

/* ---------------- ICON (MANUAL SVG) ---------------- */

const CheckIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M20 6L9 17l-5-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white text-black py-24 px-6 lg:px-20">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-blue-600 font-medium">
          Why Choose Us
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold mt-4">
          We don’t just build — we{" "}
          <span className="text-blue-600">create scalable digital products</span>
        </h2>

        <p className="text-gray-600 mt-5 text-base md:text-lg">
          A focused team delivering high-performance websites, SaaS platforms,
          and brand systems with modern design and clean engineering.
        </p>

      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="p-6 rounded-2xl border border-blue-100 bg-white hover:shadow-md transition">

          <h3 className="text-lg font-semibold text-black">
            Product-Focused Thinking
          </h3>

          <p className="text-gray-600 mt-3 text-sm">
            We don’t just design websites — we design systems that convert users
            into customers and scale with your business.
          </p>

        </div>

        {/* CARD 2 */}
        <div className="p-6 rounded-2xl border border-blue-100 bg-white hover:shadow-md transition">

          <h3 className="text-lg font-semibold text-black">
            Clean & Modern UI
          </h3>

          <p className="text-gray-600 mt-3 text-sm">
            Every interface is crafted with simplicity, clarity, and premium
            visual hierarchy for better user experience.
          </p>

        </div>

        {/* CARD 3 */}
        <div className="p-6 rounded-2xl border border-blue-100 bg-white hover:shadow-md transition">

          <h3 className="text-lg font-semibold text-black">
            Fast Delivery
          </h3>

          <p className="text-gray-600 mt-3 text-sm">
            We follow efficient workflows to deliver high-quality products in
            short timelines without sacrificing quality.
          </p>

        </div>

        {/* CARD 4 */}
        <div className="p-6 rounded-2xl border border-blue-100 bg-white hover:shadow-md transition">

          <h3 className="text-lg font-semibold text-black">
            Scalable Architecture
          </h3>

          <p className="text-gray-600 mt-3 text-sm">
            Built with performance-first engineering so your product grows
            smoothly without technical limitations.
          </p>

        </div>

        {/* CARD 5 */}
        <div className="p-6 rounded-2xl border border-blue-100 bg-white hover:shadow-md transition">

          <h3 className="text-lg font-semibold text-black">
            Full Digital Expertise
          </h3>

          <p className="text-gray-600 mt-3 text-sm">
            From development to design, marketing, automation, and branding —
            everything under one team.
          </p>

        </div>

        {/* CARD 6 */}
        <div className="p-6 rounded-2xl border border-blue-100 bg-white hover:shadow-md transition">

          <h3 className="text-lg font-semibold text-black">
            Business Growth Focus
          </h3>

          <p className="text-gray-600 mt-3 text-sm">
            Every decision is made to improve conversions, engagement, and long
            term business success.
          </p>

        </div>

      </div>

      {/* BOTTOM STRIP */}
      <div className="max-w-5xl mx-auto mt-20 border border-blue-100 rounded-2xl p-6 bg-blue-50">

        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">

          <div className="flex items-start gap-2">
            <CheckIcon className="text-blue-600 mt-1" />
            Transparent communication & workflow
          </div>

          <div className="flex items-start gap-2">
            <CheckIcon className="text-blue-600 mt-1" />
            Modern tech stack & clean code
          </div>

          <div className="flex items-start gap-2">
            <CheckIcon className="text-blue-600 mt-1" />
            Long-term support & scalability
          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;