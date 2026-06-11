import Header from "@/components/Header";
import Hero from "@/components/home/Hero";
import ProductsSection from "@/components/home/ProductsSection";
import QuoteBand from "@/components/home/QuoteBand";
import ConnectSection from "@/components/home/ConnectSection";
import GivingSection from "@/components/home/GivingSection";
import PeopleSection from "@/components/home/PeopleSection";
import CheckinSection from "@/components/home/CheckinSection";
import WebsiteBuilder from "@/components/WebsiteBuilder";
import EcosystemSection from "@/components/home/EcosystemSection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import PricingSection from "@/components/home/PricingSection";
import MissionSection from "@/components/home/MissionSection";
import FinalCta from "@/components/home/FinalCta";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        path="/"
        title="B1 Church - Free Church App & Website Builder | Complete Church Platform"
        description="100% free church management platform with a member app, website builder, digital giving, and check-in. One platform, one database, built by a nonprofit. Free forever."
      />
      <Header />
      <main>
        <Hero />
        <ProductsSection />
        <QuoteBand />
        <ConnectSection />
        <GivingSection />
        <PeopleSection />
        <CheckinSection />
        <WebsiteBuilder />
        <EcosystemSection />
        <CapabilitiesSection />
        <PricingSection />
        <MissionSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
