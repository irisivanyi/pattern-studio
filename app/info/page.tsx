'use client'

import { useState, useEffect } from 'react'
import Logo from '@/components/Logo'
import BottomNav from '@/components/BottomNav'
import InfoPage from '@/components/InfoPage'

export default function Info() {
  const [scrolled, setScrolled] = useState(true) // Info page always has small logo

  useEffect(() => {
    // Info page always has small logo at top
    setScrolled(true)
  }, [])

  return (
    <main className="relative w-full overflow-visible" style={{ minHeight: '100dvh' }}>
      <Logo scrolled={scrolled} />
      <InfoPage />
      <BottomNav />
    </main>
  )
}

