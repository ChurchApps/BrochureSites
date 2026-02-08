export default function Hero() {
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
          Available on <span>Apple TV</span>,{' '}
          <span>Fire TV</span>, and{' '}
          <span>Android TV</span>
        </p>

        <div className="hero-image-wrapper">
          <img
            src="/images/hero-classroom.png"
            alt="Children in classroom"
            className="hero-image"
          />
          <div className="hero-play-btn-wrapper">
            <button className="hero-play-btn">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

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
