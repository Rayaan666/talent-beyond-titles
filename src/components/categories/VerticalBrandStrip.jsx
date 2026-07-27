import React from 'react';

const VerticalBrandStrip = () => (
  <div 
    className="cat-brand-strip opacity-0 absolute top-0 bottom-0 hidden lg:flex flex-col items-center gap-4 pt-[44px] z-20"
    style={{ left: 0, width: 48 }}
  >
    {/* Crown emblem */}
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#B08D57]">
      <path d="M3 17h18l-1.5-8L15 12l-3-6-3 6-4.5-3L3 17z" fill="currentColor" opacity="0.9" />
      <path d="M2 17h20v2H2v-2z" fill="currentColor" />
    </svg>

    {/* Vertical text */}
    <div
      className="font-manrope text-[10px] tracking-[0.35em] uppercase text-[#B08D57]/75 mt-3"
      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
    >
      Competition Categories
    </div>

    {/* Vertical line */}
    <div className="flex-1 w-[1px] bg-gradient-to-b from-[#B08D57]/45 to-transparent mt-4" />
  </div>
);

export default VerticalBrandStrip;
