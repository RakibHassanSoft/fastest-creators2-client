'use client';
import React from 'react';
import Image from 'next/image';
import {
  RefreshCw,
  ShieldCheck,
  Eye,
  Settings,
  Headphones,
  Hexagon
} from 'lucide-react';

const services = [
  {
    title: "Money Back Guarantee",
    description:
      "100% risk-free investment. Full refund if expectations are not met.",
    icon: <ShieldCheck size={26} />,
  },
  {
    title: "Unlimited Revisions",
    description:
      "We iterate until perfection with unlimited revisions included.",
    icon: <RefreshCw size={26} />,
  },
  {
    title: "Total Transparency",
    description:
      "Real-time tracking and full repository access. No hidden cost.",
    icon: <Eye size={26} />,
  },
  {
    title: "Enterprise Scalability",
    description:
      "Built with scalable architecture to grow with your business.",
    icon: <Settings size={26} />,
  },
  {
    title: "24/7 Expert Support",
    description:
      "Get direct help from senior engineers anytime.",
    icon: <Headphones size={26} />,
  },
];

export default function AboutServices() {
  return (
    <section className="bg-[#050a1f] py-20 px-6 md:px-12 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-125 h-125 bg-blue-600/20 blur-[120px] -top-30 -left-30 rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          
          {/* Label */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600/20 border border-blue-500/30">
              <Hexagon className="text-blue-400" size={20} />
            </div>
            <span className="text-blue-400 text-xs tracking-widest uppercase">
              Why Choose Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            One Platform. <br />
            <span className="text-blue-500">Powerful Results.</span>
          </h2>

          {/* Description */}
          <p className="text-slate-400 max-w-md">
            We deliver scalable, transparent, and high-performance solutions
            designed for long-term business growth.
          </p>

          {/* IMAGE */}
          <div className="relative w-full h-65 md:h-80 mt-6">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
              alt="Analytics dashboard"
              fill
              className="rounded-2xl object-cover border border-white/10 shadow-xl"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE - PILL CARDS */}
        <div className="grid sm:grid-cols-2 gap-10">
          {services.map((item, idx) => (
            <div key={idx} className="relative group">

              {/* ICON */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                <div className="w-16 h-16 rounded-full bg-linear-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>
              </div>

              {/* CARD */}
              <div className="pt-14 pb-6 px-6 text-center border-2 border-blue-500/60 rounded-[50px] bg-white/5 backdrop-blur hover:bg-white/10 hover:border-blue-400 transition-all duration-300">

                <h3 className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}