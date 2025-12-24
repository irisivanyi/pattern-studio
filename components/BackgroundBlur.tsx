'use client'

export default function BackgroundBlur() {
  const bgImage = 'http://localhost:3845/assets/7b2b311960f9eb51f9f92836e1b2ddcf8d9817bd.png'

  return (
    <div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 w-[1431px] h-[2275.672px] pointer-events-none z-0"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(82px)',
        opacity: 0.64,
      }}
    />
  )
}
