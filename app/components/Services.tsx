"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Settings, 
  BarChart3, 
  PlaySquare, 
  PenTool, 
  Video 
} from 'lucide-react';

/**
 * Service Section Component
 * * Features:
 * - Responsive carousel with "swap" animation using Framer Motion
 * - Blue color palette with gradients
 * - Auto-rotation logic
 * - Lucide-React icons for each service
 */

const services = [
  {
    title: "Web Development",
    description: "Building responsive, high-performance websites tailored to your brand's unique needs and goals.",
    icon: <Code2 size={32} />,
  },
  {
    title: "API Development",
    description: "Creating robust and scalable backend systems to power your applications and integrations.",
    icon: <Settings size={32} />,
  },
  {
    title: "Digital Marketing",
    description: "Strategic campaigns designed to increase your online presence and drive meaningful engagement.",
    icon: <BarChart3 size={32} />,
  },
  {
    title: "Logo Animation",
    description: "Bringing your brand identity to life with smooth, professional motion graphics and transitions.",
    icon: <PlaySquare size={32} />,
  },
  {
    title: "Logo Design",
    description: "Crafting iconic visual identities that resonate with your target audience and stand the test of time.",
    icon: <PenTool size={32} />,
  },
  {
    title: "Video Editing",
    description: "Professional post-production to tell your story through high-quality visual content and sound.",
    icon: <Video size={32} />,
  }
];

const Services = () => {
  const [index, setIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Helper to get relative indices for the "Left - Center - Right" layout
  const getIndex = (offset: number) => {
    return (index + offset + services.length) % services.length;
  };

  const visibleIndices = [getIndex(-1), getIndex(0), getIndex(1)];

  return (
    <div className=" flex flex-col items-center justify-center p-6 md:p-12 font-sans overflow-hidden">
      {/* Header Section */}
      <div className="text-center  max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-4"
        >
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white rotate-45">
            <div className="-rotate-45">
              <Code2 size={24} />
            </div>
          </div>
        </motion.div>
        
        <h5 className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4">
          SOLUTIONS FOR ALL YOUR NEEDS
        </h5>
        <h1 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">
          All The Digital Services That Are <br className="hidden md:block" />
          <span className="text-blue-600">Convenient For You</span>
        </h1>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl flex items-center justify-center gap-4 h-112.5">
        <AnimatePresence mode="popLayout">
          {visibleIndices.map((serviceIdx, position) => {
            const isCenter = position === 1;
            const service = services[serviceIdx];
            
            return (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, scale: 0.8, x: position === 0 ? -100 : position === 2 ? 100 : 0 }}
                animate={{ 
                  opacity: isCenter ? 1 : 0.6, 
                  scale: isCenter ? 1.05 : 0.85,
                  x: 0,
                  zIndex: isCenter ? 20 : 10,
                  filter: isCenter ? "blur(0px)" : "blur(1px)"
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`
                  absolute md:relative flex flex-col items-center
                  w-75 md:w-87.5 p-8 rounded-[40px] text-center
                  ${isCenter ? 'bg-white border-4 border-blue-500 shadow-2xl z-20' : 'bg-blue-50/50 hidden md:flex'}
                `}
                style={{
                  borderRadius: isCenter ? '80px 40px 80px 40px' : '60px'
                }}
              >
                {/* Icon Circle */}
                <div className={`
                  w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg
                  ${isCenter 
                    ? 'bg-linear-to-br from-blue-400 to-blue-700 text-white -mt-16' 
                    : 'bg-white text-blue-600 border border-blue-100'}
                `}>
                  {service.icon}
                </div>

                <h3 className={`text-2xl font-bold mb-4 ${isCenter ? 'text-slate-900' : 'text-slate-700'}`}>
                  {service.title}
                </h3>
                
                <p className={`text-sm leading-relaxed ${isCenter ? 'text-slate-500' : 'text-slate-400'}`}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-3 ">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              h-3 transition-all duration-300 rounded-full
              ${index === i ? 'w-8 bg-blue-600' : 'w-3 bg-blue-200 hover:bg-blue-300'}
            `}
            aria-label={`Go to service ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Services;