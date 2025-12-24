'use client'

import { useState, useEffect } from 'react'
import Logo from '@/components/Logo'
import BottomNav from '@/components/BottomNav'
import HomePage from '@/components/HomePage'
import InfoPage from '@/components/InfoPage'
import BackgroundSetter from '@/components/BackgroundSetter'

export default function Home() {
  const [activePage, setActivePage] = useState<'home' | 'info' | 'message'>('home')
  const [scrolled, setScrolled] = useState(false)

  const scrollThreshold = 100

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset
          const isHomePage = activePage === 'home'
          
          if (!isHomePage) {
            // Info page always has small logo at top
            setScrolled(true)
          } else {
            // Home page: large when at top, small when scrolled
            setScrolled(scrollY > scrollThreshold)
          }
          
          ticking = false
        })
        
        ticking = true
      }
    }

    // Initial check
    const scrollY = window.scrollY || window.pageYOffset
    const isHomePage = activePage === 'home'
    setScrolled(isHomePage ? scrollY > scrollThreshold : true)

    // Add scroll listener with throttling via requestAnimationFrame
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activePage])

  const handleNavigate = (page: 'home' | 'info' | 'message') => {
    setActivePage(page)
    // Scroll to top when switching pages
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // Update scrolled state immediately for info page
    if (page === 'info') {
      setScrolled(true)
    } else if (page === 'home') {
      // Check current scroll position for home page
      const scrollY = window.scrollY || window.pageYOffset
      setScrolled(scrollY > scrollThreshold)
    }
  }

  return (
    <main className="relative w-full overflow-visible" style={{ minHeight: '100dvh' }}>
      <BackgroundSetter />
      <Logo scrolled={scrolled} />
      
      {activePage === 'home' && <HomePage />}
      {activePage === 'info' && <InfoPage />}
      
      <BottomNav activePage={activePage} onNavigate={handleNavigate} />
    </main>
  )
}

