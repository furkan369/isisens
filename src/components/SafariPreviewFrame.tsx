import React from 'react';
import { Lock, RotateCw, Share, Plus, Copy, ChevronLeft, ChevronRight, Sidebar } from 'lucide-react';

interface SafariPreviewFrameProps {
  enabled: boolean;
  children: React.ReactNode;
}

export const SafariPreviewFrame: React.FC<SafariPreviewFrameProps> = ({ enabled, children }) => {
  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#E8EEF2] p-4 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-[1440px] rounded-[18px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.45)] border border-black/20 bg-[#050B18]">
        {/* Optional Presentation-Only Safari Chrome Bar */}
        <div className="h-[44px] bg-[#202328] border-b border-white/[0.08] px-4 flex items-center justify-between select-none">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <Sidebar className="w-4 h-4 text-[#8E9299] ml-2" />
            <div className="flex items-center gap-2 text-[#8E9299]">
              <ChevronLeft className="w-4 h-4" />
              <ChevronRight className="w-4 h-4 opacity-40" />
            </div>
          </div>

          <div className="w-[42%] max-w-[460px] h-[28px] rounded-md bg-[#393C42] px-3 flex items-center justify-between text-xs text-[#E2E5EA]">
            <span className="w-3" />
            <div className="flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-[#A6ABB4]" />
              <span className="font-medium">isisens.com</span>
            </div>
            <RotateCw className="w-3 h-3 text-[#A6ABB4]" />
          </div>

          <div className="flex items-center gap-3 text-[#8E9299]">
            <Share className="w-4 h-4" />
            <Plus className="w-4 h-4" />
            <Copy className="w-4 h-4" />
          </div>
        </div>

        {/* Inner Website Viewport */}
        <div className="w-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default SafariPreviewFrame;

