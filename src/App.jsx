import { useEffect, useState } from 'react'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import HeroSection from './components/hero/HeroSection'
import Navbar from './components/hero/Navbar'
import AboutStory from './components/AboutStory'
import AboutFoundationMvp from './components/AboutFoundationMvp'
import AboutEdgeEvents from './components/AboutEdgeEvents'
import CompetitionCategories from './components/categories/CompetitionCategories'
import Journey from './components/Journey'
import AlignmentSection from './components/AlignmentSection'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import { Mail } from 'lucide-react'
import './index.css'

function HomePage() {
  return (
    <>
      <HeroSection />
      <CompetitionCategories />
      <Journey />
      <AlignmentSection />
      <Contact />
      <FAQ />
      <Footer />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <Navbar alwaysVisible />
      <AboutStory />
      <AboutFoundationMvp />
      <AboutEdgeEvents />
      <Footer />
    </>
  )
}

function App() {
  const isMobile = useIsMobile()
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  )
  const [isRoadmapVisible, setIsRoadmapVisible] = useState(false)

  if (isMobile) return <MobileComingSoon />

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
      window.scrollTo(0, 0)
    }

    const handleLinkClick = (e) => {
      const anchor = e.target.closest('a')
      if (anchor) {
        const href = anchor.getAttribute('href')
        // Check if it's an internal link
        if (href && (href.startsWith('/') || href.startsWith(window.location.origin))) {
          const url = new URL(href, window.location.href)
          if (url.pathname !== window.location.pathname) {
            e.preventDefault()
            window.history.pushState(null, '', href)
            setCurrentPath(url.pathname)
            if (url.hash) {
              // Wait for the new page to render, then scroll to section
              setTimeout(() => {
                const target = document.querySelector(url.hash)
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }, 80)
            } else {
              window.scrollTo(0, 0)
            }
          } else if (url.hash) {
            // Same page hash link click
            e.preventDefault()
            window.history.pushState(null, '', href)
            const target = document.querySelector(url.hash)
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          } else {
            // Same page click (e.g. clicking Home when already on Home, or About when on About)
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
        }
      }
    }

    window.addEventListener('popstate', handlePopState)
    document.addEventListener('click', handleLinkClick)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      document.removeEventListener('click', handleLinkClick)
    }
  }, [])

  const isAboutPage = currentPath.replace(/\/$/, '') === '/about'

  useEffect(() => {
    document.body.classList.toggle('about-clean-white', isAboutPage)

    return () => {
      document.body.classList.remove('about-clean-white')
    }
  }, [isAboutPage])

  useEffect(() => {
    const updateRoadmapState = () => {
      const roadmap = document.querySelector('.event-roadmap')
      if (!roadmap) {
        setIsRoadmapVisible(false)
        return
      }

      const rect = roadmap.getBoundingClientRect()
      setIsRoadmapVisible(rect.top < window.innerHeight && rect.bottom > 0)
    }

    updateRoadmapState()
    window.addEventListener('scroll', updateRoadmapState, { passive: true })
    document.addEventListener('scroll', updateRoadmapState, { passive: true })
    const interval = window.setInterval(updateRoadmapState, 250)

    return () => {
      window.removeEventListener('scroll', updateRoadmapState)
      document.removeEventListener('scroll', updateRoadmapState)
      window.clearInterval(interval)
    }
  }, [currentPath])

  useEffect(() => {
    document.body.classList.toggle('roadmap-clean-white', isRoadmapVisible)

    return () => {
      document.body.classList.remove('roadmap-clean-white')
    }
  }, [isRoadmapVisible])

  return (
    <>
      {/* Noise grain overlay */}
      <div className="noise-bg"></div>

      {/* Custom cursor */}
      <CustomCursor />

      <SmoothScroll>
        <main className="bg-primary-bg">
          {isAboutPage ? <AboutPage /> : <HomePage />}
        </main>
      </SmoothScroll>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-[99999] flex flex-col gap-4 pointer-events-auto">
        {/* Email FAB */}
        <a
          href="mailto:tbt@theedgeevents.co"
          className="w-14 h-14 bg-[#5F4DCE] hover:bg-[#7564E8] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(95,77,206,0.6)] hover:-translate-y-1 transition-all duration-300 group"
          aria-label="Email Us"
        >
          <Mail size={22} className="group-hover:scale-110 transition-transform" />
        </a>

        {/* WhatsApp FAB */}
        <a
          href="https://wa.me/971543075678"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 group"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </a>
      </div>
    </>
  )
}

