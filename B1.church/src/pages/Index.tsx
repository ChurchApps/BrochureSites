import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WebsiteBuilder from "@/components/WebsiteBuilder";
import { Testimonials } from "@/components/Testimonials";
import PerfectFor from "@/components/PerfectFor";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        path="/"
        title="B1 Church - Free Church App & Website Builder | Complete Church Platform"
        description="100% free church management platform with mobile app, website builder, digital giving, and community features. Perfect for churches of all sizes. No fees, forever free."
      />
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <WebsiteBuilder />
        <PerfectFor />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
