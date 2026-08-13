import { motion } from 'framer-motion';
import {
  Award,
  CalendarDays,
  Crown,
  ExternalLink,
  Globe2,
  Landmark,
  Lightbulb,
  Rocket,
  Sparkles,
  Store,
  Tent,
  Trophy,
  Users,
} from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

const story = [
  {
    tone: 'iris',
    text: (
      <>
        Edge Events is an integrated event management company delivering corporate, government, cultural, and community experiences across the <span>UAE</span> and <strong>India.</strong>
      </>
    ),
  },
  {
    tone: 'orange',
    text: 'With more than a decade of experience, we combine strategy, creativity, and flawless execution to deliver events that connect people, strengthen brands, and create lasting impact.',
  },
];

const stats = [
  {
    tone: 'iris',
    Icon: CalendarDays,
    value: '12+',
    label: 'YEARS',
    text: 'Delivering events across the UAE & India.',
  },
  {
    tone: 'orange',
    Icon: Users,
    value: '300+',
    label: 'CORPORATE EVENTS',
    text: 'Successfully conceptualised and executed.',
  },
  {
    tone: 'iris',
    Icon: Crown,
    value: 'VVIP',
    label: 'EXPERIENCE',
    text: 'Trusted to deliver high-profile government and executive events across the region.',
  },
];

const expertise = [
  {
    tone: 'iris',
    className: 'edge-panel--corporate',
    Icon: Landmark,
    title: ['CORPORATE &', 'GOVERNMENT', 'EVENTS'],
    phrase: ['Strategic. Seamless.', 'Impactful.'],
    services: [
      ['Conferences', Landmark],
      ['Summits', Users],
      ['Product Launches', Rocket],
      ['Award Ceremonies', Trophy],
    ],
  },
  {
    tone: 'orange',
    className: 'edge-panel--employee',
    Icon: Sparkles,
    title: ['EMPLOYEE', 'ENGAGEMENT &', 'TEAM BUILDING'],
    phrase: ['Stronger teams.', 'Happier workplaces.'],
    services: [
      ['Team Building\nActivities', Users],
      ['Engagement\nPrograms', Award],
      ['Recognition\nEvents', Trophy],
      ['Experiential\nWorkshops', Lightbulb],
    ],
  },
  {
    tone: 'iris',
    className: 'edge-panel--festivals',
    Icon: Sparkles,
    title: ['FESTIVALS,', 'MARKETS &', 'CULTURAL EVENTS'],
    phrase: ['Celebrating culture.', 'Creating communities.'],
    services: [
      ['Cultural\nFestivals', Sparkles],
      ['Public\nFestivals', Tent],
      ['Markets &\nExhibitions', Store],
      ['Community\nEvents', Users],
    ],
  },
];

