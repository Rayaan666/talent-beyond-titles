import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import RegistrationCountdown from './RegistrationCountdown';

const HeroContent = () => {
  return (
    <div className="relative z-10 w-full max-w-[700px] flex flex-col justify-center min-h-full py-[120px] lg:py-[140px]">
      
      {/* Main Headline */}
      <h1 className="font-cormorant leading-[1.1] tracking-[-0.03em] mb-6 flex flex-col">
        <div className="overflow-hidden" style={{ transform: 'translateX(-0.8em)' }}>
          <span className="block hero-headline-line translate-y-full text-[#F6F1E8] text-[clamp(30px,3.8vw,72px)] whitespace-normal">
            THE UAE'S FIRST
          </span>
        </div>
        <div className="overflow-hidden">
          <span className="block hero-headline-line translate-y-full text-[#FD4300] text-[clamp(30px,3.8vw,72px)] whitespace-normal pb-2">
            INTER-CORPORATE EMPLOYEE PERFORMING ARTS COMPETITION
          </span>
        </div>
      </h1>

      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-6 mt-8 hero-ctas opacity-0 translate-y-[20px]">
        <a 
          href="#contact" 
          className="group relative flex items-center justify-center gap-3 px-8 h-[52px] bg-[#5F4DCE] text-white font-manrope text-[11px] md:text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-[#7564E8] hover:shadow-[0_0_20px_rgba(95,77,206,0.55)] transition-all duration-300"
        >
          <span>Register Now</span>
          <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Countdown Row */}
      <div className="mt-10 lg:mt-12 flex flex-col gap-6">
        <div className="hero-countdown opacity-0 translate-y-[20px]">
          <RegistrationCountdown />
        </div>
      </div>

    </div>
  );
};

export default HeroContent;
