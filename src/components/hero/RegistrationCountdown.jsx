import React, { useState, useEffect, useRef } from 'react';

const RegistrationCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  // Set deadline to exactly 21 days from the first mount — persisted across re-renders
  const targetDateRef = useRef(Date.now() + 21 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    const targetDate = targetDateRef.current;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, '0'),
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0'),
        });
      } else {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINS', value: timeLeft.minutes },
    { label: 'SECS', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-[460px] py-4 px-6 rounded-[14px] bg-[#050505]/60 backdrop-blur-md border border-[#B08D57]/30 flex flex-col justify-center relative overflow-hidden">
      
      {/* Subtle inner gradient/glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#B08D57]/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <h4 className="text-[10px] font-manrope text-[#B08D57] uppercase tracking-[0.2em] mb-3 text-left font-medium">
          Registrations Close In
        </h4>
        
        <div className="flex items-center justify-between w-full">
          {timeBlocks.map((block, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center min-w-[2.5rem]">
                <span className="text-[28px] md:text-[32px] font-cormorant text-[#F6F1E8] tabular-nums leading-[1] mb-1">
                  {block.value}
                </span>
                <span className="text-[9px] font-manrope text-[#B8B2A8] opacity-60 uppercase tracking-widest">
                  {block.label}
                </span>
              </div>
              {index !== timeBlocks.length - 1 && (
                <div className="w-[1px] h-8 bg-[#B08D57]/20" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegistrationCountdown;
