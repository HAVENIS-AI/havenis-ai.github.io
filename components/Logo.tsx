import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  const isLight = variant === 'light';

  const havenisTextColor = isLight ? 'text-gray-900' : 'text-[#22D3EE]';
  const aiTextColor = isLight ? 'text-gray-800' : 'text-white';

  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="HAVENIS AI Logo">
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
          <defs>
              <linearGradient id="logo-gradient" x1=".5" y1="0" x2=".5" y2="1">
              <stop offset="0" stopColor="#22D3EE" />
              <stop offset="1" stopColor="#08D9D6" />
              </linearGradient>
          </defs>
          <path 
              d="M12 2L3 7V13C3 17.97 7.03 22.44 12 22C16.97 22.44 21 17.97 21 13V7L12 2Z" 
              fill="url(#logo-gradient)"
              fillOpacity="0.1"
          />
           <path 
              d="M12 2L3 7V13C3 17.97 7.03 22.44 12 22C16.97 22.44 21 17.97 21 13V7L12 2Z" 
              stroke="url(#logo-gradient)" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
          />
          <path 
              d="M12 5.5L5.5 9.5V13.25C5.5 16.96 8.25 20.1 12 20C15.75 20.1 18.5 16.96 18.5 13.25V9.5L12 5.5Z" 
              stroke="#FFFFFF" 
              strokeOpacity="0.5"
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round"
          />
      </svg>
      <span className={`text-2xl font-extrabold tracking-tight ${havenisTextColor}`}>
        HAVENIS <span className={aiTextColor}>AI</span><sup className="text-xs -top-2">™</sup>
      </span>
    </div>
  );
};

export default Logo;