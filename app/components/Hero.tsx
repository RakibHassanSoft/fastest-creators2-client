"use client";
import React from "react";
import Image from "next/image";
import {
  MessageCircle,
  Mail,
  Users,
  CheckCircle,
  TrendingUp,
  Briefcase,
} from "lucide-react";

const Hero = () => {
  const stats = [
    { id: 1, label: "Satisfied Clients", value: "500+", icon: Users },
    { id: 2, label: "Success Rate", value: "99%", icon: TrendingUp },
    { id: 3, label: "Active Projects", value: "12", icon: Briefcase },
    { id: 4, label: "Experience", value: "8+ Yrs", icon: CheckCircle },
  ];

  return (
    <div className=" bg-white  text-black font-sans ">
      {/* NAV */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-md" />
          <span className="text-lg font-semibold tracking-tight">BRAND</span>
        </div>

        <button className="px-5 py-2 text-sm font-medium border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
          Contact
        </button>
      </nav>

      {/* HERO */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="space-y-6">
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
            Premium Digital Agency
          </span>

          <h1 className="text-5xl lg:text-6xl font-semibold leading-tight text-black">
            Build <span className="text-blue-600">Scalable</span> Digital
            Products
            <br />
            That Drive Real Growth.
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            We design and develop high-performance systems and web solutions
            that combine clean engineering with modern business strategy.
          </p>

          {/* CTA */}
          <div className="flex gap-4 pt-2">
            <a
              href="https://wa.me/yournumber"
              className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-2 px-5 py-3 border border-gray-300 text-sm font-medium rounded-md hover:border-blue-600 hover:text-blue-600 transition"
            >
              <Mail size={18} />
              Email
            </a>
          </div>
        </div>

        {/* RIGHT */}
        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="
          p-6 rounded-2xl
          bg-linear-to-br from-blue-950 via-blue-900 to-blue-950
          border border-white/10
          text-white
          shadow-sm shadow-blue-950/40
          hover:shadow-blue-900/50
          hover:-translate-y-1
          transition-all duration-300
        "
              >
                {/* ICON */}
                <div
                  className="
          w-10 h-10 flex items-center justify-center
          rounded-xl mb-4
          bg-white/10 border border-white/10
        "
                >
                  <Icon size={18} className="text-white" />
                </div>

                {/* VALUE */}
                <h3 className="text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </h3>

                {/* LABEL */}
                <p className="text-sm text-blue-200 mt-1">{stat.label}</p>
              </div>
            );
          })}

          {/* TRUST BLOCK */}
          <div
            className="
    col-span-2
    rounded-2xl p-6
    bg-linear-to-r from-blue-950 via-blue-900 to-blue-950
    border border-white/10
    text-white
    flex justify-between items-center
    shadow-sm shadow-blue-950/40
    hover:shadow-blue-900/50
    transition-all duration-300
  "
          >
            <div>
              <p className="text-xs text-blue-300 uppercase tracking-widest">
                Trusted Worldwide
              </p>

              <p className="text-lg font-semibold mt-1 text-white">
                Top Rated Digital Studio
              </p>
            </div>

            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <Image
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt={`Client avatar ${i}`}
                  width={34}
                  height={34}
                  className="rounded-full border border-blue-900"
                />
              ))}

              <div
                className="
        w-9 h-9 rounded-full
        bg-white text-blue-900
        text-[11px] font-bold
        flex items-center justify-center
        border border-blue-900
      "
              >
                +1k
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
