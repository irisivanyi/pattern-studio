'use client'

interface BottomNavProps {
  activePage: 'home' | 'info' | 'message'
  onNavigate: (page: 'home' | 'info' | 'message') => void
}

export default function BottomNav({ activePage, onNavigate }: BottomNavProps) {
  const handleMessageClick = () => {
    window.location.href = 'mailto:contact@pattern.studio'
  }

  return (
    <nav 
      className="fixed sm:bottom-8 left-1/2 -translate-x-1/2 bg-nav-bg rounded-[64px] px-5 py-5 flex gap-8 items-center justify-center z-[1000]" 
      style={{ 
        bottom: 'calc(1rem + env(safe-area-inset-bottom))'
      }}
    >
      <button
        onClick={() => onNavigate('home')}
        className="w-8 h-8 sm:w-6 sm:h-6 flex items-center justify-center"
        aria-label="Home"
      >
        {activePage === 'home' ? (
          <svg
            className="w-full h-full text-[#141414] transition-opacity duration-200 hover:opacity-80"
            style={{
              opacity: 1
            }}
            viewBox="0 0 24 24"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M9.47763 2.26096C10.9472 1.0669 13.0528 1.0669 14.5224 2.26096L19.5224 6.32346C20.4572 7.08302 21 8.2234 21 9.42792V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V9.42792C3 8.2234 3.54279 7.08302 4.47763 6.32346L9.47763 2.26096Z" fill="currentColor"/>
          </svg>
        ) : (
          <svg
            className="w-full h-full text-[#141414] transition-opacity duration-200 hover:opacity-80"
            style={{
              opacity: 0.5
            }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            preserveAspectRatio="xMidYMid meet"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M9.47763 2.26096C10.9472 1.0669 13.0528 1.0669 14.5224 2.26096L19.5224 6.32346C20.4572 7.08302 21 8.2234 21 9.42792V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V9.42792C3 8.2234 3.54279 7.08302 4.47763 6.32346L9.47763 2.26096Z"/>
          </svg>
        )}
      </button>
      <button
        onClick={() => onNavigate('info')}
        className="w-8 h-8 sm:w-6 sm:h-6 flex items-center justify-center"
        aria-label="Info"
      >
        {activePage === 'info' ? (
          <svg
            className="w-full h-full text-[#141414] transition-opacity duration-200 hover:opacity-80"
            style={{
              opacity: 1
            }}
            viewBox="0 0 24 24"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.4477 10.4477 10 11 10H12C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12C10.4477 12 10 11.5523 10 11ZM12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7Z" fill="currentColor"/>
          </svg>
        ) : (
          <svg
            className="w-full h-full text-[#141414] transition-opacity duration-200 hover:opacity-80"
            style={{
              opacity: 0.5
            }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
        )}
      </button>
      <button
        onClick={handleMessageClick}
        className="w-8 h-8 sm:w-6 sm:h-6 flex items-center justify-center"
        aria-label="Message"
      >
        <svg
          className="w-full h-full text-[#141414] opacity-50 transition-opacity duration-200 hover:opacity-80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M9.61977 10.8613L21 4.55422M9.04766 10.9043L4.10091 5.68812C3.49662 5.05091 3.94833 4 4.82651 4H20.2516C21.025 4 21.5057 4.84039 21.1135 5.50702L13.1905 18.9762C12.7436 19.7358 11.6038 19.5879 11.3657 18.7393L9.28488 11.3223C9.24096 11.1658 9.15954 11.0223 9.04766 10.9043Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </nav>
  )
}

