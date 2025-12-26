'use client'

import { useEffect } from 'react'

export default function BackgroundColor() {
  useEffect(() => {
    // Background image is now handled by CSS pseudo-element
    // Only set transparent background to ensure image shows through
    document.documentElement.style.backgroundColor = 'transparent'
    document.body.style.backgroundColor = 'transparent'
    
    return () => {
      document.documentElement.style.backgroundColor = ''
      document.body.style.backgroundColor = ''
    }
  }, [])

  return null
}

