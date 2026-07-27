import React from 'react';

const CategoriesHeader = () => (
  <div 
    className="absolute z-20 text-center"
    style={{
      top: 44,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 560,
    }}
  >
    {/* COMPETITION CATEGORIES label */}
    <div className="flex items-center justify-center gap-4 mb-4">
      <div className="w-12 h-[1px] bg-[#B08D57]/60" />
      <span className="text-[10px] font-manrope text-[#B08D57] uppercase tracking-[0.35em] font-medium">Competition Categories</span>
      <div className="w-12 h-[1px] bg-[#B08D57]/60" />
    </div>

    {/* Main heading */}
    <h2 className="font-cormorant leading-[0.92] mb-5 cat-heading">
      <span className="block text-[#F5F0E7] text-[64px]">Thirteen</span>
      <span className="block italic text-[#C7A467] text-[68px]">Disciplines.</span>
    </h2>

    {/* Gold divider with center dot */}
    <div className="flex items-center justify-center gap-0 mb-5 cat-divider">
      <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-[#B08D57]/60" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#D3AF70] shadow-[0_0_8px_rgba(211,175,112,0.8)] mx-2" />
      <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-[#B08D57]/60" />
    </div>

    {/* Supporting copy */}
    <p className="mx-auto text-[16px] font-manrope text-[#F5F0E7]/70 leading-[1.65] max-w-[470px] cat-description">
      Each category represents a unique realm of human expression, waiting to be explored and celebrated.
    </p>
  </div>
);

export default CategoriesHeader;
