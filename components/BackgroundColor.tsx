'use client'

import { useEffect } from 'react'

export default function BackgroundColor() {
  useEffect(() => {
    const colors = ['#9FABE8', '#EAF99A', '#E4E7C5']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    
    document.documentElement.style.backgroundColor = randomColor
    document.body.style.backgroundColor = randomColor
    
    return () => {
      // Cleanup on unmount (optional)
      document.documentElement.style.backgroundColor = ''
      document.body.style.backgroundColor = ''
    }
  }, [])

  return null
}

