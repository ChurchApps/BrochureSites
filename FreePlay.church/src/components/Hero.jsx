import { useState } from 'react';
import ComingSoonModal from './ComingSoonModal';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('');

  const openModal = (platform) => {
    setSelectedPlatform(platform);
    setModalOpen(true);
  };

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-bg-overlay"></div>
        <img
          src="/images/hero-bg.jpg"
          alt=""
        />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">FreePlay</h1>

        <p className="hero-tagline">
          The Future of Church Curriculum Has Arrived
        </p>

        <p className="hero-platforms">
          Available on{' '}
          <button className="link-button" onClick={() => openModal('Apple TV')}>Apple TV</button>,{' '}
          <a href="https://www.amazon.com/Live-Church-Solutions-FreePLay/dp/B0GMC4S3RS/" target="_blank" rel="noopener noreferrer">Fire TV</a>, and{' '}
          <a href="https://play.google.com/store/apps/details?id=church.freeplay" target="_blank" rel="noopener noreferrer">Android TV</a>
        </p>

        <div className="hero-image-wrapper">
          <img
            src="/images/nanobananapro/heroimage-classroomscene.png"
            alt="Teacher and kids in bright classroom watching Bible Project on FreePlay"
            className="hero-image"
          />
        </div>

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

        <p className="hero-disclaimer">
          *Not available on Roku
        </p>
      </div>

      <ComingSoonModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        platform={selectedPlatform}
      />
    </section>
  );
}
