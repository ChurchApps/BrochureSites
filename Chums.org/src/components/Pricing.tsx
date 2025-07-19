import { Check, Heart, Globe, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Complete member database with detailed profiles",
  "Attendance tracking with self check-in app",
  "Groups and small group management",
  "Giving management with detailed reporting",
  "Custom forms and data collection",
  "Email communication tools",
  "Event management and scheduling",
  "Data import from existing systems",
  "Multi-site and multi-campus support",
  "Role-based access and permissions",
  "Open source with GitHub access"
];

const stats = [
  {
    number: "$800M",
    label: "Churches spend yearly on management software",
    description: "We believe this money can be put to better use"
  },
  {
    number: "100+",
    label: "Churches already using CHUMS",
    description: "Growing community of satisfied users"
  },
  {
    number: "2012",
    label: "Year Live Church Solutions was founded",
    description: "Over a decade helping churches with technology"
  },
  {
    number: "100%",
    label: "Free forever guarantee",
    description: "No hidden fees, no trials, no limits"
  }
];

export const Pricing = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About Our{" "}
            <span className="text-gradient-primary">Free Church Software</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            CHUMS is comprehensive <strong>church management software</strong> provided completely free to Christian churches and ministries by
            <strong> Live Church Solutions</strong>, a 501(c)(3) non-profit founded in 2012. Our mission is helping churches
            implement professional <strong>ministry software</strong> without the typical high costs of church administration systems.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center gradient-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                {stat.number}
              </div>
              <div className="font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-foreground/70">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="gradient-card rounded-3xl p-8 md:p-12 border border-border/50 mb-16 text-center">
          <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Our Mission: Helping Churches Focus on Ministry
          </h3>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Every year the Church spends over <strong>$800 million</strong> on church management software.
            We believe that money can be put to better use, which is why we developed CHUMS;
            a completely free, open-source church management platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="https://churchapps.org/">
                <Globe className="mr-2 h-5 w-5" />
                Learn More About Live Church Solutions
              </a>
            </Button>
            <Button variant="elegant" size="lg" className="group" asChild>
              <a href="https://github.com/ChurchApps/ChumsApp">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <div className="lg:col-span-3 text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Everything You Need, Completely Free</h3>
            <p className="text-foreground/70">No trial periods, no member limits, no hidden fees</p>
          </div>
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-4 rounded-xl border border-border/30 hover:border-primary/50 transition-colors"
            >
              <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="gradient-card rounded-2xl p-8 border border-border/50 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Stop Paying for Church Management Software?
            </h3>
            <p className="text-foreground/80 mb-6">
              Join churches worldwide that have made the switch to a completely free,
              open-source solution built by a ministry, for ministries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="https://app.chums.org/login?action=register">
                  Get Started for Free
                </a>
              </Button>
              <Button variant="elegant" size="xl" asChild>
                <a href="https://chumsdemo.churchapps.org/login">
                  Try Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};