import React from 'react';
import { Users, Building2, Trophy, Globe } from 'lucide-react';

const STATIC_STATS = [
  { value: '50K+', label: 'Participants', icon: Users },
  { value: '1200+', label: 'Companies', icon: Building2 },
  { value: '15+', label: 'Talent Categories', icon: Trophy },
  { value: '20+', label: 'Countries', icon: Globe },
];

const StatsRow = () => {
  return (
    <div className="flex items-center gap-6 lg:gap-8 max-w-full overflow-hidden pt-4">
      {STATIC_STATS.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center group">
              <Icon className="w-5 h-5 text-[#B08D57] mb-2" strokeWidth={1.5} />
              <span className="text-2xl lg:text-[28px] font-cormorant text-[#F6F1E8] leading-none mb-1">
                {stat.value}
              </span>
              <span className="text-[10px] font-manrope text-[#B8B2A8] opacity-60 capitalize">
                {stat.label}
              </span>
            </div>
            {index !== STATIC_STATS.length - 1 && (
              <div className="w-[1px] h-10 bg-[#B08D57]/20" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StatsRow;
