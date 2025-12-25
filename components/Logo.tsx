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
  const [topOffset, setTopOffset] = useState(10) // Pixel offset from top when scrolled
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
      if (typeof window !== 'undefined') {
        // Get safe area inset
        const safeAreaTop = parseInt(
          getComputedStyle(document.documentElement)
            .getPropertyValue('env(safe-area-inset-top)')
            .replace('px', '') || '0',
          10
        ) || 0
        
        // Base offset from top (reduced from 20px to 10px)
        let offset = safeAreaTop + 10
        
        // For Chrome mobile, check if browser UI is visible at top
        if (window.visualViewport) {
          // visualViewport.offsetTop directly tells us how much browser UI is at the top
          // When Chrome's UI expands (scrolling up), offsetTop increases
          // We need to add this to move the logo DOWN to account for the expanded UI
          const viewportOffsetTop = window.visualViewport.offsetTop || 0
          
          // Always add the offsetTop - this is the browser UI height at the top
          // When UI expands, offsetTop increases, so logo moves down (correct behavior)
          offset += viewportOffsetTop
        }
        
        setTopOffset(offset)
      }
    }

    checkViewport()
    updateTopOffset()
    
    // Use requestAnimationFrame for smooth updates
    let rafId: number | null = null
    const rafUpdate = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        updateTopOffset()
        rafId = null
      })
    }
    
    window.addEventListener('resize', () => {
      checkViewport()
      rafUpdate()
    })
    
    // Listen to scroll events to catch Chrome UI changes
    window.addEventListener('scroll', rafUpdate, { passive: true })
    
    // Listen to visual viewport changes (Chrome mobile) - these fire when browser UI changes
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', rafUpdate)
      window.visualViewport.addEventListener('scroll', rafUpdate)
    }

    return () => {
      window.removeEventListener('resize', checkViewport)
      window.removeEventListener('scroll', rafUpdate)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', rafUpdate)
        window.visualViewport.removeEventListener('scroll', rafUpdate)
      }
    }
  }, [scrolled]) // Re-run when scrolled state changes

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
        // Keep top at 50% and use transform for both position and scale
        // This ensures smooth simultaneous animation
        top: '50%',
        left: '50%',
        // Combine all transforms for smooth simultaneous animation
        // When scrolled: calculate translateY to move from center (50vh) to topOffset
        // Formula: from 50vh (center) to topOffset = translateY(-50vh + topOffset)
        transform: scrolled 
          ? `translate(-50%, calc(-50vh + ${topOffset}px)) scale(0.5)` 
          : 'translate(-50%, -50%) scale(1)',
        transformOrigin: 'center center',
        // Single transform transition for smooth simultaneous animation
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
