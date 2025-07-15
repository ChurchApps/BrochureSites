import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WebsiteBuilder from "@/components/WebsiteBuilder";

import PerfectFor from "@/components/PerfectFor";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <WebsiteBuilder />
        
        <PerfectFor />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
