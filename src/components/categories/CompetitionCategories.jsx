import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CategoriesHeader from './CategoriesHeader';
import ExploreCategoriesButton from './ExploreCategoriesButton';

import CategoryPortal from './CategoryPortal';
import ScrollDiscoverIndicator from './ScrollDiscoverIndicator';
import { CATEGORIES_DATA, ICON_MAP } from '../../data/categoriesData';

gsap.registerPlugin(ScrollTrigger);

export default function CompetitionCategories() {
  const sectionRef = useRef(null);
  const compositionRef = useRef(null);

  // --- Viewport-based scale for laptop screens -------------------------
  useEffect(() => {
    const applyScale = () => {
      const el = compositionRef.current;
      if (!el) return;
      const vw = window.innerWidth;
      if (vw >= 1500) {
        el.style.transform = 'translateX(-50%) scale(1)';
      } else if (vw >= 1024) {
        const scale = Math.min(1, (vw - 80) / 1440);
        el.style.transform = `translateX(-50%) scale(${scale})`;
      }
    };
    applyScale();
    window.addEventListener('resize', applyScale);
    return () => window.removeEventListener('resize', applyScale);
  }, []);

  // --- GSAP entrance animations ----------------------------------------
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
        defaults: { ease: 'power3.out' },
      });

      // Heading
      tl.to('.cat-heading',     { y: 0, opacity: 1, duration: 1 },          0.2);
      tl.to('.cat-divider',     { opacity: 1, duration: 0.8 },               0.6);
      tl.to('.cat-description', { y: 0, opacity: 1, duration: 0.8 },         0.8);

      // Category portals stagger
      tl.to('.cat-portal', {
        opacity: 1,
        stagger: 0.07,
        duration: 0.75,
        ease: 'power2.out',
      }, 1.2);

      // UI
      tl.to('.cat-btn',        { opacity: 1, duration: 0.7 }, 1.4);
      tl.to('.cat-brand-strip',{ opacity: 1, duration: 1 },   1.5);
      tl.to('.cat-scroll-indicator', { opacity: 1, duration: 0.8 }, 1.8);

      // Subtle portal float
      gsap.to('.cat-portal', {
        y: 'random(-4, 4)',
        duration: 'random(3, 5)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: { amount: 2, from: 'random' },
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="categories"
      className="relative w-full overflow-hidden"
      style={{
        minHeight: 980,
        backgroundImage: 'url(https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/competition_hh4drn)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Subtle edge vignette only — image stays original and fully visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(5,5,5,0.35) 100%)',
        }}
      />
      <div
        className="relative mx-auto h-full"
        style={{ width: 'min(94vw, 1540px)' }}
      >
        <ExploreCategoriesButton />
        <CategoriesHeader />

        {/* ── DESKTOP ORBITAL COMPOSITION (≥ 1024px) ─────────── */}
        <div className="hidden lg:block">
          <div
            ref={compositionRef}
            className="absolute"
            style={{
              left: '50%',
              top: 320,
              width: 1440,
              height: 660,
              transformOrigin: 'top center',
              transform: 'translateX(-50%)',
            }}
          >

            {/* All 13 category portals */}
            {CATEGORIES_DATA.map((cat) => (
              <CategoryPortal key={cat.id} category={cat} />
            ))}
          </div>
        </div>

        {/* ── TABLET & MOBILE FALLBACK (< 1024px) ─────────────── */}
        <div className="lg:hidden w-full absolute top-[310px] left-0 right-0 pb-24">
          {/* 2-col (mobile) / 3-col (tablet) grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-14 px-6 justify-items-center">
            {CATEGORIES_DATA.map((cat) => {
              const IconComp = ICON_MAP[cat.icon] || ICON_MAP['Star'];
              return (
                <div key={cat.id} className="relative cat-portal opacity-0" style={{ width: 140, height: 140 }}>
                  {/* Circle */}
                  <div
                    className="absolute inset-0 rounded-full overflow-hidden"
                    style={{ border: '1px solid rgba(176,141,87,0.45)' }}
                  >
                    <img
                      src={cat.img}
                      alt={cat.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                      style={{ }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(5,5,5,0.88) 0%, transparent 55%)',
                      }}
                    />
                    <span
                      className="absolute font-manrope text-[#F5F0E7] uppercase"
                      style={{
                        bottom: 14,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: 10,
                        letterSpacing: '0.2em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {cat.title}
                    </span>
                  </div>
                  {/* Badge */}
                  <div
                    className="absolute rounded-full flex items-center justify-center"
                    style={{
                      width: 36,
                      height: 36,
                      right: -6,
                      bottom: 14,
                      background: '#0B0C0A',
                      border: '1px solid rgba(176,141,87,0.6)',
                      zIndex: 5,
                    }}
                  >
                    <IconComp size={13} color="#B08D57" strokeWidth={1.5} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Scroll indicator ─── */}
        <ScrollDiscoverIndicator />
      </div>
    </section>
  );
}
