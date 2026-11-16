import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Anasayfa', href: '#anasayfa' },
  { label: 'Nasıl Çalışır?', href: '#nasil-calisir' },
  { label: 'Yöneticiler İçin', href: '#yoneticiler-icin' },
  { label: 'Sakinler İçin', href: '#sakinler-icin' },
  { label: 'Konya Yerel Hizmet', href: '#konya-yerel-hizmet' },
  { label: 'İletişim', href: '#iletisim' },
];

interface HeaderProps {
  onQuoteClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleQuoteButton = () => {
    setMobileMenuOpen(false);
    if (onQuoteClick) {
      onQuoteClick();
    } else {
      const contactEl = document.querySelector('#iletisim');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="relative z-40 w-full pt-[14px] pb-[6px] xl:pt-[18px] xl:pb-[10px]">
      <div className="mx-auto w-full max-w-[950px] xl:max-w-[1220px] 2xl:max-w-[1440px] px-5 sm:px-8 lg:px-0 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a
          href="#anasayfa"
          onClick={(e) => handleNavClick(e, '#anasayfa')}
          className="-ml-[4px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39D8F3] rounded-lg"
          aria-label="IsıSens Anasayfa"
        >
          <Logo variant="navbar" />
        </a>

        {/* Desktop Navigation + CTA */}
        <div className="hidden lg:flex items-center gap-[18px] xl:gap-[24px] 2xl:gap-[28px] lg:-mr-[14px]">
          <nav aria-label="Ana Menü" className="flex items-center gap-[15.5px] xl:gap-[21px] 2xl:gap-[25px]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[13.4px] xl:text-[15.5px] 2xl:text-[17px] font-normal text-[#DCE5F0] hover:text-white transition-colors duration-150 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39D8F3] rounded px-0.5 py-0.5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={handleQuoteButton}
            className="isisens-btn-orange rounded-full px-[22px] py-[8.5px] xl:px-[27px] xl:py-[10.5px] 2xl:px-[30px] 2xl:py-[12px] text-[13.4px] xl:text-[15.5px] 2xl:text-[17px] font-semibold text-white whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39D8F3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B18]"
          >
            Teklif Al
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={mobileMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
          className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl bg-[#101C2E]/90 border border-white/10 text-white hover:border-[#39D8F3]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39D8F3]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-2xl bg-[#0B1424]/95 backdrop-blur-xl border border-white/15 shadow-2xl p-5 z-50"
        >
          <nav aria-label="Mobil Menü" className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3.5 py-2.5 rounded-xl text-[15px] font-medium text-[#DCE5F0] hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39D8F3]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleQuoteButton}
                className="w-full isisens-btn-orange rounded-full py-3 text-[15px] font-semibold text-white text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39D8F3]"
              >
                Teklif Al
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
