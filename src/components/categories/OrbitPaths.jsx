import React from 'react';

/**
 * OrbitPaths — SVG fills the 1440×660 composition wrapper.
 * Ellipses are centered on the award at cx=720, cy=330.
 * Full 360° complete orbit rings with accurate circumferences.
 */
const OrbitPaths = () => (
  <svg
    className="absolute top-0 left-0 w-full h-full pointer-events-none cat-orbits opacity-0"
    viewBox="0 0 1440 660"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="gnod">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient id="og1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="rgba(176,141,87,0.35)" />
        <stop offset="50%"  stopColor="rgba(211,175,112,0.60)" />
        <stop offset="100%" stopColor="rgba(176,141,87,0.35)" />
      </linearGradient>
      <linearGradient id="og2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="rgba(176,141,87,0.25)" />
        <stop offset="50%"  stopColor="rgba(211,175,112,0.45)" />
        <stop offset="100%" stopColor="rgba(176,141,87,0.25)" />
      </linearGradient>
    </defs>

    {/* Outer wide ellipse — rx=670, ry=220 (Circumference ~3132px) */}
    <ellipse
      cx="720" cy="330"
      rx="670" ry="220"
      fill="none"
      stroke="url(#og1)"
      strokeWidth="1.2"
      className="cat-orbit-1"
      strokeDasharray="3200"
      strokeDashoffset="3200"
    />

    {/* Mid ellipse — rx=510, ry=160 (Circumference ~2375px) */}
    <ellipse
      cx="720" cy="330"
      rx="510" ry="160"
      fill="none"
      stroke="url(#og2)"
      strokeWidth="1"
      className="cat-orbit-2"
      strokeDasharray="2400"
      strokeDashoffset="2400"
    />

    {/* Inner ellipse — rx=345, ry=100 (Circumference ~1595px) */}
    <ellipse
      cx="720" cy="330"
      rx="345" ry="100"
      fill="none"
      stroke="rgba(176,141,87,0.35)"
      strokeWidth="0.8"
      className="cat-orbit-3"
      strokeDasharray="1600"
      strokeDashoffset="1600"
    />

    {/* Glowing nodes placed at ellipse cardinal / intercardinal points */}
    <circle cx="50"   cy="330" r="3.5" fill="#D3AF70" filter="url(#gnod)" className="cat-orbit-node opacity-0" />
    <circle cx="1390" cy="330" r="3.5" fill="#D3AF70" filter="url(#gnod)" className="cat-orbit-node opacity-0" />
    <circle cx="720"  cy="110" r="2.5" fill="#B08D57" filter="url(#gnod)" className="cat-orbit-node opacity-0" />
    <circle cx="720"  cy="550" r="2.5" fill="#B08D57" filter="url(#gnod)" className="cat-orbit-node opacity-0" />
    <circle cx="316"  cy="195" r="2"   fill="#D3AF70" filter="url(#gnod)" className="cat-orbit-node opacity-0" />
    <circle cx="1124" cy="195" r="2"   fill="#D3AF70" filter="url(#gnod)" className="cat-orbit-node opacity-0" />
    <circle cx="316"  cy="465" r="2"   fill="#B08D57" filter="url(#gnod)" className="cat-orbit-node opacity-0" />
    <circle cx="1124" cy="465" r="2"   fill="#B08D57" filter="url(#gnod)" className="cat-orbit-node opacity-0" />
  </svg>
);

export default OrbitPaths;
