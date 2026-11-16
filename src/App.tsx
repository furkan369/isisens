import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureCards } from './components/FeatureCards';
import { InfoSections } from './components/InfoSections';
import { ContactSection } from './components/ContactSection';
import { DemoModal } from './components/DemoModal';
import { SafariPreviewFrame } from './components/SafariPreviewFrame';

export const App: React.FC = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [safariPreview, setSafariPreview] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('preview') === 'safari') {
      setSafariPreview(true);
    }
  }, []);

  const handleScrollToFeatures = () => {
    const el = document.querySelector('#ozellikler');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToContact = () => {
    const el = document.querySelector('#iletisim');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <SafariPreviewFrame enabled={safariPreview}>
      <div className="min-h-screen w-full isisens-page-bg text-white flex flex-col justify-between overflow-x-hidden">
        {/* Top Fold: Reference-Exact Header + Hero + 4 Feature Cards */}
        <div className="min-h-screen w-full flex flex-col justify-start lg:justify-between">
          <Header onQuoteClick={handleScrollToContact} />
          <main className="flex-1 flex flex-col justify-start lg:justify-between">
            <Hero
              onExploreClick={handleScrollToFeatures}
              onOpenDemo={() => setDemoModalOpen(true)}
            />
            <FeatureCards />
          </main>
        </div>

        {/* Below-the-Fold Target Sections */}
        <InfoSections onOpenDemo={() => setDemoModalOpen(true)} />
        <ContactSection />

        {/* Interactive Manager Demo Modal */}
        <DemoModal
          isOpen={demoModalOpen}
          onClose={() => setDemoModalOpen(false)}
          onRequestQuote={handleScrollToContact}
        />
      </div>
    </SafariPreviewFrame>
  );
};

export default App;
