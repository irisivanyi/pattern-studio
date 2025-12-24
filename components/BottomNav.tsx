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
    <nav className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 bg-nav-bg rounded-[64px] px-5 py-5 flex gap-8 items-center justify-center z-[1000]">
      <button
        onClick={() => onNavigate('home')}
        className="w-6 h-6 flex items-center justify-center"
        aria-label="Home"
      >
        <svg
          className={`w-6 h-6 text-[#141414] transition-opacity duration-200 hover:opacity-80 ${
            activePage === 'home' ? 'opacity-100' : 'opacity-50'
          }`}
          viewBox="0 0 24 24"
          fill={activePage === 'home' ? 'currentColor' : 'none'}
          stroke={activePage === 'home' ? 'none' : 'currentColor'}
          strokeWidth="2"
        >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.47763 2.26096C10.9472 1.0669 13.0528 1.0669 14.5224 2.26096L19.5224 6.32346C20.4572 7.08302 21 8.2234 21 9.42792V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V9.42792C3 8.2234 3.54279 7.08302 4.47763 6.32346L9.47763 2.26096Z" fill="#141414"/>

        </svg>
      </button>
      <button
        onClick={() => onNavigate('info')}
        className="w-6 h-6 flex items-center justify-center"
        aria-label="Info"
      >
        <svg
          className={`w-6 h-6 text-[#141414] transition-opacity duration-200 hover:opacity-80 ${
            activePage === 'info' ? 'opacity-100' : 'opacity-50'
          }`}
          viewBox="0 0 24 24"
          fill={activePage === 'info' ? 'currentColor' : 'none'}
          stroke={activePage === 'info' ? 'none' : 'currentColor'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11 11H12V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8C12.75 8.41421 12.4142 8.75 12 8.75C11.5858 8.75 11.25 8.41421 11.25 8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="#141414" stroke="#141414" stroke-width="0.5"/>


        </svg>
      </button>
      <button
        onClick={handleMessageClick}
        className="w-6 h-6 flex items-center justify-center"
        aria-label="Message"
      >
        <svg
          className="w-6 h-6 text-[#141414] opacity-50 transition-opacity duration-200 hover:opacity-80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9.61977 10.8613L21 4.55422M9.04766 10.9043L4.10091 5.68812C3.49662 5.05091 3.94833 4 4.82651 4H20.2516C21.025 4 21.5057 4.84039 21.1135 5.50702L13.1905 18.9762C12.7436 19.7358 11.6038 19.5879 11.3657 18.7393L9.28488 11.3223C9.24096 11.1658 9.15954 11.0223 9.04766 10.9043Z" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

        </svg>
      </button>
    </nav>
  )
}

