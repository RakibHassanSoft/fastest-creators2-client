"use client";
import React from "react";
import {
  Globe,
  Palette,
  Megaphone,
  Video,
  Bot,
  Sparkles,
} from "lucide-react";

const AboutPage = () => {
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

  return (
    <section className="w-full mt-12 bg-white text-black py-24 px-6 lg:px-20">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
          We build <span className="text-blue-600">digital products</span> that
          help businesses grow faster.
        </h1>

        <p className="text-gray-600 mt-6 text-base md:text-lg">
          We are a full-service digital agency specializing in web development,
          branding, automation, and creative production. Our goal is to turn
          ideas into powerful digital experiences.
        </p>
      </div>

      {/* MISSION SECTION */}
      <div className="max-w-5xl mx-auto mt-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Our Mission
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            We help startups, businesses, and creators build strong digital
            presence with high-quality design and scalable development.
            Every project we take is focused on performance, conversion,
            and long-term growth.
          </p>

          <div className="mt-6 flex gap-3">
            <span className="px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-full border border-blue-100">
              Fast Delivery
            </span>
            <span className="px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-full border border-blue-100">
              Premium Quality
            </span>
            <span className="px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-full border border-blue-100">
              Scalable Systems
            </span>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-blue-600">
            Why Choose Us?
          </h3>
          <ul className="mt-5 space-y-3 text-gray-700 text-sm">
            <li>✔ Modern UI/UX design approach</li>
            <li>✔ Clean & scalable code architecture</li>
            <li>✔ Marketing-focused development</li>
            <li>✔ End-to-end digital solutions</li>
            <li>✔ Affordable & fast delivery</li>
          </ul>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="max-w-6xl mx-auto mt-24">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Our Services
          </h2>
          <p className="text-gray-600 mt-3">
            Everything you need to build and grow your digital presence
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((s, i) => (
            <div
              key={i}
              className="group border border-gray-200 rounded-2xl p-6 bg-white hover:border-blue-300 hover:shadow-md transition"
            >
              <s.icon className="text-blue-600" size={26} />

              <h3 className="text-lg font-semibold mt-4 group-hover:text-blue-600 transition">
                {s.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="max-w-4xl mx-auto text-center mt-24">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Let’s build something amazing together
        </h2>

        <p className="text-gray-600 mt-4">
          Have a project in mind? We’re ready to turn your idea into reality.
        </p>

        <button className="mt-8 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full text-sm font-medium shadow-md transition">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default AboutPage;