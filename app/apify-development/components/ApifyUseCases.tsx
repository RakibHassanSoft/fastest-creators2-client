"use client";

import React from "react";
import {
  ShoppingCart,
  Users,
  BarChart3,
  Building2,
  Search,
  Briefcase,
  Globe,
  TrendingUp,
  Newspaper,
  MapPin,
  MessageSquare,
  Database,
} from "lucide-react";

const useCases = [
  {
    title: "E-commerce Intelligence",
    desc: "Price tracking, product monitoring & competitor analysis.",
    icon: ShoppingCart,
  },
  {
    title: "Lead Generation System",
    desc: "Extract verified B2B contacts & decision makers.",
    icon: Users,
  },
  {
    title: "Market Analytics Engine",
    desc: "Transform raw data into business insights.",
    icon: BarChart3,
  },
  {
    title: "Real Estate Scraping",
    desc: "Property listings, pricing trends & location data.",
    icon: Building2,
  },
  {
    title: "SEO SERP Tracking",
    desc: "Keyword ranking & search engine monitoring tools.",
    icon: Search,
  },
  {
    title: "Job Market Data",
    desc: "Collect hiring trends & company job posts.",
    icon: Briefcase,
  },
  {
    title: "Global Data Crawling",
    desc: "Large-scale distributed web scraping systems.",
    icon: Globe,
  },
  {
    title: "Stock & Finance Data",
    desc: "Financial insights & market movement tracking.",
    icon: TrendingUp,
  },
  {
    title: "News Monitoring System",
    desc: "Real-time news scraping & sentiment tracking.",
    icon: Newspaper,
  },
  {
    title: "Local Business Data",
    desc: "Google Maps business extraction & reviews.",
    icon: MapPin,
  },
  {
    title: "Social Media Mining",
    desc: "Extract posts, comments & engagement data.",
    icon: MessageSquare,
  },
  {
    title: "Big Data Collection",
    desc: "Structured datasets for AI & analytics systems.",
    icon: Database,
  },
];

const ApifyUseCases = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Real-World Scraping Use Cases
          </h2>

          <p className="text-gray-600 mt-3">
            Production-grade Apify systems powering analytics, automation,
            and enterprise data pipelines across industries.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">

          {useCases.map((item, i) => (
            <div
              key={i}
              className="group border border-gray-200 rounded-xl p-4 bg-white hover:border-blue-400 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between">

                <item.icon
                  size={18}
                  className="text-blue-600 group-hover:scale-110 transition"
                />

                <span className="text-[10px] text-gray-400 uppercase">
                  API
                </span>

              </div>

              <h3 className="text-sm font-semibold mt-3 group-hover:text-blue-600 transition">
                {item.title}
              </h3>

              <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                {item.desc}
              </p>

              {/* small tag */}
              <div className="mt-3 flex gap-1 flex-wrap">
                <span className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full">
                  Apify
                </span>
                <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                  Automation
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-semibold">
            Need custom scraping system?
          </h3>

          <p className="text-gray-600 mt-2">
            We build enterprise-grade Apify actors tailored to your business.
          </p>

          <button className="mt-6 bg-blue-600 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-blue-500 transition">
            Get Custom Solution
          </button>
        </div>

      </div>
    </section>
  );
};

export default ApifyUseCases;