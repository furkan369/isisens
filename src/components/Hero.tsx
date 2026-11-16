import React from 'react';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  onExploreClick: () => void;
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenDemo }) => {
  return (
    <section
      id="anasayfa"
      aria-labelledby="hero-main-heading"
      className="relative w-full pt-[18px] pb-[8px] lg:pt-[34px] lg:pb-[10px] xl:pt-[48px] xl:pb-[20px] overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[950px] xl:max-w-[1220px] 2xl:max-w-[1440px] px-4 sm:px-8 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-6 lg:gap-2">
          {/* LEFT COLUMN (~48% width -> 6 cols) */}
          <div className="min-w-0 lg:col-span-6 z-20 flex flex-col items-start text-left lg:pt-[34px] xl:pt-[42px]">
            {/* Top Rounded Badge */}
            <div
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-[12px] sm:px-[14px] py-[5.5px] sm:py-[6px] xl:px-[18px] xl:py-[7.5px] mb-[15px] sm:mb-[17px] xl:mb-[22px] max-w-full"
              style={{
                background: 'linear-gradient(90deg, rgba(24, 38, 58, 0.88) 0%, rgba(18, 30, 46, 0.88) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.28)',
              }}
            >
              {/* Verified Starburst Check Icon matching reference */}
              <svg
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[13px] h-[13px] sm:w-[14px] sm:h-[14px] xl:w-[16px] xl:h-[16px] flex-shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M9 1.2L11.1 2.7L13.7 2.5L14.6 4.9L16.8 6.5L16.1 9L16.8 11.5L14.6 13.1L13.7 15.5L11.1 15.3L9 16.8L6.9 15.3L4.3 15.5L3.4 13.1L1.2 11.5L1.9 9L1.2 6.5L3.4 4.9L4.3 2.5L6.9 2.7L9 1.2Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M6.3 9.1L8.1 10.9L11.8 7.2"
                  stroke="#0B1424"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[11px] sm:text-[12.5px] xl:text-[15px] 2xl:text-[16.5px] font-medium text-[#E4ECF6] tracking-[-0.005em] truncate">
                Konya Özel Çözümler &amp; 7/24 Kesintisiz Destek
              </span>
            </div>

            {/* Main Hero Heading */}
            <h1
              id="hero-main-heading"
              className="text-[28px] sm:text-[42px] lg:text-[48px] xl:text-[60px] 2xl:text-[68px] font-extrabold text-white leading-[1.15] tracking-[-0.02em] mb-[14px] sm:mb-[17px] xl:mb-[22px] sm:whitespace-nowrap"
            >
              Yaktığın Kadar Öde,
              <br />
              Isıyı Akıllıca Bölüş!
            </h1>

            {/* Description Paragraph */}
            <p className="text-[13.5px] sm:text-[15.8px] lg:text-[16.2px] xl:text-[20px] 2xl:text-[22.5px] font-normal text-[#B9C3CF] leading-[1.46] max-w-[445px] xl:max-w-[560px] 2xl:max-w-[640px] mb-[20px] sm:mb-[22px] xl:mb-[28px]">
              IsıSens IoT ve yapay zeka destekli akıllı sayaç okuma sistemiyle binalarda %100 adil, şeffaf ve yasalara uygun faturalandırma dönemi.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-[10px] sm:gap-[13px] xl:gap-[16px]">
              <button
                type="button"
                onClick={onExploreClick}
                className="isisens-btn-orange rounded-full px-[22px] sm:px-[28px] py-[10.5px] sm:py-[11px] xl:px-[35px] xl:py-[14px] 2xl:px-[40px] 2xl:py-[16px] text-[13.2px] sm:text-[14.2px] xl:text-[16.5px] 2xl:text-[18px] font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39D8F3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B18]"
              >
                Sistemi Keşfet
              </button>

              <button
                type="button"
                onClick={onOpenDemo}
                className="isisens-btn-secondary rounded-full px-[22px] sm:px-[29px] py-[10.5px] sm:py-[11px] xl:px-[36px] xl:py-[14px] 2xl:px-[40px] 2xl:py-[16px] text-[13.2px] sm:text-[14.2px] xl:text-[16.5px] 2xl:text-[18px] font-medium text-[#F1F5F9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39D8F3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B18]"
              >
                Yönetici Demosu İzle
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN (~52% width, extending to right viewport edge on desktop just like reference) */}
          <div className="min-w-0 lg:col-span-6 relative lg:-ml-[16px] lg:-mr-[76px] xl:-mr-[110px] 2xl:-mr-[150px]">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
