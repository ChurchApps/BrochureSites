import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/church-hero-background.jpg";
import { trackButtonClick } from "@/lib/analytics";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Church community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-primary opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Free <span className="text-gradient-primary">Church Management Software</span>
            <br />
            Complete Ministry Platform
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional <strong>church management software</strong> with attendance tracking, member database, giving management, and communication tools. 
            Completely <strong>free church software</strong> provided by Live Church Solutions, a 501(c)(3) non-profit ministry. 
            Join 100+ churches saving thousands on ministry software costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="https://app.chums.org/login#register" onClick={() => trackButtonClick('Get Started for Free', 'Hero')}>
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="elegant" size="xl" className="group" asChild>
              <a href="https://chumsdemo.churchapps.org/login" onClick={() => trackButtonClick('Try Demo', 'Hero')}>
                <Play className="mr-2 h-5 w-5" />
                Try Demo
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm text-foreground/60 uppercase tracking-wider font-medium">
              Trusted by Growing Churches Worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-60">
              <div className="text-sm font-medium">✨ Completely Free Forever</div>
              <div className="hidden md:block h-4 w-px bg-border"></div>
              <div className="text-sm font-medium">🏛️ 501(c)(3) Non-Profit Ministry</div>
              <div className="hidden md:block h-4 w-px bg-border"></div>
              <div className="text-sm font-medium">📖 Open Source</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "-2s" }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-float" style={{ animationDelay: "-4s" }} />
    </section>
  );
};