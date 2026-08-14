import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Headphones } from 'lucide-react';

const faqs = [
  {
    id: '01',
    question: 'Who can participate?',
    answer: [
      'The championship is open exclusively to employees of registered corporate organisations and government entities across the UAE.',
    ],
  },
  {
    id: '02',
    question: 'Can I participate as an individual?',
    answer: [
      "At the moment, individual registrations are not available. Participation is only through your employer. If your organisation has not yet registered, we'd be happy to connect with your HR team to explore participation.",
    ],
  },
  {
    id: '03',
    question: 'Which organisations can register?',
    answer: [
      'Any private company, government entity, semi-government organisation, or public sector organisation operating within the UAE is welcome to participate.',
    ],
  },
  {
    id: '04',
    question: 'Is there an age requirement?',
    answer: [
      'Participants must be employed by a registered organisation and meet the legal working age requirements in the UAE (18 years and above).',
    ],
  },
  {
    id: '05',
    question: 'What performance categories are available?',
    answer: [
      'Participants can compete in:',
      ['Singing', 'Dancing - Solo / Group', 'Musical Instrument', 'Open Category (including acting, spoken word, stand-up comedy, magic, and martial arts)'],
    ],
  },
  {
    id: '06',
    question: 'Can teams participate, or is it only for individuals?',
    answer: [
      'Both individual and group performances are welcome, depending on the category and competition guidelines.',
    ],
  },
  {
    id: '07',
    question: 'Do I need to be a professional performer?',
    answer: [
      'Not at all. Talent Beyond Titles celebrates passion, creativity, and confidence—not professional experience. Employees of all skill levels are encouraged to participate.',
    ],
  },
  {
    id: '08',
    question: 'How does the competition work?',
    answer: [
      'The championship takes place in three stages:',
      ['Intra-Corporate Auditions', 'Inter-Corporate Qualifiers', 'UAE Grand Finale'],
      'Employees first compete within their own organisation before advancing to the national stages.',
    ],
  },
  {
    id: '09',
    question: 'Where will the auditions take place?',
    answer: [
      "Initial auditions are conducted at participating organisations' offices by the TBT team. Qualifiers and the Grand Finale will be held at designated event venues across the UAE.",
    ],
  },
  {
    id: '10',
    question: 'Is there a registration fee?',
    answer: [
      'Yes. Corporate participation is subject to a registration fee. Please contact us for the latest registration packages and pricing.',
    ],
  },
  {
    id: '11',
    question: 'Who will judge the performances?',
    answer: [
      'Performances will be evaluated by a panel of industry professionals and celebrity judges. The judging panel will be announced closer to the event.',
    ],
  },
  {
    id: '12',
    question: 'How do we register our organisation?',
    answer: [
      "Simply complete the registration form on our website or get in touch with our team. We'll guide you through the onboarding process and provide everything you need to launch TBT within your organisation.",
    ],
  },
  {
    id: '13',
    question: 'How many employees can participate from one organisation?',
    answer: [
      'Each participating organisation may nominate up to 50 employees in total, subject to the competition guidelines.',
    ],
  },
  {
    id: '14',
    question: 'Will participants receive photos and videos of their performances?',
    answer: [
      'Yes. Professional event photography and videography will be available, and participating organisations will receive selected content for internal and external communications.',
    ],
  },
  {
    id: '15',
    question: 'Can family and colleagues attend the Grand Finale?',
    answer: [
      'Yes. The Grand Finale is designed to celebrate employees alongside colleagues, leadership, families, sponsors, and invited guests.',
    ],
  },
].map((faq, index) => {
  const tealIndices = new Set([0, 2, 4, 7, 9, 12, 14]);
  const accent = tealIndices.has(index) ? 'teal' : index % 2 === 0 ? 'iris' : 'orange';
  return { ...faq, accent };
});

const ease = [0.16, 1, 0.3, 1];

function FAQAnswer({ answer }) {
  return (
    <div className="faq-item__answer">
      {answer.map((block, index) => {
        if (Array.isArray(block)) {
          return (
            <ul key={`list-${index}`}>
              {block.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        return <p key={block}>{block}</p>;
      })}
    </div>
  );
}

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <section className="faq-section" id="faqs">
      <div className="faq-dot-field faq-dot-field--iris" aria-hidden="true" />

      <div className="faq-content">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="faq-title">
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know about participating in{' '}
            <strong style={{ color: '#00C4B3', fontWeight: '700' }}>Talent Beyond Titles.</strong>
          </p>
        </motion.div>

        <motion.div
          className="faq-accordion"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.04,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {faqs.map((faq, index) => {
            const isActive = activeFaq === index;
            const answerId = `faq-answer-${faq.id}`;

            return (
              <motion.div
                key={faq.id}
                className={`faq-item faq-item--${faq.accent} ${isActive ? 'is-open' : ''}`}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
                }}
              >
                <button
                  type="button"
                  className="faq-item__button"
                  aria-expanded={isActive}
                  aria-controls={answerId}
                  onClick={() => setActiveFaq(isActive ? null : index)}
                >
                  <span className="faq-item__number">{faq.id}</span>
                  <span className="faq-item__divider" aria-hidden="true" />
                  <span className="faq-item__question">{faq.question}</span>
                  <span className="faq-item__plus" aria-hidden="true" />
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      id={answerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease }}
                    >
                      <FAQAnswer answer={faq.answer} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="faq-contact-cta"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.55, ease, delay: 0.35 }}
        >
          <Headphones size={31} strokeWidth={1.7} aria-hidden="true" />
          <span>Still have questions?</span>
          <i aria-hidden="true" />
          <a href="https://wa.me/971543075678" target="_blank" rel="noopener noreferrer" aria-label="Contact our team on WhatsApp">
            CONTACT OUR TEAM
            <ArrowRight size={24} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
