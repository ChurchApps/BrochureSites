export default function CTA() {
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
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/badges/app-store-badge-apple.svg"
              alt="Download on Apple App Store"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/badges/app-store-badge-google.png"
              alt="Get it on Google Play"
            />
          </a>
          <a href="https://www.amazon.com/dp/B0GMC4S3RS" target="_blank" rel="noopener noreferrer">
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
    </section>
  );
}
