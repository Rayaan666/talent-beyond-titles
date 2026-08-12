import React from 'react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-0 hero-scroll-indicator z-50">
      <div className="w-[22px] h-[36px] rounded-full border-[1px] border-[#5F4DCE]/50 flex justify-center p-1 relative">
        <div className="w-[3px] h-[3px] rounded-full bg-[#FD4300] absolute top-[8px] animate-[scrollDownDot_2s_ease-in-out_infinite]" />
      </div>
      <p className="text-[9px] tracking-[0.25em] text-[#B8B2A8] font-manrope uppercase opacity-60">
        Scroll to Explore
      </p>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollDownDot {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(12px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0; }
        }
      `}} />
    </div>
  );
};

export default ScrollIndicator;
