import React from 'react';
import { Radio, Cpu, FileSpreadsheet, Building2, Smartphone, MapPin, ClipboardCheck, AlertCircle } from 'lucide-react';

interface InfoSectionsProps {
  onOpenDemo: () => void;
}

export const InfoSections: React.FC<InfoSectionsProps> = ({ onOpenDemo }) => {
  return (
    <div className="relative z-20 border-t border-white/[0.07] bg-[#040914]/90">
      {/* SECTION: Nasıl Çalışır? */}
      <section id="nasil-calisir" className="py-16 xl:py-24 scroll-mt-20">
        <div className="mx-auto w-full max-w-[950px] xl:max-w-[1220px] 2xl:max-w-[1440px] px-5 sm:px-8 lg:px-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#15CBE0]/15 border border-[#15CBE0]/30 text-[#39D8F3] text-xs font-semibold mb-3">
                SİSTEM MİMARİSİ (KONSEPT PROTOTİP)
              </span>
              <h2 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-white tracking-tight">
                Nasıl Çalışır?
              </h2>
            </div>
            <p className="text-sm xl:text-base text-[#B9C3CF] max-w-md">
              Kalorimetre ve payölçerlerden alınan verilerin yasal 70/30 yönetmeliğine göre işlenme süreci.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                icon: Radio,
                title: 'Kablosuz wM-Bus Veri Toplama',
                desc: 'Bina katlarına konumlandırılan wM-Bus ağ geçitleri (Gateway), daire içine girmeden sayaç telemetri paketlerini okumak üzere tasarlanmıştır.',
                badge: 'Donanım Katmanı (Planlanan)',
              },
              {
                step: '02',
                icon: Cpu,
                title: '15°C Sınır & Anomali Kontrolü',
                desc: 'Okunan sayaç endeksleri, arızalı sensör veya 15°C altı yasal sınır ihlallerini tespit etmek üzere kural motorunda analiz edilir.',
                badge: 'FastAPI Kural Motoru (Hazırlık)',
              },
              {
                step: '03',
                icon: FileSpreadsheet,
                title: '70/30 Yönetmelik Dağıtımı',
                desc: 'Çevre, Şehircilik ve İklim Değişikliği Bakanlığı yönetmeliğine uygun olarak %70 ölçülen tüketim ve %30 ortak gider payı hesaplanır.',
                badge: 'Şeffaf Raporlama',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="isisens-feature-card rounded-2xl p-6 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#FF713C]/15 border border-[#FF713C]/35 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#FF9A38]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#39D8F3] bg-[#15CBE0]/10 px-2.5 py-1 rounded-md border border-[#15CBE0]/20">
                        ADIM {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg xl:text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#B9C3CF] leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <span className="text-[11px] font-medium text-[#8B9EB3]">{item.badge}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: Yöneticiler İçin & Sakinler İçin */}
      <section className="py-14 xl:py-20 bg-[#070E1C] border-y border-white/[0.06]">
        <div className="mx-auto w-full max-w-[950px] xl:max-w-[1220px] 2xl:max-w-[1440px] px-5 sm:px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Yöneticiler İçin */}
          <div
            id="yoneticiler-icin"
            className="rounded-2xl bg-[#0D1829] border border-white/10 p-7 xl:p-8 flex flex-col justify-between space-y-6 scroll-mt-24"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF713C]/15 border border-[#FF713C]/30 text-[#FF9A38] text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5" />
                YÖNETİCİLER İÇİN (DEMO KONSEPTİ)
              </div>
              <h2 className="text-2xl xl:text-3xl font-extrabold text-white">
                Site ve Apartman Yöneticileri İçin Tek Ekran Kontrolü
              </h2>
              <p className="text-sm text-[#B9C3CF] leading-relaxed">
                Manuel sayaç okuma hatalarını ve komşular arası fatura itirazlarını azaltmak amacıyla tasarlanan
                yönetici paneli; blok bazlı tüketim özetlerini, 70/30 gider paylaşım tablolarını ve sensör durum
                bildirimlerini tek merkezde sunar.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <span className="text-xs text-[#8B9EB3]">Örnek Arayüz: Selçuklu Safir Sitesi A Blok (Demo)</span>
              <button
                type="button"
                onClick={onOpenDemo}
                className="isisens-btn-secondary px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39D8F3]"
              >
                Yönetici Demosunu Aç
              </button>
            </div>
          </div>

          {/* Sakinler İçin */}
          <div
            id="sakinler-icin"
            className="rounded-2xl bg-[#0D1829] border border-white/10 p-7 xl:p-8 flex flex-col justify-between space-y-6 scroll-mt-24"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15CBE0]/15 border border-[#15CBE0]/30 text-[#39D8F3] text-xs font-semibold">
                <Smartphone className="w-3.5 h-3.5" />
                SAKİNLER İÇİN (MOBİL ARAYÜZ KONSEPTİ)
              </div>
              <h2 className="text-2xl xl:text-3xl font-extrabold text-white">
                Daire Sakinleri İçin Şeffaf Paylaşım Takibi
              </h2>
              <p className="text-sm text-[#B9C3CF] leading-relaxed">
                Ay sonunda sürpriz faturalarla karşılaşmamak için daire sakinlerinin dönem içi tüketim eğilimlerini,
                %70 bireysel kullanım ile %30 ortak alan ısı gideri oranlarını şeffaf grafiklerle inceleyebileceği
                mobil deneyim.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <span className="text-xs text-[#8B9EB3]">Mobil Prototip Gösterimi: %24 Tasarruf / ₺1.240 Örnek Pay</span>
              <button
                type="button"
                onClick={onOpenDemo}
                className="isisens-btn-secondary px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39D8F3]"
              >
                Mobil Önizlemeyi Gör
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Konya Yerel Hizmet & Üretim Öncesi Doğrulama Kontrol Listesi */}
      <section id="konya-yerel-hizmet" className="py-16 xl:py-20 scroll-mt-20">
        <div className="mx-auto w-full max-w-[950px] xl:max-w-[1220px] 2xl:max-w-[1440px] px-5 sm:px-8 lg:px-0 space-y-10">
          <div className="rounded-2xl bg-gradient-to-r from-[#111D30] via-[#132238] to-[#192030] border border-white/10 p-7 xl:p-9">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF9A38]">
                  <MapPin className="w-4 h-4 text-[#FF713C]" />
                  KONYA YEREL HİZMET PLANLAMASI
                </div>
                <h2 className="text-2xl xl:text-3xl font-extrabold text-white">
                  Selçuklu, Meram ve Karatay Bölgesel Hizmet Odaklı Yapı
                </h2>
                <p className="text-sm text-[#B9C3CF] leading-relaxed">
                  Konya genelindeki merkezi sistemli siteler için yerinde keşif, kalorimetre/payölçer uygunluk analizi
                  ve wM-Bus gateway kurulum planlaması.
                </p>
              </div>
              <a
                href="#iletisim"
                className="isisens-btn-orange px-6 py-3 rounded-full text-sm font-semibold text-white text-center whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39D8F3]"
              >
                Ücretsiz Keşif &amp; Teklif İste
              </a>
            </div>
          </div>

          {/* Pre-Production Verification Checklist (Required by Prompt Section 7) */}
          <div className="rounded-2xl bg-[#0B1424] border border-[#39D8F3]/25 p-6 xl:p-8 space-y-5">
            <div className="flex items-start gap-3">
              <ClipboardCheck className="w-6 h-6 text-[#39D8F3] flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg xl:text-xl font-bold text-white">
                    Üretim Yayını Öncesi Doğrulama Kontrol Listesi (Pre-Production Checklist)
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#39D8F3]/15 text-[#39D8F3] text-xs font-semibold">
                    PROTOTİP ŞEFFAFLIK BİLDİRİMİ
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#B9C3CF]">
                  Ana sayfa tasarım referansında yer alan konsept vaatlerin canlı müşteri ortamına alınmadan önce
                  doğrulanması gereken mühendislik ve operasyon adımları:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              {[
                {
                  title: 'Anlık wM-Bus Gateway Okuma Entegrasyonu',
                  status: 'Backend / IoT Aşamasında Doğrulanacak',
                  detail:
                    'Saha gateway donanımlarından gelen şifreli telemetri paketlerinin FastAPI servisi tarafından gerçek zamanlı çözülmesi ve PostgreSQL veritabanına kaydedilmesi.',
                },
                {
                  title: 'Yapay Zeka & 15°C Sınır Otomasyonu',
                  status: 'Algoritma & Saha Kalibrasyonu Gerekli',
                  detail:
                    'Arızalı sayaç tespiti ve yasal 15°C sınır kontrol motorunun gerçek bina ısı kaybı katsayıları ve sensör verileriyle doğrulanması.',
                },
                {
                  title: 'Günlük Tüketim ve Tahmini Fatura Takibi',
                  status: 'Mobil API Bağlantısı Bekleniyor',
                  detail:
                    'Daire sakinlerine sunulan günlük tüketim ve dönem sonu tahmini fatura hesaplamalarının BOTAŞ/bölgesel gaz tarifeleriyle senkronize edilmesi.',
                },
                {
                  title: 'Çevre Bakanlığı 70/30 Yönetmeliği & 7/24 Destek',
                  status: 'Mevzuat & Operasyon SLA Onayı',
                  detail:
                    '5627 sayılı Enerji Verimliliği Kanunu ve ilgili gider paylaşım yönetmeliği formüllerinin resmi sertifikasyon/denetim onayı ve 7/24 destek ekibi SLA kurulumu.',
                },
              ].map((check) => (
                <div
                  key={check.title}
                  className="p-4 rounded-xl bg-[#121E31] border border-white/10 flex flex-col justify-between space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-white">{check.title}</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#FF713C]/15 text-[#FF9A38] text-[11px] font-medium whitespace-nowrap">
                      <AlertCircle className="w-3 h-3" />
                      {check.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#B9C3CF] leading-relaxed">{check.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoSections;

