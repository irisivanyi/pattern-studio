export default function InfoPage() {
  return (
    <div className="relative w-full flex items-start justify-center pt-0 pb-0 px-4">
      <div 
        className="relative z-[1] w-full max-w-[356px] bg-nav-bg rounded-[32px] px-[19px] py-[25px] flex flex-col overflow-y-auto"
        style={{
          // Fit viewport minus nav bar and padding
          height: 'calc(100vh - 120px - 2rem)',
          maxHeight: 'calc(100vh - 120px - 2rem)',
        }}
      >
        {/* Title */}
        <h1 className="font-inter font-medium text-[32px] leading-[40px] tracking-[-0.64px] text-[#1a1a1a] mb-6">
          Pattern turns vision into cultural signal.
        </h1>

        {/* Description */}
        <p className="font-inter font-medium text-base leading-[22px] tracking-[-0.32px] text-[#1a1a1a] mb-8">
          We create products and brands for contemporary leaders across consumer apps, retail, and social platforms.
        </p>

        {/* Contact Button */}
        <button className="w-full h-[42px] bg-[#1a1a1a] border-none rounded-[64px] text-[#f4f4f4] font-inter font-medium text-sm leading-[20px] tracking-[-0.28px] cursor-pointer mb-3 transition-opacity duration-200 hover:opacity-90 active:opacity-80 flex items-center justify-between px-6">
          <span>Contact</span>
          <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9.61977 10.8613L21 4.55422M9.04766 10.9043L4.10091 5.68812C3.49662 5.05091 3.94833 4 4.82651 4H20.2516C21.025 4 21.5057 4.84039 21.1135 5.50702L13.1905 18.9762C12.7436 19.7358 11.6038 19.5879 11.3657 18.7393L9.28488 11.3223C9.24096 11.1658 9.15954 11.0223 9.04766 10.9043Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Social Links */}
        <div className="flex gap-2 mb-8">
          <button className="flex-1 h-[42px] bg-[#e9e9e9] border-none rounded-[64px] text-[#1c1c1c] font-inter font-medium text-sm leading-[20px] tracking-[-0.28px] cursor-pointer transition-opacity duration-200 hover:opacity-90 active:opacity-80 flex items-center justify-between px-6">
            <span>X (Twitter)</span>
            <svg className="w-[18px] h-[18px] opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="flex-1 h-[42px] bg-[#e9e9e9] border-none rounded-[64px] text-[#1c1c1c] font-inter font-medium text-sm leading-[20px] tracking-[-0.28px] cursor-pointer transition-opacity duration-200 hover:opacity-90 active:opacity-80 flex items-center justify-between px-6">
            <span>Are.na</span>
            <svg className="w-[18px] h-[18px] opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Select Clients */}
        <div className="flex flex-col gap-[10px] mb-8">
          <p className="font-inter font-medium text-base leading-[22px] tracking-[-0.32px] text-[#1a1a1a] opacity-50 text-center">
            Select clients
          </p>
          <div className="flex flex-wrap gap-2">
            {['Pangaia', 'Zora', 'tyb', 'fal', 'MoMA', 'Barbican', 'iconslab', 'CAE Collective'].map((client) => (
              <button
                key={client}
                className="h-[42px] bg-[#e9e9e9] border-none rounded-[64px] text-[#1c1c1c] font-inter font-medium text-sm leading-[20px] tracking-[-0.28px] cursor-pointer transition-opacity duration-200 hover:opacity-90 active:opacity-80 flex items-center gap-1 px-6"
              >
                <span>{client}</span>
                <svg className="w-[18px] h-[18px] opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-[2px] mb-8">
          <p className="font-inter font-medium text-base leading-[22px] tracking-[-0.32px] text-[#1a1a1a] opacity-50">
            Services
          </p>
          <div className="font-inter font-medium text-base leading-[26px] tracking-[-0.32px] text-[#1a1a1a]">
            <p className="mb-0">Product strategy</p>
            <p className="mb-0">App gamification</p>
            <p className="mb-0">Interface design</p>
            <p className="mb-0">Experience design</p>
            <p className="mb-0">Web design and development</p>
            <p className="mb-0">Brand narrative</p>
            <p>Visual identity</p>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex flex-col gap-[2px] mb-8">
          <p className="font-inter font-medium text-base leading-[22px] tracking-[-0.32px] text-[#1a1a1a] opacity-50">
            Pricing
          </p>
          <p className="font-inter font-medium text-base leading-[26px] tracking-[-0.32px] text-[#1a1a1a]">
            Projects starting at 10,000 USD.
          </p>
        </div>

        {/* Bottom Contact Button */}
        <button className="w-full h-[42px] bg-[#1a1a1a] border-none rounded-[64px] text-[#f4f4f4] font-inter font-medium text-sm leading-[20px] tracking-[-0.28px] cursor-pointer transition-opacity duration-200 hover:opacity-90 active:opacity-80 flex items-center justify-between px-6">
          <span>Contact</span>
          <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9.61977 10.8613L21 4.55422M9.04766 10.9043L4.10091 5.68812C3.49662 5.05091 3.94833 4 4.82651 4H20.2516C21.025 4 21.5057 4.84039 21.1135 5.50702L13.1905 18.9762C12.7436 19.7358 11.6038 19.5879 11.3657 18.7393L9.28488 11.3223C9.24096 11.1658 9.15954 11.0223 9.04766 10.9043Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

