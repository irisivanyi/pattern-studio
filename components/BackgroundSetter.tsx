'use client'

import { useEffect } from 'react'

export default function BackgroundSetter() {
  useEffect(() => {
    // Randomly select one of the three background variants
    const variant = Math.floor(Math.random() * 3) + 1
    
    // Set CSS custom properties for background images
    document.documentElement.style.setProperty('--bg-image', `url('/mobile-bg-var-${variant}.webp')`)
    document.documentElement.style.setProperty('--bg-image-desktop', `url('/desktop-bg-var-${variant}.webp')`)
  }, [])

  return null
}

