import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy - FreePlay';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navigation />
      <div className="legal-page">
        <div className="legal-container">
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-updated">Last updated: May 10, 2026</p>

          <section className="legal-section">
            <h2>Introduction</h2>
            <p>FreePlay is provided by Live Church Solutions, a 501(c)(3) non-profit organization (EIN: 45-5349618). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use the FreePlay application.</p>
          </section>

          <section className="legal-section">
            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <p>When you sign up or contact us, we may collect:</p>
            <ul>
              <li>Name and email address</li>
              <li>Church or organization name</li>
              <li>Contact information you voluntarily submit through forms</li>
            </ul>
            <h3>Information Collected Automatically</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>Device and browser information</li>
              <li>IP address</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website or source</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain the FreePlay application</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Send updates about our services (with your consent)</li>
              <li>Improve our website and application</li>
              <li>Analyze usage patterns to enhance user experience</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Third-Party Services</h2>
            <p>We may use third-party services that collect information, including:</p>
            <ul>
              <li><strong>Google Analytics</strong> — to understand how visitors interact with our website. Google Analytics uses cookies to collect anonymous usage data. You can opt out by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</li>
              <li><strong>HubSpot</strong> — to manage contact forms and communications.</li>
              <li><strong>App Store platforms</strong> (Apple TV, Amazon Fire TV, Android TV) — each platform has its own privacy policy governing app distribution.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Data Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:</p>
            <ul>
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect the rights and safety of our organization and users</li>
              <li>With service providers who assist in operating our services (under confidentiality agreements)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section className="legal-section">
            <h2>Children's Privacy</h2>
            <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us so we can promptly remove it.</p>
          </section>

          <section className="legal-section">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>Email: <a href="mailto:support@churchapps.org">support@churchapps.org</a></li>
              <li>Phone: (918) 994-2638</li>
              <li>Mail: Live Church Solutions, P.O. Box 1553, Broken Arrow, OK 74013</li>
            </ul>
          </section>

          <div className="legal-back">
            <Link to="/" className="legal-back-link">Back to Home</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
