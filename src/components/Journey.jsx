import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UserPlus, UploadCloud, Search, Star, Trophy, Users, Building2, LayoutGrid, Globe, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ── Custom SVGs for Scenes ──

const DoorwayScene = () => (
  <div className="relative w-24 h-24 mt-4 mx-auto flex items-end justify-center">
    {/* Pedestal Base */}
    <div className="absolute bottom-0 w-24 h-6 border-b border-[#D3AF70]/40 rounded-[50%] shadow-[0_5px_15px_rgba(211,175,112,0.3)]">
      <div className="absolute inset-2 border-b border-[#D3AF70]/60 rounded-[50%]" />
    </div>
    {/* Door Frame */}
    <div className="absolute bottom-3 w-12 h-16 border-t-2 border-r-2 border-l-2 border-[#B08D57] shadow-[0_0_15px_rgba(176,141,87,0.5)]">
      {/* Light coming out */}
      <div className="absolute inset-0 bg-[#F5F0E7] shadow-[0_0_20px_#F5F0E7,0_0_40px_#D3AF70] animate-pulse opacity-90" />
    </div>
    {/* Open Door Flap (skewed) */}
    <div className="absolute bottom-3 left-[calc(50%-24px)] w-10 h-16 bg-[#050505] border border-[#B08D57] origin-left transform skew-y-12 rotate-y-[60deg] z-10" />
    {/* Particles */}
    {[...Array(6)].map((_, i) => (
      <div key={i} className="absolute w-[2px] h-[2px] bg-[#F5F0E7] rounded-full"
        style={{
          left: 40 + Math.random() * 20,
          bottom: 12 + Math.random() * 40,
          boxShadow: '0 0 4px #F5F0E7',
          animation: `float-up ${2 + Math.random()*2}s infinite linear`,
          opacity: 0.8
        }}
      />
    ))}
  </div>
);

const AirplaneScene = () => (
  <div className="relative w-24 h-24 mt-4 mx-auto flex items-center justify-center">
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="transform -rotate-12 translate-y-2 drop-shadow-[0_0_10px_rgba(211,175,112,0.8)]">
      <path d="M22 2L11 13" stroke="#D3AF70" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="url(#planeGrad)" stroke="#B08D57" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="planeGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F5F0E7" />
          <stop offset="1" stopColor="#B08D57" stopOpacity="0.8"/>
        </linearGradient>
      </defs>
    </svg>
    {/* Trail */}
    <div className="absolute bottom-4 left-2 w-16 h-8 bg-gradient-to-tr from-transparent via-[#D3AF70]/40 to-[#F5F0E7]/80 rounded-full blur-[8px] transform -rotate-45" />
  </div>
);

const MagnifyingGlassScene = () => (
  <div className="relative w-24 h-24 mt-4 mx-auto flex items-center justify-center">
    <svg width="70" height="70" viewBox="0 0 24 24" fill="none" className="transform rotate-[20deg] drop-shadow-[0_10px_15px_rgba(211,175,112,0.4)]">
      <circle cx="11" cy="11" r="7" fill="url(#glassGrad)" stroke="#D3AF70" strokeWidth="1.5" />
      <path d="M21 21L16 16" stroke="#B08D57" strokeWidth="2.5" strokeLinecap="round" />
      <defs>
        <radialGradient id="glassGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5F0E7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D3AF70" stopOpacity="0.7" />
        </radialGradient>
      </defs>
    </svg>
    {/* Glow under glass */}
    <div className="absolute top-6 left-6 w-10 h-10 bg-[#D3AF70]/40 rounded-full blur-[12px]" />
  </div>
);

const SilhouettesScene = () => (
  <div className="relative w-32 h-24 mt-4 mx-auto flex items-end justify-center gap-1.5">
    {/* Pedestal */}
    <div className="absolute bottom-0 w-32 h-4 border-b border-[#D3AF70]/40 rounded-[50%]" />
    
    {[...Array(5)].map((_, i) => {
      const isCenter = i === 2;
      return (
        <div key={i} className="relative flex flex-col items-center bottom-2" style={{ zIndex: isCenter ? 10 : 5 }}>
          {/* Head */}
          <div className="w-2 h-2 rounded-full mb-[1px]" style={{ background: isCenter ? '#F5F0E7' : '#B08D57', opacity: isCenter ? 1 : 0.4, boxShadow: isCenter ? '0 0 10px #F5F0E7' : 'none' }} />
          {/* Body */}
          <div className="w-3.5 h-10 rounded-t-lg mt-0.5" style={{ background: isCenter ? 'linear-gradient(to bottom, #F5F0E7, #D3AF70)' : '#B08D57', opacity: isCenter ? 1 : 0.4 }} />
        </div>
      );
    })}
    {/* Center Spotlight */}
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-24 bg-gradient-to-b from-[#F5F0E7]/60 to-transparent blur-[4px] pointer-events-none" />
  </div>
);

const TrophyScene = () => (
  <div className="relative w-32 h-28 mt-4 mx-auto flex items-end justify-center">
    {/* Glowing concentric pedestal */}
    <div className="absolute bottom-0 w-32 h-10 border border-[#D3AF70]/60 rounded-[50%] shadow-[0_0_20px_rgba(211,175,112,0.3)]">
      <div className="absolute inset-3 border border-[#F5F0E7]/80 rounded-[50%] shadow-[0_0_15px_#F5F0E7]" />
    </div>
    {/* Trophy */}
    <div className="absolute bottom-4 z-10 flex flex-col items-center">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_15px_rgba(255,230,150,0.8)]">
        <path d="M8 21H16" stroke="#F5F0E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 17V21" stroke="#F5F0E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 4H17V8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8V4Z" fill="url(#trophyGrad)" stroke="#F5F0E7" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M4 4H7V8C7 9.65685 8.34315 11 10 11V11" stroke="#D3AF70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 4H17V8C17 9.65685 15.6569 11 14 11V11" stroke="#D3AF70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="trophyGrad" x1="7" y1="4" x2="17" y2="13" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5F0E7" />
            <stop offset="1" stopColor="#B08D57" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div className="absolute bottom-4 w-12 h-6 bg-[#F5F0E7] blur-[15px] opacity-60" />
  </div>
);


