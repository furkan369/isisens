import React, { useState } from 'react';
import { Send, Code2, Info, Building, Phone, User, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export interface QuoteRequestPayload {
  full_name: string;
  building_name: string;
  apartment_count: number;
  district: string;
  phone: string;
  notes: string;
  created_at_iso: string;
}

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [buildingName, setBuildingName] = useState('');
  const [apartmentCount, setApartmentCount] = useState('40');
  const [district, setDistrict] = useState('Selçuklu');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [preparedPayload, setPreparedPayload] = useState<QuoteRequestPayload | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: QuoteRequestPayload = {
      full_name: fullName.trim(),
      building_name: buildingName.trim(),
      apartment_count: Number(apartmentCount) || 0,
      district,
      phone: phone.trim(),
      notes: notes.trim(),
      created_at_iso: new Date().toISOString(),
    };
    setPreparedPayload(payload);
  };

  return (
    <section
      id="iletisim"
      aria-labelledby="contact-heading"
      className="relative z-20 py-16 xl:py-24 bg-[#050B18] border-t border-white/10 scroll-mt-16"
    >
      <div className="mx-auto w-full max-w-[950px] xl:max-w-[1220px] 2xl:max-w-[1440px] px-5 sm:px-8 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Info & FastAPI Integration Readiness */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#FF713C]/15 border border-[#FF713C]/35 text-[#FF9A38] text-xs font-semibold mb-3">
                TEKLİF &amp; KEŞİF TALEBİ (FRONTEND PROTOTİP)
              </span>
              <h2 id="contact-heading" className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-white tracking-tight">
                Binanız İçin Teklif Hazırlayalım
              </h2>
              <p className="text-sm xl:text-base text-[#B9C3CF] mt-3 leading-relaxed">
                Site veya apartmanınızın daire sayısını ve mevcut sayaç altyapısını paylaşın; FastAPI &amp; PostgreSQL
                entegrasyonuna hazır veri yapısıyla talebinizi yapılandıralım.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B1424] border border-white/10 space-y-3 text-xs sm:text-sm text-[#DCE5F0]">
              <div className="flex items-center gap-2 font-semibold text-white">
                <Info className="w-4 h-4 text-[#39D8F3]" />
                <span>Backend Entegrasyon Durumu</span>
              </div>
              <p className="text-xs text-[#B9C3CF] leading-relaxed">
                Bu aşamada yalnızca frontend katmanı aktiftir. Formu doldurduğunuzda sahte bir sunucu başarı mesajı
                üretilmez; veriler doğrulanarak sonraki aşamada bağlanacak{' '}
                <code className="text-[#39D8F3] bg-white/5 px-1.5 py-0.5 rounded">POST /api/v1/quotes</code> FastAPI
                uç noktası için JSON formatında hazırlanır.
              </p>
            </div>

            <div className="pt-2">
              <Logo variant="navbar" />
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-[#0B1424] border border-white/12 p-6 sm:p-8 shadow-2xl space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="full_name" className="block text-xs font-semibold text-[#DCE5F0] mb-1.5">
                    Ad Soyad / Yönetici Adı *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#738499] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="full_name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Örn: Ahmet Yılmaz"
                      className="w-full rounded-xl bg-[#111C2E] border border-white/10 pl-10 pr-4 py-2.5 text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#39D8F3] focus:ring-1 focus:ring-[#39D8F3]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="building_name" className="block text-xs font-semibold text-[#DCE5F0] mb-1.5">
                    Site / Apartman Adı *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-[#738499] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="building_name"
                      type="text"
                      required
                      value={buildingName}
                      onChange={(e) => setBuildingName(e.target.value)}
                      placeholder="Örn: Safir Sitesi A Blok"
                      className="w-full rounded-xl bg-[#111C2E] border border-white/10 pl-10 pr-4 py-2.5 text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#39D8F3] focus:ring-1 focus:ring-[#39D8F3]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="apartment_count" className="block text-xs font-semibold text-[#DCE5F0] mb-1.5">
                    Daire Sayısı *
                  </label>
                  <input
                    id="apartment_count"
                    type="number"
                    min={1}
                    max={5000}
                    required
                    value={apartmentCount}
                    onChange={(e) => setApartmentCount(e.target.value)}
                    className="w-full rounded-xl bg-[#111C2E] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#39D8F3] focus:ring-1 focus:ring-[#39D8F3]"
                  />
                </div>

                <div>
                  <label htmlFor="district" className="block text-xs font-semibold text-[#DCE5F0] mb-1.5">
                    İlçe (Konya)
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#738499] absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      id="district"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full rounded-xl bg-[#111C2E] border border-white/10 pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#39D8F3] focus:ring-1 focus:ring-[#39D8F3]"
                    >
                      <option value="Selçuklu">Selçuklu</option>
                      <option value="Meram">Meram</option>
                      <option value="Karatay">Karatay</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-[#DCE5F0] mb-1.5">
                    Telefon Numarası *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#738499] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="05XX XXX XX XX"
                      className="w-full rounded-xl bg-[#111C2E] border border-white/10 pl-9 pr-3 py-2.5 text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#39D8F3] focus:ring-1 focus:ring-[#39D8F3]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-xs font-semibold text-[#DCE5F0] mb-1.5">
                  Mevcut Sayaç Markası / Ek Notlar
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Kalorimetre veya payölçer durumu hakkında kısa bilgi..."
                  className="w-full rounded-xl bg-[#111C2E] border border-white/10 px-4 py-2.5 text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#39D8F3] focus:ring-1 focus:ring-[#39D8F3]"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <span className="text-xs text-[#8B9EB3]">
                  * Sunucu bağlantısı olmadığından veriler tarayıcıda doğrulanır.
                </span>
                <button
                  type="submit"
                  className="isisens-btn-orange inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39D8F3]"
                >
                  <Send className="w-4 h-4" />
                  API İsteğini Hazırla (Önizleme)
                </button>
              </div>

              {/* Honest API Payload Preview (No Fake Server Submission) */}
              {preparedPayload && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-4 rounded-xl bg-[#08101D] border border-[#39D8F3]/40 p-4 space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#39D8F3]">
                      <Code2 className="w-4 h-4" />
                      <span>FRONTEND DOĞRULAMASI TAMAMLANDI (BACKEND HENÜZ BAĞLI DEĞİL)</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#FF9A38]">POST /api/v1/quotes</span>
                  </div>
                  <p className="text-xs text-[#B9C3CF]">
                    Henüz canlı bir FastAPI &amp; PostgreSQL sunucusu bağlı olmadığı için bu form verisi bir sunucuya
                    gönderilmemiştir. Sonraki aşamada API&apos;ye iletilecek hazır veri paketi:
                  </p>
                  <pre className="text-[11px] font-mono text-[#DCE5F0] bg-[#050B18] p-3 rounded-lg border border-white/10 overflow-x-auto">
                    {JSON.stringify(preparedPayload, null, 2)}
                  </pre>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7F91A7]">
          <div>
            © {new Date().getFullYear()} IsıSens — IoT &amp; Yapay Zeka Destekli Paylaşım Platformu (Frontend Tasarım Prototipi)
          </div>
          <div className="flex items-center gap-5">
            <a href="#anasayfa" className="hover:text-white transition-colors">
              Yukarı Çık ↑
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;

