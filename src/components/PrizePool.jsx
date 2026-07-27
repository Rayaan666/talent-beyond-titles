import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Crown, Star, Gem, Users, Heart, Palette } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AWARDS_DATA = [
  {
    num: '01',
    title: 'GRAND WINNER',
    prize: '$50,000',
    desc: 'Plus exclusive corporate partnerships & global exposure.',
    icon: Crown,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=500&auto=format&fit=crop',
  },
  {
    num: '02',
    title: 'FIRST RUNNER-UP',
    prize: '$25,000',
    desc: 'Mentorship program with top industry leaders.',
    icon: Star,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=500&auto=format&fit=crop',
  },
  {
    num: '03',
    title: 'SECOND RUNNER-UP',
    prize: '$10,000',
    desc: 'Premium masterclass access & professional gear.',
    icon: Gem,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop',
  },
  {
    num: '04',
    title: 'BEST TEAM',
    prize: '$15,000',
    desc: 'For the most cohesive and inspiring group performance.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=500&auto=format&fit=crop',
  },
  {
    num: '05',
    title: 'AUDIENCE CHOICE',
    prize: '$5,000',
    desc: 'Voted by the global virtual and physical audience.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1470229722913-7c090be5bc3a?q=80&w=500&auto=format&fit=crop',
  },
  {
    num: '06',
    title: 'MOST CREATIVE',
    prize: '$5,000',
    desc: 'Pushing the outer boundaries of performance art.',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop',
  },
];

