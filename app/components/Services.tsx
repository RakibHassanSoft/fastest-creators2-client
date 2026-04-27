"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import {
  Code2,
  Smartphone,
  Clapperboard,
  Palette,
  Megaphone,
  Hexagon,
  CheckCircle2,
} from "lucide-react";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      title: "Web Development",
      description: "High-performance web apps using Next.js & React.",
      icon: <Code2 size={30} />,
      features: ["Custom UI", "API", "Cloud"],
    },
    {
      title: "App Development",
      description: "iOS & Android apps with seamless performance.",
      icon: <Smartphone size={30} />,
      features: ["Native", "Cross-platform", "Secure"],
    },
    {
      title: "Logo Animation",
      description: "Motion graphics that elevate your brand identity.",
      icon: <Hexagon size={30} />,
      features: ["2D/3D", "Smooth", "Export"],
    },
    {
      title: "Logo Design",
      description: "Unique and memorable brand identities.",
      icon: <Palette size={30} />,
      features: ["Brand Kit", "Vector", "Creative"],
    },
    {
      title: "Video Editing",
      description: "Professional storytelling with cinematic quality.",
      icon: <Clapperboard size={30} />,
      features: ["4K", "Color", "Social"],
    },
    {
      title: "Digital Marketing",
      description: "Growth-driven campaigns for maximum ROI.",
      icon: <Megaphone size={30} />,
      features: ["SEO", "Ads", "Growth"],
    },
  ];

  useEffect(() => {
    let interval: any;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % services.length);
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  return (
    <section className="py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="max-w-2xl mb-20">
          <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
            Expert Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Our <span className="text-blue-600">Premium</span> Services
          </h2>
          <p className="text-gray-500 text-lg">
            We provide scalable and high-quality digital solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => {
                  setIsAutoPlaying(false);
                  setActiveIndex(index);
                }}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="relative"
              >
                {/* ICON */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`
                      w-24 h-24 rounded-full flex items-center justify-center text-white
                      bg-linear-to-r from-blue-500 to-blue-600
                      transition-all duration-300
                      ${isActive ? "scale-125 shadow-xl" : "scale-100"}
                    `}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* CARD */}
                <div
                  className={`
                    pt-20 pb-10 px-8 text-center
                    border-4 rounded-[80px]
                    transition-all duration-300
                    ${
                      isActive
                        ? "border-blue-600 bg-white border-8 shadow-xl scale-105 -translate-y-2"
                        : "border-blue-400 bg-transparent border-2"
                    }
                  `}
                >
                  <h3 className="text-xl font-bold text-black mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* FEATURES */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {service.features.map((f, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 px-3 py-1 text-[10px] font-semibold rounded-full bg-blue-100 text-blue-700"
                      >
                        <CheckCircle2 size={10} />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;