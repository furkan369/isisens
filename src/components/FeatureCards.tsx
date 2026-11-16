import React from 'react';
import { FeatureCard, FeatureCardItem } from './FeatureCard';

const FEATURE_ITEMS: FeatureCardItem[] = [
  {
    id: 'iot-kablosuz-okuma',
    titleLines: ['IoT Kablosuz', 'Okuma'],
    description: 'wM-Bus Gateway ile el değmeden anlık veri akışı',
  },
  {
    id: 'yapay-zeka-15c-kontrolu',
    titleLines: ['Yapay Zeka &', '15°C Kontrolü'],
    description: 'Arızalı sayaçları ve yasal 15°C sınırını anında tespit eden akıllı motor',
  },
  {
    id: 'seffaf-mobil-uygulama',
    titleLines: ['Şeffaf Mobil', 'Uygulama'],
    description: 'Daire sakinleri için günlük tüketim ve tahmini fatura takibi',
  },
  {
    id: 'adil-dagitim',
    titleLines: ['%100 Adil Dağıtım'],
    description: 'Çevre Bakanlığı 70/30 yönetmeliğine tam ve kuruşu kuruşuna uyum',
  },
];

export const FeatureCards: React.FC = () => {
  return (
    <section
      id="ozellikler"
      aria-label="IsıSens Temel Özellikler"
      className="relative z-20 w-full pt-[14px] pb-[44px] xl:pt-[22px] xl:pb-[56px]"
    >
      <div className="mx-auto w-full max-w-[950px] xl:max-w-[1220px] 2xl:max-w-[1440px] px-4 sm:px-8 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px] xl:gap-[19px] 2xl:gap-[22px] items-stretch">
          {FEATURE_ITEMS.map((item) => (
            <div key={item.id} className="h-full">
              <FeatureCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
