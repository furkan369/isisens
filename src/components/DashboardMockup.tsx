import React from 'react';
import { Search, ChevronRight, Bell, Activity, Thermometer, Droplets, Gauge, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

export const DashboardMockup: React.FC = () => {
  return (
    <div
      className="relative w-full h-full rounded-l-[18px] rounded-r-[12px] lg:rounded-r-none p-[5px] select-none"
      style={{
        background: 'linear-gradient(135deg, #6E7680 0%, #3E454E 35%, #2A313A 75%, #4F565F 100%)',
        boxShadow:
          '-16px 24px 48px rgba(0, 0, 0, 0.65), 0 0 60px rgba(255, 108, 52, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.35)',
      }}
      aria-label="IsıSens Web Yönetim Paneli Önizlemesi (Demo)"
    >
      {/* Inner Bezel & Screen Surface */}
      <div className="w-full h-full rounded-l-[14px] rounded-r-[9px] lg:rounded-r-none bg-[#0A111D] border border-white/10 overflow-hidden flex flex-col">
        <div className="flex flex-1 min-h-0">
          {/* Left Sidebar */}
          <div className="w-[24.5%] min-w-[90px] max-w-[130px] bg-[#0B121F] border-r border-white/[0.06] p-2.5 xl:p-3.5 flex flex-col">
            <div className="mb-3.5 xl:mb-4 pl-0.5">
              <Logo variant="dashboard" />
            </div>

            <div className="space-y-1 xl:space-y-1.5 text-[8.5px] xl:text-[10px] font-medium">
              <div
                className="px-2.5 py-1.5 rounded-md text-white font-semibold"
                style={{
                  background: 'linear-gradient(90deg, rgba(145, 78, 42, 0.28) 0%, rgba(196, 104, 52, 0.46) 100%)',
                  border: '1px solid rgba(255, 138, 76, 0.25)',
                }}
              >
                Anasayfa
              </div>
              <div className="px-2.5 py-1 text-[#7B8B9E] truncate">Nasıl Çalışır?</div>
              <div className="px-2.5 py-1 text-[#7B8B9E] truncate">Yöneticiler İçin</div>
              <div className="px-2.5 py-1 text-[#7B8B9E] truncate">İletişim</div>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="flex-1 flex flex-col bg-[#0C1422] min-w-0">
            {/* Top Search & Action Bar */}
            <div className="h-[33px] xl:h-[40px] px-3 xl:px-4 border-b border-white/[0.06] flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 bg-[#141E2E] border border-white/[0.06] rounded-md px-2.5 py-1 w-[50%] max-w-[180px]">
                <Search className="w-2.5 h-2.5 xl:w-3 xl:h-3 text-[#6E7F94]" />
                <span className="text-[8px] xl:text-[9.5px] text-[#6E7F94]">Search...</span>
              </div>

              <div className="relative w-5 h-5 xl:w-6 xl:h-6 rounded-md bg-[#152030] border border-white/[0.07] flex items-center justify-center">
                <Bell className="w-2.5 h-2.5 xl:w-3 xl:h-3 text-[#9FB0C4]" />
                <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-[#FF6B3D]" />
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="p-2.5 xl:p-3.5 space-y-2 xl:space-y-3 flex-1">
              {/* Site Title + Web Dashboard Pill */}
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[11.5px] xl:text-[14px] 2xl:text-[15.5px] font-bold text-white tracking-[-0.01em] truncate">
                  Selçuklu Safir Sitesi A Blok
                </h3>
                <span className="px-2 py-0.5 xl:px-2.5 xl:py-1 rounded-md bg-[#131E2E] border border-white/10 text-[7px] xl:text-[8.5px] font-medium text-[#CBD5E1] whitespace-nowrap">
                  Web Dashboard
                </span>
              </div>

              {/* Row 1: Live IoT Sensor + Live Grid Status */}
              <div className="grid grid-cols-12 gap-2 xl:gap-2.5">
                {/* Live IoT Sensor Card (8 cols) */}
                <div className="col-span-8 rounded-lg bg-[#111B2B]/95 border border-white/[0.07] p-2 xl:p-2.5">
                  <div className="flex items-center justify-between mb-1.5 xl:mb-2">
                    <span className="text-[7.5px] xl:text-[9px] font-semibold text-[#CBD5E1]">
                      Live IoT Sensor
                    </span>
                    <ChevronRight className="w-2.5 h-2.5 text-[#6E7F94]" />
                  </div>

                  <div className="grid grid-cols-4 divide-x divide-white/[0.06] text-center">
                    <div className="px-0.5 flex flex-col items-center">
                      <Thermometer className="w-2.5 h-2.5 xl:w-3 xl:h-3 text-[#7F92A8] mb-0.5" />
                      <span className="text-[10px] xl:text-[12px] font-bold text-white leading-tight">117</span>
                      <span className="text-[6px] xl:text-[7.5px] text-[#738499] truncate">IoT Sensör</span>
                    </div>
                    <div className="px-0.5 flex flex-col items-center">
                      <Droplets className="w-2.5 h-2.5 xl:w-3 xl:h-3 text-[#7F92A8] mb-0.5" />
                      <span className="text-[10px] xl:text-[12px] font-bold text-white leading-tight">20 04</span>
                      <span className="text-[6px] xl:text-[7.5px] text-[#738499] truncate">m³ Tük.</span>
                    </div>
                    <div className="px-0.5 flex flex-col items-center">
                      <Activity className="w-2.5 h-2.5 xl:w-3 xl:h-3 text-[#7F92A8] mb-0.5" />
                      <span className="text-[10px] xl:text-[12px] font-bold text-white leading-tight">15°C</span>
                      <span className="text-[6px] xl:text-[7.5px] text-[#738499] truncate">Sıcaklık</span>
                    </div>
                    <div className="px-0.5 flex flex-col items-center">
                      <Gauge className="w-2.5 h-2.5 xl:w-3 xl:h-3 text-[#7F92A8] mb-0.5" />
                      <span className="text-[10px] xl:text-[12px] font-bold text-white leading-tight">100 %</span>
                      <span className="text-[6px] xl:text-[7.5px] text-[#738499] truncate">Aktif Oran</span>
                    </div>
                  </div>
                </div>

                {/* Live Grid Status Card (4 cols) */}
                <div className="col-span-4 rounded-lg bg-[#111B2B]/95 border border-white/[0.07] p-2 xl:p-2.5 flex flex-col justify-between">
                  <span className="text-[7.5px] xl:text-[9px] font-semibold text-[#CBD5E1] truncate">
                    Live Grid Status
                  </span>

                  <div className="flex items-center gap-1 my-1">
                    <span className="w-3.5 h-3.5 xl:w-4 xl:h-4 rounded-full bg-[#10B981]/20 border border-[#2EE59D]/40 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-2.5 h-2.5 text-[#2EE59D]" />
                    </span>
                    <span className="text-[7.8px] xl:text-[9.5px] font-bold text-[#2EE59D] tracking-tight whitespace-nowrap">
                      AĞ AKTİF %100
                    </span>
                  </div>

                  <div className="w-full h-1.5 rounded-full bg-[#19283A] overflow-hidden">
                    <div
                      className="h-full w-full rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #10B981 0%, #34D399 100%)',
                        boxShadow: '0 0 8px rgba(46, 229, 157, 0.6)',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: 15°C Alert Status Cards */}
              <div className="grid grid-cols-12 gap-2 xl:gap-2.5">
                {/* Left 15°C Box */}
                <div className="col-span-8 rounded-lg bg-[#111B2B]/95 border border-white/[0.07] p-2 xl:p-2.5 flex items-center gap-2">
                  <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-md bg-[#2A181C] border border-[#FF6B3D]/30 flex items-center justify-center flex-shrink-0">
                    <Bell className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-[#FF713C]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9.5px] xl:text-[11px] font-bold text-[#FF7D47] leading-tight">
                      15°C
                    </span>
                    <span className="text-[6.8px] xl:text-[8px] text-[#7D8EA3] truncate">
                      Sınır Uyarısı Yok
                    </span>
                  </div>
                </div>

                {/* Right 15°C Sınır Uyarısı Box */}
                <div className="col-span-4 rounded-lg bg-[#111B2B]/95 border border-white/[0.07] p-2 xl:p-2.5 flex flex-col justify-between">
                  <span className="text-[7px] xl:text-[8.5px] font-semibold text-[#CBD5E1] truncate">
                    15°C Sınır Uyarısı
                  </span>
                  <div className="flex items-center gap-1 my-1">
                    <Bell className="w-2.5 h-2.5 text-[#FF6448] flex-shrink-0" />
                    <span className="text-[7px] xl:text-[8.5px] text-[#E2E8F0] truncate">
                      Sınır Uyarısı
                    </span>
                  </div>
                  <div className="w-full h-1 rounded-full bg-[#241A22] overflow-hidden">
                    <div
                      className="h-full w-[78%] rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #F97316 0%, #EF4444 100%)',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
