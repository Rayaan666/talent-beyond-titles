import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, Guitar, Mic, Star } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

const categories = [
  {
    number: '01',
    title: 'SINGING',
    description:
      'Solo performances, duets, choirs, original songs, and covers.',
    image: 'https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/singing_wsyzuz',
    icon: Mic,
    tone: 'purple',
    objectPosition: '50% 44%',
  },
  {
    number: '02',
    title: 'DANCING\nSOLO / GROUP',
    description:
      'From ballet and classical to hip-hop, contemporary, and cultural performances.',
    image: 'https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/dancing_grjtmz',
    icon: Activity,
    tone: 'orange',
    objectPosition: '48% 34%',
  },
  {
    number: '03',
    title: 'MUSICAL\nINSTRUMENT',
    description:
      'Live instrumental performances across all genres and instruments.',
    image: 'https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/instrumental_ote3gs',
    icon: Guitar,
    tone: 'purple',
    objectPosition: '50% 35%',
  },
  {
    number: '04',
    title: 'OPEN\nCATEGORY',
    description:
      'Acting & Theatre, Stand-up Comedy, Poetry & Spoken Word, Magic & Mentalism, Martial Arts.',
    image: 'https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/comedina_xheq5q',
    icon: Star,
    tone: 'orange',
    objectPosition: '50% 28%',
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.35,
    },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

function Waveform({ side }) {
  const bars = [12, 20, 34, 16, 46, 28, 58, 24, 70, 38, 52, 18, 42, 64, 28, 48, 22, 36];

  return (
    <div className={`competition-wave competition-wave--${side}`} aria-hidden="true">
      {bars.map((height, index) => (
        <span
          key={`${side}-${index}`}
          style={{
            height,
            animationDelay: `${index * 74}ms`,
          }}
        />
      ))}
    </div>
  );
}

function StagePanel({ category, index }) {
  const Icon = category.icon;

  return (
    <motion.article
      className={`stage-panel stage-panel--${category.tone}`}
      variants={reveal}
      whileHover={{ y: -10, transition: { duration: 0.45, ease } }}
    >
      <div className="stage-panel__image-wrap">
        <img
          src={category.image}
          alt=""
          loading={index === 0 ? 'eager' : 'lazy'}
          className="stage-panel__image"
          style={{ objectPosition: category.objectPosition }}
        />
        <div className="stage-panel__image-tone" />
        <div className="stage-panel__spotlight" />
        <div className="stage-panel__arc" />
      </div>

      <div className="stage-panel__content">
        <div className="stage-panel__number">{category.number}</div>
        <div className="stage-panel__number-line" />

        <div className="stage-panel__icon" aria-hidden="true">
          <Icon size={29} strokeWidth={1.55} />
        </div>

        <h3>
          {category.title.split('\n').map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h3>
        <p>{category.description}</p>
        <div className="stage-panel__accent" />
        <a href="#contact" className="stage-panel__arrow" aria-label={`${category.title.replace('\n', ' ')} registration`}>
          <ArrowRight size={21} strokeWidth={1.7} />
        </a>
      </div>
    </motion.article>
  );
}

export default function CompetitionCategories() {
  return (
    <section id="categories" className="competition-categories-section">
      <div className="competition-bg competition-bg--purple" aria-hidden="true" />
      <div className="competition-bg competition-bg--orange" aria-hidden="true" />
      <div className="competition-dots competition-dots--left" aria-hidden="true" />
      <div className="competition-dots competition-dots--right" aria-hidden="true" />
      <div className="competition-rings competition-rings--left" aria-hidden="true" />
      <div className="competition-rings competition-rings--right" aria-hidden="true" />

      <motion.img
        src="https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/singing_wsyzuz"
        alt=""
        aria-hidden="true"
        className="floating-performer floating-performer--singer"
        initial={{ opacity: 0, x: -34, y: 20 }}
        whileInView={{ opacity: 0.52, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.2, ease }}
      />
      <motion.img
        src="https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/dancing_grjtmz"
        alt=""
        aria-hidden="true"
        className="floating-performer floating-performer--dancer"
        initial={{ opacity: 0, x: 34, y: 16 }}
        whileInView={{ opacity: 0.42, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.2, delay: 0.18, ease }}
      />

      <motion.div
        className="competition-categories-inner"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
      >
        <motion.div className="competition-eyebrow" variants={reveal}>
          <span />
          <p>Competition Categories</p>
          <span />
        </motion.div>

        <motion.div className="competition-title-wrap" variants={reveal}>
          <h2>
            <span>ONE STAGE.</span>
            <strong>
              ENDLESS TALENT<span>.</span>
            </strong>
          </h2>
          <p>
            Different expressions. Different stories.
            <br />
            One extraordinary celebration of talent.
          </p>
        </motion.div>

        <motion.div className="stage-panels" variants={container}>
          {categories.map((category, index) => (
            <StagePanel key={category.number} category={category} index={index} />
          ))}
        </motion.div>

        <motion.div className="competition-bottom" variants={reveal}>
          <div className="competition-bottom__line">
            <Waveform side="left" />
            <p>
              <span>4 STAGES.</span>
              <strong>1 EXTRAORDINARY YOU.</strong>
            </p>
            <Waveform side="right" />
          </div>

          <a href="#contact" className="competition-cta">
            <span>Choose Your Stage &amp; Register Now</span>
            <ArrowRight size={18} strokeWidth={1.8} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
