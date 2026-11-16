import React, { useEffect, useState } from 'react';
import { X, AlertTriangle, CheckCircle2, Radio, Calculator, Smartphone, Building2, Info } from 'lucide-react';
import { Logo } from './Logo';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

const SAMPLE_FLATS = [
  { flatNo: 'Daire 1 (Örnek)', status: 'Normal', temp: '21.4°C', kwh: '412 kWh', share70: '₺814', share30: '₺348', total: '₺1.162' },
  { flatNo: 'Daire 2 (Örnek)', status: 'Normal', temp: '22.1°C', kwh: '468 kWh', share70: '₺924', share30: '₺348', total: '₺1.272' },
  { flatNo: 'Daire 3 (Örnek)', status: '15°C Sınır Senaryosu', temp: '14.8°C', kwh: '95 kWh', share70: '₺188', share30: '₺348', total: '₺536' },
  { flatNo: 'Daire 4 (Örnek)', status: 'Normal', temp: '20.8°C', kwh: '390 kWh', share70: '₺770', share30: '₺348', total: '₺1.118' },
];

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, onRequestQuote }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'mobile' | 'checklist'>('dashboard');

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#0B1424] border border-white/15 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#08101E] border-b border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo variant="dashboard" />
            <span className="h-4 w-[1px] bg-white/15" />
            <h2 id="demo-modal-title" className="text-base sm:text-lg font-bold text-white">
              Yönetici Paneli &amp; Sistem Konsept Demosu
            </h2>
            <span className="px-2.5 py-0.5 rounded-full bg-[#FF713C]/20 border border-[#FF713C]/40 text-[#FF9A38] text-xs font-semibold">
              DEMO PROTOTİP
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Demo Penceresini Kapat"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#B9C3CF] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39D8F3]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Transparency & Concept Notice Banner */}
        <div className="px-6 py-3 bg-[#142033]/90 border-b border-[#39D8F3]/20 flex items-start gap-3">
          <Info className="w-5 h-5 text-[#39D8F3] flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#DCE5F0] leading-relaxed">
            <strong>Şeffaflık Bilgilendirmesi:</strong> Bu ekran, IsıSens arayüz tasarımının etkileşimli{' '}
            <span className="text-[#39D8F3] font-semibold">Frontend Konsept Prototipidir</span>. Gösterilen daire
            verileri, wM-Bus sinyal akışı ve 15°C sınır kontrolleri simülasyon amaçlı örnek verilerdir; henüz canlı
            saha donanımı veya FastAPI/PostgreSQL sunucusuna bağlı değildir.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 pt-4 border-b border-white/10 flex flex-wrap gap-2 bg-[#0B1424]">
          <button
            type="button"
            onClick={() => setActiveTab('dashboard')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-semibold border-b-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39D8F3] ${
              activeTab === 'dashboard'
                ? 'border-[#FF713C] text-white bg-[#142033]/70'
                : 'border-transparent text-[#B9C3CF] hover:text-white'
            }`}
          >
            <Building2 className="w-4 h-4 text-[#FF713C]" />
            Yönetici Paylaşım Özeti (Simülasyon)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('mobile')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-semibold border-b-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39D8F3] ${
              activeTab === 'mobile'
                ? 'border-[#15CBE0] text-white bg-[#142033]/70'
                : 'border-transparent text-[#B9C3CF] hover:text-white'
            }`}
          >
            <Smartphone className="w-4 h-4 text-[#15CBE0]" />
            Sakin Mobil Ekranı (Konsept)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('checklist')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-semibold border-b-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39D8F3] ${
              activeTab === 'checklist'
                ? 'border-[#FF9A38] text-white bg-[#142033]/70'
                : 'border-transparent text-[#B9C3CF] hover:text-white'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-[#FF9A38]" />
            Üretim Öncesi Doğrulama Listesi
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'dashboard' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#142033]/80 border border-white/10">
                  <div className="flex items-center justify-between text-xs text-[#B9C3CF] mb-1">
                    <span>Örnek Bina Toplam Fatura</span>
                    <Calculator className="w-4 h-4 text-[#FF713C]" />
                  </div>
                  <div className="text-2xl font-extrabold text-white">₺46.400</div>
                  <div className="text-[11px] text-[#8B9EB3] mt-1">Simülasyon Verisi (%70 Tüketim / %30 Ortak)</div>
                </div>

                <div className="p-4 rounded-xl bg-[#142033]/80 border border-white/10">
                  <div className="flex items-center justify-between text-xs text-[#B9C3CF] mb-1">
                    <span>Simüle Edilen Sayaç</span>
                    <Radio className="w-4 h-4 text-[#15CBE0]" />
                  </div>
                  <div className="text-2xl font-extrabold text-white">40 / 40 Daire</div>
                  <div className="text-[11px] text-[#15CBE0] mt-1">wM-Bus Okuma Konsept Gösterimi</div>
                </div>

                <div className="p-4 rounded-xl bg-[#142033]/80 border border-white/10">
                  <div className="flex items-center justify-between text-xs text-[#B9C3CF] mb-1">
                    <span>15°C Sınır Senaryosu</span>
                    <AlertTriangle className="w-4 h-4 text-[#FF9A38]" />
                  </div>
                  <div className="text-2xl font-extrabold text-[#FF9A38]">1 Örnek Uyarı</div>
                  <div className="text-[11px] text-[#8B9EB3] mt-1">Kural Motoru Arayüz Önizlemesi</div>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 overflow-hidden">
                <div className="px-4 py-3 bg-[#101A2B] border-b border-white/10 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    70/30 Yönetmelik Dağılım Simülasyonu (Örnek Veri Tablosu)
                  </span>
                  <span className="text-[11px] text-[#B9C3CF]">FastAPI Şemasına Uygun Yapı</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-[#0D1626] text-[#B9C3CF] border-b border-white/10">
                        <th className="py-2.5 px-4 font-medium">Birim (Demo)</th>
                        <th className="py-2.5 px-4 font-medium">Durum</th>
                        <th className="py-2.5 px-4 font-medium">Örnek Sıcaklık</th>
                        <th className="py-2.5 px-4 font-medium">Ölçüm</th>
                        <th className="py-2.5 px-4 font-medium">%70 Tüketim</th>
                        <th className="py-2.5 px-4 font-medium">%30 Ortak Pay</th>
                        <th className="py-2.5 px-4 font-medium text-right">Örnek Toplam</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 bg-[#142033]/40">
                      {SAMPLE_FLATS.map((row) => (
                        <tr key={row.flatNo} className="hover:bg-white/[0.03]">
                          <td className="py-2.5 px-4 font-semibold text-white">{row.flatNo}</td>
                          <td className="py-2.5 px-4">
                            <span
                              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${
                                row.status === 'Normal'
                                  ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                                  : 'bg-[#FF713C]/20 text-[#FF9A38] border border-[#FF713C]/40'
                              }`}
                            >
                              {row.status}
                            </span>
                          </td>
                          <td className="py-2.5 px-4 text-[#DCE5F0]">{row.temp}</td>
                          <td className="py-2.5 px-4 text-[#DCE5F0]">{row.kwh}</td>
                          <td className="py-2.5 px-4 text-[#DCE5F0]">{row.share70}</td>
                          <td className="py-2.5 px-4 text-[#DCE5F0]">{row.share30}</td>
                          <td className="py-2.5 px-4 font-bold text-white text-right">{row.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mobile' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-[#15CBE0]/15 border border-[#15CBE0]/30 text-[#39D8F3] text-xs font-semibold">
                  MOBİL UYGULAMA ARAYÜZ KONSEPTİ
                </span>
                <h3 className="text-xl font-bold text-white">
                  Daire Sakinleri İçin Şeffaf Tüketim Görünümü
                </h3>
                <p className="text-sm text-[#B9C3CF] leading-relaxed">
                  Ana sayfadaki telefon mockup&apos;ında yer alan <strong>%24 Enerji Tasarrufu</strong> ve{' '}
                  <strong>₺1.240 Bu Ay Tüketimi (70/30 Yasal Dağılım)</strong> ekranı, bina sakinlerinin kendi
                  paylarını şeffaf biçimde inceleyebileceği mobil arayüz tasarımını temsil eder.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#DCE5F0] pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#15CBE0] flex-shrink-0" />
                    <span>70/30 Çevre Bakanlığı yönetmeliği kırılım gösterimi (Tasarım Konsepti)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#15CBE0] flex-shrink-0" />
                    <span>Geçmiş dönem karşılaştırma grafik alanları (Backend entegrasyonu sonrası aktifleşir)</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#142033]/70 border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#B9C3CF]">ÖRNEK DAİRE KARTI (SİMÜLASYON)</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[11px] text-white">Daire 12</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-xs text-[#B9C3CF]">Tahmini Dönem Payı</div>
                    <div className="text-3xl font-extrabold text-white">₺1.240</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-[#15CBE0]">Tasarruf Göstergesi</div>
                    <div className="text-xl font-bold text-[#39D8F3]">%24</div>
                  </div>
                </div>
                <div className="w-full h-2.5 rounded-full bg-[#0B1424] overflow-hidden flex">
                  <div className="w-[70%] h-full bg-gradient-to-r from-[#FF5B3D] to-[#FF9A38]" title="%70 Ölçülen Tüketim" />
                  <div className="w-[30%] h-full bg-gradient-to-r from-[#15CBE0] to-[#39D8F3]" title="%30 Ortak Pay" />
                </div>
                <div className="flex justify-between text-xs text-[#B9C3CF]">
                  <span>%70 Sayaç Tüketimi: ₺868</span>
                  <span>%30 Ortak Gider Payı: ₺372</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-[#B9C3CF]">
                Tasarım referansında yer alan ürün vaatlerinin canlı prodüksiyon yayını öncesinde teknik ve operasyonel
                olarak doğrulanması gereken kontrol listesi:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {[
                  {
                    title: '1. wM-Bus Gateway Anlık Veri Akışı',
                    desc: 'Saha gateway cihazlarından MQTT / HTTP ile FastAPI sunucusuna gerçek zamanlı telemetri akışının ve paket şifreleme (AES-128) doğrulamasının tamamlanması.',
                  },
                  {
                    title: '2. Yapay Zeka & 15°C Sınır Kontrol Motoru',
                    desc: 'PostgreSQL/TimescaleDB üzerindeki sayaç serilerinde anomali tespiti ve 15°C altı tüketim uyarı algoritmasının gerçek saha verileriyle kalibre edilmesi.',
                  },
                  {
                    title: '3. %100 Adil 70/30 Yönetmelik Hesaplaması',
                    desc: 'Merkezi Isıtma ve Sıhhi Sıcak Su Sistemlerinde Isınma ve Sıhhi Sıcak Su Giderlerinin Paylaştırılmasına İlişkin Yönetmelik formüllerinin mali müşavir / mevzuat testlerinden geçirilmesi.',
                  },
                  {
                    title: '4. Konya Yerel Hizmet & 7/24 Destek SLA',
                    desc: 'Çağrı merkezi / destek hattı SLA sürelerinin, saha teknik servis ekip yönlendirme sisteminin ve müşteri bildirim altyapısının devreye alınması.',
                  },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-[#142033]/75 border border-white/10 space-y-1.5">
                    <div className="font-bold text-white">{item.title}</div>
                    <p className="text-xs text-[#B9C3CF] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#08101E] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-[#8B9EB3]">
            Modüler Frontend Mimari • FastAPI &amp; PostgreSQL Entegrasyonuna Hazır
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full border border-white/15 text-xs sm:text-sm font-medium text-[#DCE5F0] hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39D8F3]"
            >
              Kapat
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestQuote();
              }}
              className="isisens-btn-orange px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39D8F3]"
            >
              Teklif Formuna Git
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;

