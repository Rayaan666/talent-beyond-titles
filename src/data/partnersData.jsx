import React from 'react';

export const PARTNERS_DATA = [
  {
    id: 1,
    name: 'FEDEX',
    Logo: ({ className }) => (
      <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* Simplified FedEx Wordmark layout */}
        <path d="M10 35 H25 V43 H18 V50 H24 V58 H18 V70 H10 Z" />
        <path d="M28 35 H42 V43 H34 V48 H40 V55 H34 V62 H42 V70 H28 Z" />
        <path d="M45 35 H55 C62 35 65 38 65 44 V46 C65 52 62 55 55 55 H51 V70 H45 Z M51 42 V48 H54 C57 48 58 47 58 45 C58 43 57 42 54 42 Z" />
        {/* Forward Arrow */}
        <path d="M68 40 L88 52.5 L68 65 Z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'MICROSOFT',
    Logo: ({ className }) => (
      <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* Four distinct squares forming Microsoft logo */}
        <rect x="15" y="15" width="32" height="32" />
        <rect x="53" y="15" width="32" height="32" />
        <rect x="15" y="53" width="32" height="32" />
        <rect x="53" y="53" width="32" height="32" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'AMAZON',
    Logo: ({ className }) => (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Clean Amazon 'A' + Smile Arrow */}
        <path d="M38 52 C38 42, 42 38, 50 38 C58 38, 62 42, 62 52 V64 H56 V52 C56 46, 54 44, 50 44 C46 44, 44 46, 44 52 V64 H38 Z" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <path d="M32 64 C32 58, 36 55, 42 55 C48 55, 50 58, 50 64 H32 Z" fill="currentColor" />
        <path d="M15 72 Q50 92 85 72" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M78 70 L87 72 L82 81" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'GOOGLE',
    Logo: ({ className }) => (
      <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* Iconic Google G symbol */}
        <path d="M85 50 C85 71.5 70.3 86.5 49.5 86.5 C29.4 86.5 13.5 70.1 13.5 50 C13.5 29.9 29.4 13.5 49.5 13.5 C59.4 13.5 67.7 17.1 74 23 L63.6 33.1 C59.7 29.4 55.4 27.5 49.5 27.5 C37.8 27.5 28.2 37.3 28.2 50 C28.2 62.7 37.8 72.5 49.5 72.5 C63.1 72.5 68.1 63 68.9 57.5 H49.5 V44.5 H84.5 C84.8 46.5 85 48.4 85 50 Z" />
      </svg>
    ),
  },
  {
    id: 5,
    name: 'PEPSICO',
    Logo: ({ className }) => (
      <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* Pepsi Globe wave shape */}
        <path d="M50 12 C29 12 12 29 12 50 C12 58 14.5 65.5 19 72 C30 64, 42 56, 58 56 C74 56, 83.5 64.5 90 71.5 C92.5 65.5 94 58.5 94 50 C94 29 77 12 50 12 Z" />
        <path d="M19 72 C27 82, 38 88, 50 88 C67 88, 81 77.5 87 64 C77 56, 68.5 48, 52 48 C32 48, 25 60.5 19 72 Z" opacity="0.65" />
      </svg>
    ),
  },
  {
    id: 6,
    name: 'NIKE',
    Logo: ({ className }) => (
      <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* The clean Nike Swoosh */}
        <path d="M15 52 C32 50, 48 38, 85 18 C72 38, 48 64, 25 78 C21 80.5, 17 81.5, 14 81.5 C10 81.5, 8 78, 11 72 C12.5 68, 14 60, 15 52 Z" />
      </svg>
    ),
  },
  {
    id: 7,
    name: 'TESLA',
    Logo: ({ className }) => (
      <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* The clean Tesla T logo */}
        <path d="M15 15 C35 17.5 65 17.5 85 15 C85.5 16 86 17.5 85.5 19 C75 22 65 25 54 36 L54 75 C54 77 52 79 50 79 C48 79 46 77 46 75 L46 36 C35 25 25 22 14.5 19 C14 17.5 14.5 16 15 15 Z" />
        <path d="M15 10 C35 13 65 13 85 10 C85 12 84 13.5 83 14 C65 16 35 16 17 14 C16 13.5 15 12 15 10 Z" />
      </svg>
    ),
  },
  {
    id: 8,
    name: 'MASTERCARD',
    Logo: ({ className }) => (
      <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* Two intersecting Mastercard circles */}
        <circle cx="36" cy="50" r="30" />
        <circle cx="64" cy="50" r="30" opacity="0.75" />
      </svg>
    ),
  },
  {
    id: 9,
    name: 'SLACK',
    Logo: ({ className }) => (
      <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* Slack logo bubbles */}
        <rect x="42" y="15" width="16" height="28" rx="8" />
        <rect x="58" y="42" width="28" height="16" rx="8" />
        <rect x="42" y="57" width="16" height="28" rx="8" />
        <rect x="14" y="42" width="28" height="16" rx="8" />
        <circle cx="30" cy="23" r="8" />
        <circle cx="77" cy="30" r="8" />
        <circle cx="70" cy="77" r="8" />
        <circle cx="23" cy="70" r="8" />
      </svg>
    ),
  },
  {
    id: 10,
    name: 'AIRBNB',
    Logo: ({ className }) => (
      <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        {/* Airbnb loop */}
        <path d="M50 15 C35 32, 22 50, 22 65 C22 80, 35 85, 50 85 C65 85, 78 80, 78 65 C78 50, 65 32, 50 15 Z" />
        <circle cx="50" cy="62" r="9" />
      </svg>
    ),
  },
];
