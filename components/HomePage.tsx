// import BackgroundBlur from './BackgroundBlur'

export default function HomePage() {
  const images = [
    // { id: 1 },
    // { id: 2 },
    // { id: 3 },
    // { id: 4 },
    // { id: 5 },
  ]

  return (
    <div className="relative w-full min-h-screen px-7 pb-[120px] pt-[25vh]">
      {/* <BackgroundBlur /> */}
      {/* Mobile: Scroll-snap layout - shows 3 images at once */}
      <div className="relative z-[1] sm:hidden w-full max-w-[338px] mx-auto flex flex-col gap-1">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="w-full flex items-center justify-center"
            style={{
              height: '50vh',
              scrollSnapAlign: 'center',
              scrollSnapStop: 'always',
            }}
          >
            <div className="w-full h-[338px] bg-grey-placeholder rounded-[24px] shrink-0" />
          </div>
        ))}
      </div>
      
      {/* Desktop: Original layout with gap */}
      <div className="hidden sm:flex relative z-[1] flex-col gap-3 w-full max-w-[338px] mx-auto pt-[27px] px-0">
        {images.map((image) => (
          <div key={image.id} className="w-full h-[338px] bg-grey-placeholder rounded-[24px] shrink-0" />
        ))}
      </div>
    </div>
  )
}

