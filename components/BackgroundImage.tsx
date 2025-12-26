'use client'

import { useEffect } from 'react'

export default function BackgroundImage() {
  useEffect(() => {
    // Randomly select one of the 3 background variants (1, 2, or 3)
    const variant = Math.floor(Math.random() * 3) + 1
    
    // Set CSS custom properties for mobile and desktop backgrounds
    document.documentElement.style.setProperty('--bg-mobile', `url('/mobile-bg-var-${variant}.webp')`)
    document.documentElement.style.setProperty('--bg-desktop', `url('/desktop-bg-var-${variant}.webp')`)
  }, [])

  return null
}
