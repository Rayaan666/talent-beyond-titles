import React, { useState } from 'react';
import { ICON_MAP } from '../../data/categoriesData';
import { motion } from 'framer-motion';

const CategoryPortal = ({ category }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = ICON_MAP[category.icon] || ICON_MAP['Star'];
  const diameter = 168;
  const badgeSize = 42;

  return (
    <motion.div
      className="cat-portal absolute opacity-0 cursor-pointer"
      style={{
        left: category.x,
        top: category.y,
        width: diameter,
        height: diameter,
        zIndex: hovered ? 30 : 10,
        overflow: 'visible',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.045, transition: { duration: 0.3, ease: 'easeOut' } }}
    >
      {/* Main circle — image wrapper with clipping */}
      <div
        className="absolute rounded-full transition-all duration-400"
        style={{
          inset: 0,
          border: hovered
            ? '1.5px solid rgba(211,175,112,0.85)'
            : '1px solid rgba(176,141,87,0.45)',
          boxShadow: hovered
            ? '0 0 28px rgba(211,175,112,0.18), inset 0 0 20px rgba(0,0,0,0.8)'
            : 'inset 0 0 20px rgba(0,0,0,0.8)',
        }}
      >
        {/* Image */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <img
            src={category.img}
            alt={category.title}
            loading="lazy"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              transition: 'transform 0.4s ease',
            }}
          />
        </div>

        {/* Bottom gradient overlay — minimal, for label readability only */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(5,5,5,0.62) 0%, rgba(5,5,5,0.10) 40%, transparent 100%)',
          }}
        />

        {/* Gold tint on hover */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-400"
          style={{
            background: 'radial-gradient(circle at center, rgba(176,141,87,0.12), transparent 70%)',
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Category label — anchored to bottom inside circle */}
        <div
          className="absolute"
          style={{
            left: '50%',
            bottom: 18,
            transform: 'translateX(-50%)',
            width: '88%',
            textAlign: 'center',
          }}
        >
          <span
            className="font-manrope text-[#F5F0E7] uppercase"
            style={{
              fontSize: 11,
              letterSpacing: '0.22em',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              display: 'block',
            }}
          >
            {category.title}
          </span>
        </div>
      </div>

      {/* Icon badge — outside the clipping div, attached to lower-right */}
      <div
        className="absolute rounded-full flex items-center justify-center transition-all duration-400"
        style={{
          width: badgeSize,
          height: badgeSize,
          right: -7,
          bottom: 18,
          background: '#0B0C0A',
          border: hovered ? '1.5px solid rgba(211,175,112,0.85)' : '1px solid rgba(176,141,87,0.6)',
          boxShadow: '0 0 10px rgba(0,0,0,0.6)',
          transform: hovered ? 'rotate(5deg)' : 'rotate(0deg)',
          zIndex: 20,
        }}
      >
        <Icon
          size={15}
          color={hovered ? '#D3AF70' : '#B08D57'}
          strokeWidth={1.5}
          style={{ transition: 'color 0.4s ease' }}
        />
      </div>
    </motion.div>
  );
};

export default CategoryPortal;
