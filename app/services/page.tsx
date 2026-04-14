"use client";

import React from "react";
import LogoShowcase from "../logo-animation/components/LogoShowcase";
import WebsiteShowcase from "../web-development-service/components/websiteShowcase";
import ContactUs from "../components/contractUs";

/* ---------------- ICON ---------------- */

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const ServiceAPage = () => {
  return (
    <section className="w-full bg-white text-black">

      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center pt-28 pb-16 px-6">

        <p className="text-blue-600 font-medium tracking-wide">
          Our Services
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
          Explore our{" "}
          <span className="text-blue-600">
            digital solutions
          </span>
        </h1>

        <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
          We build modern digital products — from scalable web platforms to
          high-quality brand animations — focused on performance and growth.
        </p>

      </div>

      {/* WEBSITE SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pb-20">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Web Development
            </h2>

            <p className="text-gray-600 mt-2 max-w-lg">
              High-performance websites, SaaS platforms, and scalable systems
              designed for real business growth.
            </p>
          </div>

          <a
            href="/web-development-service"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:gap-3 transition"
          >
            View Details <ArrowIcon />
          </a>

        </div>

        <WebsiteShowcase />

      </div>

      {/* LOGO ANIMATION SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pb-20">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Logo Animation
            </h2>

            <p className="text-gray-600 mt-2 max-w-lg">
              Clean, cinematic animations that enhance brand identity across
              websites, ads, and digital platforms.
            </p>
          </div>

          <a
            href="/logo-animation"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:gap-3 transition"
          >
            View Details <ArrowIcon />
          </a>

        </div>

        <LogoShowcase />

      </div>

      {/* DIVIDER (PREMIUM TOUCH) */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-gray-200" />
      </div>

      {/* FINAL CTA */}
      <div className="max-w-4xl mx-auto text-center py-20 px-6">

        <h2 className="text-3xl md:text-4xl font-semibold text-black">
          Have a project in mind?
        </h2>

        <p className="text-gray-600 mt-4">
          Let’s build something scalable, modern, and impactful together.
        </p>

        <div className="mt-8">
          <ContactUs />
        </div>

      </div>

    </section>
  );
};

export default ServiceAPage;