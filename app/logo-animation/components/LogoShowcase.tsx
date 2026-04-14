"use client";

import React from "react";

type VideoItem = {
  title: string;
  url: string;
};

const videos: VideoItem[] = [
  { title: "Tech Brand Intro", url: "xof9iszgUE8" },
  { title: "Startup Logo Reveal", url: "dzkPE0bGULA" },
  { title: "Agency Motion Logo", url: "GvLq0ulxHY0" },
  { title: "SaaS Logo Animation", url: "toFXZAhJRRU" },
  { title: "Minimal Logo Reveal", url: "p2FYXTocqtM" },
  { title: "Modern Brand Intro", url: "NukttbFEMQ0" },
];

export default function LogoShowcase() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">

   

      <div className="relative max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            Logo <span className="text-blue-600">Showcase</span>
          </h2>
          <p className="text-slate-500 mt-3 text-sm md:text-base">
            Premium 1080×1080 motion branding showcase
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {videos.map((item, index) => (
            <div
              key={index}
              className="group text-black  border border-blue-100  shadow-sm  "
            >

              {/* TITLE */}
              <div className="px-6 pt-6 pb-3">
                <h3 className="text-xl font-semibold text-black ">
                  {item.title}
                </h3>
                <div className="w-10 h-0.5 bg-white mt-2 rounded-full" />
              </div>

              {/* SQUARE VIDEO */}
              <div className="pb-3">
  <div className="relative w-full aspect-video bg-black overflow-hidden border border-blue-100 rounded-xl">

    <iframe
      className="absolute inset-0 w-full h-full"
      src={`https://www.youtube.com/embed/${item.url}?controls=1&modestbranding=1&rel=0&iv_load_policy=3`}
      title={item.title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />

  </div>
</div>

              {/* LABEL */}
              <div className="flex justify-end px-3 pb-2">
                <span className="text-lg font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 ">
                  Trailer
                </span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}