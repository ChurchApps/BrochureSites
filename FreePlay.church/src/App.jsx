import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Comparison from './components/Comparison';
import FeatureHighlight from './components/FeatureHighlight';
import Features from './components/Features';
import Providers from './components/Providers';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
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

export default App;
