'use client'

import { useState, useEffect } from 'react'

export default function BackgroundBlur() {
  // Randomly select one of the three background variants on mount
  const [variant] = useState(() => {
    const random = Math.floor(Math.random() * 3) + 1
    return random
  })

  // Detect if viewport is mobile
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 640) // sm breakpoint
    }

    // Initial check
    checkViewport()

    // Listen for resize events
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
  }, [])

  // Select the appropriate image based on viewport and variant
  const bgImage = isMobile 
    ? `/mobile-bg-var-${variant}.webp`
    : `/desktop-bg-var-${variant}.webp`

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.64,
        // Ensure it covers full viewport on Safari
        minWidth: '100vw',
        minHeight: '100vh',
        width: '100vw',
        height: '100vh',
      }}
    />
  )
}
