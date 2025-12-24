'use client'

import { useState, useEffect } from 'react'

export default function InfoPageBackgroundBlur() {
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
      className="fixed pointer-events-none z-0"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.5,
        // Extend to actual screen edges, including under safe areas
        top: `calc(0px - env(safe-area-inset-top))`,
        right: `calc(0px - env(safe-area-inset-right))`,
        bottom: `calc(0px - env(safe-area-inset-bottom))`,
        left: `calc(0px - env(safe-area-inset-left))`,
        width: `calc(100vw + env(safe-area-inset-left) + env(safe-area-inset-right))`,
        height: `calc(100vh + env(safe-area-inset-top) + env(safe-area-inset-bottom))`,
        minWidth: `calc(100vw + env(safe-area-inset-left) + env(safe-area-inset-right))`,
        minHeight: `calc(100vh + env(safe-area-inset-top) + env(safe-area-inset-bottom))`,
      }}
    />
  )
}

