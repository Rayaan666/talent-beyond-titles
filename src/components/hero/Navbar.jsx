import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { HERO_NAV_LINKS } from '../../data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[100] h-[80px] md:h-[90px] hero-navbar opacity-0 translate-y-[-20px] transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(5,5,5,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(176,141,87,0.12)' : 'none',
      }}
    >
      <div className="h-full max-w-[1500px] w-[94%] mx-auto flex items-center justify-between">

        {/* Logo/Wordmark */}
        <a href="#" className="w-[210px] flex flex-col text-[#F6F1E8] font-cormorant leading-none shrink-0 group">
          <span className="text-[13px] md:text-[14px] tracking-[0.2em] group-hover:text-[#D1AE72] transition-colors duration-500">CORPORATE</span>
          <span className="text-xl md:text-[22px] font-bold tracking-[0.08em] group-hover:text-[#D1AE72] transition-colors duration-500 mt-1">TALENT HUNT</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-10 pl-8">
          {HERO_NAV_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-[11px] xl:text-[12px] font-manrope text-[#F6F1E8] capitalize tracking-wide hover:text-[#B08D57] transition-colors duration-300 relative group py-2"
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 h-[1px] bg-[#B08D57] transition-all duration-300 ${link.label === 'Home' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden lg:block shrink-0">
          <a
            href="#register"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#B08D57] text-[#050505] font-manrope text-[11px] font-semibold uppercase tracking-[0.1em] hover:bg-[#D1AE72] transition-colors duration-300"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#F6F1E8] hover:text-[#B08D57] transition-colors shrink-0"
        >
          {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed inset-0 bg-[#050505]/98 backdrop-blur-xl z-40 lg:hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {HERO_NAV_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-cormorant text-[#F6F1E8] tracking-widest hover:text-[#B08D57] transition-colors duration-300"
              style={{
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isOpen ? 1 : 0,
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setIsOpen(false)}
            className="mt-8 px-10 py-4 bg-[#B08D57] text-[#050505] font-manrope text-sm font-semibold uppercase tracking-widest"
            style={{
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0,
              transitionDelay: `${HERO_NAV_LINKS.length * 50}ms`,
            }}
          >
            Register Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
