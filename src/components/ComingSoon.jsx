import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export default function ComingSoon({ onEnterPreview }) {
  const calculateTimeLeft = () => {
    // Set target date (e.g. Sept 1, 2026)
    const difference = +new Date('2026-09-01T00:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const handleLogoClick = () => {
    const clicks = logoClicks + 1;
    setLogoClicks(clicks);
    if (clicks >= 5) {
      onEnterPreview();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  const padZero = (num) => String(num).padStart(2, '0');

  return (
    <div className="relative min-h-screen bg-[#050507] text-[#F6F1E8] flex flex-col justify-between items-center px-6 py-12 overflow-hidden select-none">
      
      {/* Mesh Glow Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#5F4DCE]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#FD4300]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#5F4DCE]/5 blur-[90px] pointer-events-none" />

      {/* Header / Logo */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full flex justify-center z-10"
      >
        <div 
          onClick={handleLogoClick}
          className="cursor-pointer active:scale-95 transition-transform"
          title="Click 5 times for developer preview"
        >
          <img src="/logo.png" alt="Talent Beyond Titles" className="h-12 w-auto object-contain" />
        </div>
      </motion.header>

      {/* Main Content Area */}
      <main className="w-full max-w-4xl flex flex-col items-center text-center z-10 my-auto py-8">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-6 h-[1px] bg-[#5F4DCE]" />
          <span className="text-[10px] md:text-[11px] font-manrope text-[#5F4DCE] uppercase tracking-[0.25em] font-semibold">
            The UAE's Premier Corporate Stage
          </span>
          <div className="w-6 h-[1px] bg-[#5F4DCE]" />
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-manrope font-extrabold text-[32px] md:text-[54px] lg:text-[68px] leading-[1.05] tracking-tight uppercase max-w-3xl mb-8"
        >
          Something <span className="text-[#FD4300]">Spectacular</span> <br className="hidden md:inline" />Is On The Way
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-manrope text-[#A09D98] text-[14px] md:text-[16px] max-w-xl leading-relaxed mb-12"
        >
          THE UAE'S FIRST INTER-CORPORATE EMPLOYEE PERFORMING ARTS COMPETITION IS GEARING UP FOR THE GRAND LAUNCH. STAY TUNED.
        </motion.p>

        {/* Countdown Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-4 gap-3 md:gap-6 max-w-lg w-full mb-14"
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Mins', value: timeLeft.minutes },
            { label: 'Secs', value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={index} className="relative bg-[#0d0d11]/80 border border-[#A09D98]/10 rounded-xl p-4 md:p-6 backdrop-blur-md flex flex-col justify-center items-center">
              <span className="font-manrope text-[24px] md:text-[42px] font-black text-[#FAFAF8] leading-none mb-1 md:mb-2">
                {padZero(item.value || 0)}
              </span>
              <span className="font-manrope text-[9px] md:text-[11px] text-[#5F4DCE] uppercase tracking-wider font-bold">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Notification Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="w-full max-w-md"
        >
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[#25D366] font-manrope text-sm font-semibold tracking-wide"
            >
              THANK YOU! WE'LL NOTIFY YOU ONCE WE GO LIVE.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex h-12 w-full border border-[#A09D98]/20 bg-[#0d0d11]/50 focus-within:border-[#5F4DCE] transition-all duration-300 rounded-full overflow-hidden p-1 pl-4">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR CORPORATE EMAIL" 
                className="flex-1 bg-transparent border-0 outline-none text-xs md:text-sm tracking-wide font-manrope text-[#FAFAF8] placeholder-[#A09D98]/50"
              />
              <button 
                type="submit" 
                className="h-full px-6 md:px-8 bg-[#5F4DCE] hover:bg-[#7564E8] text-white rounded-full flex items-center justify-center font-manrope text-xs uppercase tracking-widest font-bold transition-all duration-300 gap-2 shrink-0"
              >
                <span>Notify Me</span>
                <ArrowRight size={14} />
              </button>
            </form>
          )}
        </motion.div>

      </main>

      {/* Footer Area */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="w-full flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl z-10 mt-auto pt-8 border-t border-[#A09D98]/5"
      >
        <p className="font-manrope text-[10px] tracking-[0.1em] text-[#A09D98]/50 uppercase">
          © {new Date().getFullYear()} TALENT BEYOND TITLES. ALL RIGHTS RESERVED.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-[#A09D98]/60">
          <a href="https://instagram.com/tbtuaeofficial" target="_blank" rel="noopener noreferrer" className="hover:text-[#5F4DCE] transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#5F4DCE] transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#5F4DCE] transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </motion.footer>

    </div>
  );
}
