import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from './Navbar';
import HeroContent from './HeroContent';
import ScrollIndicator from './ScrollIndicator';

const HeroSection = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Initial Load Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Subtle background scale
      gsap.fromTo('.hero-bg-layer', 
        { scale: 1.02 },
        { scale: 1, duration: 2.5, ease: 'power2.out' }
      );

      tl.to('.hero-navbar', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.2
      })
      .to('.hero-headline-line', {
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out'
      }, '-=0.6')
      .to('.hero-ctas', {
        y: 0,
        opacity: 1,
        duration: 0.8
      }, '-=0.6')
      .to('.hero-countdown', {
        y: 0,
        opacity: 1,
        duration: 1
      }, '-=0.8')
      .to('.hero-caption', {
        opacity: 1,
        duration: 1
      }, '-=0.5')
      .to('.hero-scroll-indicator', {
        opacity: 1,
        duration: 1
      }, '-=0.5');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex flex-col justify-between"
    >
      {/* Background Layer */}
      <div 
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover hero-bg-layer z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/hero-home.png)',
          backgroundPosition: '68% center',
        }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 1023px) {
            .hero-bg-layer {
              background-image: url(/hero-mobile.png) !important;
              background-position: center center !important;
            }
          }
          @media (min-width: 1536px) {
            .hero-bg-layer {
              background-position: center center !important;
            }
          }
        `}} />
      </div>

      {/* Readability Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.80) 35%, rgba(5,5,5,0.30) 60%, rgba(5,5,5,0.05) 100%), linear-gradient(180deg, rgba(5,5,5,0.7) 0%, transparent 20%, transparent 80%, rgba(5,5,5,0.8) 100%)'
        }}
      />

      {/* Fixed Top Navbar */}
      <Navbar />

      {/* Structured Content Container with added left padding */}
      <div className="relative z-20 w-full flex-1 max-w-[1500px] w-[94%] mx-auto flex items-center justify-between px-6 sm:px-10 md:px-14 lg:px-20">
        <HeroContent />
        
      </div>

      {/* Bottom Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
