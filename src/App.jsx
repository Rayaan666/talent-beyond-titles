import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import HeroSection from './components/hero/HeroSection'
import CompetitionCategories from './components/categories/CompetitionCategories'
import CorporateGallery from './components/CorporateGallery'
import Journey from './components/Journey'
import Schedule from './components/Schedule'
import PrizePool from './components/PrizePool'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import './index.css'

function App() {
  return (
    <>
      {/* Noise grain overlay */}
      <div className="noise-bg"></div>

      {/* Custom cursor */}
      <CustomCursor />

      <SmoothScroll>
        <main className="bg-primary-bg">
          <HeroSection />
          <CompetitionCategories />
          <CorporateGallery />
          <Journey />
          <Schedule />
          <PrizePool />
          <Contact />
          <FAQ />

          {/* Footer */}
          <footer className="relative w-full py-16 px-6 md:px-16 bg-[#050505]">
            {/* ── Strong Section Divider above Footer ── */}
            <div className="absolute top-0 left-0 right-0 flex flex-col items-stretch pointer-events-none z-10">
              <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #B08D57 15%, #D3AF70 50%, #B08D57 85%, transparent 100%)' }} />
              <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 5%, rgba(211,175,112,0.35) 25%, rgba(211,175,112,0.6) 50%, rgba(211,175,112,0.35) 75%, transparent 95%)' }} />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div className="font-serif text-sm tracking-wider text-secondary-text">
                <span className="text-accent-gold">C</span>ORPORATE TALENT HUNT
              </div>
              <p className="text-xs tracking-widest text-secondary-text/50 uppercase">© 2025 All Rights Reserved</p>
              <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase text-secondary-text">
                <a href="#" className="hover:text-accent-gold transition-colors">Privacy</a>
                <a href="#" className="hover:text-accent-gold transition-colors">Terms</a>
                <a href="#contact" className="hover:text-accent-gold transition-colors">Contact</a>
              </div>
            </div>
          </footer>
        </main>
      </SmoothScroll>
    </>
  )
}

export default App
