import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Guitar, Mic, Music2, PersonStanding, Star } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

const categories = [
  {
    number: '01',
    title: 'SINGING',
    description:
      'Solo performances, duets, original songs, and covers.',
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
    icon: PersonStanding,
    tone: 'purple',
    objectPosition: '48% 34%',
  },
  {
    number: '03',
    title: 'MUSIC',
    description:
      'Live instrumental performances across all genres and instruments.',
    image: 'https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/instrumental_ote3gs',
    icon: Music2,
    tone: 'teal',
    objectPosition: '50% 35%',
  },
  {
    number: '04',
    title: 'OPEN\nARTS',
    description:
      'A dedicated inclusive platform for unique performances, from stand-up comedy and acting to poetry, magic and martial arts.',
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

        <div className="stage-panel__icon" aria-hidden="true">
          <Icon size={29} strokeWidth={1.55} />
        </div>

        <h3>
          {category.title.split('\n').map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h3>
        <p>{category.description}</p>
      </div>
    </motion.article>
  );
}

export default function CompetitionCategories() {
  return (
    <section id="categories" className="competition-categories-section">
      <div className="competition-bg competition-bg--purple" aria-hidden="true" />
      <div className="competition-bg competition-bg--orange" aria-hidden="true" />

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
        whileInView={{ opacity: 0.72, x: 0, y: 0 }}
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
            <span>ONE STAGE<span style={{ color: '#00C4B3', fontStyle: 'normal', display: 'inline' }}>.</span></span>
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
              <span>4 DIFFERENT PLATFORMS.</span>
              <strong>1 EXTRAORDINARY YOU.</strong>
            </p>
            <Waveform side="right" />
          </div>

          <a href="#contact" className="competition-cta">
            <span>Choose Your Stage &amp; Inquire Now</span>
            <ArrowRight size={18} strokeWidth={1.8} />
          </a>
        </motion.div>
      </motion.div>

      {/* Golden Sparkle Particles */}
      <div className="competition-sparkles" aria-hidden="true">
        {[
          { top: '4%',  left: '3%',  size: 4,  delay: 0.0 },
          { top: '7%',  left: '12%', size: 2,  delay: 0.5 },
          { top: '3%',  left: '22%', size: 6,  delay: 1.1 },
          { top: '8%',  left: '31%', size: 3,  delay: 0.3 },
          { top: '5%',  left: '42%', size: 5,  delay: 1.8 },
          { top: '11%', left: '53%', size: 2,  delay: 0.7 },
          { top: '6%',  left: '63%', size: 7,  delay: 1.4 },
          { top: '9%',  left: '75%', size: 3,  delay: 0.2 },
          { top: '4%',  left: '84%', size: 5,  delay: 2.1 },
          { top: '13%', left: '93%', size: 2,  delay: 0.9 },

          { top: '18%', left: '6%',  size: 3,  delay: 1.6 },
          { top: '22%', left: '16%', size: 6,  delay: 0.4 },
          { top: '16%', left: '27%', size: 2,  delay: 2.3 },
          { top: '25%', left: '38%', size: 5,  delay: 0.8 },
          { top: '20%', left: '49%', size: 3,  delay: 1.2 },
          { top: '28%', left: '59%', size: 7,  delay: 0.1 },
          { top: '19%', left: '70%', size: 2,  delay: 1.9 },
          { top: '24%', left: '81%', size: 4,  delay: 0.6 },
          { top: '30%', left: '91%', size: 6,  delay: 2.5 },

          { top: '36%', left: '2%',  size: 5,  delay: 1.0 },
          { top: '40%', left: '13%', size: 2,  delay: 0.3 },
          { top: '34%', left: '24%', size: 8,  delay: 1.7 },
          { top: '43%', left: '35%', size: 3,  delay: 2.0 },
          { top: '38%', left: '46%', size: 5,  delay: 0.5 },
          { top: '45%', left: '56%', size: 2,  delay: 1.3 },
          { top: '37%', left: '67%', size: 6,  delay: 0.9 },
          { top: '42%', left: '77%', size: 3,  delay: 2.4 },
          { top: '47%', left: '88%', size: 5,  delay: 0.2 },

          { top: '53%', left: '8%',  size: 2,  delay: 1.5 },
          { top: '57%', left: '19%', size: 7,  delay: 0.7 },
          { top: '52%', left: '29%', size: 3,  delay: 2.2 },
          { top: '60%', left: '40%', size: 5,  delay: 0.4 },
          { top: '55%', left: '51%', size: 2,  delay: 1.8 },
          { top: '62%', left: '62%', size: 6,  delay: 0.0 },
          { top: '58%', left: '72%', size: 3,  delay: 2.6 },
          { top: '65%', left: '83%', size: 5,  delay: 1.1 },
          { top: '61%', left: '94%', size: 2,  delay: 0.6 },

          { top: '70%', left: '4%',  size: 6,  delay: 1.9 },
          { top: '74%', left: '15%', size: 3,  delay: 0.3 },
          { top: '68%', left: '26%', size: 5,  delay: 2.3 },
          { top: '77%', left: '37%', size: 2,  delay: 0.8 },
          { top: '72%', left: '48%', size: 7,  delay: 1.4 },
          { top: '80%', left: '58%', size: 3,  delay: 0.1 },
          { top: '75%', left: '69%', size: 5,  delay: 2.0 },
          { top: '82%', left: '80%', size: 2,  delay: 1.2 },
          { top: '78%', left: '91%', size: 6,  delay: 0.5 },

          { top: '87%', left: '7%',  size: 3,  delay: 2.7 },
          { top: '91%', left: '18%', size: 5,  delay: 0.9 },
          { top: '85%', left: '29%', size: 2,  delay: 1.6 },
          { top: '93%', left: '40%', size: 6,  delay: 0.2 },
          { top: '89%', left: '51%', size: 3,  delay: 2.1 },
          { top: '95%', left: '61%', size: 5,  delay: 0.7 },
          { top: '88%', left: '72%', size: 2,  delay: 1.3 },
          { top: '92%', left: '83%', size: 7,  delay: 0.4 },
          { top: '86%', left: '95%', size: 3,  delay: 2.5 },

          /* Large bloom glows for depth */
          { top: '22%', left: '44%', size: 14, delay: 0.6 },
          { top: '55%', left: '28%', size: 12, delay: 1.5 },
          { top: '40%', left: '72%', size: 16, delay: 2.2 },
          { top: '75%', left: '55%', size: 13, delay: 0.3 },
          { top: '12%', left: '78%', size: 11, delay: 1.8 },
          { top: '66%', left: '8%',  size: 15, delay: 2.8 },
          { top: '33%', left: '90%', size: 12, delay: 0.9 },
          { top: '84%', left: '38%', size: 14, delay: 1.4 },
          { top: '48%', left: '14%', size: 10, delay: 2.0 },
          { top: '6%',  left: '56%', size: 13, delay: 0.4 },

          /* Extra dense fill — row interstitials */
          { top: '10%', left: '8%',  size: 3,  delay: 0.6 },
          { top: '14%', left: '45%', size: 2,  delay: 1.3 },
          { top: '17%', left: '86%', size: 4,  delay: 2.8 },
          { top: '23%', left: '5%',  size: 2,  delay: 0.2 },
          { top: '27%', left: '32%', size: 5,  delay: 1.0 },
          { top: '29%', left: '65%', size: 2,  delay: 2.6 },
          { top: '32%', left: '76%', size: 3,  delay: 0.7 },
          { top: '44%', left: '8%',  size: 4,  delay: 1.5 },
          { top: '46%', left: '44%', size: 2,  delay: 2.9 },
          { top: '49%', left: '96%', size: 5,  delay: 0.1 },
          { top: '54%', left: '35%', size: 3,  delay: 1.7 },
          { top: '56%', left: '57%', size: 2,  delay: 0.8 },
          { top: '59%', left: '88%', size: 4,  delay: 2.3 },
          { top: '63%', left: '18%', size: 2,  delay: 1.1 },
          { top: '66%', left: '44%', size: 5,  delay: 0.5 },
          { top: '69%', left: '79%', size: 3,  delay: 2.0 },
          { top: '71%', left: '64%', size: 2,  delay: 1.6 },
          { top: '73%', left: '10%', size: 4,  delay: 0.3 },
          { top: '76%', left: '24%', size: 3,  delay: 2.4 },
          { top: '79%', left: '96%', size: 2,  delay: 1.0 },
          { top: '81%', left: '48%', size: 5,  delay: 0.6 },
          { top: '83%', left: '66%', size: 3,  delay: 2.7 },
          { top: '84%', left: '14%', size: 2,  delay: 0.4 },
          { top: '90%', left: '56%', size: 4,  delay: 1.8 },
          { top: '94%', left: '8%',  size: 3,  delay: 2.2 },
          { top: '96%', left: '28%', size: 2,  delay: 0.9 },
          { top: '97%', left: '76%', size: 5,  delay: 1.5 },
          { top: '98%', left: '50%', size: 3,  delay: 0.2 },
          { top: '2%',  left: '52%', size: 4,  delay: 2.1 },
          { top: '1%',  left: '90%', size: 2,  delay: 0.7 },
        ].map((s, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #FFD700 0%, #FFA500 50%, transparent 100%)',
              boxShadow: `0 0 ${s.size * 3}px ${s.size * 1.5}px rgba(255, 215, 0, ${s.size > 10 ? 0.18 : 0.55})`,
              animationName: 'sparkle-twinkle',
              animationDuration: `${1.8 + (i % 7) * 0.35}s`,
              animationDelay: `${s.delay}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDirection: 'alternate',
            }}
          />
        ))}
      </div>
    </section>
  );
}
