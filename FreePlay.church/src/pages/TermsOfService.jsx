import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function TermsOfService() {
  useEffect(() => {
    document.title = 'Terms of Service - FreePlay';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navigation />
      <div className="legal-page">
        <div className="legal-container">
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-updated">Last updated: May 10, 2026</p>

          <section className="legal-section">
            <h2>Acceptance of Terms</h2>
            <p>By accessing or using FreePlay, provided by Live Church Solutions (a 501(c)(3) non-profit organization, EIN: 45-5349618), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
          </section>

          <section className="legal-section">
            <h2>Description of Service</h2>
            <p>FreePlay is a free application that enables churches to stream their curriculum and media content on TV platforms including Apple TV, Amazon Fire TV, and Android TV. FreePlay is provided at no cost as part of our mission to support churches worldwide.</p>
          </section>

          <section className="legal-section">
            <h2>Use of Service</h2>
            <p>You agree to use FreePlay only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Use the service for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Transmit any malicious code or content</li>
              <li>Interfere with the proper functioning of the service</li>
              <li>Use the service to distribute content you do not have rights to share</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Content</h2>
            <p>You are responsible for the content you upload or stream through FreePlay. You represent that you have the necessary rights to any content you distribute using our platform. Live Church Solutions does not claim ownership of your content.</p>
          </section>

          <section className="legal-section">
            <h2>Intellectual Property</h2>
            <p>The FreePlay name, logo, and application design are the property of Live Church Solutions. Our software is open-source and available under the applicable license on our <a href="https://github.com/ChurchApps" target="_blank" rel="noopener noreferrer">GitHub repository</a>.</p>
          </section>

          <section className="legal-section">
            <h2>Disclaimer of Warranties</h2>
            <p>FreePlay is provided "as is" and "as available" without warranties of any kind, either express or implied. As a non-profit ministry, we strive to provide reliable service but cannot guarantee uninterrupted or error-free operation.</p>
          </section>

          <section className="legal-section">
            <h2>Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Live Church Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of FreePlay.</p>
          </section>

          <section className="legal-section">
            <h2>Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Continued use of FreePlay after changes constitutes acceptance of the revised Terms.</p>
          </section>

          <section className="legal-section">
            <h2>Governing Law</h2>
            <p>These Terms are governed by the laws of the State of Oklahoma, without regard to its conflict of law provisions.</p>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>If you have questions about these Terms, please contact us:</p>
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
