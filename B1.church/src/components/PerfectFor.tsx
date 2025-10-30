import { Button } from "@/components/ui/button";
import {
  Church,
  Building2,
  Network,
  Heart,
  ArrowRight,
  Users,
  Globe,
  Zap,
  Check
} from "lucide-react";
import { Link } from "react-router-dom";
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
              <span className="text-foreground">Free For Every</span>
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
              <h3 className="text-lg font-semibold mb-2 text-foreground">{audience.title}</h3>
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
            <h3 className="text-xl font-semibold mb-4 text-foreground">ChuMS Integration</h3>
            <p className="text-muted-foreground">
              Seamlessly integrated with ChuMS church management software for complete workflow automation.
            </p>
          </div>

          <div className="gradient-glass rounded-2xl p-8 card-hover text-center">
            <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-foreground">Web Portal Included</h3>
            <p className="text-muted-foreground">
              Comprehensive web portal with website builder alongside the powerful mobile app experience.
            </p>
          </div>

          <div className="gradient-glass rounded-2xl p-8 card-hover text-center">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-foreground">Instant Setup</h3>
            <p className="text-muted-foreground">
              Get started in minutes with our streamlined onboarding process and dedicated support team.
            </p>
          </div>
        </div>

        {/* About Our Mission */}
        <div className="mb-16">
          <div className="gradient-glass rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4 text-foreground">About Our Free Software</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're a 501(c)(3) non-profit ministry dedicated to providing completely free church management software.
                Our mission is to empower churches to focus on ministry, not software costs.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 rounded-xl border border-border/30">
                <div className="text-2xl font-bold text-gradient mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Free Forever</div>
              </div>
              <div className="text-center p-4 rounded-xl border border-border/30">
                <div className="text-2xl font-bold text-gradient mb-1">$0</div>
                <div className="text-sm text-muted-foreground">Setup Costs</div>
              </div>
              <div className="text-center p-4 rounded-xl border border-border/30">
                <div className="text-2xl font-bold text-gradient mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Churches Served</div>
              </div>
              <div className="text-center p-4 rounded-xl border border-border/30">
                <div className="text-2xl font-bold text-gradient mb-1">Open</div>
                <div className="text-sm text-muted-foreground">Source Code</div>
              </div>
            </div>

            {/* Features List */}
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-8 text-left max-w-3xl mx-auto">
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">No credit card required</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">Unlimited users & members</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">All features included</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">Regular updates & improvements</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">24/7 community support</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">Mobile & web access</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">Data import assistance</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">Open source transparency</span>
              </div>
            </div>

            {/* Learn More Links */}
            <div className="text-center pt-6 border-t border-border/30">
              <p className="text-muted-foreground mb-4">Learn more about our ministry and mission</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://churchapps.org/" target="_blank" rel="noopener noreferrer">
                    About ChurchApps
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/ChurchApps" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="gradient-glass rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Ready to Strengthen Your Community?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how our comprehensive ministry platform can help you build deeper relationships and stronger communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="gradient" size="xl" className="group shadow-glow" asChild>
                <Link to="/login">
                  Start Free Today
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
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