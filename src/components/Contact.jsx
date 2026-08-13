import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  Building2,
  ChevronDown,
  FilePenLine,
  LockKeyhole,
  Mail,
  Megaphone,
  MessageSquare,
  Phone,
  Send,
  User,
} from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

const initialValues = {
  name: '',
  organization: '',
  designation: '',
  email: '',
  mobile: '',
  message: '',
  hearAbout: '',
};

const hearOptions = [
  'Social Media',
  'Company / Employer',
  'Friend / Colleague',
  'Event / Exhibition',
  'Email',
  'Search Engine',
  'Partner / Sponsor',
  'Other',
];

function InstagramMark({ size = 25 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookMark({ size = 25 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14.2 8.3H16V5.2c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.7v2.6H5.8v3.5h3v8h3.7v-8h3.1l.5-3.5h-3.6V10c0-1 .3-1.7 1.7-1.7Z" fill="currentColor" />
    </svg>
  );
}

function LinkedinMark({ size = 25 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5.1 9.1h3.2V20H5.1V9.1Zm1.6-5.4a1.85 1.85 0 1 1 0 3.7 1.85 1.85 0 0 1 0-3.7ZM10.4 9.1h3.1v1.5h.1c.4-.8 1.5-1.8 3.1-1.8 3.3 0 3.9 2.2 3.9 5V20h-3.2v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20h-3.2V9.1Z" fill="currentColor" />
    </svg>
  );
}

const contactChannels = [
  {
    tone: 'purple',
    Icon: Phone,
    label: 'Helpline Number',
    value: '+971 54 307 5678',
    href: 'tel:+971543075678',
  },
  {
    tone: 'orange',
    Icon: Mail,
    label: 'For Inquiries and Participation',
    value: 'tbt@theedgeevents.co',
    href: 'mailto:tbt@theedgeevents.co',
  },
  {
    tone: 'purple',
    Icon: Send,
    label: 'For Marketing and Partnerships',
    value: 'marketing@theedgeevents.co',
    href: 'mailto:marketing@theedgeevents.co',
  },
];

const socialLinks = [
  {
    Icon: InstagramMark,
    label: 'Instagram',
    value: '@tbtuaeofficial',
    href: 'https://www.instagram.com/tbtuaeofficial',
  },
  {
    Icon: FacebookMark,
    label: 'Facebook',
    value: 'Talent Beyond Titles',
    href: 'https://www.facebook.com/profile.php?id=61592445615411',
  },
  {
    Icon: LinkedinMark,
    label: 'LinkedIn',
    value: 'Talent Beyond Titles',
    href: 'https://www.linkedin.com/showcase/talent-beyond-titles/',
  },
];

const fields = [
  { name: 'name', label: 'Name', Icon: User, type: 'text' },
  { name: 'organization', label: 'Organization Name', Icon: Building2, type: 'text' },
  { name: 'designation', label: 'Designation', Icon: Briefcase, type: 'text' },
  { name: 'email', label: 'Email ID', Icon: Mail, type: 'email' },
  { name: 'mobile', label: 'Mobile Number', Icon: Phone, type: 'tel', full: true },
  { name: 'message', label: 'Message', Icon: MessageSquare, textarea: true, full: true },
  { name: 'hearAbout', label: 'How did you hear about us?', Icon: Megaphone, select: true, full: true },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.72, ease } },
};

function validate(values) {
  const nextErrors = {};

  Object.entries(values).forEach(([key, value]) => {
    if (!value.trim()) nextErrors[key] = 'This field is required.';
  });

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    nextErrors.email = 'Enter a valid email address.';
  }

  return nextErrors;
}

