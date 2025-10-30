import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Users,
  BarChart3,
  UserCheck,
  DollarSign,
  Calendar,
  FileText,
  MessageSquare,
  Database,
  Shield,
  Smartphone,
  Mail,
  Clock,
  Check,
  Heart,
  Globe,
  Github
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/church-hero-background.jpg";
import checkinImage from "@/assets/church-checkin-station-interface.png";

const mainFeatures = [
  {
    icon: Users,
    title: "Complete People Management",
    description: "Maintain detailed member and guest records with contact information, relationships, birthdays, and anniversary tracking. Advanced search and filtering capabilities.",
  },
  {
    icon: BarChart3,
    title: "Attendance Analytics",
    description: "Track attendance trends across all services and groups with beautiful charts and reports. Monitor engagement patterns and growth over time.",
  },
  {
    icon: UserCheck,
    title: "Groups & Ministry Management",
    description: "Organize unlimited groups, classes, and ministries. Manage member assignments, track participation, and create custom group categories.",
  },
  {
    icon: DollarSign,
    title: "Advanced Giving Management",
    description: "Process donations with batch management, fund tracking, and comprehensive financial reporting. Generate tax statements and monitor giving trends.",
  },
  {
    icon: Calendar,
    title: "Worship & Service Planning",
    description: "Schedule worship services, assign team members, and manage volunteer coordination. Track positions needed and automate notifications.",
  },
  {
    icon: FileText,
    title: "Song Library & Arrangements",
    description: "Organize your complete song library with multiple arrangements, keys, and chord charts. Link to external resources and manage worship setlists.",
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Send targeted emails and announcements. Create automated workflows and keep your congregation connected.",
  },
  {
    icon: Database,
    title: "Multi-Campus Support",
    description: "Manage multiple locations from one unified dashboard. Track campus-specific data while maintaining organization-wide reporting.",
  },
];

const additionalFeatures = [
  { icon: Shield, title: "Security & Privacy", description: "Industry standard encryption and secure data storage" },
  { icon: Smartphone, title: "Mobile Accessibility", description: "Responsive design works perfectly on all devices" },
  { icon: Mail, title: "Automated Workflows", description: "Follow-up sequences and member care automation" },
  { icon: Clock, title: "Real-Time Reporting", description: "Generate instant reports and export data anytime" },
  { icon: FileText, title: "Custom Forms", description: "Build registration forms and surveys for any purpose" },
  { icon: Users, title: "Role-Based Access", description: "Secure permissions for staff and volunteers" },
];

