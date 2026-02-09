import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#providers', label: 'Providers' },
  ];

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img
            src="/images/logos/freeplay-white.png"
            alt="FreePlay"
          />
        </div>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#download" className="nav-cta">Download Now</a>
          </li>
        </ul>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="nav-mobile-btn"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="nav-mobile-menu active">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setMobileMenuOpen(false)}
            className="nav-mobile-cta"
          >
            Download Now
          </a>
        </div>
      )}
    </nav>
  );
}
