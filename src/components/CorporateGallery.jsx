import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { PARTNERS_DATA } from '../data/partnersData';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CorporateGallery() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

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

      // Heading Reveal
      tl.fromTo('.partner-eyebrow', 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 0.8 }
      );
      tl.fromTo('.partner-heading span',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15 },
        "-=0.6"
      );
      tl.fromTo('.partner-desc',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.7"
      );
      tl.fromTo('.partner-desc-divider',
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.8 },
        "-=0.4"
      );

      // Cards stagger
      tl.fromTo('.partner-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power2.out' },
        "-=0.4"
      );

      // Bottom statement
      tl.fromTo('.partner-bottom',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      );

      // Continuous subtle background animations
      gsap.to('.partner-particle', {
        y: 'random(-40, 40)',
        x: 'random(-40, 40)',
        opacity: 'random(0.3, 0.8)',
        duration: 'random(4, 8)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: { amount: 3, from: 'random' },
      });

      gsap.to('.partner-ribbon', {
        y: 'random(-15, 15)',
        rotation: 'random(-3, 3)',
        duration: 'random(6, 12)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const PartnerCard = ({ partner }) => {
    const [hovered, setHovered] = useState(false);

    return (
      <motion.div
        className="partner-card relative flex flex-col items-center justify-center cursor-pointer opacity-0"
        style={{
          width: '100%',
          aspectRatio: '1.45 / 1',
          maxWidth: '250px',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{
          y: -8,
          scale: 1.03,
          transition: { duration: 0.4, ease: 'easeOut' },
        }}
      >
        <div
          className="absolute inset-0 rounded-xl overflow-hidden transition-all duration-500"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)',
            border: hovered ? '1px solid rgba(211,175,112,0.4)' : '1px solid rgba(176,141,87,0.15)',
            boxShadow: hovered 
              ? '0 12px 30px rgba(176,141,87,0.1), inset 0 0 20px rgba(211,175,112,0.05)'
              : '0 4px 20px rgba(0,0,0,0.5), inset 0 0 10px rgba(255,255,255,0.02)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Card Hover Inner Glow */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(211,175,112,0.15), transparent 60%)',
              opacity: hovered ? 1 : 0,
            }}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            {/* Logo */}
            <div className="flex-1 flex items-center justify-center w-full" style={{ maxHeight: '55%' }}>
              <partner.Logo 
                className="w-16 h-16 transition-colors duration-500"
                style={{ 
                  color: hovered ? '#D3AF70' : '#B08D57',
                  filter: hovered ? 'drop-shadow(0 0 10px rgba(211,175,112,0.4))' : 'none'
                }} 
              />
            </div>
            
            {/* Company Name */}
            <div className="mt-auto pt-2 w-full text-center">
              <span className="font-manrope text-[10px] sm:text-[11px] tracking-[0.25em] uppercase transition-colors duration-500"
                style={{ color: hovered ? '#F5F0E7' : '#E0D6C8' }}
              >
                {partner.name}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="partners"
      className="relative w-full overflow-hidden flex flex-col items-center"
      style={{
        background: '#050505',
        paddingTop: '30px',
        paddingBottom: '80px',
      }}
    >
      {/* ── Strong Section Divider ── */}
      <div className="absolute top-0 left-0 right-0 flex flex-col items-stretch pointer-events-none">
        {/* Main bold line */}
        <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #B08D57 15%, #D3AF70 50%, #B08D57 85%, transparent 100%)' }} />
        {/* Warm inner glow beneath the line */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 5%, rgba(211,175,112,0.35) 25%, rgba(211,175,112,0.6) 50%, rgba(211,175,112,0.35) 75%, transparent 95%)' }} />
        <div style={{ height: '20px', background: 'linear-gradient(to bottom, rgba(211,175,112,0.08) 0%, transparent 100%)' }} />
      </div>
      {/* ── Background Atmospheric Layers ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Radial Glow behind heading */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(176,141,87,0.06) 0%, transparent 60%)',
          }}
        />

        {/* Faint golden ribbons (SVG) */}
        <svg className="absolute w-full h-full opacity-30 partner-ribbon" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M-100 200 C 300 400, 800 100, 1540 300" stroke="url(#ribbonGrad1)" strokeWidth="1" fill="none" />
          <path d="M-100 600 C 400 400, 900 700, 1540 500" stroke="url(#ribbonGrad2)" strokeWidth="0.8" fill="none" />
          <defs>
            <linearGradient id="ribbonGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(211,175,112,0.4)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="ribbonGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(176,141,87,0.3)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div key={i} className="absolute rounded-full partner-particle"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              background: '#D3AF70',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: 0,
              boxShadow: '0 0 8px rgba(211,175,112,0.8)',
            }}
          />
        ))}

        {/* Luxury Vignette */}
        <div className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,5,5,0.8) 100%)',
          }}
        />
      </div>

      {/* ── Main Content Container ── */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6 partner-eyebrow opacity-0">
            <div className="w-8 h-[1px] bg-[#B08D57]/60" />
            <span className="text-[10px] font-manrope text-[#B08D57] uppercase tracking-[0.35em] font-medium">Partners</span>
            <div className="w-8 h-[1px] bg-[#B08D57]/60" />
          </div>
          
          <h2 ref={headingRef} className="font-cormorant leading-[1.05] mb-6 partner-heading flex flex-col items-center overflow-hidden">
            <span className="block text-[#F5F0E7] text-[48px] md:text-[56px] lg:text-[64px] opacity-0">Trusted by</span>
            <span className="block text-[#C7A467] text-[52px] md:text-[60px] lg:text-[68px] italic opacity-0">Industry Leaders</span>
          </h2>
          
          <p className="partner-desc mx-auto text-[15px] md:text-[16px] font-manrope text-[#E0D6C8]/70 leading-[1.65] max-w-[600px] opacity-0">
            The world's most admired organisations stand behind this vision.
          </p>
          
          <div className="partner-desc-divider mx-auto mt-8 flex items-center justify-center gap-2 opacity-0">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D3AF70]/50" />
            <div className="w-1 h-1 rounded-full bg-[#D3AF70] shadow-[0_0_6px_rgba(211,175,112,0.8)]" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D3AF70]/50" />
          </div>
        </div>

        {/* Logo Showcase - CSS Grid */}
        <div className="w-full flex justify-center mb-16 lg:mb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 w-full max-w-[1300px] justify-items-center">
            {PARTNERS_DATA.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </div>

        {/* Bottom Area */}
        <div className="partner-bottom flex flex-col items-center opacity-0">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent to-[#B08D57]/40" />
            <div className="w-8 h-8 rounded-full border border-[#B08D57]/40 flex items-center justify-center">
              <Star size={12} className="text-[#D3AF70] fill-[#D3AF70]/20" />
            </div>
            <div className="w-24 md:w-32 h-[1px] bg-gradient-to-l from-transparent to-[#B08D57]/40" />
          </div>
          
          <p className="font-manrope text-[10px] md:text-[11px] tracking-[0.25em] md:tracking-[0.35em] uppercase text-[#B08D57]/80 text-center">
            Together, we create <strong className="text-[#D3AF70] font-semibold">extraordinary</strong> experiences.
          </p>
        </div>

      </div>
    </section>
  );
}