const JOURNEY_STEPS = [
  {
    num: '01',
    title: 'Registration',
    desc: 'Create your account and become part of a journey that celebrates talent and ambition.',
    icon: UserPlus,
    Scene: DoorwayScene
  },
  {
    num: '02',
    title: 'Submission',
    desc: 'Submit your entries and showcase your talent across your chosen categories.',
    icon: UploadCloud,
    Scene: AirplaneScene
  },
  {
    num: '03',
    title: 'Screening',
    desc: 'Our expert panel reviews and evaluates each entry with fairness, passion and precision.',
    icon: Search,
    Scene: MagnifyingGlassScene
  },
  {
    num: '04',
    title: 'Shortlisting',
    desc: 'Outstanding entries move forward as we curate the finest talent for the stage.',
    icon: Star,
    Scene: SilhouettesScene
  },
  {
    num: '05',
    title: 'Grand Showcase',
    desc: 'Winners take the stage in a spectacular finale celebrating talent, excellence and glory.',
    icon: Trophy,
    Scene: TrophyScene
  },
];

const STATS = [
  { value: '50K+', label: 'Participants', icon: Users },
  { value: '1200+', label: 'Organizations', icon: Building2 },
  { value: '15+', label: 'Categories', icon: LayoutGrid },
  { value: '20+', label: 'Countries', icon: Globe },
];

