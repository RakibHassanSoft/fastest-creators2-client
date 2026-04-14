"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Rocket, ShieldCheck, Zap } from "lucide-react";

const WebsiteHero: React.FC = () => {
  const previews = [
    {
      name: "SaaS Dashboard",
      type: "SaaS",
      img: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "LMS Learning Platform",
      type: "Education",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "E-commerce Storefront",
      type: "Ecommerce",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Automation SaaS Tool",
      type: "Automation",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Web Scraper Platform",
      type: "Scraper",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Developer Portfolio",
      type: "Portfolio",
      img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Creative Agency Site",
      type: "Agency",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Startup Landing Page",
      type: "Landing",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "CRM Dashboard",
      type: "CRM",
      img: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Fintech Analytics App",
      type: "Fintech",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Booking Platform UI",
      type: "Booking",
      img: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "AI Chat Interface",
      type: "AI Product",
      img: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=900&q=80",
    },
  ];


  return (
    <section className="relative  min-h-screen mx-w-7xl mx-auto bg-white text-black overflow-hidden pt-24 lg:pt-32">
      {/* background glow */}
     

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              We design & build{" "}
              <span className="text-blue-600">
                high-converting SaaS, LMS & E-commerce platforms
              </span>{" "}
              that scale with your business.
            </h1>

            <p className="mt-5 text-gray-600 max-w-xl mx-auto lg:mx-0">
              We help founders turn ideas into powerful digital products — with
              modern UI, scalable architecture, and conversion-driven design.
            </p>

            {/* FEATURES */}
            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Zap size={14} className="text-blue-600" />
                Fast, production-ready development
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck size={14} className="text-blue-600" />
                Secure & scalable architecture
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Rocket size={14} className="text-blue-600" />
                Built for growth & conversions
              </div>
            </div>

            {/* STATS */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-semibold">50+</p>
                <p className="text-gray-500">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-semibold">98%</p>
                <p className="text-gray-500">Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-semibold">2–4 W</p>
                <p className="text-gray-500">Delivery</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md flex items-center justify-center gap-2">
                Start Project <ArrowRight size={16} />
              </button>

              <button className="px-6 py-3 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-50 transition">
                View Case Studies
              </button>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {previews.map((item, i) => (
              <div
                key={i}
                className="group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm"
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="h-28 sm:h-32 w-full object-cover group-hover:scale-105 transition"
                />
                <div className="p-2">
                  <p className="text-[11px] text-blue-600 font-medium">
                    {item.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default WebsiteHero;