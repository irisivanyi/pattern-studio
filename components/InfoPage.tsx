export default function InfoPage() {
  // Spacing constants - adjust these values to change modal positioning
  const TOP_SPACING = 108; // Space from top of viewport (pushes modal down)
  const BOTTOM_SPACING = 32; // Space from bottom of viewport
  const NAV_BAR_SPACE = 32; // Nav bar height + bottom offset (16px offset + 72px nav height)
  const MODAL_TO_NAV_GAP = 44; // Gap between modal bottom and nav bar top
  
  // Calculate modal height: viewport height minus all spacing
  const modalHeight = `calc(100vh - ${TOP_SPACING}px - ${BOTTOM_SPACING}px - ${NAV_BAR_SPACE}px - ${MODAL_TO_NAV_GAP}px)`;

  // Reusable icon components
  const ContactIcon = ({ className = "w-[18px] h-[18px]" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 18 18" fill="none">
      <path d="M7.21484 8.14599L15.75 3.41566M6.78576 8.17826L3.0757 4.26609C2.62248 3.78818 2.96126 3 3.6199 3H15.1887C15.7688 3 16.1293 3.63029 15.8352 4.13027L9.89289 14.2321C9.55774 14.8019 8.70288 14.6909 8.52432 14.0544L6.96368 8.49175C6.93074 8.37434 6.86967 8.26674 6.78576 8.17826Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ExternalLinkIcon = ({ className = "w-[18px] h-[18px] opacity-50" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 18 18" fill="none">
      <path d="M6.75 4.5H6.6C5.33988 4.5 4.70982 4.5 4.22852 4.74524C3.80516 4.96095 3.46095 5.30516 3.24524 5.72852C3 6.20982 3 6.83988 3 8.1V11.4C3 12.6601 3 13.2902 3.24524 13.7715C3.46095 14.1948 3.80516 14.539 4.22852 14.7548C4.70982 15 5.33988 15 6.6 15H9.9C11.1601 15 11.7902 15 12.2715 14.7548C12.6948 14.539 13.039 14.1948 13.2548 13.7715C13.5 13.2902 13.5 12.6601 13.5 11.4V11.25M10.5 3H15M15 3V7.5M15 3L8.25 9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
        className="relative z-[1] w-full max-w-[356px] bg-nav-bg rounded-[32px] px-[19px] py-[25px] flex flex-col overflow-y-auto hide-scrollbar [scrollbar-width:none] [-ms-overflow-style:none]"
        style={{
          height: modalHeight,
          maxHeight: modalHeight,
        }}
      >
        {/* Title */}
        <h1 className="font-inter font-medium text-[28px] leading-[34px] tracking-[-0.2px] text-[#1a1a1a] mb-6">
          Pattern turns vision into cultural signal.
        </h1>

        {/* Description */}
        <p className="font-inter font-medium text-base leading-[22px] tracking-[-0.32px] text-[#1a1a1a] mb-8">
          We create products and brands for contemporary leaders across consumer apps, retail, and social platforms.
        </p>

        {/* Contact Button */}
        <button className="w-full h-[42px] min-h-[42px] max-h-[42px] bg-[#1a1a1a] border-none rounded-[64px] text-[#f4f4f4] font-inter font-medium text-base leading-[20px] tracking-[-0.28px] cursor-pointer mb-3 transition-opacity duration-200 hover:opacity-90 active:opacity-80 flex items-center justify-between px-6">
          <span>Contact</span>
          <ContactIcon className="w-[18px] h-[18px]" />
        </button>

        {/* Social Links */}
        <div className="flex gap-2 mb-8">
          <button className="flex-1 h-[42px] min-h-[42px] max-h-[42px] bg-[#e9e9e9] border-none rounded-[64px] text-[#1c1c1c] font-inter font-medium text-base leading-[20px] tracking-[-0.28px] cursor-pointer transition-opacity duration-200 hover:opacity-90 active:opacity-80 flex items-center justify-between px-6">
            <span>X (Twitter)</span>
            <ExternalLinkIcon />
          </button>
          <button className="flex-1 h-[42px] min-h-[42px] max-h-[42px] bg-[#e9e9e9] border-none rounded-[64px] text-[#1c1c1c] font-inter font-medium text-base leading-[20px] tracking-[-0.28px] cursor-pointer transition-opacity duration-200 hover:opacity-90 active:opacity-80 flex items-center justify-between px-6">
            <span>Are.na</span>
            <ExternalLinkIcon />
          </button>
        </div>

        {/* Select Clients */}
        <div className="flex flex-col gap-[10px] mb-8">
          <p className="font-inter font-medium text-base leading-[22px] tracking-[-0.32px] text-[#1a1a1a] opacity-50 text-left">
            Select clients
          </p>
          <div className="flex flex-wrap gap-2">
            {['Pangaia', 'Zora', 'tyb', 'fal', 'MoMA', 'Barbican', 'iconslab', 'CAE Collective'].map((client) => (
              <button
                key={client}
                className="h-[42px] min-h-[42px] max-h-[42px] bg-[#e9e9e9] border-none rounded-[64px] text-[#1c1c1c] font-inter font-medium text-base leading-[20px] tracking-[-0.28px] cursor-pointer transition-opacity duration-200 hover:opacity-90 active:opacity-80 flex items-center gap-1 px-6"
              >
                <span>{client}</span>
                <ExternalLinkIcon />
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
        <button className="w-full h-[42px] min-h-[42px] max-h-[42px] bg-[#1a1a1a] border-none rounded-[64px] text-[#f4f4f4] font-inter font-medium text-base leading-[20px] tracking-[-0.28px] cursor-pointer transition-opacity duration-200 hover:opacity-90 active:opacity-80 flex items-center justify-between px-6">
          <span>Contact</span>
          <ContactIcon className="w-[18px] h-[18px]" />
        </button>
      </div>
    </div>
  )
}

