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
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="p-6 border border-gray-200 rounded-lg hover:border-blue-600 transition"
              >
                <div className="w-9 h-9 flex items-center justify-center border border-blue-200 text-blue-600 rounded-md mb-4">
                  <Icon size={16} />
                </div>

                <h3 className="text-2xl font-semibold text-black">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            );
          })}

          {/* TRUST BLOCK */}
          <div className="col-span-2 border border-gray-200 rounded-lg p-6 flex justify-between items-center hover:border-blue-600 transition">
            <div>
              <p className="text-xs text-blue-600 uppercase tracking-wide">
                Trusted Worldwide
              </p>
              <p className="text-base font-semibold mt-1 text-black">
                Top Rated Digital Studio
              </p>
            </div>

            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <Image
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt={`Client avatar ${i}`}
                  width={32}
                  height={32}
                  className="rounded-full border border-white"
                />
              ))}
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center">
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
