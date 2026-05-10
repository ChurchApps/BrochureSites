import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src="/images/logos/freeplay-white.png"
            alt="FreePlay"
          />
        </div>

        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <a href="https://support.churchapps.org/" target="_blank" rel="noopener noreferrer">Support</a>
        </div>

        <p className="footer-provided">
          Provided by{' '}
          <a
            href="https://churchapps.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            ChurchApps.org
          </a>
          {' '}— a 501(c)(3) non-profit ministry
        </p>

        <p className="footer-copyright">
          © {new Date().getFullYear()} Live Church Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
