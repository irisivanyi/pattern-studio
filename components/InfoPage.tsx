export default function InfoPage() {
  // Spacing constants - adjust these values to change modal positioning
  const TOP_SPACING = 128; // Space from top of viewport (pushes modal down)
  const BOTTOM_SPACING = 128; // Space from bottom of viewport
  const NAV_BAR_SPACE = 32; // Nav bar height + bottom offset (16px offset + 72px nav height)
  const MODAL_TO_NAV_GAP = 44; // Gap between modal bottom and nav bar top
  
  // Calculate modal height: viewport height minus all spacing
  const modalHeight = `calc(100vh - ${TOP_SPACING}px - ${BOTTOM_SPACING}px - ${NAV_BAR_SPACE}px - ${MODAL_TO_NAV_GAP}px)`;

  // Reusable icon components
  const ContactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M8.81817 9.9562L19.2501 4.17469M8.29373 9.99564L3.75921 5.2141C3.20528 4.62999 3.61935 3.66666 4.42435 3.66666H18.564C19.273 3.66666 19.7136 4.43701 19.3541 5.04809L12.0913 17.3948C11.6817 18.0912 10.6369 17.9555 10.4186 17.1776L8.51119 10.3788C8.47093 10.2353 8.39629 10.1038 8.29373 9.99564Z" stroke="currentColor" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  );

  const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ opacity: 0.5 }}>
      <path d="M8.25008 5.49999H8.06675C6.5266 5.49999 5.75653 5.49999 5.16827 5.79972C4.65083 6.06337 4.23013 6.48407 3.96648 7.00152C3.66675 7.58977 3.66675 8.35985 3.66675 9.89999V13.9333C3.66675 15.4735 3.66675 16.2435 3.96648 16.8318C4.23013 17.3492 4.65083 17.7699 5.16827 18.0336C5.75653 18.3333 6.5266 18.3333 8.06675 18.3333H12.1001C13.6402 18.3333 14.4103 18.3333 14.9986 18.0336C15.516 17.7699 15.9367 17.3492 16.2003 16.8318C16.5001 16.2435 16.5001 15.4735 16.5001 13.9333V13.75M12.8334 3.66666H18.3334M18.3334 3.66666V9.16666M18.3334 3.66666L10.0834 11.9167" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div 
      className="relative w-full flex items-start justify-center px-4"
      style={{
        paddingTop: `${TOP_SPACING}px`,
        paddingBottom: `${BOTTOM_SPACING}px`,
      }}
    >
      <div 
        className="relative z-[1] w-full max-w-[356px] bg-nav-bg rounded-[32px] px-[19px] py-[25px] flex flex-col"
      >
        {/* Title */}
        <h1 className="font-inter font-medium text-[28px] leading-[34px] tracking-[-0.2px] text-[#1a1a1a] mb-6 px-2">
         Turning vision into cultural signal.
        </h1>

        {/* Description */}
        <p className="font-inter font-medium text-base leading-[22px] tracking-[-0.32px] text-[#1a1a1a] mb-8 px-2">
          We create products and brands for contemporary leaders across consumer apps, retail, and social platforms.
        </p>

        {/* Contact and Social Links */}
        <div className="flex flex-col gap-2 mb-8">
          {/* Contact Button */}
          <button className="w-full h-[46px] min-h-[46px] max-h-[46px] bg-[#1a1a1a] border-none rounded-[64px] text-[#f4f4f4] font-inter font-medium text-base leading-[20px] tracking-[-0.28px] cursor-pointer transition-opacity duration-200 hover:opacity-90 active:opacity-80 flex items-center justify-between px-4">
            <span>Contact</span>
            <ContactIcon />
          </button>

          {/* Social Links */}
          <div className="flex flex-col gap-2">
            <button className="relative w-full h-[46px] min-h-[46px] max-h-[46px] bg-[#e9e9e9] border-none rounded-[64px] text-[#1c1c1c] font-inter font-medium text-base leading-[20px] tracking-[-0.28px] cursor-pointer transition-all duration-200 active:opacity-80 flex items-center justify-between px-4 before:content-[''] before:absolute before:inset-0 before:rounded-[64px] before:opacity-0 before:transition-opacity before:duration-200 hover:before:opacity-100 before:bg-[rgba(26,26,26,0.08)]">
              <span className="relative z-10">X (Twitter)</span>
              <span className="relative z-10"><ExternalLinkIcon /></span>
            </button>
            <button className="relative w-full h-[46px] min-h-[46px] max-h-[46px] bg-[#e9e9e9] border-none rounded-[64px] text-[#1c1c1c] font-inter font-medium text-base leading-[20px] tracking-[-0.28px] cursor-pointer transition-all duration-200 active:opacity-80 flex items-center justify-between px-4 before:content-[''] before:absolute before:inset-0 before:rounded-[64px] before:opacity-0 before:transition-opacity before:duration-200 hover:before:opacity-100 before:bg-[rgba(26,26,26,0.08)]">
              <span className="relative z-10">Are.na</span>
              <span className="relative z-10"><ExternalLinkIcon /></span>
            </button>
          </div>
        </div>

        {/* Select Clients */}
        <div className="flex flex-col gap-[10px] mb-8">
          <p className="font-inter font-medium text-base leading-[22px] tracking-[-0.32px] text-[#1a1a1a] opacity-50 text-left px-2">
            Select clients
          </p>
          <div className="flex flex-wrap gap-2">
            {['Pangaia', 'Zora', 'tyb', 'fal', 'MoMA', 'Barbican', 'iconslab', 'CAE Collective'].map((client) => (
              <button
                key={client}
                className="relative h-[46px] min-h-[46px] max-h-[46px] bg-[#e9e9e9] border-none rounded-[64px] text-[#1c1c1c] font-inter font-medium text-base leading-[20px] tracking-[-0.28px] cursor-pointer transition-all duration-200 active:opacity-80 flex items-center gap-1 px-4 before:content-[''] before:absolute before:inset-0 before:rounded-[64px] before:opacity-0 before:transition-opacity before:duration-200 hover:before:opacity-100 before:bg-[rgba(26,26,26,0.08)]"
              >
                <span className="relative z-10">{client}</span>
                <span className="relative z-10"><ExternalLinkIcon /></span>
              </button>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-[2px] mb-8 px-2">
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
        <div className="flex flex-col gap-[2px] mb-8 px-2">
          <p className="font-inter font-medium text-base leading-[22px] tracking-[-0.32px] text-[#1a1a1a] opacity-50">
            Pricing
          </p>
          <p className="font-inter font-medium text-base leading-[26px] tracking-[-0.32px] text-[#1a1a1a]">
            Projects starting at 10,000 USD.
          </p>
        </div>

        {/* Bottom Contact Button */}
        <button className="w-full h-[46px] min-h-[46px] max-h-[46px] bg-[#1a1a1a] border-none rounded-[64px] text-[#f4f4f4] font-inter font-medium text-base leading-[20px] tracking-[-0.28px] cursor-pointer transition-opacity duration-200 hover:opacity-90 active:opacity-80 flex items-center justify-between px-4">
          <span>Contact</span>
          <ContactIcon />
        </button>
      </div>
    </div>
  )
}