function FormField({ field, value, error, onChange }) {
  const Icon = field.Icon;
  const fieldId = `registration-${field.name}`;
  const describedBy = error ? `${fieldId}-error` : undefined;

  return (
    <div className={`contact-field ${field.full ? 'contact-field--full' : ''}`}>
      <label htmlFor={fieldId}>{field.label} *</label>
      <div className={`contact-field__control ${error ? 'contact-field__control--error' : ''}`}>
        <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
        {field.textarea ? (
          <textarea
            id={fieldId}
            name={field.name}
            rows={5}
            placeholder={`${field.label} *`}
            value={value}
            onChange={onChange}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
          />
        ) : field.select ? (
          <>
            <select
              id={fieldId}
              name={field.name}
              value={value}
              onChange={onChange}
              aria-invalid={Boolean(error)}
              aria-describedby={describedBy}
            >
              <option value="">How did you hear about us?</option>
              {hearOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown size={18} className="contact-field__chevron" aria-hidden="true" />
          </>
        ) : (
          <input
            id={fieldId}
            name={field.name}
            type={field.type}
            placeholder={`${field.label} *`}
            value={value}
            onChange={onChange}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
          />
        )}
      </div>
      {error && (
        <p className="contact-field__error" id={describedBy}>
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const section = document.getElementById('contact');
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        document.body.classList.toggle('contact-clean-white', entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: '-8% 0px -8% 0px',
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      document.body.classList.remove('contact-clean-white');
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-dots contact-dots--left" aria-hidden="true" />
      <div className="contact-dots contact-dots--right" aria-hidden="true" />
      <motion.img
        src="/contact/performer-crowd.png"
        alt=""
        className="contact-performer"
        initial={{ opacity: 0, x: -34 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.05, ease }}
      />

      <div className="contact-inner">
        <motion.div
          className="contact-left"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.24 }}
          transition={{ staggerChildren: 0.1 }}
        >

          <motion.h2 className="contact-title" variants={reveal}>
            Contact <strong>Us</strong><em>.</em>
          </motion.h2>

          <motion.div className="contact-intro" variants={reveal}>
            <p>
              Have questions? Reach out to us and be part of <strong>Talent Beyond Titles.</strong>
            </p>
          </motion.div>

          <motion.div className="contact-journey" variants={reveal}>
            {contactChannels.map((channel, index) => {
              const Icon = channel.Icon;
              return (
                <motion.a
                  href={channel.href}
                  className={`contact-channel contact-channel--${channel.tone}`}
                  key={channel.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.55 }}
                  transition={{ duration: 0.58, ease, delay: 0.45 + index * 0.12 }}
                >
                  <span className="contact-channel__node">
                    <Icon size={24} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="contact-channel__text">
                    <small>{channel.label}</small>
                    <b>{channel.value}</b>
                  </span>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div className="contact-social" variants={reveal}>
            <h3>Follow Us On</h3>
            <div className="contact-social__line" />
            <div className="contact-social__strip">
              {socialLinks.map(({ Icon, label, value, href }) => (
                <a href={href} key={label} target="_blank" rel="noreferrer" aria-label={`${label}: ${value}`}>
                  <span>
                    <Icon size={25} strokeWidth={2.1} aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="contact-form-shell"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.86, ease, delay: 0.18 }}
        >
          <div className="contact-form-medallion" aria-hidden="true">
            <FilePenLine size={32} strokeWidth={1.8} />
            <span />
            <i />
          </div>

          <div className="contact-form-heading">
            <span />
            <h3><strong>Registration</strong> Form</h3>
            <span />
            <i />
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {fields.map((field, index) => (
              <motion.div
                key={field.name}
                className={field.full ? 'contact-form__full' : ''}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease, delay: 0.42 + index * 0.055 }}
              >
                <FormField
                  field={field}
                  value={values[field.name]}
                  error={errors[field.name]}
                  onChange={handleChange}
                />
              </motion.div>
            ))}

            {submitted && (
              <p className="contact-form__success" role="status">
                Registration details are ready for backend/API integration.
              </p>
            )}

            <motion.button
              type="submit"
              className="contact-submit"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease, delay: 0.9 }}
            >
              Submit Registration
              <ArrowRight size={20} strokeWidth={2} aria-hidden="true" />
            </motion.button>

            <p className="contact-secure">
              <LockKeyhole size={14} strokeWidth={2} aria-hidden="true" />
              Your information is secure and will not be shared.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
