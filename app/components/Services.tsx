"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Smartphone, 
  Clapperboard, 
  Palette, 
  Megaphone, 
  Hexagon,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      title: "Web Development",
      description: "High-performance, SEO-optimized web applications built with modern frameworks like Next.js and React.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Custom UI/UX", "API Integration", "Cloud Hosting"]
    },
    {
      title: "App Development",
      description: "Seamless iOS and Android experiences tailored to your business needs with robust performance.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Native Performance", "Cross-Platform", "Secure Auth"]
    },
    {
      title: "Logo Animation",
      description: "Dynamic motion graphics that breathe life into your brand and make a lasting first impression.",
      icon: <Hexagon className="w-6 h-6" />,
      features: ["2D/3D Motion", "Smooth Loops", "SVG Export"]
    },
    {
      title: "Logo Design",
      description: "Crafting iconic visual identities that communicate your brand's core values at a single glance.",
      icon: <Palette className="w-6 h-6" />,
      features: ["Brand Guidelines", "Vector Assets", "Unique Concepts"]
    },
    {
      title: "Video Editing",
      description: "Professional storytelling through precise cutting, color grading, and immersive sound design.",
      icon: <Clapperboard className="w-6 h-6" />,
      features: ["4K Post-Prod", "Color Grading", "Social Optimization"]
    },
    {
      title: "Digital Marketing",
      description: "Strategic campaigns designed to scale your reach and maximize conversion rates effectively.",
      icon: <Megaphone className="w-6 h-6" />,
      features: ["SEO Strategies", "PPC Ads", "Social Growth"]
    }
  ];

  // Automatic Cycling Logic
  useEffect(() => {
    let interval : any;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % services.length);
      }, 3000); // Changes every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  return (
    <section className="py-24 bg-white text-black font-sans selection:bg-blue-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-gray-100 pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-12 h-0.5 bg-blue-600"></span>
              <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Expert Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold  tracking-tight leading-none mb-6">
              Our <span className="text-blue-600">Premium</span> Services.
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
              Experience the power of dedicated expertise. We automatically showcase our diverse skills, handled by industry-leading specialists.
            </p>
          </div>
          <div className="hidden lg:block pb-2">
            
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className={`group relative overflow-hidden rounded-3xl p-8 border transition-all duration-700 cursor-default
                  ${isActive 
                    ? 'bg-blue-600 border-blue-600 shadow-2xl shadow-blue-200 -translate-y-3' 
                    : 'bg-white border-gray-100'}`}
              >
                {/* Header inside card */}
                <div className="flex justify-between items-start mb-10">
                  <div className={`p-4 rounded-2xl transition-all duration-500 
                    ${isActive ? 'bg-white text-blue-600 shadow-lg' : 'bg-gray-50 text-black'}`}>
                    {service.icon}
                  </div>
                  <div className={`transition-all duration-500 ${isActive ? 'text-white opacity-100 translate-x-0' : 'text-gray-200 opacity-0 -translate-x-4'}`}>
                    <ArrowUpRight size={28} />
                  </div>
                </div>

                {/* Title & Body */}
                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 font-blue-600
                    ${isActive ? 'text-white' : 'text-gray-900'}
                    `}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 transition-colors duration-500
                    ${isActive ? 'text-blue-50' : 'text-gray-500'}`}>
                    {service.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, fIdx) => (
                      <div 
                        key={fIdx}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-500
                          ${isActive ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-600'}`}
                      >
                        <CheckCircle2 size={10} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress bar for active card */}
                {isActive && isAutoPlaying && (
                  <div className="absolute bottom-0 left-0 h-1 bg-white/30 animate-progress-grow origin-left w-full"></div>
                )}

                {/* Subtle background number */}
                <div className={`absolute -bottom-6 -right-6 text-9xl font-black transition-all duration-1000 select-none pointer-events-none
                  ${isActive ? 'text-white opacity-5 translate-y-0 scale-110' : 'text-gray-50 opacity-0 translate-y-10'}`}>
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Indicator */}
        <div className="mt-12 flex justify-center gap-2 lg:hidden">
          {services.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-8 bg-blue-600' : 'w-2 bg-gray-200'}`}
            />
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes progress-grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-progress-grow {
          animation: progress-grow 3s linear infinite;
        }
      `}} />
    </section>
  );
};


export default Services;