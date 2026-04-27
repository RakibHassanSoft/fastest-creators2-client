"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { images } from "../images/image";

/* ---------------- CARD ---------------- */
const Card = ({ src }: { src: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const posRef = useRef(0);
  const dirRef = useRef(1);

  const [maxScroll, setMaxScroll] = useState(0);
  const [ready, setReady] = useState(false);

  const SPEED = 0.4; // 🔥 SAME SPEED FOR ALL CARDS

  const calculate = () => {
    if (!containerRef.current || !imgRef.current) return;

    const containerH = containerRef.current.offsetHeight;
    const imgH = imgRef.current.scrollHeight;

    const diff = Math.max(0, imgH - containerH);

    setMaxScroll(diff);
    posRef.current = 0;
    dirRef.current = 1;
    setReady(true);
  };

  useEffect(() => {
    if (!ready) return;

    let frame: number;

    const animate = () => {
      let next = posRef.current + dirRef.current * SPEED;

      // 🔒 TOP LIMIT
      if (next <= 0) {
        next = 0;
        dirRef.current = 1;
      }

      // 🔒 BOTTOM LIMIT
      if (next >= maxScroll) {
        next = maxScroll;
        dirRef.current = -1;
      }

      posRef.current = next;

      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(-${next}px)`;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [ready, maxScroll]);

  return (
    <div className="rounded-2xl border border-blue-600 bg-white shadow-md hover:shadow-xl transition flex flex-col overflow-hidden">

      {/* VIEWPORT */}
      <div
        ref={containerRef}
        className="
          relative overflow-hidden
          h-[60vw] sm:h-[60vh] md:h-[34rem]
        "
      >
        <div
          ref={imgRef}
          className="will-change-transform"
        >
          <Image
            src={src}
            alt="preview"
            width={900}
            height={3000}
            className="w-full h-auto block"
            onLoadingComplete={calculate}
          />
        </div>
      </div>

      {/* BUTTON */}
      <div className="p-3 sm:p-4 mt-auto">
        <button className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-xl hover:bg-blue-700 transition">
          Contact Now
        </button>
      </div>

    </div>
  );
};

/* ---------------- MAIN ---------------- */
const WebsiteShowcase = () => {
  const [visible, setVisible] = useState(6);

  return (
    <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6">

      {/* TITLE */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-14">
        Sample <span className="text-blue-600">Websites</span>
      </h1>

      {/* GRID */}
      <div className="
        grid gap-5 sm:gap-8
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
      ">
        {images.slice(0, visible).map((img, i) => (
          <Card key={i} src={img} />
        ))}
      </div>

      {/* LOAD MORE */}
      {visible < images.length && (
        <div className="flex justify-center mt-8 sm:mt-10">
          <button
            onClick={() => setVisible((v) => v + 6)}
            className="px-6 sm:px-8 py-2 sm:py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition text-sm sm:text-base"
          >
            See More
          </button>
        </div>
      )}

    </div>
  );
};

export default WebsiteShowcase;