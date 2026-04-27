"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { ArrowRight, Rocket, ShieldCheck, Zap } from "lucide-react";

type Preview = {
  name: string;
  type: string;
  img: string;
};

const WebsiteHero: React.FC = () => {
  const [previews, setPreviews] = useState<Preview[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/previews.json");
        setPreviews(res.data);
      } catch (err) {
        console.error("Failed to load previews:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="relative min-h-screen mx-auto max-w-7xl bg-white text-black overflow-hidden pt-24 lg:pt-32">

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              We design & build{" "}
              <span className="text-blue-600">
                high-converting SaaS, LMS & E-commerce platforms
              </span>
            </h1>

            <p className="mt-5 text-gray-600 max-w-xl mx-auto lg:mx-0">
              We help founders turn ideas into powerful digital products.
            </p>

            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Zap size={14} className="text-blue-600" />
                Fast development
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck size={14} className="text-blue-600" />
                Secure architecture
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Rocket size={14} className="text-blue-600" />
                Built for growth
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md flex items-center gap-2">
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
                className="group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
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
                  <p className="text-[11px] text-gray-700 truncate">
                    {item.name}
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