export default function PrizePool() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
        defaults: { ease: 'power3.out' },
      });

      // Header reveal
      tl.fromTo('.aw-eyebrow', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8 });
      tl.fromTo('.aw-heading span', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15 }, "-=0.6");
      tl.fromTo('.aw-desc p', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, "-=0.6");

      // Monoliths rising
      tl.fromTo('.aw-monolith',
        { opacity: 0, y: 120 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.1, ease: 'power2.out' },
        "-=0.4"
      );

      // Floor & Footer
      tl.fromTo('.aw-floor-line', { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 1.5, ease: 'power2.inOut' }, "-=1.0");
      tl.fromTo('.aw-footer', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");

      // Ambient Background Animations
      gsap.to('.aw-particle', {
        y: 'random(-60, 60)', x: 'random(-60, 60)', opacity: 'random(0.1, 0.5)',
        duration: 'random(5, 10)', repeat: -1, yoyo: true, ease: 'sine.inOut',
        stagger: { amount: 4, from: 'random' },
      });

      gsap.to('.aw-spotlight', {
        opacity: 'random(0.3, 0.7)', scale: 'random(0.95, 1.1)',
        duration: 'random(4, 7)', repeat: -1, yoyo: true, ease: 'sine.inOut',
      });

      // Subtle light sweep across all monoliths
      gsap.to('.aw-light-sweep', {
        left: '150%',
        duration: 4,
        ease: 'none',
        repeat: -1,
        repeatDelay: 3,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const Monolith = ({ award, isDesktop }) => {
    const [hovered, setHovered] = useState(false);
    const Icon = award.icon;

    // Apply skew only on desktop/tablet views where they sit side-by-side
    const outerStyle = isDesktop
      ? { transform: 'skewX(-10deg)', margin: '0 -15px' }
      : { marginBottom: '2rem' };
    const innerStyle = isDesktop
      ? { transform: 'skewX(10deg)' }
      : {};

    return (
      <div 
        className="aw-monolith relative z-10 overflow-hidden flex-1 group"
        style={{
          ...outerStyle,
          height: isDesktop ? '380px' : 'auto',
          minHeight: '320px',
          background: 'linear-gradient(180deg, #0a0a0a 0%, #030303 100%)',
          border: '1px solid rgba(176,141,87,0.15)',
          boxShadow: 'inset 0 0 40px rgba(0,0,0,1), 0 20px 50px rgba(0,0,0,0.8)',
          cursor: 'pointer',
          transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* The un-skewed content wrapper */}
        <div 
          className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none"
          style={innerStyle}
        >
          {/* Animated sweep light (runs globally across all, but masked inside) */}
          <div 
            className="aw-light-sweep absolute top-0 bottom-0 w-[40px] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(to right, transparent, #D3AF70, transparent)',
              transform: 'skewX(-20deg)',
              left: '-20%',
              zIndex: 0,
            }}
          />

          {/* Content */}
          <div className="relative w-full pt-6 pb-6 px-6 md:px-10 flex flex-col items-center text-center z-20">
            {/* Massive Faint Number */}
            <div className="absolute top-0 left-4 font-cormorant text-[80px] lg:text-[100px] leading-none opacity-5 transition-opacity duration-500 group-hover:opacity-10 text-[#F5F0E7]">
              {award.num}
            </div>

            {/* Icon */}
            <div className="mb-6 mt-4">
              <Icon 
                size={32} 
                className="transition-colors duration-500"
                style={{ 
                  color: hovered ? '#D3AF70' : '#B08D57',
                  filter: hovered ? 'drop-shadow(0 0 10px rgba(211,175,112,0.4))' : 'none'
                }}
              />
            </div>

            {/* Title */}
            <h3 className="font-manrope text-[11px] tracking-[0.25em] uppercase text-[#F5F0E7] mb-4">
              {award.title}
            </h3>

            {/* Prize */}
            <div className="font-cormorant text-4xl lg:text-5xl text-[#D3AF70] mb-4 transition-all duration-500 group-hover:scale-105 group-hover:text-[#F5D57A]">
              {award.prize}
            </div>

            {/* Description */}
            <p className="font-manrope text-[12px] text-[#B7B1A8] leading-relaxed max-w-[200px]">
              {award.desc}
            </p>
          </div>

        </div>
        
        {/* Border glow on hover */}
        <div 
          className="absolute inset-0 z-30 transition-opacity duration-500 pointer-events-none"
          style={{
            border: '1px solid rgba(211,175,112,0.4)',
            boxShadow: 'inset 0 0 30px rgba(211,175,112,0.05)',
            opacity: hovered ? 1 : 0
          }}
        />
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="awards"
      className="relative w-full overflow-hidden bg-[#050505] pt-12 pb-24 lg:pt-12 lg:pb-32"
    >
      {/* ── Strong Section Divider ── */}
      <div className="absolute top-0 left-0 right-0 flex flex-col items-stretch pointer-events-none z-10">
        <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #B08D57 15%, #D3AF70 50%, #B08D57 85%, transparent 100%)' }} />
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 5%, rgba(211,175,112,0.35) 25%, rgba(211,175,112,0.6) 50%, rgba(211,175,112,0.35) 75%, transparent 95%)' }} />
        <div style={{ height: '20px', background: 'linear-gradient(to bottom, rgba(211,175,112,0.08) 0%, transparent 100%)' }} />
      </div>

      {/* ── Background Atmospheric Layers ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Warm Cinematic Spotlights */}
        <div className="absolute top-0 left-0 w-full h-[600px] aw-spotlight"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(176,141,87,0.06) 0%, transparent 70%)' }}
        />
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full aw-spotlight"
          style={{ background: 'radial-gradient(circle, rgba(211,175,112,0.02) 0%, transparent 60%)' }}
        />
        
        {/* Subtle Smoke Overlay */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.02) 0%, transparent 40%)',
            filter: 'blur(30px)',
          }}
        />

        {/* Floating Gold Dust */}
        {[...Array(25)].map((_, i) => (
          <div key={i} className="absolute rounded-full aw-particle"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              background: '#D3AF70',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: 0,
              boxShadow: '0 0 8px rgba(211,175,112,0.6)',
            }}
          />
        ))}
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-4 md:px-8 flex flex-col">
        
        {/* Header Section */}
        <div className="mb-16 lg:mb-24 px-4 md:px-8">
          <div className="flex items-center gap-4 mb-6 aw-eyebrow opacity-0">
            <div className="w-8 h-[1px] bg-[#B08D57]/60" />
            <span className="text-[10px] font-manrope text-[#B08D57] uppercase tracking-[0.35em] font-medium">Awards</span>
            <div className="w-8 h-[1px] bg-[#B08D57]/60" />
          </div>
          
          <h2 className="font-cormorant leading-[1.05] mb-6 aw-heading flex flex-col overflow-hidden">
            <span className="text-[#F5F0E7] text-[52px] md:text-[64px] lg:text-[76px] opacity-0">Celebrating</span>
            <span className="text-[#C7A467] text-[56px] md:text-[68px] lg:text-[80px] italic opacity-0">Excellence.</span>
          </h2>
          
          <div className="aw-desc opacity-0">
            <p className="font-manrope text-[15px] md:text-[16px] text-[#E0D6C8]/70 leading-relaxed max-w-[400px]">
              Honouring talent. Inspiring excellence. Celebrating those who redefine possibility.
            </p>
          </div>
        </div>

        {/* ── Monolith Exhibition (Desktop/Tablet) ── */}
        <div className="hidden md:flex w-full px-8 lg:px-12 pb-16 justify-center">
          {AWARDS_DATA.map((award) => (
            <Monolith key={award.num} award={award} isDesktop={true} />
          ))}
        </div>

        {/* ── Mobile View (Stacked) ── */}
        <div className="md:hidden flex flex-col w-full px-4 pb-12 gap-8">
          {AWARDS_DATA.map((award) => (
            <Monolith key={award.num} award={award} isDesktop={false} />
          ))}
        </div>

        {/* ── Floor / Bottom Pathway ── */}
        <div className="w-full px-4 md:px-16 mt-8">
          {/* Glowing floor line connecting monoliths */}
          <div className="relative w-full h-[1px] bg-[#B08D57]/10 mb-12">
            <div className="aw-floor-line absolute inset-0 bg-gradient-to-r from-transparent via-[#D3AF70]/60 to-transparent shadow-[0_0_15px_rgba(211,175,112,0.4)]" />
            
            {/* Illuminated Nodes along the floor (matching monolith bases roughly) */}
            <div className="absolute inset-0 flex justify-evenly items-center">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[#050505] border border-[#D3AF70] shadow-[0_0_8px_rgba(211,175,112,0.8)]" />
              ))}
            </div>
          </div>

          {/* Bottom Text */}
          <div className="aw-footer opacity-0 flex items-center justify-center gap-4 text-center">
            <div className="hidden sm:block w-8 h-[1px] bg-[#B08D57]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D3AF70] opacity-60 transform rotate-45" />
            
            <p className="font-manrope text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#B08D57]/90 px-2">
              Certificates of Excellence Presented to All Finalists
            </p>
            
            <div className="w-1.5 h-1.5 rounded-full bg-[#D3AF70] opacity-60 transform rotate-45" />
            <div className="hidden sm:block w-8 h-[1px] bg-[#B08D57]/40" />
          </div>
        </div>

      </div>
    </section>
  );
}
