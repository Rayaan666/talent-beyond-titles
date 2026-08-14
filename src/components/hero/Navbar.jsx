import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { HERO_NAV_LINKS } from '../../data/constants';

const Navbar = ({ alwaysVisible = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isAboutPage = typeof window !== 'undefined' && window.location.pathname.replace(/\/$/, '') === '/about';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] h-[80px] md:h-[90px] hero-navbar transition-all duration-500 ${alwaysVisible || scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'}`}
      style={{
        background: scrolled ? 'rgba(5,5,5,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(95,77,206,0.22)' : 'none',
      }}
    >
      <div className="h-full max-w-[1500px] w-[94%] mx-auto flex items-center justify-between">

        {/* Logo/Wordmark */}
        <a href="/" className="flex items-center shrink-0">
          <img src="/logo.png" alt="Talent Beyond Titles Logo" className="h-8 md:h-9 w-auto object-contain" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-10 pl-8">
          {HERO_NAV_LINKS.map((link, index) => {
            const isActive = (isAboutPage && link.label === 'About') || (!isAboutPage && link.label === 'Home');
            return (
              <a
                key={index}
                href={link.href}
                className="text-[11px] xl:text-[12px] font-manrope text-[#F6F1E8] capitalize tracking-wide hover:text-[#5F4DCE] transition-colors duration-300 relative group py-2"
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-[1px] transition-all duration-300 ${isActive ? 'w-full bg-[#FD4300]' : 'w-0 bg-[#5F4DCE] group-hover:w-full'}`} />
              </a>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="hidden lg:block shrink-0">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#5F4DCE] text-white font-manrope text-[11px] font-semibold uppercase tracking-[0.1em] hover:bg-[#7564E8] hover:shadow-[0_0_15px_rgba(95,77,206,0.55)] transition-all duration-300"
          >
            Inquire Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#F6F1E8] hover:text-[#5F4DCE] transition-colors shrink-0"
        >
          {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed inset-0 bg-[#050505]/98 backdrop-blur-xl z-[10000] lg:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'
        }`}
      >
        {/* Mobile Menu Top Bar */}
        <div className="h-[80px] w-[94%] mx-auto flex items-center justify-between border-b border-white/5">
          <a href="/" onClick={() => setIsOpen(false)} className="flex items-center shrink-0">
            <img src="/logo.png" alt="Talent Beyond Titles Logo" className="h-8 w-auto object-contain" />
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#F6F1E8] hover:text-[#5F4DCE] transition-colors"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] gap-6 pb-20">
          {HERO_NAV_LINKS.map((link, index) => {
            const isActive = (isAboutPage && link.label === 'About') || (!isAboutPage && link.label === 'Home');
            return (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-manrope tracking-widest uppercase transition-colors duration-300 ${
                  isActive ? 'text-[#FD4300] font-bold' : 'text-[#F6F1E8] hover:text-[#5F4DCE]'
                }`}
                style={{
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isOpen ? 1 : 0,
                  transitionDelay: `${index * 50}ms`,
                  transitionProperty: 'transform, opacity',
                  transitionDuration: '500ms'
                }}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 px-8 py-3 bg-[#5F4DCE] text-white font-manrope text-[11px] font-semibold uppercase tracking-widest hover:bg-[#7564E8] transition-all duration-300"
            style={{
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0,
              transitionDelay: `${HERO_NAV_LINKS.length * 50}ms`,
              transitionProperty: 'transform, opacity',
              transitionDuration: '500ms'
            }}
          >
            Inquire Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
