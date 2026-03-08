import { useState } from 'react';
import HubSpotModal from './HubSpotModal';

export default function Hero() {
  const [learnModalOpen, setLearnModalOpen] = useState(false);

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
          <a href="https://apps.apple.com/us/app/freeplay-church/id6758970546" target="_blank" rel="noopener noreferrer">Apple TV</a>,{' '}
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

        <button className="learn-more-btn" onClick={() => setLearnModalOpen(true)}>
          Learn How Your Church Can Use FreePlay →
        </button>

        <div className="hero-badges">
          <a href="https://apps.apple.com/us/app/freeplay-church/id6758970546" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/badges/app-store-badge-apple.svg"
              alt="Download on Apple App Store"
            />
          </a>
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

      <HubSpotModal
        isOpen={learnModalOpen}
        onClose={() => setLearnModalOpen(false)}
        title="How Your Church Can Use FreePlay"
        description="Get a quick overview sent to your inbox — no strings attached."
      />
    </section>
  );
}
