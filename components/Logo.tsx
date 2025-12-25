'use client'

import { useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'

interface LogoProps {
  scrolled: boolean
}

export default function Logo({ scrolled }: LogoProps) {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [topOffset, setTopOffset] = useState(60) // Default top offset when scrolled
  // Randomly select one of the three logo variants on each page load
  const [logoVariant] = useState(() => {
    const random = Math.floor(Math.random() * 3) + 1
    return random
  })

  // Detect mobile viewport and handle Chrome mobile viewport changes
  useLayoutEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 640) // sm breakpoint
    }
    
    const updateTopOffset = () => {
      if (typeof window !== 'undefined' && window.visualViewport) {
        // Calculate top offset based on visual viewport
        // Account for browser UI at top
        const viewportTop = window.visualViewport.offsetTop || 0
        // Add safe area inset for notch
        const safeAreaTop = parseInt(getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-top)') || '0', 10) || 0
        setTopOffset(viewportTop + safeAreaTop + 20) // 20px padding from top
      } else {
        // Fallback for browsers without visual viewport API
        setTopOffset(60)
      }
    }

    checkViewport()
    updateTopOffset()
    
    window.addEventListener('resize', () => {
      checkViewport()
      updateTopOffset()
    })
    
    // Listen to visual viewport changes (Chrome mobile)
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateTopOffset)
      window.visualViewport.addEventListener('scroll', updateTopOffset)
    }

    return () => {
      window.removeEventListener('resize', checkViewport)
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', updateTopOffset)
        window.visualViewport.removeEventListener('scroll', updateTopOffset)
      }
    }
  }, [])

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
        // Use transform only for better performance - combine position and scale
        top: '50%',
        left: '50%',
        // Combine all transforms for better performance
        // When scrolled: move to top and scale down to 0.5
        // Use topOffset state for Chrome mobile compatibility
        transform: scrolled 
          ? `translate(-50%, -50%) translateY(calc(-50vh + ${topOffset}px)) scale(0.5)` 
          : 'translate(-50%, -50%) scale(1)',
        transformOrigin: 'center center',
        // Single transform transition for smooth animation
        transition: visible 
          ? 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' 
          : 'opacity 0.3s ease-in-out, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        // Force GPU acceleration
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        willChange: 'transform'
      }}
    >
      <img
        src={`/logo-var-${logoVariant}.svg`}
        alt="pattern"
        style={{
          width: isMobile ? '80vw' : '380px', // Proportional to viewport on mobile
          maxWidth: isMobile ? '80vw' : '380px',
          height: 'auto',
          display: 'block',
          // iOS Safari blur fixes
          imageRendering: '-webkit-optimize-contrast' as any,
          // @ts-ignore - WebKit specific property
          WebkitImageRendering: '-webkit-optimize-contrast',
          // Force GPU acceleration and prevent subpixel rendering
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          // Prevent blur on scale
          willChange: 'transform',
          // Ensure crisp rendering
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }}
      />
    </div>
  )

  if (!mounted) return null

  return createPortal(logoContent, document.body)
}
