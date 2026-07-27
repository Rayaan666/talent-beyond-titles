import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import StatsRow from './StatsRow';
import RegistrationCountdown from './RegistrationCountdown';

const HeroContent = () => {
  return (
    <div className="relative z-10 w-full max-w-[700px] flex flex-col justify-center min-h-full py-[120px] lg:py-[140px]">
      
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4 lg:mb-6 hero-eyebrow opacity-0 translate-y-[20px]">
        <div className="w-8 h-[1px] bg-[#B08D57]" />
        <span className="text-[10px] md:text-[11px] font-manrope text-[#B08D57] uppercase tracking-[0.2em] font-medium">
          The Premier Corporate Talent Experience
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="font-cormorant leading-[0.94] tracking-[-0.035em] mb-6 flex flex-col">
        <div className="overflow-hidden">
          <span className="block hero-headline-line translate-y-full text-[#F6F1E8] text-[clamp(44px,5.2vw,96px)] whitespace-nowrap">
            Where Talent
          </span>
        </div>
        <div className="overflow-hidden">
          <span className="block hero-headline-line translate-y-full text-transparent bg-clip-text bg-gradient-to-r from-[#D1AE72] to-[#927044] text-[clamp(44px,5.2vw,96px)] whitespace-nowrap pb-2">
            Meets Prestige.
          </span>
        </div>
      </h1>

      {/* Description */}
      <div className="overflow-hidden max-w-[520px]">
        <p className="text-[15px] md:text-[17px] font-manrope text-[#F6F1E8]/75 leading-[1.6] hero-description opacity-0 translate-y-[20px]">
          An exclusive annual showcase where the extraordinary emerges from within the world's finest organizations.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-6 mt-8 hero-ctas opacity-0 translate-y-[20px]">
        <a 
          href="#register" 
          className="group relative flex items-center justify-center gap-3 px-8 h-[52px] bg-[#B08D57] text-[#050505] font-manrope text-[11px] md:text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-[#D1AE72] transition-colors duration-300"
        >
          <span>Register Now</span>
          <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
        </a>
        
        <button className="group flex items-center gap-4 text-[#F6F1E8] hover:text-[#B08D57] transition-colors duration-300">
          <div className="w-11 h-11 rounded-full border border-[#B08D57]/40 flex items-center justify-center relative group-hover:border-[#B08D57]">
            <Play size={14} className="fill-current ml-1" />
          </div>
          <span className="text-[11px] font-manrope uppercase tracking-[0.15em] font-medium">Watch Highlights</span>
        </button>
      </div>

      {/* Stats and Countdown Row */}
      <div className="mt-10 lg:mt-12 flex flex-col gap-6">
        <div className="hero-stats opacity-0 translate-y-[20px]">
          <StatsRow />
        </div>
        
        <div className="hero-countdown opacity-0 translate-y-[20px]">
          <RegistrationCountdown />
        </div>
      </div>

    </div>
  );
};

export default HeroContent;
