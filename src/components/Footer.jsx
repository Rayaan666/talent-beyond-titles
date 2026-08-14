import React from 'react';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#050507] pt-12 pb-10 px-6 md:px-16 overflow-hidden">
      
      {/* ── Brand Gradient Section Divider (Purple & Orange) ── */}
      <div className="absolute top-0 left-0 right-0 flex flex-col items-stretch pointer-events-none z-10">
        <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent 0%, #5F4DCE 30%, #FD4300 70%, transparent 100%)' }} />
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 10%, rgba(95,77,206,0.2) 40%, rgba(253,67,0,0.2) 60%, transparent 90%)' }} />
      </div>

      {/* Decorative Atmosphere Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[250px] rounded-full pointer-events-none z-0 opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(95, 77, 206, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />
      <div className="absolute top-0 right-1/4 w-[500px] h-[250px] rounded-full pointer-events-none z-0 opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(253, 67, 0, 0.12) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-8">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start gap-5">
            <a href="/" className="flex items-center shrink-0">
              <img src="/logo.png" alt="Talent Beyond Titles Logo" className="h-9 w-auto object-contain" />
            </a>
            <p className="font-manrope text-[14px] text-[#A09D98] leading-relaxed max-w-[360px]">
              THE UAE'S FIRST INTER-CORPORATE EMPLOYEE PERFORMING ARTS COMPETITION. BE PART OF SOMETHING GREATER.
            </p>
            <a
              href="mailto:tbt@theedgeevents.co?subject=Subscribe%20to%20TBT%20Updates"
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-manrope text-[12px] font-bold uppercase tracking-[0.12em] bg-[#00C4B3] hover:bg-[#00b0a1] text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,196,179,0.3)] hover:shadow-[0_0_22px_rgba(0,196,179,0.5)]"
            >
              Subscribe Now
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 className="font-manrope text-[11px] font-bold uppercase tracking-[0.2em] text-[#FAFAF8]/90">
              Navigation
            </h4>
            <div className="flex flex-col gap-3 font-manrope text-[13px] text-[#A09D98]">
              <a href="/" className="hover:text-[#5F4DCE] transition-colors duration-300 w-fit flex items-center gap-1 group">
                Home <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#categories" className="hover:text-[#5F4DCE] transition-colors duration-300 w-fit flex items-center gap-1 group">
                Categories <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#journey" className="hover:text-[#5F4DCE] transition-colors duration-300 w-fit flex items-center gap-1 group">
                How It Works <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#faqs" className="hover:text-[#5F4DCE] transition-colors duration-300 w-fit flex items-center gap-1 group">
                FAQs <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <h4 className="font-manrope text-[11px] font-bold uppercase tracking-[0.2em] text-[#FAFAF8]/90">
              Contact & Support
            </h4>
            <div className="flex flex-col gap-4 font-manrope text-[13px] text-[#A09D98]">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#1c1916] flex items-center justify-center text-[#5F4DCE]">
                  <Phone size={14} />
                </span>
                <span className="font-semibold text-[#FAFAF8]/90">+971 54 307 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#1c1916] flex items-center justify-center text-[#FD4300]">
                  <Mail size={14} />
                </span>
                <span className="font-semibold text-[#FAFAF8]/90">tbt@theedgeevents.co</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-[#A09D98]/10" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-manrope text-[11px] tracking-[0.1em] text-[#A09D98]/60 uppercase text-center sm:text-left">
            © {new Date().getFullYear()} TALENT BEYOND TITLES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 font-manrope text-[11px] tracking-[0.1em] uppercase text-[#A09D98]/60">
            <a href="#" className="hover:text-[#5F4DCE] transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-[#FD4300] transition-colors duration-300">Terms of Service</a>
            <a href="#contact" className="hover:text-[#5F4DCE] transition-colors duration-300">Contact Us</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
