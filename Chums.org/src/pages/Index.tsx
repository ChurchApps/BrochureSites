import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <section id="features" aria-label="Features">
          <Features />
        </section>
        <section id="testimonials" aria-label="Customer Testimonials">
          <Testimonials />
        </section>
        <section id="about" aria-label="About CHUMS">
          <Pricing />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
