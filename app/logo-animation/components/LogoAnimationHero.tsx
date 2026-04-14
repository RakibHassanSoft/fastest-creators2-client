"use client";

import React from "react";

const SparkIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 2l1.5 6L19 10l-5.5 2L12 18l-1.5-6L5 10l5.5-2L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const LogoAnimationHero = () => {
  return (
    <section className="relative w-full bg-white text-black overflow-hidden pt-28 lg:pt-36 pb-20 px-6 lg:px-20">

      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-160 h-160 bg-blue-100/40 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-120 h-120 bg-blue-50/60 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium">
            <SparkIcon />
            Motion Branding Studio
          </div>

          {/* heading */}
          <h1 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight">
            Premium{" "}
            <span className="text-blue-600">Logo Animation</span>{" "}
            that brings your brand to life
          </h1>

          {/* description */}
          <p className="mt-5 text-gray-600 text-base leading-relaxed max-w-xl">
            We craft cinematic logo animations that help startups and SaaS brands
            create a strong first impression across web, ads, and social platforms.
          </p>

          {/* key points */}
          <div className="mt-7 space-y-3 text-sm text-gray-700">

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              2D & 3D Motion Branding
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Cinematic Intro Animations
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              High-End Agency Quality Output
            </div>

          </div>

          {/* CTA */}
          <div className="mt-10 flex gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-medium shadow-md">
              Get Animation
            </button>

            <button className="px-6 py-3 border border-gray-200 hover:border-blue-300 hover:text-blue-600 rounded-full text-sm font-medium">
              View Samples
            </button>
          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">

          {/* main preview card */}
          <div className="rounded-2xl border border-blue-100 bg-white shadow-lg overflow-hidden">

            <iframe
              className="w-full h-72 md:h-80"
              src="https://www.youtube.com/embed/4bZ8pXg9s4A"
              title="Logo Animation Preview"
              allowFullScreen
            />

          </div>

          {/* floating info card */}
          <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 shadow-md rounded-xl px-4 py-3">
            <p className="text-xs text-gray-500">Delivered in</p>
            <p className="text-sm font-semibold text-black">2–4 Days</p>
          </div>

          {/* floating tag */}
          <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
            Premium Motion
          </div>

        </div>

      </div>
    </section>
  );
};

export default LogoAnimationHero;