function EdgeMark() {
  return (
    <div className="edge-brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

export default function AboutEdgeEvents() {
  return (
    <section className="edge-events-section" id="edge-events">

      <div style={{
        height: '2px',
        background: 'linear-gradient(90deg, #5F4DCE 0%, #FD4300 100%)',
        width: 'calc(100% + 128px)',
        marginLeft: '-64px',
        marginBottom: '32px',
        opacity: 0.85,
      }} aria-hidden="true" />

      <motion.div
        className="edge-story"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.24 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.11 } } }}
      >
        <div className="edge-story__copy">
          <motion.div className="edge-eyebrow" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}>
            <b>THE ORGANIZERS</b>
            <i />
            <em />
          </motion.div>

          <h2 className="edge-title">
            <motion.span variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.62, ease } } }}><strong>THE EDGE EVENTS</strong></motion.span>
            <motion.span className="edge-title__sub" variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.62, ease } } }}>CREATING EXPERIENCES THAT LEAVE A LASTING IMPACT.</motion.span>
          </h2>

          <motion.div className="edge-title-rule" variants={{ hidden: { scaleX: 0, opacity: 0 }, show: { scaleX: 1, opacity: 1, transition: { duration: 0.58, ease } } }} />

          <div className="edge-narrative">
            {story.map((item, index) => (
              <motion.div
                className={`edge-narrative__item edge-narrative__item--${item.tone}`}
                key={index}
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.58, ease } } }}
              >
                <div className="edge-narrative__node">{index === 0 ? <Globe2 size={27} strokeWidth={1.7} /> : <Users size={27} strokeWidth={1.7} />}</div>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="edge-hero"
          variants={{ hidden: { opacity: 0, x: 36, scale: 0.98 }, show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, ease } } }}
        >
          <img
            className="edge-logo-main object-cover"
            src="https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/Gemini_Generated_Image_umz6iyumz6iyumz6_xplpmj"
            alt="The Edge Events - Event"
          />
          <div style={{ marginTop: '14px', display: 'flex', justifyContent: 'center' }}>
            <img
              style={{ width: '110px', objectFit: 'contain', opacity: 0.85 }}
              src="https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/logo_6_nwtkks"
              alt="The Edge Events Logo"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="edge-impact"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
      >
        {stats.map(({ tone, Icon, value, label, text }) => (
          <motion.div
            className={`edge-stat edge-stat--${tone}`}
            key={label}
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}
          >
            <div className="edge-stat__icon">
              <Icon size={42} strokeWidth={1.6} aria-hidden="true" />
            </div>
            <div className="edge-stat__copy">
              <strong>{value}</strong>
              <b>{label}</b>
              <p>{text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="edge-expertise-marker">
        <span />
        <b>OUR EXPERTISE</b>
        <span />
      </div>

      <motion.div
        className="edge-panels"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        {expertise.map(({ tone, className, Icon, title, phrase, services }) => (
          <motion.article
            className={`edge-panel edge-panel--${tone} ${className}`}
            key={title.join(' ')}
            variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.62, ease } } }}
          >
            <div className="edge-panel__content">
              <div className="edge-panel__icon">
                <Icon size={38} strokeWidth={1.55} aria-hidden="true" />
              </div>
              <h3>{title.map((line) => <span key={line}>{line}</span>)}</h3>
              <div className="edge-services">
                {services.map(([label, ServiceIcon]) => (
                  <div key={label}>
                    <ServiceIcon size={27} strokeWidth={1.45} aria-hidden="true" />
                    <small>{label}</small>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* ──────────────────────────────────────────────────────────────────────────
         NEW SECTION: THE EDGE IN ACTION CINEMATIC SHOWCASE
         ────────────────────────────────────────────────────────────────────────── */}
      <motion.div
        className="edge-showcase-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.1
            }
          }
        }}
      >

        {/* Section Eyebrow / Introduction Marker */}
        <div className="edge-showcase-eyebrow-container">
          <motion.div
            className="edge-showcase-eyebrow-line edge-showcase-eyebrow-line--iris"
            variants={{
              hidden: { scaleX: 0, originX: 1, opacity: 0 },
              show: { scaleX: 1, opacity: 1, transition: { duration: 0.75, ease } }
            }}
          />
          <motion.div
            className="edge-showcase-eyebrow-diamond"
            variants={{
              hidden: { scale: 0, opacity: 0 },
              show: { scale: 1, opacity: 1, transition: { duration: 0.4, ease } }
            }}
          />
          <motion.div
            className="edge-showcase-eyebrow"
            variants={{
              hidden: { opacity: 0, y: 8 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } }
            }}
          >
            <span className="iris">THE EDGE</span>
            <span className="orange">IN ACTION</span>
          </motion.div>
          <motion.div
            className="edge-showcase-eyebrow-diamond"
            variants={{
              hidden: { scale: 0, opacity: 0 },
              show: { scale: 1, opacity: 1, transition: { duration: 0.4, ease } }
            }}
          />
          <motion.div
            className="edge-showcase-eyebrow-line edge-showcase-eyebrow-line--orange"
            variants={{
              hidden: { scaleX: 0, originX: 0, opacity: 0 },
              show: { scaleX: 1, opacity: 1, transition: { duration: 0.75, ease } }
            }}
          />
        </div>

        {/* Cinematic Asymmetric Panels (Film Strip Showcase) */}
        <div className="edge-showcase-container">
          {/* Panel 1: Image 01 (Reveals Upward) */}
          <motion.div
            className="edge-showcase-panel"
            variants={{
              hidden: { opacity: 0, y: 35 },
              show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } }
            }}
          >
            <div className="edge-showcase-img-wrap">
              <img src="https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/WhatsApp_Image_2022-03-31_at_11.19.22_AM_3_eqdchk" className="edge-showcase-img" alt="Edge Events in Action 1" />
              <div className="edge-showcase-glow" />
            </div>
          </motion.div>

          {/* Panel 2: Image 02 (Reveals Downward) */}
          <motion.div
            className="edge-showcase-panel"
            variants={{
              hidden: { opacity: 0, y: -35 },
              show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } }
            }}
          >
            <div className="edge-showcase-img-wrap">
              <img src="https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/Gemini_Generated_Image_9vji8q9vji8q9vji_kfn9p5" className="edge-showcase-img" alt="Edge Events in Action 2" />
              <div className="edge-showcase-glow" />
            </div>
          </motion.div>

          {/* Panel 3: Image 03 (Reveals Upward) */}
          <motion.div
            className="edge-showcase-panel"
            variants={{
              hidden: { opacity: 0, y: 35 },
              show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } }
            }}
          >
            <div className="edge-showcase-img-wrap">
              <img src="https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/Gemini_Generated_Image_68pmgb68pmgb68pm_szwxju" className="edge-showcase-img" alt="Edge Events in Action 3" />
              <div className="edge-showcase-glow" />
            </div>
          </motion.div>

          {/* Panel 4: Image 04 (Reveals Downward) */}
          <motion.div
            className="edge-showcase-panel"
            variants={{
              hidden: { opacity: 0, y: -35 },
              show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } }
            }}
          >
            <div className="edge-showcase-img-wrap">
              <img src="https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/Gemini_Generated_Image_jn76umjn76umjn76_ye2rkh" className="edge-showcase-img" alt="Edge Events in Action 4" />
              <div className="edge-showcase-glow" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Energy Line Detail */}
        <div className="edge-showcase-bottom-line-wrap">
          <motion.div
            className="edge-showcase-bottom-line"
            variants={{
              hidden: { scaleX: 0, originX: 0.5, opacity: 0 },
              show: { scaleX: 1, opacity: 1, transition: { duration: 1.1, ease } }
            }}
          />
        </div>
      </motion.div>

      <motion.a
        className="edge-find-more"
        href="https://www.theedgeevents.co"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.55, ease }}
      >
        <strong>FIND MORE</strong>
      </motion.a>
    </section>
  );
}
