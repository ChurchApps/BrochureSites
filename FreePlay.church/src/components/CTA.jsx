import { useState } from 'react';
import ComingSoonModal from './ComingSoonModal';
import HubSpotModal from './HubSpotModal';

export default function CTA() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [emailModalOpen, setEmailModalOpen] = useState(false);

  const openModal = (platform) => {
    setSelectedPlatform(platform);
    setModalOpen(true);
  };

  return (
    <section id="download" className="cta">
      <div className="cta-glow">
        <div className="cta-glow-circle"></div>
      </div>

      <div className="cta-content">
        <h2 className="cta-title">
          Download FreePlay directly on your Apple TV, Fire Stick, ONN, or Android TV device
        </h2>
        <p className="cta-description">
          Install from your device's app store
        </p>

        <div className="hero-badges">
          <button className="badge-button" onClick={() => openModal('Apple TV')}>
            <img
              src="/images/badges/app-store-badge-apple.svg"
              alt="Download on Apple App Store"
            />
          </button>
          <a href="https://play.google.com/store/apps/details?id=church.freeplay" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/badges/app-store-badge-google.png"
              alt="Get it on Google Play"
            />
          </a>
          <a href="https://www.amazon.com/Live-Church-Solutions-FreePLay/dp/B0GMC4S3RS/" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/badges/app-store-badge-amazon.png"
              alt="Available on Amazon"
            />
          </a>
        </div>

        <button className="email-capture-btn" onClick={() => setEmailModalOpen(true)}>
          ✉️ Email Me the Download Links
        </button>

        <p className="hero-disclaimer">
          *Not available on Roku
        </p>
      </div>

      <HubSpotModal
        isOpen={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
      />

      <ComingSoonModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        platform={selectedPlatform}
      />
    </section>
  );
}
