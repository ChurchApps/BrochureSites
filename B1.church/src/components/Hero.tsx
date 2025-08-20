import { Button } from "@/components/ui/button";
import { Play, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import churchCommunity from "@/assets/church-community.jpg";
import { trackChurchSignup, trackFeatureClick } from "@/utils/analytics";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 parallax image-overlay"
        style={{
          backgroundImage: `url(${churchCommunity})`,
        }}
        role="img"
        aria-label="Church community gathering showing people connecting and fellowship"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center" style={{ marginBottom: 40 }}>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 gradient-glass px-6 py-3 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-foreground">100% Free • Ministry-Driven Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-foreground">Church Community</span>
            <span className="text-[hsl(var(--primary-vibrant))] block">Without Barriers</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Complete church management software with mobile app, website builder, digital giving, and community features. 100% free church platform designed by a ministry, for ministries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button 
              variant="gradient" 
              size="xl" 
              className="group shadow-glow" 
              asChild
              onClick={() => trackChurchSignup('hero_primary_cta')}
            >
              <Link to="/login">
                Get Started Free
                <Play className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="gradient-glass border-primary/30 hover:border-primary text-foreground"
              onClick={() => {
                trackFeatureClick('see_how_it_works');
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See How It Works
              <Play className="w-6 h-6" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="gradient-glass rounded-2xl p-6 card-hover">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Free Forever</div>
            </div>
            <div className="gradient-glass rounded-2xl p-6 card-hover">
              <div className="text-3xl font-bold text-primary">Modern</div>
              <div className="text-sm text-muted-foreground">Platform</div>
            </div>
            <div className="gradient-glass rounded-2xl p-6 card-hover">
              <div className="text-3xl font-bold text-primary">Ministry</div>
              <div className="text-sm text-muted-foreground">Not Profit</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;