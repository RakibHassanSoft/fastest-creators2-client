import React from 'react';
import { 
  ShieldCheck, 
  Mail, 
  FileText, 
  UserCheck, 
  Award, 
  ShieldAlert, 
  Fingerprint,
  Zap,
  PhoneCall,
  CalendarCheck
} from 'lucide-react';

// Custom WhatsApp Icon for Brand Consistency
const WhatsAppIcon = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ContractUs = () => {
  return (
    <div className="bg-white text-black font-sans selection:bg-blue-100">
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Simple Personal Commitment */}
          <div className="lg:col-span-8 space-y-12 py-4">
            <header className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest">
                <ShieldCheck size={14} />
                Our Founder&lsquo;s Promise
              </div>
              <h1 className="text-4xl font-black tracking-tight text-gray-900 leading-[1.1]">
                I check every step, <br />
                <span className="text-blue-600">so you don&lsquo;t have to.</span>
              </h1>
            </header>

            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-blue-900 rounded-full" />
              <p className="text-2xl font-medium text-gray-600 leading-relaxed max-w-2xl italic">
                &rdquo;I personally watch over every part of your project. From the very first day until we hand you the final product, I&apos;m there to make sure everything is perfect.&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                   <UserCheck size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-sm">Managing Director</p>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Platinum Core</p>
                </div>
              </div>
            </div>

            <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-gray-100">
              <div className="space-y-2">
                <h4 className="font-bold flex items-center gap-2 text-gray-900">
                  <Award size={18} className="text-blue-600" /> Guaranteed Quality
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Nothing moves forward until I&apos;ve seen it myself. We don&apos;t take shortcuts.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold flex items-center gap-2 text-gray-900">
                  <Fingerprint size={18} className="text-blue-600" /> Full Transparency
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  You’ll know exactly where things stand. We keep everything clear and honest.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Blue Contact Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-2xl shadow-blue-200">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <ShieldAlert className="text-blue-100" size={20} /> Get in Touch
              </h3>
              
              <div className="space-y-4">
                {/* Email Option */}
                <a 
                  href="mailto:legal@premium.com"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-all group"
                >
                  <div className="bg-white p-3 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-blue-800/20">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-100 uppercase tracking-widest opacity-80">Send an Email</p>
                    <p className="font-bold text-white">Contract by Email</p>
                  </div>
                </a>

                {/* WhatsApp Option */}
                <a 
                  href="https://wa.me/yournumber"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-green-500/20 transition-all group"
                >
                  <div className="bg-green-500 p-3 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-green-900/20">
                    <WhatsAppIcon className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-green-100 uppercase tracking-widest opacity-80">Quick Message</p>
                    <p className="font-bold text-white">Direct WhatsApp</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <p className="text-[10px] text-blue-100 font-bold uppercase tracking-widest mb-4 opacity-60">Your data is safe</p>
                <div className="flex justify-center gap-4 opacity-40">
                  <ShieldCheck size={24} />
                  <Award size={24} />
                  <Fingerprint size={24} />
                </div>
              </div>
            </div>

            {/* Redesigned Project Details - More Relevant Data */}
            <div className="p-8 bg-gray-50 border border-gray-100 rounded-3xl space-y-6">
              <h4 className="text-xs font-black uppercase tracking-tighter text-gray-400 mb-2">Project Standards</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1"><Zap size={14} className="text-blue-600" /></div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Priority Response</p>
                    <p className="text-[11px] text-gray-500">Replies within 2 business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1"><CalendarCheck size={14} className="text-blue-600" /></div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Weekly Progress</p>
                    <p className="text-[11px] text-gray-500">Founder-verified updates sent Friday</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1"><PhoneCall size={14} className="text-blue-600" /></div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Founder Direct Line</p>
                    <p className="text-[11px] text-gray-500">Available for critical build decisions</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-blue-600">
                    <FileText size={14} />
                    <span className="text-[10px] uppercase font-black tracking-widest">Build Protocol v2.4</span>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" title="Active"></span>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
         {/* Call to Action */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-black rounded-3xl ">
          <div>
            <h3 className="text-2xl text-white font-bold">Ready to scale your business?</h3>
            <p className="text-gray-200 mt-1">Get a free consultation and audit today.</p>
          </div>
          <button className="w-full md:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all rounded-full shadow-lg shadow-blue-900/20">
            Book My Audit
          </button>
        </div>
        
      </main>
    </div>
  );
};

export default ContractUs;