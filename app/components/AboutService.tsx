'use client';
import React from 'react';
import { 

  RefreshCw, 
  ShieldCheck, 
  Eye, 
  Settings, 
  Headphones, 
  Hexagon 
} from 'lucide-react';

/**
 * Bootsland Responsive Features Section
 * Refined for minimal spacing and clear, client-focused messaging.
 */

const services = [
  {
    title: "Money Back Guarantee",
    description: "100% risk-free investment. We offer a full refund if initial milestones don't meet your expectations.",
    icon: <ShieldCheck className="text-blue-500" size={28} />,
    color: "bg-blue-100"
  },
  {
    title: "Unlimited Revisions",
    description: "Precision is our priority. We offer unlimited design and code iterations until your vision is fully realized.",
    icon: <RefreshCw className="text-cyan-500" size={28} />,
    color: "bg-cyan-100"
  },
  {
    title: "Total Transparency",
    description: "Real-time project tracking and direct repository access. No hidden costs or communication gaps.",
    icon: <Eye className="text-blue-400" size={28} />,
    color: "bg-blue-50"
  },
  {
    title: "Enterprise Scalability",
    description: "Modular architecture built to grow with your business without infrastructure rework or downtime.",
    icon: <Settings className="text-indigo-400" size={28} />,
    color: "bg-indigo-50"
  },
  {
    title: "24/7 Expert Support",
    description: "Immediate access to senior technical leads whenever you need assistance or system maintenance.",
    icon: <Headphones className="text-blue-500" size={28} />,
    color: "bg-blue-100"
  }
];

export default function AboutServices() {
  return (
    <div className=" bg-white mb-10 font-sans">
      {/* Reduced py-32 to py-20 to minimize vertical gap */}
      <section className="relative w-full bg-[#050a1f] py-20 px-6 md:px-12 overflow-hidden">
        
        {/* Top Wave Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 fill-white">
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>

        {/* Content Grid - Reduced gap-y and gap-x for tighter layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-10 items-start relative z-10">
          
          {/* Main Title Section - Removed large lg:mt margin */}
          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
              <Hexagon className="text-blue-400 fill-blue-400/20" size={20} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500 leading-tight">
              One Platform, Deep Insight Why Choose Bootsland
            </h2>
            <p className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase">
              Trusted Excellence
            </p>
          </div>

          {/* Feature Cards Loop - Reduced padding and internal gaps */}
          {services.map((item, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col gap-3 p-4 transition-all hover:bg-white/5 rounded-2xl duration-300 border border-transparent hover:border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${item.color} shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 fill-white">
             <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>

      </section>
    </div>
  );
}