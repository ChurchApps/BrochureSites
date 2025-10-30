import { Button } from "@/components/ui/button";
import {
  Play,
  Users,
  CreditCard,
  CheckCircle,
  Calendar,
  ArrowRight,
  DollarSign,
  UserCheck,
  MessageSquare,
  FileText,
  Shield,
  Smartphone,
  Mail,
  Clock,
  Database,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";
import communityPhoto from "@/assets/community-photo.jpg";
import givingPhoto from "@/assets/giving-photo.jpg";
import checkinPhoto from "@/assets/checkin-photo.jpg";
import heroImage from "@/assets/hero-image.jpg";
import checkinImage from "@/assets/church-checkin-station-interface.png";
import dashboardImage from "@/assets/church-management-dashboard-preview.jpg";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Church Community Connection",
      description: "Build deeper relationships through groups, discussions, messaging, and events. Connect members beyond Sunday services with meaningful interactions.",
      image: communityPhoto,
      phoneImage: "/community-groups-phone.png",
      phoneAlt: "B1 Church Community Groups",
      features: ["Small Groups", "Direct Messaging", "Discussion Forums", "Member Directory"],
      reverse: false,
      ctaText: "Join Community"
    },
    {
      icon: Play,
      title: "Digital Church Content Hub",
      description: "Access sermons, classroom lessons, verse of the days and full bible translations. Keep your community engaged with fresh content throughout the week.",
      image: heroImage, // Using hero image for digital content hub
      phoneImage: "/sermons-phone.png",
      phoneAlt: "B1 Church Sermons",
      features: ["Sermon Library", "Bible Integration", "Verse of the Day", "Classroom Lessons"],
      reverse: true,
      ctaText: "Browse Content"
    },
    {
      icon: CreditCard,
      title: "Online Church Giving",
      description: "Secure donations via credit/bank with recurring options and fund-specific giving. No fees from B1 - direct Stripe integration.",
      image: givingPhoto,
      phoneImage: "/giving-phone.png",
      phoneAlt: "B1 Church Digital Giving",
      features: ["Secure Payments", "Recurring Donations", "Fund Management", "Giving History"],
      reverse: false,
      ctaText: "Start Giving"
    },
    {
      icon: CheckCircle,
      title: "Church Check-in Platform",
      description: "Contactless service check-in with family management and automatic group assignment. Streamline attendance tracking.",
      image: checkinPhoto,
      phoneImage: "/checkin-phone.png",
      phoneAlt: "B1 Church Check-in Complete",
      features: ["Contactless Check-in", "Family Management", "Auto Group Assignment", "Attendance Reports"],
      reverse: true,
      ctaText: "Try Check-in"
    }
  ];

  return (
    <section id="features" className="py-0">
      {features.map((feature, index) => (
        <div key={index} className="relative min-h-screen flex items-center">
          {/* Alternating Background - Photo vs Pattern */}
          {index % 2 === 0 ? (
            // Photo background (even indexes: 0, 2, 4...)
            feature.image && (
              <div
                className="absolute inset-0 parallax image-overlay"
                style={{
                  backgroundImage: `url(${feature.image})`,
                }}
                role="img"
                aria-label={`Background image for ${feature.title} feature`}
              />
            )
          ) : (
            // Pattern background (odd indexes: 1, 3, 5...)
            <div className="absolute inset-0 pattern-background" />
          )}

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${feature.reverse ? 'lg:grid-cols-2' : ''}`}>
              {/* Text Content */}
              <div className={`space-y-8 ${feature.reverse ? 'lg:order-2' : ''}`}>
                <div className="gradient-glass rounded-3xl p-8 md:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-glow">
                      <feature.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold text-foreground">{feature.title}</h2>
                    </div>
                  </div>

                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    {feature.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="gradient" size="lg" className="group" asChild>
                    <Link to="/login">
                      {feature.ctaText}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Mobile App Screenshots */}
              <div className={`${feature.reverse ? 'lg:order-1' : ''}`}>
                <div className="relative max-w-sm mx-auto">
                  {/* Phone Frame with App Screenshot */}
                  <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl card-hover">
                    <div className="bg-black rounded-[2.5rem] overflow-hidden">
                      <img
                        src={feature.phoneImage}
                        alt={feature.phoneAlt}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Floating Badge - Only on first phone */}
                  {index === 0 && (
                    <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Mobile First
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Comprehensive Church Management Features Section */}
      <div className="relative py-24 pattern-background">
        <div className="relative z-10 container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Complete{" "}
              <span className="text-gradient">Church Management System</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional church database software with member management, attendance tracking,
              giving administration, and ministry communication tools. Free church management system
              designed specifically for growing congregations and multi-campus churches.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="gradient-glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all card-hover">
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">People Management</h3>
              <p className="text-muted-foreground">Complete member and guest records with advanced search and relationships tracking.</p>
            </div>

            <div className="gradient-glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all card-hover">
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Attendance Analytics</h3>
              <p className="text-muted-foreground">Track attendance trends with beautiful charts and comprehensive reporting.</p>
            </div>

            <div className="gradient-glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all card-hover">
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                <UserCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Groups & Ministries</h3>
              <p className="text-muted-foreground">Organize unlimited groups, classes with member assignments and tracking.</p>
            </div>

            <div className="gradient-glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all card-hover">
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Giving Management</h3>
              <p className="text-muted-foreground">Process donations with batch management, fund tracking, and tax statements.</p>
            </div>

            <div className="gradient-glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all card-hover">
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Service Planning</h3>
              <p className="text-muted-foreground">Schedule worship services, assign teams, and manage volunteer coordination.</p>
            </div>

            <div className="gradient-glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all card-hover">
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Song Library</h3>
              <p className="text-muted-foreground">Organize songs with arrangements, keys, chord charts, and setlists.</p>
            </div>

            <div className="gradient-glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all card-hover">
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Communications</h3>
              <p className="text-muted-foreground">Send targeted emails and announcements with automated workflows.</p>
            </div>

            <div className="gradient-glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all card-hover">
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Multi-Campus</h3>
              <p className="text-muted-foreground">Manage multiple locations from one unified dashboard with campus-specific data.</p>
            </div>
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
            <div className="flex items-start space-x-4 p-4 rounded-xl border border-border/30 hover:border-primary/50 transition-colors gradient-glass">
              <div className="p-2 rounded-lg bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Security & Privacy</h4>
                <p className="text-sm text-muted-foreground">Industry standard encryption and secure data storage</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl border border-border/30 hover:border-primary/50 transition-colors gradient-glass">
              <div className="p-2 rounded-lg bg-primary/10">
                <Smartphone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Mobile Accessibility</h4>
                <p className="text-sm text-muted-foreground">Responsive design works perfectly on all devices</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl border border-border/30 hover:border-primary/50 transition-colors gradient-glass">
              <div className="p-2 rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Automated Workflows</h4>
                <p className="text-sm text-muted-foreground">Follow-up sequences and member care automation</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl border border-border/30 hover:border-primary/50 transition-colors gradient-glass">
              <div className="p-2 rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Real-Time Reporting</h4>
                <p className="text-sm text-muted-foreground">Generate instant reports and export data anytime</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl border border-border/30 hover:border-primary/50 transition-colors gradient-glass">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Custom Forms</h4>
                <p className="text-sm text-muted-foreground">Build registration forms and surveys for any purpose</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl border border-border/30 hover:border-primary/50 transition-colors gradient-glass">
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Role-Based Access</h4>
                <p className="text-sm text-muted-foreground">Secure permissions for staff and volunteers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 parallax image-overlay"
          style={{
            backgroundImage: `url(${givingPhoto})`,
          }}
          role="img"
          aria-label="Church giving and stewardship background"
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="gradient-glass rounded-3xl p-12 md:p-16 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Ready to Build Stronger
              <span className="text-gradient block">Church Community?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your church with our comprehensive free platform designed to deepen relationships and strengthen church communities through modern technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="gradient" size="xl" className="shadow-glow" asChild>
                <Link to="/login">Get Started Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;