import React from 'react';

interface MonkyfiLogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'icon' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  subtitle?: string;
}

export const MonkyfiLogo: React.FC<MonkyfiLogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
  subtitle,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const tagSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-[13px]',
    xl: 'text-[15px]',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Stylized Cyber-Monkey Icon */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(0,245,255,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cyber Halo / Orbit Arc */}
          <path
            d="M 18 52 A 38 38 0 1 1 82 52"
            stroke="#00F5FF"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="140 10"
          />
          {/* Outer Circuit Nodes */}
          <circle cx="86" cy="30" r="3" fill="#00F5FF" />
          <path d="M 72 38 L 86 30" stroke="#00F5FF" strokeWidth="2" strokeLinecap="round" />
          
          <circle cx="92" cy="46" r="3" fill="#00F5FF" />
          <path d="M 76 46 L 92 46" stroke="#00F5FF" strokeWidth="2" strokeLinecap="round" />
          
          <circle cx="88" cy="62" r="3" fill="#00F5FF" />
          <path d="M 72 58 L 88 62" stroke="#00F5FF" strokeWidth="2" strokeLinecap="round" />

          {/* Monkey Head Silhouette & Geometry */}
          {/* Back of Head */}
          <path
            d="M 28 54 C 24 38, 38 20, 56 22 C 68 23, 76 34, 75 48 C 74 58, 68 64, 58 66 C 54 67, 50 67, 44 65"
            fill="#0F1422"
            stroke="#00F5FF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          
          {/* Thoughtful Face (Gold/Cream Tone) */}
          <path
            d="M 52 28 C 59 29, 64 34, 63 42 C 62 48, 66 52, 69 56 C 71 59, 70 63, 64 65 C 58 67, 52 64, 48 60 C 46 56, 47 48, 48 44 C 49 38, 48 32, 52 28 Z"
            fill="#E9C083"
          />
          {/* Eye */}
          <circle cx="58" cy="40" r="2.5" fill="#0A0C14" />
          <circle cx="59" cy="39" r="0.8" fill="#FFF" />

          {/* Ear with cyber ring */}
          <circle cx="34" cy="46" r="8" fill="#0F1422" stroke="#00F5FF" strokeWidth="2" />
          <circle cx="34" cy="46" r="4.5" fill="#E9C083" />

          {/* Thoughtful Hand supporting chin */}
          <path
            d="M 44 64 C 43 68, 46 75, 48 78 C 50 81, 56 81, 57 76 C 58 72, 54 67, 50 64"
            fill="#E9C083"
            stroke="#0A0C14"
            strokeWidth="1"
          />
          
          {/* Circuit connection traces on temple/neck */}
          <path d="M 64 48 L 74 48" stroke="#00F5FF" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 62 54 L 70 58" stroke="#00F5FF" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="74" cy="48" r="1.5" fill="#00F5FF" />
          <circle cx="70" cy="58" r="1.5" fill="#00F5FF" />
        </svg>
      </div>

      {/* Wordmark and Tagline */}
      {variant !== 'icon' && (
        <div className="flex flex-col">
          <div className={`font-bold tracking-tight font-sans ${textSizes[size]} text-white flex items-center leading-none`}>
            <span>Monky</span>
            <span className="text-[#00F5FF]">fi</span>
            {subtitle && (
              <span className="ml-2 font-normal text-xs md:text-sm text-[#849495] tracking-normal font-sans border-l border-[#3a494a] pl-2">
                {subtitle}
              </span>
            )}
          </div>
          {variant === 'full' && (
            <div className="flex items-center gap-2 mt-1">
              <div className="h-[1.5px] w-4 bg-[#00F5FF]"></div>
              <span className={`font-tech-label ${tagSizes[size]} text-[#E9C083] uppercase tracking-[0.2em]`}>
                Get AI Power
              </span>
              <div className="h-[1.5px] w-4 bg-[#00F5FF]"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
