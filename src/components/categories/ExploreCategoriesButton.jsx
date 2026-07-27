import React from 'react';
import { ArrowRight } from 'lucide-react';

const ExploreCategoriesButton = () => (
  <a
    href="#categories"
    className="cat-btn group absolute hidden lg:flex items-center justify-center gap-3 border border-[#B08D57] text-[#D3AF70] font-manrope text-[11px] uppercase tracking-[0.18em] hover:bg-[#B08D57]/10 transition-colors duration-300 z-20"
    style={{ 
      top: 42, 
      right: 26, 
      width: 245, 
      height: 50 
    }}
  >
    <span>Explore Categories</span>
    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
  </a>
);

export default ExploreCategoriesButton;
