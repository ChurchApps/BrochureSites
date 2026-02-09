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

        <p className="footer-provided">
          Provided by{' '}
          <a
            href="https://churchapps.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            ChurchApps.org
          </a>
        </p>

        <p className="footer-copyright">
          © {new Date().getFullYear()} FreePlay. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
