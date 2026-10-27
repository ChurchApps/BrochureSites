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
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Seo
        path="/"
        title={t("brochure.home.meta.title")}
        description={t("brochure.home.meta.description")}
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
