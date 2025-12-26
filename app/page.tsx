'use client'

import { useState, useEffect } from 'react'
import Logo from '@/components/Logo'
import BottomNav from '@/components/BottomNav'
import HomePage from '@/components/HomePage'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  const scrollThreshold = 100

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset
          // Home page: large when at top, small when scrolled
          setScrolled(scrollY > scrollThreshold)
          
          ticking = false
        })
        
        ticking = true
      }
    }

    // Initial check
    const scrollY = window.scrollY || window.pageYOffset
    setScrolled(scrollY > scrollThreshold)

    // Add scroll listener with throttling via requestAnimationFrame
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main className="relative w-full overflow-visible" style={{ minHeight: '100dvh' }}>
      <Logo scrolled={scrolled} />
      <HomePage />
      <BottomNav />
    </main>
  )
}

