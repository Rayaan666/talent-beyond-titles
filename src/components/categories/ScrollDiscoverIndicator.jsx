import React from 'react';

const ScrollDiscoverIndicator = () => (
  <div 
    className="cat-scroll-indicator absolute z-20 flex flex-col items-center gap-3"
    style={{
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)'
    }}
  >
    <div className="flex items-center gap-4">
      <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#B08D57]/50" />
      <div className="relative flex justify-center"
        style={{ width: 22, height: 34, borderRadius: 11, border: '1.5px solid rgba(176,141,87,0.55)' }}
      >
        <div className="absolute top-[6px] w-[3px] h-[3px] rounded-full bg-[#D3AF70]"
          style={{ animation: 'scrollDot 2s ease-in-out infinite' }}
        />
      </div>
      <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#B08D57]/50" />
    </div>
    <span className="text-[9px] font-manrope text-[#B8B1A7]/70 uppercase tracking-[0.3em]">
      Scroll to Discover
    </span>
    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes scrollDot {
        0%   { transform: translateY(0); opacity: 1; }
        50%  { transform: translateY(12px); opacity: 0.4; }
        100% { transform: translateY(0); opacity: 1; }
      }
    ` }} />
  </div>
);

export default ScrollDiscoverIndicator;
