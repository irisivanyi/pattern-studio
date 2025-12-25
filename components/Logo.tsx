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
  const [topPosition, setTopPosition] = useState('calc(env(safe-area-inset-top, 0px) + 20px)')
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
    
    const updateTopPosition = () => {
      if (typeof window !== 'undefined') {
        // Get safe area inset
        const safeAreaTop = parseInt(
          getComputedStyle(document.documentElement)
            .getPropertyValue('env(safe-area-inset-top)')
            .replace('px', '') || '0',
          10
        ) || 0
        
        // For Chrome mobile, check if browser UI is visible
        if (window.visualViewport) {
          const viewportHeight = window.visualViewport.height
          const windowHeight = window.innerHeight
          const browserUIHeight = windowHeight - viewportHeight
          
          // If browser UI is visible at top, add its height
          const topOffset = safeAreaTop + 20 + (browserUIHeight > 0 ? browserUIHeight : 0)
          setTopPosition(`${topOffset}px`)
        } else {
          // Fallback for Safari and other browsers
          setTopPosition(`calc(env(safe-area-inset-top, 0px) + 20px)`)
        }
      }
    }

    checkViewport()
    updateTopPosition()
    
    window.addEventListener('resize', () => {
      checkViewport()
      updateTopPosition()
    })
    
    // Listen to visual viewport changes (Chrome mobile)
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateTopPosition)
      window.visualViewport.addEventListener('scroll', updateTopPosition)
    }

    return () => {
      window.removeEventListener('resize', checkViewport)
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', updateTopPosition)
        window.visualViewport.removeEventListener('scroll', updateTopPosition)
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
        top: scrolled ? topPosition : '50%',
        left: '50%',
        // Combine all transforms for better performance
        // When scrolled: move to top and scale down to 0.5
        // Use dynamic top position that accounts for safe area and browser UI
        transform: scrolled 
          ? 'translate(-50%, 0) scale(0.5)' 
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
