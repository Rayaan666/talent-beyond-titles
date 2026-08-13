import { motion } from 'framer-motion';
import {
  Building2,
  Heart,
  Handshake,
  Mic,
  Music,
  Smile,
  Star,
  Trophy,
  Users,
} from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

const purposeItems = [
  {
    Icon: Users,
    tone: 'iris',
    text: (
      <>
        Talent Beyond Titles (TBT) is the UAE&apos;s first{' '}
        <span>inter-corporate employee performing arts initiative</span>, bringing together organisations from across the country to celebrate the talent behind every job title.
      </>
    ),
  },
  {
    Icon: Building2,
    tone: 'orange',
    text: 'Employees compete on behalf of their organisations through a structured journey of company auditions, inter-corporate qualifiers, and a national Grand Finale.',
  },
  {
    Icon: Star,
    tone: 'iris',
    text: 'Designed for corporates and government entities, TBT transforms employee engagement into an experience that builds pride, recognition, workplace culture, and lasting memories.',
  },
];

const philosophyItems = [
  {
    Icon: Users,
    tone: 'iris',
    text: 'Talent Beyond Titles is more than a performing arts initiative.',
  },
  {
    Icon: Heart,
    tone: 'orange',
    text: "It's an employee engagement platform designed to help organisations celebrate their people beyond their professional roles.",
  },
  {
    Icon: Music,
    tone: 'iris',
    text: 'Through music, dance, creativity, and performance, employees gain confidence, recognition, and a sense of belonging while organisations strengthen workplace culture and employer branding.',
  },
];

const pillars = [
  {
    id: '01',
    number: '1.',
    tone: 'iris',
    Icon: Users,
    title: ['Employee', 'Engagement'],
    text: 'Create meaningful experiences employees genuinely look forward to.',
  },
  {
    id: '02',
    number: '2.',
    tone: 'orange',
    Icon: Smile,
    title: ['Workplace', 'Happiness'],
    text: 'Strengthen morale through creativity, participation, and shared experiences.',
  },
  {
    id: '03',
    number: '3.',
    tone: 'iris',
    Icon: Handshake,
    title: ['Community', 'Participation'],
    text: 'Bring organisations together through healthy competition and collaboration.',
  },
  {
    id: '04',
    number: '4.',
    tone: 'orange',
    Icon: Trophy,
    title: ['Recognition &', 'Appreciation'],
    text: 'Celebrate employees for who they are, not just what they do.',
  },
];

const slices = [
  { tone: 'iris', className: 'about-slice--singer', label: 'Singer' },
  { tone: 'orange', className: 'about-slice--dancer', label: 'Dancer' },
  { tone: 'iris', className: 'about-slice--guitar', label: 'Musician' },
  { tone: 'orange', className: 'about-slice--open', label: 'Open category performer' },
];

function Eyebrow({ children, centered = false, style = {} }) {
  return (
    <div className={`about-eyebrow ${centered ? 'about-eyebrow--center' : ''}`} style={style}>
      <span />
      <b>{children}</b>
      <i />
      <span />
    </div>
  );
}

function IconNode({ Icon, tone }) {
  return (
    <div className={`about-icon-node about-icon-node--${tone}`}>
      <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
    </div>
  );
}

export default function AboutStory() {
  return (
    <section className="about-story" id="about">
      <div className="about-dots about-dots--purpose" aria-hidden="true" />
      <div className="about-contours about-contours--right" aria-hidden="true" />

      <motion.div
        className="about-purpose"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <div className="about-purpose__copy">
          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}>
            <Eyebrow style={{ opacity: 0, pointerEvents: 'none' }}>OUR PURPOSE</Eyebrow>
          </motion.div>

          <h2 className="about-purpose__title">
            <motion.span variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } }}>What is</motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } }}>Talent Beyond</motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } }}>Titles?</motion.span>
          </h2>

          <motion.div className="about-purpose__underline" variants={{ hidden: { scaleX: 0, opacity: 0 }, show: { scaleX: 1, opacity: 1, transition: { duration: 0.6, ease } } }} />

          <div className="about-narrative">
            {purposeItems.map(({ Icon, tone, text }, index) => (
              <motion.div
                className="about-narrative__row"
                key={index}
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.58, ease } } }}
              >
                <IconNode Icon={Icon} tone={tone} />
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="about-portal"
          variants={{ hidden: { opacity: 0, scale: 0.96, x: 30 }, show: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.9, ease } } }}
        >
          <div className="about-portal__arches" aria-hidden="true" />
          <div className="about-portal__stage">
            <div className="about-portal__image" />
            <div className="about-portal__audience" aria-hidden="true" />
            <div className="about-portal__performer" aria-hidden="true">
              <Mic size={40} strokeWidth={2.1} />
            </div>
            <div className="about-portal__particles" aria-hidden="true" />
          </div>
        </motion.div>
      </motion.div>

      <div className="about-transition" aria-hidden="true" />

      <motion.div
        className="about-philosophy"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <div className="about-collage">
          {slices.map((slice, index) => (
            <motion.div
              key={slice.label}
              className={`about-slice about-slice--${slice.tone} ${slice.className}`}
              aria-label={slice.label}
              variants={{ hidden: { opacity: 0, y: 42 }, show: { opacity: 1, y: 0, transition: { duration: 0.68, ease, delay: index * 0.04 } } }}
            >
              <div />
            </motion.div>
          ))}
        </div>

        <div className="about-philosophy__copy">


          <motion.h2 className="about-philosophy__title" variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } }}>
            <span>More Than</span>
            <span>a <strong>Competition</strong></span>
          </motion.h2>
          <motion.div className="about-philosophy__underline" variants={{ hidden: { scaleX: 0, opacity: 0 }, show: { scaleX: 1, opacity: 1, transition: { duration: 0.55, ease } } }} />

          <div className="about-narrative about-narrative--philosophy">
            {philosophyItems.map(({ Icon, tone, text }, index) => (
              <motion.div
                className="about-narrative__row"
                key={index}
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.58, ease } } }}
              >
                <IconNode Icon={Icon} tone={tone} />
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="about-transition" aria-hidden="true" />

      <motion.div
        className="about-foundation"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.28 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.09 } },
        }}
      >
        <motion.h2 className="about-foundation__title" variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } }}>
          Built Around <span>What</span> <strong>Matters</strong>
        </motion.h2>

        <div className="about-pillars">
          {pillars.map(({ id, number, tone, Icon, title, text }, index) => (
            <motion.div
              className={`about-pillar about-pillar--${tone}`}
              key={id}
              variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.58, ease, delay: index * 0.03 } } }}
            >
              <div className="about-pillar__number">{number}</div>
              <IconNode Icon={Icon} tone={tone} />
              <h3>{title.map((line) => <span key={line}>{line}</span>)}</h3>
              <i aria-hidden="true" />
              <p>{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="about-energy-wave" aria-hidden="true">
        <span />
        <span />
      </div>
    </section>
  );
}
