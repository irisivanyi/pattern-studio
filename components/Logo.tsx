'use client'

import { useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'

interface LogoProps {
  scrolled: boolean
}

export default function Logo({ scrolled }: LogoProps) {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  // Randomly select one of the three logo variants on each page load
  const [logoVariant] = useState(() => {
    const random = Math.floor(Math.random() * 3) + 1
    return random
  })

  // Use useLayoutEffect to mount immediately (synchronously) before paint
  useLayoutEffect(() => {
    setMounted(true)
    // Trigger fade-in after a tiny delay to ensure smooth animation
    // Only runs once on mount, not on scroll
    const timer = setTimeout(() => {
      setVisible(true)
    }, 50)
    return () => clearTimeout(timer)
  }, []) // Empty dependency array ensures this only runs once

  const logoContent = (
    <div
      className={`fixed left-1/2 z-[100] pointer-events-none ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        width: 'max-content',
        minWidth: 'max-content',
        overflow: 'visible',
        contain: 'layout style paint',
        isolation: 'isolate',
        clipPath: 'none',
        WebkitClipPath: 'none',
        boxSizing: 'content-box',
        // Use transform only for better performance (no top property)
        top: scrolled ? '20px' : '50%',
        transform: scrolled ? 'translate(-50%, 0)' : 'translate(-50%, -50%)',
        // Optimized transitions: use transform3d for GPU acceleration
        transition: visible 
          ? 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), top 0.3s cubic-bezier(0.4, 0, 0.2, 1)' 
          : 'opacity 0.3s ease-in-out, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), top 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        // Force GPU acceleration
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        perspective: 1000
      }}
    >
      <img
        src={`/logo-var-${logoVariant}.svg`}
        alt="pattern"
        style={{
          width: scrolled ? '200px' : '400px',
          height: 'auto',
          display: 'block',
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          // Prevent blurriness on mobile - use optimize-contrast for SVGs
          imageRendering: '-webkit-optimize-contrast' as any,
          // Force GPU acceleration for smooth rendering
          transform: 'translateZ(0)',
          willChange: 'width'
        }}
      />
    </div>
  )

  if (!mounted) return null

  return createPortal(logoContent, document.body)
}
