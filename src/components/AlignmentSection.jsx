import React from 'react';
import { motion } from 'framer-motion';
import { Goal, Handshake, HeartHandshake, Smile } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

const alignments = [
  {
    number: '01',
    tone: 'purple',
    Icon: Smile,
    lines: ["UAE's National", 'Programme for'],
    highlight: 'Happiness & Wellbeing',
  },
  {
    number: '02',
    tone: 'orange',
    Icon: Goal,
    lines: ["UAE's National", 'Strategy for'],
    highlight: 'Wellbeing 2031',
  },
  {
    number: '03',
    tone: 'purple',
    Icon: HeartHandshake,
    lines: ["UAE's Vision for"],
    highlight: 'Workplace Wellbeing',
  },
  {
    number: '04',
    tone: 'orange',
    Icon: Handshake,
    lines: ['Supporting', "MOHRE's"],
    highlight: 'Workplace Vision',
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.86, ease } },
};

const parent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
};

function MissionCore() {
  return (
    <div className="align-core">
      <div className="align-core__motion">
        <div className="align-core__ring align-core__ring--one" />
        <div className="align-core__ring align-core__ring--two" />
        <div className="align-core__ring align-core__ring--three" />
        <div className="align-core__node align-core__node--one" />
        <div className="align-core__node align-core__node--two" />
        <div className="align-core__node align-core__node--three" />
        <div className="align-core__node align-core__node--four" />
        <div className="align-core__copy">
          <p>One Mission.</p>
          <p>One Nation.</p>
          <strong>
            <span>Endless</span> Impact.
          </strong>
          <i />
        </div>
      </div>
    </div>
  );
}

function AlignmentPoint({ item, className, delay }) {
  const Icon = item.Icon;

  return (
    <motion.div
      className={`align-point align-point--${item.tone} ${className}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.55 }}
      transition={{ duration: 0.78, ease, delay }}
    >
      <div className="align-point__icon-shell">
        <span />
        <div className="align-point__icon">
          <Icon size={42} strokeWidth={1.85} />
        </div>
      </div>
      <div className="align-point__text">
        <div className="align-point__number">{item.number}</div>
        <i />
        <p>
          {item.lines.map((line) => (
            <React.Fragment key={line}>
              {line}
              <br />
            </React.Fragment>
          ))}
          <strong>{item.highlight}</strong>
        </p>
      </div>
    </motion.div>
  );
}

function ConnectorField() {
  return (
    <motion.svg
      className="align-connectors"
      viewBox="0 0 1440 680"
      preserveAspectRatio="none"
      aria-hidden="true"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.34 }}
    >
      <motion.path
        className="align-connector align-connector--purple"
        d="M332 208 H452 L520 276"
        variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1, transition: { duration: 0.75, ease, delay: 1.05 } } }}
      />
      <motion.path
        className="align-connector align-connector--orange"
        d="M1110 212 H986 L920 278"
        variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1, transition: { duration: 0.75, ease, delay: 1.28 } } }}
      />
      <motion.path
        className="align-connector align-connector--purple"
        d="M334 426 H454 L525 362"
        variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1, transition: { duration: 0.75, ease, delay: 1.51 } } }}
      />
      <motion.path
        className="align-connector align-connector--orange"
        d="M1112 430 H988 L918 363"
        variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1, transition: { duration: 0.75, ease, delay: 1.74 } } }}
      />
    </motion.svg>
  );
}

export default function AlignmentSection() {
  return (
    <section id="alignment" className="alignment-section">
      <div className="alignment-photo alignment-photo--uae">
        <img src="https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/uae-future_zkdn6k" alt="" />
      </div>
      <div className="alignment-photo alignment-photo--people">
        <img src="https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/uae-professionals_i7ifh0" alt="" />
      </div>
      <div className="alignment-photo alignment-photo--meeting">
        <img src="https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/workplace-meeting_hdst6r" alt="" />
      </div>
      <div className="alignment-photo alignment-photo--hands">
        <img src="https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/team-hands_ns7shx" alt="" />
      </div>

      <div className="alignment-deco alignment-deco--arcs-left" />
      <div className="alignment-energy" />

      <motion.div
        className="alignment-inner"
        variants={parent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
      >
        <header className="alignment-header">

          <motion.h2 variants={reveal}>
            <span>TBT Aligns</span>
            <strong>With What <em>Matters</em><i>.</i></strong>
          </motion.h2>

          <motion.div className="alignment-copy" variants={reveal}>
            <span />
            <p>
              Proudly supporting national visions that
              <br />
              build a <strong>happier, healthier</strong> and more <em>inspired</em> UAE.
            </p>
          </motion.div>
        </header>

        <div className="alignment-system">
          <ConnectorField />
          <MissionCore />
          <AlignmentPoint item={alignments[0]} className="align-point--one" delay={1.18} />
          <AlignmentPoint item={alignments[1]} className="align-point--two" delay={1.41} />
          <AlignmentPoint item={alignments[2]} className="align-point--three" delay={1.64} />
          <AlignmentPoint item={alignments[3]} className="align-point--four" delay={1.87} />
        </div>

        <motion.a
          href="#contact"
          className="alignment-cta"
          variants={reveal}
          transition={{ delay: 2.15 }}
        >
          <span className="alignment-cta__brush" />
          <span className="alignment-cta__text">
            <span>Register</span>
            <strong>Now</strong>
          </span>
          <span className="alignment-cta__star">☆</span>
          <span className="alignment-cta__sub">Be part of something greater.</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
