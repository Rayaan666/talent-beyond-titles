import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ChevronRight, FilePenLine, Star, Trophy } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

const TIMELINE_EVENTS = [
  {
    number: '01',
    month: 'AUGUST',
    year: '2026',
    title: ['Corporate', 'Registrations Open'],
    image: 'https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/august-registration_alw6r8',
    icon: FilePenLine,
    tone: 'purple',
  },
  {
    number: '02',
    month: 'SEPTEMBER',
    year: '2026',
    title: ['Intra-Corporate', 'Auditions'],
    image: 'https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/september-auditions_v92hsw',
    icon: Building2,
    tone: 'purple',
  },
  {
    number: '03',
    month: 'OCTOBER',
    year: '2026',
    title: ['Inter-Corporate', 'Qualifiers'],
    image: 'https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/october-qualifiers_oheflh',
    icon: Trophy,
    tone: 'orange',
  },
  {
    number: '04',
    month: 'NOVEMBER',
    year: '2026',
    title: ['Grand', 'Finale'],
    image: 'https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/november-finale_dzamx7',
    icon: Star,
    tone: 'teal',
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.82, ease } },
};

function TimelineArtwork() {
  return (
    <motion.svg
      className="event-roadmap__path"
      viewBox="0 0 1440 210"
      preserveAspectRatio="none"
      aria-hidden="true"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.55 }}
    >
      <defs>
        <linearGradient id="journeyStroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5F4DCE" />
          <stop offset="31%" stopColor="#5F4DCE" />
          <stop offset="35%" stopColor="#FD4300" />
          <stop offset="57%" stopColor="#FD4300" />
          <stop offset="62%" stopColor="#5F4DCE" />
          <stop offset="81%" stopColor="#5F4DCE" />
          <stop offset="86%" stopColor="#FD4300" />
          <stop offset="100%" stopColor="#FD4300" />
        </linearGradient>
        <filter id="journeySoftGlow">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
      <motion.path
        d="M-65 118 C 82 54, 182 97, 312 92 C 418 88, 450 128, 560 111 C 654 96, 705 75, 802 96 C 905 118, 968 123, 1068 101 C 1184 76, 1262 104, 1506 83"
        fill="none"
        stroke="url(#journeyStroke)"
        strokeWidth="17"
        strokeLinecap="round"
        opacity="0.16"
        filter="url(#journeySoftGlow)"
        variants={{
          hidden: { pathLength: 0 },
          show: { pathLength: 1, transition: { duration: 1.6, ease, delay: 0.45 } },
        }}
      />
      <motion.path
        d="M-65 118 C 82 54, 182 97, 312 92 C 418 88, 450 128, 560 111 C 654 96, 705 75, 802 96 C 905 118, 968 123, 1068 101 C 1184 76, 1262 104, 1506 83"
        fill="none"
        stroke="url(#journeyStroke)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          hidden: { pathLength: 0 },
          show: { pathLength: 1, transition: { duration: 1.7, ease, delay: 0.48 } },
        }}
      />
      <motion.path
        d="M-35 132 C 92 75, 201 112, 315 105 C 418 98, 468 139, 565 121 C 650 105, 718 91, 800 109 C 900 131, 963 136, 1074 113 C 1193 89, 1269 115, 1470 100"
        fill="none"
        stroke="url(#journeyStroke)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.66"
        variants={{
          hidden: { pathLength: 0 },
          show: { pathLength: 1, transition: { duration: 1.85, ease, delay: 0.56 } },
        }}
      />
      <motion.path
        d="M1385 87 L1502 84 L1478 70 M1502 84 L1478 101"
        fill="none"
        stroke="#FD4300"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          hidden: { opacity: 0, pathLength: 0 },
          show: { opacity: 1, pathLength: 1, transition: { duration: 0.5, ease, delay: 1.8 } },
        }}
      />
    </motion.svg>
  );
}

function DirectionArrow({ tone, index }) {
  return (
    <div
      className={`event-roadmap__arrow event-roadmap__arrow--${tone}`}
      style={{ opacity: 0, visibility: 'hidden', pointerEvents: 'none' }}
      aria-hidden="true"
    />
  );
}

function Milestone({ event, index }) {
  const Icon = event.icon;

  return (
    <motion.div
      className={`event-roadmap__milestone event-roadmap__milestone--${event.tone}`}
      variants={reveal}
      transition={{ delay: 0.8 + index * 0.14 }}
    >
      <div className="event-roadmap__node-pulse" />
      <div className="event-roadmap__node">
        <Icon size={42} strokeWidth={1.7} />
      </div>
      <div className="event-roadmap__stem" />
      <div className="event-roadmap__pin" />
    </motion.div>
  );
}

function EventPoster({ event, index }) {
  return (
    <motion.article
      className={`event-poster event-poster--${event.tone}`}
      variants={reveal}
      transition={{ delay: 1.03 + index * 0.14 }}
      whileHover={{ y: -6, transition: { duration: 0.38, ease } }}
    >
      <div className="event-poster__top" />
      <div className="event-poster__body">
        <h3>{event.month}</h3>
        <div className="event-poster__year">
          <p>{event.year}</p>
        </div>
        <div className="event-poster__rule" />
        <h4>
          {event.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h4>
      </div>
    </motion.article>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="event-roadmap">

      <motion.div
        className="event-roadmap__inner"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
      >
        <motion.div className="event-roadmap__heading" variants={reveal}>
          <h2>
            <span>THE ROAD TO </span><span style={{ color: '#FD4300' }}>GREATNESS</span><strong style={{ color: '#5F4DCE' }}>.</strong>
          </h2>
          <p>
            From the first step to the final spotlight,
            <br />
            every moment brings you closer to glory.
          </p>
        </motion.div>

        <div className="event-roadmap__desktop">
          <TimelineArtwork />
          <div className="event-roadmap__milestones">
            {TIMELINE_EVENTS.map((event, index) => (
              <React.Fragment key={event.number}>
                <Milestone event={event} index={index} />
                {index < TIMELINE_EVENTS.length - 1 && (
                  <DirectionArrow tone={TIMELINE_EVENTS[index + 1].tone} index={index} />
                )}
              </React.Fragment>
            ))}
          </div>
          <motion.div className="event-roadmap__posters" variants={container}>
            {TIMELINE_EVENTS.map((event, index) => (
              <EventPoster key={event.number} event={event} index={index} />
            ))}
          </motion.div>
        </div>

        <motion.div className="event-roadmap__mobile" variants={container}>
          {TIMELINE_EVENTS.map((event, index) => (
            <div className={`event-roadmap__mobile-step event-roadmap__mobile-step--${event.tone}`} key={event.number}>
              <Milestone event={event} index={index} />
              <EventPoster event={event} index={index} />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom section image */}
      <div style={{
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100vw',
        marginTop: '44px',
        marginBottom: '-84px',
        lineHeight: 0,
        fontSize: 0,
      }}>
        <img
          src="https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/Untitled_design_-_2026-08-14T194614.580_j5vfhn"
          alt=""
          style={{ width: '100%', display: 'block' }}
        />
      </div>
    </section>
  );
}
