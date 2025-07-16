import { Button } from "@/components/ui/button";
import {
  Church,
  Building2,
  Network,
  Heart,
  ArrowRight,
  Users,
  Globe,
  Zap
} from "lucide-react";
import campusWide from "@/assets/campus-wide.jpg";

const PerfectFor = () => {
  const audiences = [
    {
      icon: Church,
      title: "Local Churches",
      description: "Single-site congregations wanting to modernize their digital presence",
      stats: "Any Size"
    },
    {
      icon: Building2,
      title: "Multi-Site Congregations",
      description: "Multiple locations needing unified management with unique identities",
      stats: "All Locations"
    },
    {
      icon: Network,
      title: "Denominational Networks",
      description: "Organizations serving multiple churches with shared resources",
      stats: "Every Network"
    },
    {
      icon: Heart,
      title: "Community-Focused",
      description: "Churches prioritizing deep engagement and relationship building",
      stats: "Growing Daily"
    }
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 parallax image-overlay"
        style={{
          backgroundImage: `url(${campusWide})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4" style={{ marginTop: 30, marginBottom: 30 }}>
        <div className="text-center mb-16">
          <div className="gradient-glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Free For Every
              <span className="text-gradient block">Church Community</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Completely free platform for all church sizes. Our ministry mission means no hidden costs, no feature limits, no surprises.
            </p>
          </div>
        </div>

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {audiences.map((audience, index) => (
            <div key={index} className="gradient-glass rounded-2xl p-6 card-hover text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                <audience.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{audience.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{audience.description}</p>
              <div className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {audience.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Integration Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="gradient-glass rounded-2xl p-8 card-hover text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">ChuMS Integration</h3>
            <p className="text-muted-foreground">
              Seamlessly integrated with ChuMS church management software for complete workflow automation.
            </p>
          </div>

          <div className="gradient-glass rounded-2xl p-8 card-hover text-center">
            <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Web Portal Included</h3>
            <p className="text-muted-foreground">
              Comprehensive web portal with website builder alongside the powerful mobile app experience.
            </p>
          </div>

          <div className="gradient-glass rounded-2xl p-8 card-hover text-center">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Instant Setup</h3>
            <p className="text-muted-foreground">
              Get started in minutes with our streamlined onboarding process and dedicated support team.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="gradient-glass rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Strengthen Your Community?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how our comprehensive ministry platform can help you build deeper relationships and stronger communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="gradient" size="xl" className="group shadow-glow" asChild>
                <a href="/login#register">
                  Start Free Today
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="mt-8 text-sm text-muted-foreground">
              ✨ 100% Free • No hidden costs • Ministry-driven mission
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectFor;