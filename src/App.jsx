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
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  )

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
          // Avoid intercepting hash-only or external URLs
          const url = new URL(href, window.location.href)
          if (url.pathname !== window.location.pathname) {
            e.preventDefault()
            window.history.pushState(null, '', href)
            setCurrentPath(url.pathname)
            window.scrollTo(0, 0)
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

export default App
