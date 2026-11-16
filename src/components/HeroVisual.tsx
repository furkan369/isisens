import React from 'react';
import { DashboardMockup } from './DashboardMockup';
import { IoTNetwork } from './IoTNetwork';
import { PhoneMockup } from './PhoneMockup';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full aspect-[540/376] max-w-[560px] lg:max-w-none mx-auto select-none overflow-visible">
      <div className="relative w-[540px] h-[376px] max-[385px]:scale-[0.63] min-[386px]:max-[430px]:scale-[0.66] min-[431px]:max-sm:scale-[0.74] sm:w-full sm:h-full sm:scale-100 origin-top-left">
        {/* Warm Orange & Cyan Ambient Neon Backlights matching reference */}
        <div
          className="absolute left-[14%] top-[-2%] w-[46%] h-[56%] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 108, 48, 0.28) 0%, rgba(255, 108, 48, 0.06) 55%, transparent 78%)',
            filter: 'blur(26px)',
          }}
        />
        <div
          className="absolute right-[6%] bottom-[8%] w-[52%] h-[52%] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(21, 203, 224, 0.18) 0%, rgba(255, 113, 60, 0.08) 55%, transparent 80%)',
            filter: 'blur(28px)',
          }}
        />

        {/* LAYER 1 (BACK): Management Dashboard Frame */}
        <div className="absolute left-[25.5%] right-0 top-[0%] h-[83.5%] z-10">
          <DashboardMockup />
        </div>

        {/* LAYER 2 (MIDDLE): IoT Cloud, Dashed Connections, Signal Waves & 3 Hardware Devices */}
        <div className="absolute left-[42.5%] right-[1%] top-[34%] bottom-[1%] z-20">
          <IoTNetwork />
        </div>

        {/* LAYER 3 (FOREGROUND): Tilted 3D Smartphone Mockup */}
        <div className="absolute left-[8.8%] top-[13.5%] z-30 origin-top-left">
          <PhoneMockup />
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