export default function Journey() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Background floating particles globally
      gsap.to('.global-particle', {
        y: 'random(-60, 60)',
        x: 'random(-40, 40)',
        opacity: 'random(0.2, 0.7)',
        duration: 'random(5, 8)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: { amount: 3, from: 'random' }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative w-full overflow-hidden bg-[#050505] flex flex-col items-center justify-start pt-12 pb-20"
      style={{ minHeight: '100vh' }}
    >
      {/* ── Strong Section Divider ── */}
      <div className="absolute top-0 left-0 right-0 flex flex-col items-stretch pointer-events-none">
        {/* Main bold line */}
        <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #B08D57 15%, #D3AF70 50%, #B08D57 85%, transparent 100%)' }} />
        {/* Warm inner glow beneath the line */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 5%, rgba(211,175,112,0.35) 25%, rgba(211,175,112,0.6) 50%, rgba(211,175,112,0.35) 75%, transparent 95%)' }} />
        <div style={{ height: '20px', background: 'linear-gradient(to bottom, rgba(211,175,112,0.08) 0%, transparent 100%)' }} />
      </div>

      <style>{`
        @keyframes float-up {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translateY(-40px); opacity: 0; }
        }
      `}</style>

      {/* Global Ambient Glow & Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft centered spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(ellipse at center, rgba(176,141,87,0.06) 0%, transparent 70%)' }}
        />
        {[...Array(40)].map((_, i) => (
          <div key={i} className="absolute global-particle rounded-full bg-[#D3AF70]"
            style={{
              width: Math.random() > 0.8 ? 3 : 1.5,
              height: Math.random() > 0.8 ? 3 : 1.5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: '0 0 6px rgba(211,175,112,0.8)',
              opacity: 0
            }}
          />
        ))}
      </div>

      {/* ── Header ── */}
      <div className="relative z-20 text-center mb-16 px-4 w-full flex flex-col items-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="w-12 h-[1px] bg-[#B08D57]/40" />
          <span className="text-[10px] font-manrope text-[#B08D57] uppercase tracking-[0.35em] font-medium">How It Works</span>
          <div className="w-12 h-[1px] bg-[#B08D57]/40" />
        </div>

        {/* Title */}
        <h2 className="font-cormorant leading-[1.1] mb-5 flex items-center justify-center gap-3 md:gap-4 flex-wrap">
          <span className="text-[#F5F0E7] text-[48px] md:text-[60px] lg:text-[72px]">The</span>
          <span className="text-[#C7A467] text-[52px] md:text-[68px] lg:text-[80px] italic">Journey</span>
        </h2>

        {/* Desc */}
        <p className="font-manrope text-[14px] md:text-[15px] text-[#C8BFB3]/80 leading-relaxed max-w-[550px] mx-auto">
          A seamless, transparent and inspiring experience designed for every participant.
        </p>
      </div>

      {/* ── Continuous SVG Ribbon ── */}
      <div className="relative z-0 w-full hidden md:block" style={{ height: 380 }}>
        {/* The SVG Ribbon Background */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-70 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 300" preserveAspectRatio="none">
            {/* 
              We want an elegant wave that dips beneath the items and swoops up.
              The path connects the 5 points.
            */}
            <path
              className="jrn-ribbon-path"
              d="M-50,150 C 150,150 200,280 360,180 S 550,-20 720,150 S 900,280 1080,180 S 1300,-20 1500,150"
              fill="none"
              stroke="url(#ribbonGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Outer Glow */}
            <path
              className="jrn-ribbon-glow"
              d="M-50,150 C 150,150 200,280 360,180 S 550,-20 720,150 S 900,280 1080,180 S 1300,-20 1500,150"
              fill="none"
              stroke="url(#glowGrad)"
              strokeWidth="15"
              strokeLinecap="round"
              filter="url(#blurGlow)"
              opacity="0.6"
            />
            <defs>
              <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="15%" stopColor="#D3AF70" />
                <stop offset="50%" stopColor="#F5F0E7" />
                <stop offset="85%" stopColor="#D3AF70" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="30%" stopColor="#B08D57" />
                <stop offset="50%" stopColor="#D3AF70" />
                <stop offset="70%" stopColor="#B08D57" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <filter id="blurGlow">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Horizontal Container for Stages */}
        <div className="absolute inset-0 flex items-start justify-center gap-2 lg:gap-8 px-4 lg:px-12 pt-8">
          {JOURNEY_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const Scene = step.Scene;
            return (
              <React.Fragment key={step.num}>
                <div className="stage-item relative flex flex-col items-center group cursor-pointer transition-transform duration-500 hover:-translate-y-2 w-full max-w-[210px]">
                  
                  {/* Number */}
                  <div className="font-cormorant text-[40px] text-[#B08D57] mb-2 leading-none">
                    {step.num}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-full border border-[#D3AF70] bg-[#050505] shadow-[0_0_15px_rgba(211,175,112,0.2)] mb-5 group-hover:shadow-[0_0_25px_rgba(211,175,112,0.6)] group-hover:border-[#F5F0E7] transition-all duration-500">
                    {/* Tiny connector dot below icon */}
                    <div className="absolute -bottom-[13px] w-[1px] h-[12px] bg-[#B08D57]/50" />
                    <Icon size={22} className="text-[#F5F0E7] transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Text block */}
                  <div className="flex flex-col items-center text-center px-2 z-10 bg-[#050505] rounded-xl relative">
                    <h3 className="font-cormorant text-[24px] text-[#D3AF70] mb-2 whitespace-nowrap">{step.title}</h3>
                    <p className="font-manrope text-[12px] text-[#B8B1A7] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Scene at bottom */}
                  <div className="w-full h-32 flex items-center justify-center mt-2 transition-transform duration-500 group-hover:scale-105">
                    <Scene />
                  </div>

                </div>

                {/* Chevron Divider between steps */}
                {idx < JOURNEY_STEPS.length - 1 && (
                  <div className="stage-chevron flex-shrink-0 flex items-center pt-24 hidden lg:flex">
                    <ChevronRight size={24} className="text-[#D3AF70]/40" />
                    <ChevronRight size={24} className="text-[#D3AF70]/40 -ml-3" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* ── MOBILE VERTICAL LAYOUT ── */}
      <div className="relative z-10 w-full flex flex-col md:hidden px-6 gap-16 mt-8">
        <div className="absolute left-10 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-transparent via-[#D3AF70]/50 to-transparent" />
        
        {JOURNEY_STEPS.map((step) => {
          const Icon = step.icon;
          const Scene = step.Scene;
          return (
            <div key={step.num} className="stage-item relative flex items-start gap-6 group">
              <div className="relative flex flex-col items-center">
                <div className="font-cormorant text-[28px] text-[#B08D57] mb-2">{step.num}</div>
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border border-[#D3AF70] bg-[#050505] shadow-[0_0_15px_rgba(211,175,112,0.3)]">
                  <Icon size={18} className="text-[#F5F0E7]" />
                </div>
              </div>

              <div className="flex flex-col pt-12 pb-4 flex-1">
                <h3 className="font-cormorant text-[24px] text-[#D3AF70] mb-2">{step.title}</h3>
                <p className="font-manrope text-[13px] text-[#B8B1A7] leading-relaxed mb-6">
                  {step.desc}
                </p>
                <div className="w-full flex items-center justify-start transform scale-90 origin-left">
                  <Scene />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
