import { motion } from 'framer-motion';
import { Eye, Heart, Target, Users } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

const items = [
  {
    id: '01',
    letter: 'M',
    title: 'MISSION',
    tone: 'iris',
    Icon: Target,
    art: 'mission',
    image: 'https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/ChatGPT_Image_Aug_14_2026_11_12_26_PM_qridnz',
    description: (
      <>
        To create <span>inclusive</span> performing arts experiences that celebrate employee talent, strengthen workplace belonging, and make recognition more <span>human.</span>
      </>
    ),
  },
  {
    id: '02',
    letter: 'V',
    title: 'VISION',
    tone: 'orange',
    Icon: Eye,
    art: 'vision',
    image: 'https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/ChatGPT_Image_Aug_14_2026_11_12_23_PM_slcfaw',
    description: (
      <>
        To become the UAE&apos;s <span>leading</span> corporate performing arts initiative, building a culture where every employee is <span>celebrated</span> beyond their designation.
      </>
    ),
  },
  {
    id: '03',
    letter: 'P',
    title: 'PURPOSE',
    tone: 'iris',
    Icon: Users,
    art: 'purpose',
    image: 'https://res.cloudinary.com/luphpoxu/image/upload/f_auto,q_auto/ChatGPT_Image_Aug_14_2026_11_12_20_PM_vvwpjd',
    description: (
      <>
        To help organisations see the person behind the profession and give every employee a <span className="about-stage-span">stage</span> to reveal what their job title cannot.
      </>
    ),
  },
];

export default function AboutFoundationMvp() {
  return (
    <section className="mvp-foundation" id="mission-vision-purpose">

        <motion.div
          className="mvp-foundation__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
        >
          <h2>
            Driven by <strong>Purpose</strong><em>.</em>
          </h2>
          <p>
            Three core beliefs that inspire every experience we create<br />
            at <span style={{ color: '#00C4B3' }}>Talent</span> <b style={{ color: '#00C4B3' }}>Beyond</b> <strong style={{ color: '#00C4B3' }}>Titles.</strong>
          </p>
        </motion.div>

      <motion.div
        className="mvp-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.18,
              delayChildren: 0.18,
            },
          },
        }}
      >
        {items.map(({ id, letter, title, tone, Icon, art, image, description }) => (
          <motion.article
            className={`mvp-item mvp-item--${tone} mvp-item--${art}`}
            key={id}
            variants={{
              hidden: { opacity: 0, y: 36, scale: 0.97 },
              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.72, ease } },
            }}
          >
            <div className="mvp-letter-wrap">
              <div className="mvp-paint mvp-paint--back" aria-hidden="true" />
              <img
                src={image}
                className="mvp-letter-image"
                alt={title}
              />
              <div className="mvp-paint mvp-paint--front" aria-hidden="true" />
              <div className="mvp-orbit" aria-hidden="true" />
            </div>

            <div className="mvp-copy">
              <h3>{title.split('').join(' ')}</h3>
              <i aria-hidden="true" />
              <p>{description}</p>
              <div className="mvp-copy__spark" aria-hidden="true" />
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Bottom full-bleed image */}
      <div style={{
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100vw',
        marginTop: '48px',
        marginBottom: '0px',
        lineHeight: 0,
        fontSize: 0,
        zIndex: 10,
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
