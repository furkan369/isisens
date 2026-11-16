import React from 'react';

interface LogoProps {
  variant?: 'navbar' | 'phone' | 'dashboard';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'navbar', className = '' }) => {
  const uniqueId = React.useId().replace(/:/g, '');

  const iconSizes = {
    navbar: 'w-[54px] h-[54px] xl:w-[62px] xl:h-[62px] 2xl:w-[68px] 2xl:h-[68px]',
    phone: 'w-[23px] h-[23px] xl:w-[27px] xl:h-[27px]',
    dashboard: 'w-[22px] h-[22px] xl:w-[26px] xl:h-[26px]',
  };

  const textSizes = {
    navbar: 'text-[33.5px] xl:text-[39px] 2xl:text-[43px] leading-[0.98] tracking-[-0.025em]',
    phone: 'text-[14px] xl:text-[16.5px] leading-none tracking-[-0.015em]',
    dashboard: 'text-[13px] xl:text-[15px] leading-none tracking-[-0.015em]',
  };

  return (
    <div className={`inline-flex items-center select-none ${variant === 'navbar' ? 'gap-[7px]' : 'gap-1.5'} ${className}`}>
      {/* Custom SVG Circular Flame + S-Ribbon + Wireless Signal Icon */}
      <div className={`relative flex-shrink-0 ${iconSizes[variant]}`}>
        <svg
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`sMain-${uniqueId}`} x1="14" y1="8" x2="42" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF5B35" />
              <stop offset="28%" stopColor="#FFB03A" />
              <stop offset="56%" stopColor="#6CE8D4" />
              <stop offset="80%" stopColor="#20DCFA" />
              <stop offset="100%" stopColor="#1294D8" />
            </linearGradient>
            <linearGradient id={`sInner-${uniqueId}`} x1="18" y1="12" x2="40" y2="56" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFD764" />
              <stop offset="45%" stopColor="#FF8E3C" />
              <stop offset="72%" stopColor="#58F2FF" />
              <stop offset="100%" stopColor="#15B2EC" />
            </linearGradient>
            <linearGradient id={`flame-${uniqueId}`} x1="8" y1="52" x2="22" y2="20" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#DF4428" />
              <stop offset="55%" stopColor="#FF7937" />
              <stop offset="100%" stopColor="#FFC24B" />
            </linearGradient>
            <linearGradient id={`wave-${uniqueId}`} x1="36" y1="18" x2="58" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5CF2FF" />
              <stop offset="100%" stopColor="#17ACE0" />
            </linearGradient>
            <filter id={`glow-${uniqueId}`} x="-35%" y="-35%" width="170%" height="170%">
              <feGaussianBlur stdDeviation="3.2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Soft ambient halo matching reference */}
          <circle cx="26" cy="24" r="19" fill="#FF6B35" fillOpacity="0.20" />
          <circle cx="38" cy="44" r="18" fill="#18D4F2" fillOpacity="0.20" />

          {/* Left Flame Tongues */}
          <path
            d="M15.5 50.2C10.2 45.6 8.9 38.8 11.6 33.0C13.2 29.6 13.4 26.2 12.4 23.0C15.8 25.8 17.4 30.0 16.1 34.8C14.8 39.6 16.2 44.5 19.9 48.0C18.3 49.3 16.9 50.0 15.5 50.2Z"
            fill={`url(#flame-${uniqueId})`}
          />
          <path
            d="M20.6 47.6C16.8 43.5 15.9 37.6 18.2 31.8C19.6 28.2 19.5 24.0 17.8 20.0C22.0 23.4 23.8 28.4 22.3 34.0C21.0 38.9 22.1 43.2 25.0 46.2C23.5 47.1 22.0 47.6 20.6 47.6Z"
            fill={`url(#flame-${uniqueId})`}
          />
          <path
            d="M11.0 46.5C7.8 42.8 7.2 38.0 9.0 33.8C10.0 31.4 10.0 29.0 9.3 27.0C11.9 29.1 12.9 32.2 11.9 35.7C10.9 39.3 11.7 43.0 14.1 45.7C13.0 46.3 11.9 46.5 11.0 46.5Z"
            fill="#FF6238"
            opacity="0.88"
          />

          {/* Main S Ribbon */}
          <path
            d="M47.8 15.2C41.6 9.2 29.8 8.8 23.8 14.8C18.0 20.4 20.0 28.6 28.6 34.2C37.4 39.8 41.4 46.6 36.8 53.6C32.4 60.2 21.4 60.4 15.0 54.0"
            stroke={`url(#sMain-${uniqueId})`}
            strokeWidth="6.8"
            strokeLinecap="round"
            filter={`url(#glow-${uniqueId})`}
          />

          {/* Bright Core Highlight on S Ribbon */}
          <path
            d="M45.8 16.9C40.6 11.9 31.0 11.6 25.8 16.6C21.0 21.3 22.6 28.0 30.2 32.9C38.0 37.9 41.9 44.8 38.2 51.2C34.7 57.2 25.2 57.6 18.8 52.5"
            stroke={`url(#sInner-${uniqueId})`}
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          {/* Right Wireless Signal Dot & Concentric Arcs */}
          <circle cx="38.2" cy="30.2" r="2.5" fill="#5AF4FF" />
          <path
            d="M42.8 25.0C46.0 27.9 46.0 32.7 42.8 35.6"
            stroke={`url(#wave-${uniqueId})`}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M47.4 20.8C52.6 26.0 52.6 34.6 47.4 39.8"
            stroke={`url(#wave-${uniqueId})`}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M52.0 16.8C59.2 24.2 59.2 36.4 52.0 43.8"
            stroke={`url(#wave-${uniqueId})`}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Text & Micro Tagline */}
      <div className="flex flex-col justify-center">
        <div className={`font-extrabold flex items-baseline ${textSizes[variant]}`}>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(180deg, #F69469 0%, #DF704B 100%)',
            }}
          >
            Isı
          </span>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(180deg, #56DCFA 0%, #30B5DF 100%)',
            }}
          >
            Sens
          </span>
        </div>

        {variant === 'navbar' && (
          <span className="text-[6.2px] xl:text-[7.2px] 2xl:text-[8px] font-medium text-[#8B9EB3] tracking-[-0.01em] leading-none mt-[4px] whitespace-nowrap">
            IoT &amp; Yapay Zeka Destekli Paylaşım Platformu
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
