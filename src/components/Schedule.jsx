import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import {
  UserPlus, ClipboardCheck, Star, Trophy,
  Clock, MapPin, CalendarDays
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────── DATA ─────────────────────────────────── */
const EVENTS = [
  {
    day: '15', month: 'OCT', year: '2025',
    title: 'Registrations Open',
    time: '12:00 PM GST',
    location: 'Global Digital Portal',
    desc: 'The portal opens worldwide. Early applications are strongly recommended.',
    icon: UserPlus,
    image: '/schedule/1.png',
  },
  {
    day: '02', month: 'NOV', year: '2025',
    title: 'Preliminary Screening',
    time: '10:00 AM GST',
    location: 'Internal Review Panel',
    desc: 'Expert judges carefully evaluate every submission with precision and fairness.',
    icon: ClipboardCheck,
    image: '/schedule/2.png',
  },
  {
    day: '18', month: 'NOV', year: '2025',
    title: 'Semi-Final Showcase',
    time: '06:00 PM GST',
    location: 'Virtual Mainstage',
    desc: 'Top shortlisted participants perform live before the judging panel.',
    icon: Star,
    image: '/schedule/3.png',
  },
  {
    day: '10', month: 'DEC', year: '2025',
    title: 'The Grand Finale',
    time: '08:00 PM GST',
    location: 'Grand Hyatt, Dubai & Live Stream',
    desc: 'An unforgettable celebration where finalists compete for the ultimate recognition.',
    icon: Trophy,
    image: '/schedule/4.png',
  },
];

/* ─────────────────────────── SCHEDULE CARD ────────────────────────────────── */
function ScheduleCard({ event, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = event.icon;

  return (
    <motion.div
      className="sched-card relative flex items-stretch w-full cursor-pointer"
      style={{ height: 110 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.35, ease: 'easeOut' } }}
    >
      <div
        className="absolute inset-0 rounded-xl overflow-hidden flex transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
          border: hovered
            ? '1px solid rgba(211,175,112,0.5)'
            : '1px solid rgba(176,141,87,0.2)',
          boxShadow: hovered
            ? '0 12px 30px rgba(176,141,87,0.12), inset 0 0 20px rgba(211,175,112,0.06)'
            : '0 4px 20px rgba(0,0,0,0.6), inset 0 0 8px rgba(255,255,255,0.02)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* Hover top-edge glow */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-500"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(211,175,112,0.8), transparent)',
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* ── LEFT CONTENT (65%) ── */}
        <div className="flex items-center gap-4 px-5 py-4" style={{ width: '65%' }}>
          {/* Icon bubble */}
          <div
            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500"
            style={{
              background: hovered ? 'rgba(211,175,112,0.12)' : 'rgba(176,141,87,0.07)',
              borderColor: hovered ? 'rgba(211,175,112,0.55)' : 'rgba(176,141,87,0.3)',
            }}
          >
            <Icon
              size={16}
              style={{ color: hovered ? '#D3AF70' : '#B08D57', strokeWidth: 1.5 }}
            />
          </div>

          <div className="min-w-0">
            <h3
              className="font-cormorant text-lg lg:text-xl leading-tight mb-1 transition-colors duration-500 truncate"
              style={{ color: hovered ? '#F5F0E7' : '#E8E0D0' }}
            >
              {event.title}
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-0.5">
              <span className="flex items-center gap-1 font-manrope text-[10px] uppercase tracking-[0.18em] text-[#B8B1A7]">
                <Clock size={10} className="text-[#B08D57]" strokeWidth={1.5} />
                {event.time}
              </span>
              <span className="flex items-center gap-1 font-manrope text-[10px] uppercase tracking-[0.18em] text-[#B8B1A7]">
                <MapPin size={10} className="text-[#B08D57]" strokeWidth={1.5} />
                {event.location}
              </span>
            </div>
            <p className="font-manrope text-[11px] text-[#E0D6C8]/60 leading-snug mt-1 line-clamp-2">
              {event.desc}
            </p>
          </div>
        </div>

        {/* ── RIGHT IMAGE (35%) ── */}
        <div className="relative overflow-hidden" style={{ width: '35%' }}>
          {/* Left-edge fade into card */}
          <div
            className="absolute top-0 left-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(5,5,5,1), transparent)' }}
          />
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-all duration-700"
            style={{
              filter: hovered
                ? 'grayscale(20%) brightness(0.9) contrast(1.1)'
                : 'grayscale(60%) brightness(0.65) contrast(1.1)',
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
            }}
          />
          {/* warm gold tint on hover */}
          <div
            className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(circle at center, rgba(176,141,87,0.18), transparent 75%)',
              opacity: hovered ? 1 : 0,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────── TIMELINE NODE ────────────────────────────────── */
function TimelineNode({ isLast }) {
  return (
    <div className="sched-node relative flex flex-col items-center">
      {/* Glowing dot */}
      <div
        className="w-3 h-3 rounded-full border-2 flex-shrink-0 z-10 relative"
        style={{
          background: '#050505',
          borderColor: '#D3AF70',
          boxShadow: '0 0 12px rgba(211,175,112,0.6), 0 0 4px rgba(211,175,112,0.9)',
        }}
      >
        <div
          className="absolute inset-0.5 rounded-full"
          style={{ background: '#D3AF70', opacity: 0.5 }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────── MAIN SECTION ──────────────────────────────────── */
export default function Schedule() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Continuous animations
      gsap.to('.sched-particle', {
        y: 'random(-35, 35)', x: 'random(-35, 35)', opacity: 'random(0.2, 0.7)',
        duration: 'random(4, 7)', repeat: -1, yoyo: true, ease: 'sine.inOut',
        stagger: { amount: 3, from: 'random' },
      });
      gsap.to('.sched-spotlight', {
        opacity: 'random(0.3, 0.6)', scale: 'random(0.92, 1.08)',
        duration: 'random(3, 6)', repeat: -1, yoyo: true, ease: 'sine.inOut',
      });
      gsap.to('.sched-ribbon', {
        y: 'random(-12, 12)', rotation: 'random(-2, 2)',
        duration: 'random(7, 12)', repeat: -1, yoyo: true, ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="schedule"
      className="relative w-full overflow-hidden flex items-center justify-center pt-16 pb-20"
      style={{
        minHeight: '750px',
        height: 'clamp(750px, 90svh, 950px)',
        backgroundImage: 'url(/schedule.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* ── Strong Section Divider ── */}
      <div className="absolute top-0 left-0 right-0 flex flex-col items-stretch pointer-events-none z-10">
        <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #B08D57 15%, #D3AF70 50%, #B08D57 85%, transparent 100%)' }} />
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 5%, rgba(211,175,112,0.35) 25%, rgba(211,175,112,0.6) 50%, rgba(211,175,112,0.35) 75%, transparent 95%)' }} />
        <div style={{ height: '20px', background: 'linear-gradient(to bottom, rgba(211,175,112,0.08) 0%, transparent 100%)' }} />
      </div>

      {/* Dark overlay so content stays readable */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'rgba(5,5,5,0.78)' }} />

      {/* ── Background Atmospheric Layers ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Warm radial glow — behind heading area (left) */}
        <div
          className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full sched-spotlight"
          style={{ background: 'radial-gradient(circle, rgba(176,141,87,0.07) 0%, transparent 65%)' }}
        />
        {/* Spotlight beam on right */}
        <div
          className="absolute top-[-120px] right-[25%] w-[180px] h-[900px] sched-spotlight"
          style={{ background: 'linear-gradient(170deg, rgba(211,175,112,0.04) 0%, transparent 70%)', transform: 'rotate(15deg)', filter: 'blur(40px)' }}
        />
        {/* Gold light ribbons */}
        <svg className="absolute w-full h-full opacity-20 sched-ribbon" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M-100 700 C 300 400, 700 800, 1540 300" stroke="url(#srRib1)" strokeWidth="1.5" />
          <path d="M200 900 C 500 600, 1000 700, 1540 400" stroke="url(#srRib2)" strokeWidth="1" />
          <defs>
            <linearGradient id="srRib1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(211,175,112,0.4)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="srRib2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(176,141,87,0.3)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
        {/* Floating particles */}
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full sched-particle"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              background: '#D3AF70',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: 0,
              boxShadow: '0 0 5px rgba(211,175,112,0.8)',
            }}
          />
        ))}
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(5,5,5,0.85) 100%)' }}
        />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-start lg:items-center">

          {/* ════════ LEFT COLUMN (38%) ════════ */}
          <div className="flex flex-col w-full lg:w-[38%] flex-shrink-0">

            {/* Header */}
            <div className="mb-8 lg:mb-10">
              <div className="flex items-center gap-3 mb-5 sched-eyebrow">
                <div className="w-6 h-[1px] bg-[#B08D57]/60" />
                <span className="font-manrope text-[10px] tracking-[0.35em] uppercase text-[#B08D57]">Schedule</span>
                <div className="w-6 h-[1px] bg-[#B08D57]/60" />
              </div>

              <h2 className="font-cormorant leading-[1.0] mb-5">
                <span className="block text-[#F5F0E7] text-[52px] md:text-[58px] lg:text-[64px] sched-heading-line">Mark the</span>
                <span className="block text-[#C7A467] italic text-[56px] md:text-[62px] lg:text-[68px] sched-heading-line">Calendar.</span>
              </h2>

              <p className="font-manrope text-[14px] text-[#E0D6C8]/65 leading-[1.7] max-w-[400px] sched-desc">
                Key dates that shape the journey from discovery to greatness. Plan ahead, participate, and become part of something extraordinary.
              </p>

              <div className="mt-6 flex items-center gap-2 sched-divider">
                <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#D3AF70]/50" />
                <div className="w-1 h-1 rounded-full bg-[#D3AF70] shadow-[0_0_5px_rgba(211,175,112,0.8)]" />
                <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#D3AF70]/50" />
              </div>
            </div>
          </div>


          {/* ════════ RIGHT COLUMN (62%) ════════ */}
          <div className="flex-1 w-full">
            {/* Timeline + Cards container */}
            <div className="relative flex gap-6">

              {/* ── DATE COLUMN ── */}
              <div className="flex-shrink-0 flex flex-col gap-0">
                {EVENTS.map((evt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start"
                    style={{ height: idx < EVENTS.length - 1 ? 136 : 110 }}
                  >
                    <div className="text-right pr-3 pt-1">
                      <div
                        className="font-cormorant font-bold leading-none"
                        style={{ fontSize: 36, color: 'rgba(245,240,231,0.15)' }}
                      >
                        {evt.day}
                      </div>
                      <div className="font-manrope text-[9px] tracking-[0.2em] uppercase text-[#B08D57]/80 mt-0.5">
                        {evt.month}
                      </div>
                      <div className="font-manrope text-[9px] tracking-[0.15em] text-[#B8B1A7]/50">
                        {evt.year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── VERTICAL TIMELINE LINE + NODES ── */}
              <div className="flex-shrink-0 flex flex-col items-center relative">
                {/* The glowing line */}
                <div
                  className="absolute top-[6px] bottom-[6px] w-[1px] left-1/2 -translate-x-1/2"
                  style={{ background: 'rgba(176,141,87,0.15)' }}
                >
                  <div
                    className="sched-line absolute inset-0"
                    style={{
                      background: 'linear-gradient(to bottom, #D3AF70, rgba(176,141,87,0.4))',
                      boxShadow: '0 0 8px rgba(211,175,112,0.4)',
                    }}
                  />
                </div>

                {/* Nodes, spaced to align with card tops */}
                {EVENTS.map((_, idx) => (
                  <div
                    key={idx}
                    style={{
                      height: idx < EVENTS.length - 1 ? 136 : 110,
                      display: 'flex',
                      alignItems: 'flex-start',
                      paddingTop: 8,
                    }}
                  >
                    <TimelineNode isLast={idx === EVENTS.length - 1} />
                  </div>
                ))}
              </div>

              {/* ── CARDS COLUMN ── */}
              <div className="flex-1 flex flex-col gap-6 min-w-0">
                {EVENTS.map((evt, idx) => (
                  <ScheduleCard key={idx} event={evt} index={idx} />
                ))}
              </div>
            </div>

            {/* ── CTA ── */}
            <div className="flex justify-center mt-10 sched-cta">
              <motion.button
                className="flex items-center gap-3 font-manrope text-[11px] tracking-[0.3em] uppercase px-8 py-3.5 rounded-md border transition-all duration-400"
                style={{
                  borderColor: 'rgba(176,141,87,0.5)',
                  color: '#D3AF70',
                  background: 'transparent',
                }}
                whileHover={{
                  background: '#D3AF70',
                  color: '#050505',
                  borderColor: '#D3AF70',
                  boxShadow: '0 0 20px rgba(211,175,112,0.35)',
                  transition: { duration: 0.3 },
                }}
              >
                <CalendarDays size={14} />
                Add to Calendar
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
