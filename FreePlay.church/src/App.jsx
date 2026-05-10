import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Comparison from './components/Comparison';
import FeatureHighlight from './components/FeatureHighlight';
import Features from './components/Features';
import Providers from './components/Providers';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import About from './pages/About';
import './App.css';

function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <HowItWorks />
      <Comparison />
      <FeatureHighlight />
      <Features />
      <Providers />
      <CTA />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
