"use client";

import React from "react";
import { Bot, Database, Globe, Zap, ArrowRight } from "lucide-react";

const ApifyHero = () => {
  return (
    <section className="bg-white text-black pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl">

          <p className="text-sm text-blue-600 font-semibold tracking-wide">
            Apify Automation & Data Engineering Solutions
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mt-4">
            We help businesses{" "}
            <span className="text-blue-600">
              collect, automate & scale data systems
            </span>{" "}
            using Apify.
          </h1>

          <p className="text-gray-600 mt-6 leading-relaxed text-base md:text-lg">
            We design and build production-ready scraping systems, automation pipelines,
            and AI-powered data workflows that turn raw web data into business intelligence.
            From startups to enterprise systems — we deliver scalable solutions that actually work in production.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-500 transition inline-flex items-center gap-2">
              Get a Free Consultation <ArrowRight size={16} />
            </button>

           

          </div>

        </div>

        {/* FEATURES */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mt-14">

          {[
            {
              icon: Globe,
              title: "Web Data Extraction",
              desc: "Scrape any website at scale with reliability",
            },
            {
              icon: Database,
              title: "Data Engineering",
              desc: "Turn raw data into structured insights",
            },
            {
              icon: Bot,
              title: "Automation Systems",
              desc: "AI-powered workflows & smart automation",
            },
            {
              icon: Zap,
              title: "High Performance",
              desc: "Fast, scalable and production-ready systems",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group border border-gray-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition bg-white"
            >

              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition">
                <item.icon size={18} />
              </div>

              <h3 className="text-sm font-semibold mt-4 group-hover:text-blue-600 transition">
                {item.title}
              </h3>

              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ApifyHero;