'use client'

import { useState, useLayoutEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function BottomNav() {
  const pathname = usePathname()
  const router = useRouter()
  
  // Determine active page from pathname
  const activePage = pathname === '/info' ? 'info' : 'home'
  const [bottomOffset, setBottomOffset] = useState('calc(1rem + env(safe-area-inset-bottom))')

  useLayoutEffect(() => {
    let lastBottomUI = -1
    let initialBottomUI = -1
    let rafId: number | null = null
    
    const updateBottomOffset = () => {
      if (typeof window !== 'undefined' && window.visualViewport) {
        const viewportHeight = window.visualViewport.height
        const windowHeight = window.innerHeight
        
        // Calculate current bottom UI height
        const bottomUI = Math.max(0, windowHeight - viewportHeight)
        
        // Capture initial bottom UI on first run
        if (initialBottomUI === -1) {
          initialBottomUI = bottomUI
        }
        
        // Only update if bottomUI changed (reduces glitching)
        if (bottomUI !== lastBottomUI) {
          lastBottomUI = bottomUI
          
          const safeAreaBottom = parseInt(
            getComputedStyle(document.documentElement)
              .getPropertyValue('env(safe-area-inset-bottom)')
              .replace('px', '') || '0',
            10
          ) || 0

          // Position nav: when UI collapses (bottomUI decreases), nav should move DOWN
          // To move DOWN with bottom positioning, we need to INCREASE the bottom value
          // So: base + safeArea + (initial - current) = increases when current decreases
          const baseOffset = 16 // 1rem
          const totalOffset = baseOffset + safeAreaBottom + initialBottomUI - bottomUI
          
          setBottomOffset(`${totalOffset}px`)
        }
      } else {
        setBottomOffset('calc(1rem + env(safe-area-inset-bottom))')
      }
    }

    // Throttled update function
    const throttledUpdate = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        updateBottomOffset()
        rafId = null
      })
    }

    updateBottomOffset()

    // Listen to both resize and visual viewport changes
    window.addEventListener('resize', throttledUpdate)
    if (window.visualViewport) {
      // Listen to resize (fires when UI collapses/expands)
      window.visualViewport.addEventListener('resize', throttledUpdate)
      // Also listen to scroll to catch UI changes during scroll
      window.visualViewport.addEventListener('scroll', throttledUpdate)
    }

    return () => {
      window.removeEventListener('resize', throttledUpdate)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', throttledUpdate)
        window.visualViewport.removeEventListener('scroll', throttledUpdate)
      }
    }
  }, [])

  const handleMessageClick = () => {
    window.location.href = 'mailto:contact@pattern.studio'
  }

  return (
    <nav 
      className="fixed sm:bottom-8 left-1/2 -translate-x-1/2 bg-nav-bg rounded-[64px] px-5 py-5 flex gap-8 items-center justify-center z-[1000] shadow-lg" 
      style={{ 
        bottom: bottomOffset,
        boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.1)'
      }}
    >
      <button
        onClick={() => {
          router.push('/')
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        className="group w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center overflow-visible"
        aria-label="Home"
      >
        {activePage === 'home' ? (
          <svg
            className="w-full h-full text-[#141414] opacity-100 transition-opacity duration-200 group-hover:opacity-80"
            style={{
              transform: 'scale(1)'
            }}
            viewBox="0 0 24 24"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.47763 2.26096C10.9472 1.0669 13.0528 1.0669 14.5224 2.26096L19.5224 6.32346C20.4572 7.08302 21 8.2234 21 9.42792V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V9.42792C3 8.2234 3.54279 7.08302 4.47763 6.32346L9.47763 2.26096Z" fill="#141414"/>
          </svg>
        ) : (
          <svg
            className="w-full h-full text-[#141414] opacity-50 transition-opacity duration-200 group-hover:opacity-100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            preserveAspectRatio="xMidYMid meet"
          >
          <path d="M4 10.2847C4 9.44537 4 9.02572 4.10594 8.63772C4.1998 8.29397 4.35414 7.9697 4.56174 7.68009C4.79607 7.3532 5.12176 7.08857 5.77316 6.55932L8.97316 3.95932C10.0521 3.08266 10.5916 2.64434 11.1913 2.47646C11.7203 2.3284 12.2797 2.3284 12.8087 2.47646C13.4084 2.64434 13.9479 3.08266 15.0268 3.95932L18.2268 6.55932C18.8782 7.08857 19.2039 7.3532 19.4383 7.68009C19.6459 7.9697 19.8002 8.29397 19.8941 8.63772C20 9.02572 20 9.44537 20 10.2847V15.2C20 16.8802 20 17.7202 19.673 18.362C19.3854 18.9265 18.9265 19.3854 18.362 19.673C17.7202 20 16.8802 20 15.2 20H8.8C7.11984 20 6.27976 20 5.63803 19.673C5.07354 19.3854 4.6146 18.9265 4.32698 18.362C4 17.7202 4 16.8802 4 15.2V10.2847Z" stroke="#141414" stroke-width="2" stroke-linejoin="round"/>
          </svg>
        )}
      </button>
      <button
        onClick={() => {
          router.push('/info')
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        className="group w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center overflow-visible"
        aria-label="Info"
      >
        {activePage === 'info' ? (
          <svg
            className="w-full h-full text-[#141414] opacity-100 transition-opacity duration-200 group-hover:opacity-80"
            style={{
              transform: 'scale(1)'
            }}
            viewBox="0 0 24 24"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.4477 10.4477 10 11 10H12C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12C10.4477 12 10 11.5523 10 11ZM12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7Z" fill="#141414"/>
          </svg>
        ) : (
          <svg
            className="w-full h-full text-[#141414] opacity-50 transition-opacity duration-200 group-hover:opacity-100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M11 11H12V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8C12.75 8.41421 12.4142 8.75 12 8.75C11.5858 8.75 11.25 8.41421 11.25 8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="#141414" stroke="#141414" stroke-width="0.5"/>
          </svg>
        )}
      </button>
      <button
        onClick={handleMessageClick}
        className="w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center"
        aria-label="Message"
      >
        <svg
          className="w-full h-full text-[#141414] opacity-50 transition-opacity duration-200 hover:opacity-100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          preserveAspectRatio="xMidYMid meet"
        >
        <path d="M9.61971 10.8613L20.9999 4.55422M9.0476 10.9043L4.10085 5.68812C3.49656 5.05091 3.94827 4 4.82645 4H20.2515C21.0249 4 21.5056 4.84039 21.1135 5.50702L13.1904 18.9762C12.7436 19.7358 11.6038 19.5879 11.3657 18.7393L9.28482 11.3223C9.2409 11.1658 9.15947 11.0223 9.0476 10.9043Z" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </nav>
  )
}

