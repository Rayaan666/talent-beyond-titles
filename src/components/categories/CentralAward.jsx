import React from 'react';

/**
 * CentralAward — placed at left:600 top:210 inside the 1440×660 composition wrapper.
 * size: 240×240 (center is at cx=720, cy=330)
 */
const CentralAward = ({ isMobile = false }) => {
  const size = isMobile ? 160 : 240;

  const containerStyle = isMobile
    ? {
        position: 'relative',
        width: size,
        height: size,
        margin: '0 auto',
      }
    : {
        position: 'absolute',
        left: 600,
        top: 210,
        width: size,
        height: size,
        zIndex: 15,
        overflow: 'visible',
      };

  const r = size / 2;

  return (
    <div
      className={`cat-central-award flex items-center justify-center ${isMobile ? '' : 'opacity-0 translate-y-[30px]'}`}
      style={containerStyle}
    >
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(211,175,112,0.16) 0%, transparent 70%)',
        }}
      />

      {/* Ring 1 — outermost */}
      <div
        className="absolute rounded-full border border-[#B08D57]/28 cat-ring-1"
        style={{ width: size, height: size }}
      />
      {/* Ring 2 */}
      <div
        className="absolute rounded-full border border-[#B08D57]/38 cat-[#B08D57] cat-ring-2"
        style={{ width: size * 0.82, height: size * 0.82 }}
      />
      {/* Ring 3 */}
      <div
        className="absolute rounded-full border border-[#D3AF70]/48 cat-ring-3"
        style={{ width: size * 0.64, height: size * 0.64 }}
      />

      {/* Inner solid circle */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.5,
          height: size * 0.5,
          background: 'radial-gradient(circle at 40% 35%, #1c1700 0%, #050505 80%)',
          border: '1px solid rgba(176,141,87,0.55)',
          boxShadow: '0 0 50px rgba(211,175,112,0.18), inset 0 0 30px rgba(0,0,0,0.7)',
        }}
      />

      {/* Warm spotlight from top */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -40,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 120,
          height: 160,
          background:
            'conic-gradient(from 180deg at 50% 0%, transparent 128deg, rgba(211,175,112,0.15) 155deg, transparent 182deg)',
          filter: 'blur(16px)',
        }}
      />

      {/* Trophy SVG — anchored at center */}
      <svg
        className="relative z-10"
        width={isMobile ? 52 : 66}
        height={isMobile ? 60 : 76}
        viewBox="0 0 66 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Pedestal */}
        <rect x="18" y="66" width="30" height="4" rx="1" fill="#D3AF70" opacity="0.9" />
        <rect x="24" y="58" width="18" height="9" rx="1" fill="#C4A063" opacity="0.9" />
        {/* Cup body */}
        <path d="M19 15 C19 33 13 40 13 40 L53 40 C53 40 47 33 47 15 Z" fill="url(#tg-ca)" />
        <path d="M19 15 C19 7 25 3 33 3 C41 3 47 7 47 15" fill="url(#tg-ca)" />
        {/* Handles */}
        <path d="M19 17 Q9 21 11 31 Q13 39 19 39" stroke="#D3AF70" strokeWidth="1.8" fill="none" />
        <path d="M47 17 Q57 21 55 31 Q53 39 47 39" stroke="#D3AF70" strokeWidth="1.8" fill="none" />
        {/* Star */}
        <path
          d="M33 0 L34.4 3.8 L38.5 3.8 L35.2 6.2 L36.5 10 L33 7.7 L29.5 10 L30.8 6.2 L27.5 3.8 L31.6 3.8 Z"
          fill="#F5D57A"
          filter="url(#star-glow-ca)"
        />
        <defs>
          <linearGradient id="tg-ca" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F5D57A" />
            <stop offset="50%" stopColor="#D3AF70" />
            <stop offset="100%" stopColor="#927044" />
          </linearGradient>
          <filter id="star-glow-ca">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Tiny orbit particles around ring-2 */}
      {!isMobile &&
        [0, 60, 120, 180, 240, 300].map((deg, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#D3AF70]"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${deg}deg) translateX(${r * 0.82}px) translateY(-50%)`,
              boxShadow: '0 0 5px rgba(211,175,112,0.9)',
              opacity: 0.55 + (i % 3) * 0.15,
            }}
          />
        ))}
    </div>
  );
};

export default CentralAward;
