import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "Who is eligible to participate?", a: "The competition is exclusively open to active employees of registered corporate partner organisations. Each organisation must be officially onboarded before participants can register." },
  { q: "Can I submit multiple entries?", a: "Each individual may submit one solo entry and participate in a maximum of one group performance. This ensures fairness and quality across all submissions." },
  { q: "What is the judging criteria?", a: "Our elite panel evaluates based on technical proficiency, creative originality, emotional impact, and overall stage presence. Each criterion carries equal weighting." },
  { q: "How does the audience voting work?", a: "Audience Choice awards are determined through a secure, verified internal voting portal accessible only to registered corporate networks during the semi-final broadcast." },
  { q: "Are there technical requirements for video submissions?", a: "Yes. Videos must be minimum 1080p resolution, professionally lit, with high-fidelity audio (minimum 48kHz), and submitted in MP4 format. Detailed guidelines are provided upon registration." },
  { q: "When will winners be announced?", a: "Winners across all categories will be announced live at the Grand Finale ceremony in December, with digital announcements posted simultaneously on all platforms." },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative w-full pt-6 pb-24 bg-[#050505] overflow-hidden">
      {/* ── Strong Section Divider ── */}
      <div className="absolute top-0 left-0 right-0 flex flex-col items-stretch pointer-events-none z-10">
        <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #B08D57 15%, #D3AF70 50%, #B08D57 85%, transparent 100%)' }} />
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 5%, rgba(211,175,112,0.35) 25%, rgba(211,175,112,0.6) 50%, rgba(211,175,112,0.35) 75%, transparent 95%)' }} />
        <div style={{ height: '20px', background: 'linear-gradient(to bottom, rgba(211,175,112,0.08) 0%, transparent 100%)' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2A2A2A 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-5xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-20 items-start">
          {/* Left sticky label */}
          <div className="lg:sticky lg:top-40">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-accent-gold"></div>
              <span className="text-accent-gold text-[10px] tracking-[0.3em] uppercase">FAQ</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-primary-text leading-tight">
              Common<br />
              <em className="text-secondary-text font-light not-italic">Inquiries.</em>
            </h2>
            <p className="text-secondary-text font-light text-sm mt-6 leading-relaxed">
              Can't find what you're looking for? Contact our team directly.
            </p>
          </div>

          {/* Right: FAQ Items */}
          <div className="flex flex-col">
            {faqs.map((faq, i) => {
              const isActive = active === i;
              return (
                <motion.div
                  key={i}
                  layout
                  className={`border-b cursor-pointer overflow-hidden transition-all duration-500
                    ${isActive ? 'border-accent-gold/30' : 'border-primary-text/10'}`}
                  onClick={() => setActive(isActive ? null : i)}
                >
                  {/* Question row */}
                  <div className="flex items-center justify-between gap-6 py-7 group">
                    <h3 className={`font-serif text-lg md:text-xl transition-colors duration-300 pr-4
                      ${isActive ? 'text-accent-gold' : 'text-primary-text group-hover:text-accent-gold/80'}`}>
                      {faq.q}
                    </h3>

                    {/* Animated cross/minus icon */}
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-primary-text/15 group-hover:border-accent-gold/30 transition-colors duration-300">
                      <div className="relative w-3.5 h-3.5">
                        <span className={`absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-secondary-text transition-all duration-300
                          ${isActive ? 'bg-accent-gold' : 'group-hover:bg-accent-gold'}`}></span>
                        <span className={`absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-secondary-text transition-all duration-300
                          ${isActive ? 'opacity-0 rotate-90' : 'group-hover:bg-accent-gold'}
                        `}
                          style={{ transform: isActive ? 'rotate(90deg) scaleY(0)' : undefined }}
                        ></span>
                      </div>
                    </div>
                  </div>

                  {/* Answer expansion */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="pb-8">
                          <div className="w-8 h-[1px] bg-accent-gold mb-5"></div>
                          <p className="text-secondary-text font-light text-base leading-relaxed max-w-xl">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