const allFeatures = [
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
    label: "Churches already using our platform",
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

const testimonials = [
  {
    name: "Pastor Daniel Webster",
    church: "Believers Bible Assembly",
    location: "Kumasi, Ghana",
    content: "We use this platform every Sunday to track attendance and keep records of everyone who attends, including our Sunday school children. As missionaries with a limited budget, we appreciate that this software is free and effective.",
  },
  {
    name: "Theresa Fraser",
    church: "Mission of Hope Worship Center",
    location: "Orlando, FL",
    content: "This is a church saver. As a small Church with a limited budget, this software is GOD SENT and a blessing. It is user-friendly and easy to set up. Donation reports are easy to draft. The fact that I can export data to excel makes analysis of records very simple. It has shaved off at least 25% of my office time.",
  },
  {
    name: "Maria Rodriguez",
    church: "St. Mark's Episcopal",
    location: "Phoenix, AZ",
    content: "This helped us transition to digital giving seamlessly during the pandemic. The support team was fantastic and the platform is incredibly reliable. Being free allowed us to redirect our software budget to actual ministry.",
  }
];

const ChurchManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Church community"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60" />
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                Free <span className="text-gradient">Church Management Software</span>
                <br />
                Complete Ministry Platform
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Professional <strong>church management software</strong> with attendance tracking, member database, giving management, and communication tools.
                Completely <strong>free church software</strong> provided by Live Church Solutions, a 501(c)(3) non-profit ministry.
                Join 100+ churches saving thousands on ministry software costs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button variant="gradient" size="xl" className="group shadow-glow" asChild>
                  <Link to="/login">
                    Get Started for Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="group" asChild>
                  <Link to="/login">
                    <Play className="mr-2 h-5 w-5" />
                    Try Demo
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col items-center space-y-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                  Trusted by Growing Churches Worldwide
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-80">
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

        {/* Features Section */}
        <section className="py-24 pattern-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Complete{" "}
                <span className="text-gradient">Church Management System</span> Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional church database software with member management, attendance tracking,
                giving administration, and ministry communication tools. Free church management system
                designed specifically for growing congregations and multi-campus churches.
              </p>
            </div>

            {/* Check-in Stations Feature */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-xl bg-primary/20">
                        <UserCheck className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">Self-Serve Check-in Stations</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Ensure child safety while freeing up volunteers to engage with families. Our self-serve check-in system generates matching codes for children and adults, creating a secure pickup process.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">Search by phone number and select services automatically</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">Prints labels and receipts wirelessly to shared printers</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">Runs on affordable Android tablets under $80</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">Automatically syncs with attendance tracking system</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-soft border border-border/50">
                    <img
                      src={checkinImage}
                      alt="Self-serve church check-in station interface showing family search and child safety features"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {mainFeatures.map((feature, index) => (
                <div key={index} className="gradient-glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all card-hover">
                  <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Feature Showcase Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              <div className="group relative rounded-xl overflow-hidden shadow-soft border border-border/50 hover:shadow-primary transition-all duration-300">
                <img
                  src="/groups-ministry-management.png"
                  alt="Groups Management"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-sm font-semibold text-white mb-1">Groups & Ministries</h4>
                  <p className="text-xs text-white/80">Manage unlimited groups and classes</p>
                </div>
              </div>

              <div className="group relative rounded-xl overflow-hidden shadow-soft border border-border/50 hover:shadow-primary transition-all duration-300">
                <img
                  src="/people-search-database.png"
                  alt="People Management"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-sm font-semibold text-white mb-1">People Search</h4>
                  <p className="text-xs text-white/80">Advanced member database</p>
                </div>
              </div>

              <div className="group relative rounded-xl overflow-hidden shadow-soft border border-border/50 hover:shadow-primary transition-all duration-300">
                <img
                  src="/worship-service-planning.png"
                  alt="Worship Planning"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-sm font-semibold text-white mb-1">Service Planning</h4>
                  <p className="text-xs text-white/80">Schedule teams and assignments</p>
                </div>
              </div>

              <div className="group relative rounded-xl overflow-hidden shadow-soft border border-border/50 hover:shadow-primary transition-all duration-300">
                <img
                  src="/song-library-arrangements.png"
                  alt="Song Library"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-sm font-semibold text-white mb-1">Song Library</h4>
                  <p className="text-xs text-white/80">Arrangements and chord charts</p>
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="mb-20">
              <div className="relative rounded-3xl overflow-hidden shadow-soft border border-border/50">
                <img
                  src="/chums-dashboard-preview.png"
                  alt="Church Management Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                    Beautiful, Intuitive Dashboard
                  </h3>
                  <p className="text-white/90 max-w-2xl mx-auto">
                    Access all your church data with our clean, modern interface designed for efficiency and ease of use.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl border border-border/30 hover:border-primary/50 transition-colors gradient-glass">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Loved by Churches{" "}
                <span className="text-gradient">Everywhere</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join growing churches that have transformed their ministry with our completely free platform.
                Here's what pastors and church administrators have to say.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">100+</div>
                <div className="text-muted-foreground">Churches Trust Us</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">Free</div>
                <div className="text-muted-foreground">Forever & Always</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="gradient-glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-primary hover:-translate-y-1 group"
                >
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-border/30 pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.church}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About/Pricing Section */}
        <section className="py-24 pattern-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                About Our{" "}
                <span className="text-gradient">Free Church Software</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Comprehensive <strong>church management software</strong> provided completely free to Christian churches and ministries by
                <strong> Live Church Solutions</strong>, a 501(c)(3) non-profit founded in 2012. Our mission is helping churches
                implement professional <strong>ministry software</strong> without the typical high costs of church administration systems.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center gradient-glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-primary hover:-translate-y-1"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="font-semibold mb-2 text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="gradient-glass rounded-3xl p-8 md:p-12 border border-border/50 mb-16 text-center">
              <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Our Mission: Helping Churches Focus on Ministry
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Every year the Church spends over <strong>$800 million</strong> on church management software.
                We believe that money can be put to better use, which is why we developed this platform;
                a completely free, open-source church management solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="lg" className="group shadow-glow" asChild>
                  <a href="https://churchapps.org/" target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-5 w-5" />
                    Learn More About Live Church Solutions
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="group" asChild>
                  <a href="https://github.com/ChurchApps" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              <div className="lg:col-span-3 text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Everything You Need, Completely Free</h3>
                <p className="text-muted-foreground">No trial periods, no member limits, no hidden fees</p>
              </div>
              {allFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-xl border border-border/30 hover:border-primary/50 transition-colors gradient-glass"
                >
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="gradient-glass rounded-2xl p-8 border border-border/50 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Ready to Stop Paying for Church Management Software?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join churches worldwide that have made the switch to a completely free,
                  open-source solution built by a ministry, for ministries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="gradient" size="xl" className="shadow-glow" asChild>
                    <Link to="/login">
                      Get Started for Free
                    </Link>
                  </Button>
                  <Button variant="outline" size="xl" asChild>
                    <Link to="/login">
                      Try Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ChurchManagement;
