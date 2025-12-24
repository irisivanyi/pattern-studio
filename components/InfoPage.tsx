import InfoPageBackgroundBlur from './InfoPageBackgroundBlur'

export default function InfoPage() {
  return (
    <div className="relative w-full min-h-screen flex items-start justify-center pt-[73px]">
      <InfoPageBackgroundBlur />
      <div className="relative z-[1] w-full max-w-[356px] h-[562px] bg-nav-bg rounded-[32px] px-[19px] py-[25px] flex flex-col items-center overflow-hidden mx-4">
        <p className="font-inter font-medium text-base leading-[22px] tracking-[-0.32px] text-text-light text-center mt-0 mb-auto">
          placeholder text
        </p>
        <button className="w-[318px] h-[42px] bg-contact-bg border-none rounded-[64px] text-contact-text font-inter font-medium text-base leading-[22px] tracking-[-0.32px] cursor-pointer mt-auto mb-2 transition-opacity duration-200 hover:opacity-90 active:opacity-80">
          contact
        </button>
        <div className="flex gap-2 w-[318px]">
          <button className="flex-1 h-[42px] bg-social-bg border-none rounded-[64px] text-social-text font-inter font-medium text-base leading-[22px] tracking-[-0.32px] cursor-pointer transition-opacity duration-200 hover:opacity-90 active:opacity-80">
            are.na
          </button>
          <button className="flex-1 h-[42px] bg-social-bg border-none rounded-[64px] text-social-text font-inter font-medium text-base leading-[22px] tracking-[-0.32px] cursor-pointer transition-opacity duration-200 hover:opacity-90 active:opacity-80">
            x <span className="text-twitter-label">(Twitter)</span>
          </button>
        </div>
      </div>
    </div>
  )
}

