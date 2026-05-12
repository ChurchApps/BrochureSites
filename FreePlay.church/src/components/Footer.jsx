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
          <a href="https://churchapps.org/about" target="_blank" rel="noopener noreferrer">About</a>
          <a href="https://churchapps.org/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://churchapps.org/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
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