function MobileComingSoon() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'linear-gradient(135deg, #050507 0%, #0d0b1a 50%, #050507 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px 24px',
      textAlign: 'center',
      zIndex: 99999,
      overflow: 'hidden',
    }}>
      {/* Glow blobs */}
      <div style={{
        position: 'absolute', top: '-80px', left: '-80px',
        width: '320px', height: '320px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(95,77,206,0.28), transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', right: '-60px',
        width: '280px', height: '280px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(253,67,0,0.22), transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      {/* Logo */}
      <img
        src="/logo.png"
        alt="Talent Beyond Titles"
        style={{ height: '40px', width: 'auto', objectFit: 'contain', marginBottom: '48px', position: 'relative', zIndex: 1 }}
      />

      {/* Decorative line */}
      <div style={{
        width: '48px', height: '2px',
        background: 'linear-gradient(90deg, #5F4DCE, #FD4300)',
        marginBottom: '32px', borderRadius: '99px',
        position: 'relative', zIndex: 1,
      }} />

      {/* Heading */}
      <h1 style={{
        margin: '0 0 16px',
        color: '#F6F1E8',
        fontFamily: '"Raleway", sans-serif',
        fontSize: '28px',
        fontWeight: '800',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        lineHeight: 1.15,
        position: 'relative', zIndex: 1,
      }}>
        Coming Soon
        <span style={{ display: 'block', color: '#5F4DCE', fontSize: '14px', letterSpacing: '0.32em', fontWeight: '600', marginTop: '8px' }}>
          TO MOBILE
        </span>
      </h1>

      <p style={{
        margin: '0 0 48px',
        color: 'rgba(246,241,232,0.6)',
        fontFamily: '"Raleway", sans-serif',
        fontSize: '15px',
        fontWeight: '400',
        lineHeight: 1.65,
        maxWidth: '300px',
        position: 'relative', zIndex: 1,
      }}>
        We're optimising the experience for mobile. In the meantime, visit us on a laptop or desktop.
      </p>

      {/* CTA Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%', maxWidth: '300px', position: 'relative', zIndex: 1 }}>
        <a
          href="mailto:tbt@theedgeevents.co"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
            padding: '14px 24px',
            background: '#5F4DCE',
            color: '#fff',
            fontFamily: '"Raleway", sans-serif',
            fontSize: '11px', fontWeight: '700',
            letterSpacing: '0.18em', textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: '4px',
          }}
        >
          Email Us
        </a>
        <a
          href="https://wa.me/971543075678"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
            padding: '14px 24px',
            background: 'transparent',
            color: '#F6F1E8',
            fontFamily: '"Raleway", sans-serif',
            fontSize: '11px', fontWeight: '700',
            letterSpacing: '0.18em', textTransform: 'uppercase',
            textDecoration: 'none',
            border: '1px solid rgba(246,241,232,0.18)',
            borderRadius: '4px',
          }}
        >
          WhatsApp Us
        </a>
      </div>

      {/* Footer note */}
      <p style={{
        position: 'absolute', bottom: '28px',
        margin: 0,
        color: 'rgba(246,241,232,0.28)',
        fontFamily: '"Raleway", sans-serif',
        fontSize: '11px', letterSpacing: '0.14em',
      }}>
        © 2026 Talent Beyond Titles
      </p>
    </div>
  )
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 1024 : false
  )
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handler, { passive: true })
    return () => window.removeEventListener('resize', handler)
  }, [])
  return isMobile
}

export default App
