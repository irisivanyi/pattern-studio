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
      className="fixed pointer-events-none z-0"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.64,
        // Extend to actual screen edges, including under safe areas
        // Position from the actual screen edges (not viewport edges)
        top: `calc(-1 * env(safe-area-inset-top, 0px))`,
        right: `calc(-1 * env(safe-area-inset-right, 0px))`,
        bottom: `calc(-1 * env(safe-area-inset-bottom, 0px))`,
        left: `calc(-1 * env(safe-area-inset-left, 0px))`,
        // Make it large enough to cover safe areas - use viewport units for fixed positioning
        width: `calc(100vw + env(safe-area-inset-left, 0px) + env(safe-area-inset-right, 0px))`,
        height: `calc(100svh + env(safe-area-inset-top, 0px) + env(safe-area-inset-bottom, 0px))`,
        minWidth: `calc(100vw + env(safe-area-inset-left, 0px) + env(safe-area-inset-right, 0px))`,
        minHeight: `calc(100svh + env(safe-area-inset-top, 0px) + env(safe-area-inset-bottom, 0px))`,
      }}
    />
  )
}
