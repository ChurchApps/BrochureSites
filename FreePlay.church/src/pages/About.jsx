import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function About() {
  useEffect(() => {
    document.title = 'About - FreePlay';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navigation />
      <div className="legal-page">
        <div className="legal-container">
          <h1 className="legal-title">About FreePlay</h1>

          <section className="legal-section">
            <h2>Our Mission</h2>
            <p>FreePlay is a ministry of <strong>Live Church Solutions</strong>, a 501(c)(3) non-profit organization (EIN: 45-5349618). We exist to free the church from software costs so they can focus on what matters most — ministry and making disciples.</p>
            <p>We believe that every church, regardless of size or budget, should have access to professional-quality tools. That's why everything we build is 100% free.</p>
          </section>

          <section className="legal-section">
            <h2>What is FreePlay?</h2>
            <p>FreePlay enables churches to stream their curriculum, sermons, and media content directly to TV platforms including Apple TV, Amazon Fire TV, and Android TV. It gives churches a simple, professional way to deliver video content to classrooms, lobbies, and homes.</p>
          </section>

          <section className="legal-section">
            <h2>How Can This Be Free?</h2>
            <p>Live Church Solutions is funded by the generous support of partner churches and individual donors. We are a volunteer-driven ministry where developers, designers, and church leaders contribute their time and skills to serve the body of Christ.</p>
            <p><em>"Freely you have received; freely give."</em> — Matthew 10:8</p>
          </section>

          <section className="legal-section">
            <h2>Our Apps</h2>
            <p>FreePlay is part of the ChurchApps family of free tools for churches:</p>
            <ul>
              <li><a href="https://b1.church" target="_blank" rel="noopener noreferrer"><strong>B1.Church</strong></a> — Church management, websites, and mobile apps</li>
              <li><a href="https://lessons.church" target="_blank" rel="noopener noreferrer"><strong>Lessons.church</strong></a> — Free church curriculum</li>
              <li><a href="https://freeshow.app" target="_blank" rel="noopener noreferrer"><strong>FreeShow</strong></a> — Presentation software for churches</li>
              <li><strong>FreePlay</strong> — Curriculum and media on TV platforms</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Non-Profit Status</h2>
            <p>Live Church Solutions is a registered 501(c)(3) tax-exempt organization.</p>
            <ul>
              <li><strong>EIN:</strong> 45-5349618</li>
              <li><strong>Location:</strong> Broken Arrow, Oklahoma</li>
              <li><strong>Mail:</strong> P.O. Box 1553, Broken Arrow, OK 74013</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Get Involved</h2>
            <p>There are several ways you can support our mission:</p>
            <ul>
              <li><a href="https://churchapps.org/partner" target="_blank" rel="noopener noreferrer"><strong>Partner with us</strong></a> — financially support our ministry</li>
              <li><a href="https://github.com/ChurchApps" target="_blank" rel="noopener noreferrer"><strong>Contribute code</strong></a> — all our projects are open-source</li>
              <li><strong>Spread the word</strong> — tell other churches about free tools available to them</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
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
