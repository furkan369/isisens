import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home, Compass, Wallet, Settings } from 'lucide-react';
import { Logo } from './Logo';

export const PhoneMockup: React.FC = () => {
  return (
    /* Outer wrapper holds the fixed -8.8deg tilt so Framer Motion's y animation never overrides it */
    <div
      className="relative select-none"
      style={{
        transform: 'rotate(-8.8deg)',
        transformOrigin: 'center center',
      }}
      aria-label="IsıSens Mobil Uygulama Önizlemesi (Demo)"
    >
      <motion.div
        animate={{ y: [0, -3.5, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Ambient Shadow & Glow Behind Phone */}
        <div
          className="absolute -inset-3 rounded-[38px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 45% 35%, rgba(255, 113, 60, 0.24) 0%, rgba(21, 203, 224, 0.14) 48%, transparent 75%)',
            filter: 'blur(16px)',
          }}
        />

        {/* 3D Left Metallic Chassis Extrusion (Creates realistic 3D thickness on left & bottom) */}
        <div
          className="relative w-[154px] h-[304px] sm:w-[164px] sm:h-[322px] lg:w-[155px] lg:h-[304px] xl:w-[196px] xl:h-[384px] 2xl:w-[226px] 2xl:h-[442px] rounded-[28px] xl:rounded-[35px]"
          style={{
            background: 'linear-gradient(165deg, #A2AAB5 0%, #5F6772 28%, #343A42 65%, #848D9A 100%)',
            boxShadow:
              '-6px 5px 0px #636B76, -8px 7px 0px #2F353D, -20px 24px 42px rgba(0, 0, 0, 0.84), 0 10px 26px rgba(0, 0, 0, 0.6)',
            padding: '2.5px',
          }}
        >
          {/* Left Edge Hardware Buttons (Mute + Volume Up + Volume Down) */}
          <div
            className="absolute -left-[8px] top-[50px] xl:top-[62px] w-[2.5px] h-[14px] xl:h-[18px] rounded-l-sm"
            style={{ background: 'linear-gradient(180deg, #9BA3AE, #4B525C)' }}
          />
          <div
            className="absolute -left-[8px] top-[76px] xl:top-[94px] w-[2.5px] h-[24px] xl:h-[30px] rounded-l-sm"
            style={{ background: 'linear-gradient(180deg, #9BA3AE, #4B525C)' }}
          />
          <div
            className="absolute -left-[8px] top-[106px] xl:top-[132px] w-[2.5px] h-[24px] xl:h-[30px] rounded-l-sm"
            style={{ background: 'linear-gradient(180deg, #9BA3AE, #4B525C)' }}
          />

          {/* Dark Metallic Inner Bezel */}
          <div className="w-full h-full rounded-[25.5px] xl:rounded-[32px] bg-[#05080F] p-[5px] xl:p-[6.5px] flex flex-col relative overflow-hidden">
            {/* Top Notch */}
            <div className="absolute top-[4px] xl:top-[5px] left-1/2 -translate-x-1/2 w-[56px] xl:w-[70px] h-[11px] xl:h-[14px] bg-[#05080F] rounded-b-[9px] z-20 flex items-center justify-center">
              <div className="w-6 xl:w-7 h-[2.5px] rounded-full bg-[#18202C]" />
            </div>

            {/* Phone Screen Interior */}
            <div
              className="w-full h-full rounded-[21px] xl:rounded-[26px] overflow-hidden flex flex-col justify-between px-2.5 xl:px-3.5 pt-4 xl:pt-5 pb-1.5 xl:pb-2 relative"
              style={{
                background: 'linear-gradient(180deg, #091323 0%, #0A1526 55%, #08101E 100%)',
                boxShadow: 'inset 0 0 16px rgba(255, 255, 255, 0.04)',
              }}
            >
              {/* 1. Phone Header Logo */}
              <div className="flex justify-center pt-1 xl:pt-1.5">
                <Logo variant="phone" />
              </div>

              {/* 2. Horseshoe Circular Progress Gauge (%24 Enerji Tasarrufu) */}
              <div className="relative flex items-center justify-center -my-1">
                <svg
                  viewBox="0 0 150 128"
                  className="w-[120px] h-[102px] xl:w-[152px] xl:h-[130px] 2xl:w-[174px] 2xl:h-[148px] overflow-visible"
                >
                  <defs>
                    <linearGradient id="phoneGaugeOrange" x1="18" y1="110" x2="75" y2="14" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FF5238" />
                      <stop offset="55%" stopColor="#FF7B36" />
                      <stop offset="100%" stopColor="#FFB03A" />
                    </linearGradient>
                    <linearGradient id="phoneGaugeCyan" x1="75" y1="14" x2="128" y2="55" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#2EE4F8" />
                      <stop offset="100%" stopColor="#14BBE0" />
                    </linearGradient>
                    <filter id="gaugeGlow" x="-25%" y="-25%" width="150%" height="150%">
                      <feGaussianBlur stdDeviation="3.5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Outer Fine Tick Marks Ring */}
                  <path
                    d="M 28 105 A 57 57 0 1 1 122 105"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.15)"
                    strokeWidth="2.5"
                    strokeDasharray="1.2 4.2"
                  />

                  {/* Base Dark Track Arc */}
                  <path
                    d="M 34 100 A 50 50 0 1 1 116 100"
                    fill="none"
                    stroke="#1B283A"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />

                  {/* Orange-Amber Active Segment (Left up to Top Center) */}
                  <path
                    d="M 34 100 A 50 50 0 0 1 73 20"
                    fill="none"
                    stroke="url(#phoneGaugeOrange)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    filter="url(#gaugeGlow)"
                  />

                  {/* Cyan Active Segment (Top Center to Upper Right) */}
                  <path
                    d="M 78 20 A 50 50 0 0 1 113 44"
                    fill="none"
                    stroke="url(#phoneGaugeCyan)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    filter="url(#gaugeGlow)"
                  />
                </svg>

                {/* Center Text Inside Gauge */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
                  <span className="text-[7.5px] xl:text-[9.5px] font-medium text-[#B8C4D4] tracking-tight">
                    Enerji Tasarrufu
                  </span>
                  <span className="text-[19px] xl:text-[24px] 2xl:text-[27px] font-extrabold text-white leading-tight tracking-[-0.02em]">
                    %24
                  </span>
                </div>
              </div>

              {/* 3. Monthly Consumption Card (Bu Ay Tüketimi ₺1.240 + 70/30 Donut) */}
              <div
                className="rounded-[12px] xl:rounded-[15px] p-2.5 xl:p-3 border border-white/[0.07]"
                style={{
                  background: 'linear-gradient(180deg, rgba(19, 31, 49, 0.92) 0%, rgba(13, 22, 36, 0.95) 100%)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.35)',
                }}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[7.5px] xl:text-[9.5px] font-medium text-[#B0BDCD]">
                    Bu Ay Tüketimi
                  </span>
                  <ChevronRight className="w-2.5 h-2.5 xl:w-3 xl:h-3 text-[#75869C]" />
                </div>

                <div className="text-[16.5px] xl:text-[21px] 2xl:text-[23.5px] font-extrabold text-white leading-tight tracking-[-0.02em] mb-1.5 xl:mb-2">
                  ₺1.240
                </div>

                {/* 70/30 Donut + Label Row */}
                <div className="flex items-center gap-2 xl:gap-2.5">
                  <div className="relative w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] flex-shrink-0">
                    <svg viewBox="0 0 60 60" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="donutOrange" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#FFA236" />
                          <stop offset="100%" stopColor="#FF5636" />
                        </linearGradient>
                        <linearGradient id="donutCyan" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#48EEFF" />
                          <stop offset="100%" stopColor="#16BBE0" />
                        </linearGradient>
                      </defs>
                      {/* 70% Orange Arc */}
                      <circle
                        cx="30"
                        cy="30"
                        r="21"
                        fill="none"
                        stroke="url(#donutOrange)"
                        strokeWidth="8"
                        strokeDasharray="88 132"
                        strokeDashoffset="-32"
                        strokeLinecap="round"
                      />
                      {/* 30% Cyan Arc */}
                      <circle
                        cx="30"
                        cy="30"
                        r="21"
                        fill="none"
                        stroke="url(#donutCyan)"
                        strokeWidth="8"
                        strokeDasharray="36 132"
                        strokeDashoffset="6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] xl:text-[13.5px] font-bold text-white leading-tight">
                      70/30
                    </span>
                    <span className="text-[7px] xl:text-[8.5px] text-[#8A9AB0] truncate mt-0.5">
                      Yasal Dağılım
                    </span>
                  </div>
                </div>
              </div>

              {/* 4. Bottom App Navigation Bar */}
              <div className="pt-1 xl:pt-1.5">
                <div className="flex items-center justify-around px-1">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 xl:w-5 xl:h-5 rounded-full bg-[#FF713C]/15 border border-[#FF713C]/40 flex items-center justify-center">
                      <Home className="w-2.5 h-2.5 xl:w-3 xl:h-3 text-[#FF7E47]" />
                    </div>
                    <span className="w-1 h-1 rounded-full bg-[#FF7E47] mt-0.5" />
                  </div>
                  <Compass className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-[#59697D]" />
                  <Wallet className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-[#59697D]" />
                  <Settings className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-[#59697D]" />
                </div>

                {/* iOS Bottom Home Indicator */}
                <div className="w-10 xl:w-12 h-[2px] rounded-full bg-white/15 mx-auto mt-1" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PhoneMockup;
