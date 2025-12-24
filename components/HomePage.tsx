// import BackgroundBlur from './BackgroundBlur'

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen px-7 pb-[120px]">
      {/* <BackgroundBlur /> */}
      <div className="relative z-[1] flex flex-col gap-3 w-full max-w-[338px] mx-auto pt-[27px] px-0">
        <div className="w-full h-[338px] bg-grey-placeholder rounded-[24px] shrink-0" />
        <div className="w-full h-[338px] bg-grey-placeholder rounded-[24px] shrink-0" />
        <div className="w-full h-[338px] bg-grey-placeholder rounded-[24px] shrink-0" />
        <div className="w-full h-[338px] bg-grey-placeholder rounded-[24px] shrink-0" />
        <div className="w-full h-[338px] bg-grey-placeholder rounded-[24px] shrink-0" />

      </div>
    </div>
  )
}

