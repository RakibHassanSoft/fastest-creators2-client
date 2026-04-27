"use client";
import React from "react";
import {
  Globe,
  Palette,
  Megaphone,
  Video,
  Bot,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

/* ---------------- SERVICES ---------------- */
  const services = [
    {
      title: "Web Development",
      desc: "Modern, fast and scalable websites using latest technologies.",
      icon: Globe,
    },
    {
      title: "Digital Marketing",
      desc: "Grow your brand with performance-driven marketing strategies.",
      icon: Megaphone,
    },
    {
      title: "Logo Design",
      desc: "Clean, modern and memorable brand identity design.",
      icon: Palette,
    },
    {
      title: "Logo Animation",
      desc: "Bring your brand to life with smooth animated logos.",
      icon: Sparkles,
    },
    {
      title: "Apify Development",
      desc: "Custom scraping & automation solutions using Apify ecosystem.",
      icon: Bot,
    },
    {
      title: "Video Editing",
      desc: "High-quality editing for ads, reels, and promotional content.",
      icon: Video,
    },
  ];
/* ---------------- PAGE ---------------- */

const AboutPage = () => {
  return (
    <section className="bg-white text-black">

      {/* ================= HERO ================= */}
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="max-w-3xl">

          <p className="text-sm font-medium text-blue-600">
            Digital Product Studio
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mt-4">
            We design and build
            <span className="text-blue-600"> scalable digital products </span>
            for modern businesses.
          </h1>

          <p className="text-gray-600 mt-6 text-base leading-relaxed">
            We help startups and companies turn ideas into production-ready
            systems with clean design, scalable architecture, and conversion-focused UX.
          </p>

        </div>
      </div>

      {/* ================= TRUST SECTION ================= */}
      <div className="border-y border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-8">

          {[
            "Production-ready code quality",
            "Performance-first architecture",
            "Business-focused UI/UX",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="text-blue-600 mt-1" size={18} />
              <p className="text-sm text-gray-700">{item}</p>
            </div>
          ))}

        </div>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="max-w-6xl mx-auto px-6 py-24">

        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold">
            Core Services
          </h2>
          <p className="text-gray-600 mt-3">
            We provide end-to-end digital solutions for building and scaling products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {services.map((s, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition"
            >
              <s.icon className="text-blue-600" size={22} />

              <h3 className="text-lg font-medium mt-4">
                {s.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* ================= PROCESS ================= */}
      <div className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <h2 className="text-3xl font-semibold">
            How we work
          </h2>

          <p className="text-gray-300 mt-3 max-w-2xl">
            A structured process focused on clarity, execution and measurable results.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {[
              {
                title: "1. Discovery",
                desc: "We understand your business, goals and technical needs.",
              },
              {
                title: "2. Build",
                desc: "We design and develop scalable, production-ready systems.",
              },
              {
                title: "3. Launch & Optimize",
                desc: "We deploy, monitor and continuously improve performance.",
              },
            ].map((step) => (
              <div key={step.title} className="border border-white/10 p-6 rounded-xl">
                <h3 className="font-medium">{step.title}</h3>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">

        <h2 className="text-3xl md:text-4xl font-semibold">
          Ready to build your product?
        </h2>

        <p className="text-gray-600 mt-4">
          Let’s turn your idea into a scalable digital solution.
        </p>

        <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-500 transition">
          Start a Project
        </button>

      </div>

    </section>
  );
};

export default AboutPage;