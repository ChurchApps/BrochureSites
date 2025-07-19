import {
  Users,
  DollarSign,
  Calendar,
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
import { Button } from "@/components/ui/button";
import checkinImage from "@/assets/church-checkin-station-interface.png";
import dashboardImage from "@/assets/church-management-dashboard-preview.jpg";

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

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Complete{" "}
            <span className="text-gradient-primary">Church Management Software</span> Features
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
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
                  <div className="p-3 rounded-xl bg-gradient-primary">
                    <UserCheck className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Self-Serve Check-in Stations</h3>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Ensure child safety while freeing up volunteers to engage with families. Our self-serve check-in system generates matching codes for children and adults, creating a secure pickup process.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground/70">Search by phone number and select services automatically</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground/70">Prints labels and receipts wirelessly to shared printers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground/70">Runs on affordable Android tablets under $80</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground/70">Automatically syncs with attendance tracking system</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover border border-border/50">
                <img
                  src={checkinImage}
                  alt="CHUMS self-serve church check-in station interface showing family search and child safety features"
                  className="w-full h-auto"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Analytics Feature */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover border border-border/50">
                <img
                  src="/attendance-analytics-dashboard.png"
                  alt="Church attendance analytics dashboard showing trends, charts and member engagement tracking"
                  className="w-full h-auto"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-gradient-primary">
                    <BarChart3 className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Attendance Analytics</h3>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Track attendance trends across all services and groups with beautiful charts and reports. Monitor engagement patterns and growth over time to make informed ministry decisions.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground/70">Visual trend analysis with interactive charts</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground/70">Track multiple campuses and service times</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground/70">Export reports for leadership meetings</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Giving Management Feature */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-gradient-primary">
                    <DollarSign className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Advanced Giving Management</h3>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Process donations efficiently with batch management, fund tracking, and comprehensive financial reporting. Generate tax statements and monitor giving trends across multiple funds.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground/70">Batch entry system for quick data input</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground/70">Track unlimited funds and special campaigns</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground/70">Generate giving statements and tax reports</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground/70">Visual analytics across time periods</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover border border-border/50">
                <img
                  src="/giving-management-dashboard.png"
                  alt="Church giving management dashboard with donation tracking, fund management and financial reporting"
                  className="w-full h-auto"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Complete Church Management Suite
            </h3>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Every tool you need to manage your church effectively, all in one integrated platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Groups Management */}
            <div className="group relative rounded-xl overflow-hidden shadow-card-hover border border-border/50 hover:shadow-elegant transition-all duration-300">
              <img
                src="/groups-ministry-management.png"
                alt="Groups Management"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-sm font-semibold text-white mb-1">Groups & Ministries</h4>
                <p className="text-xs text-white/80">Manage unlimited groups and classes</p>
              </div>
            </div>

            {/* People Management */}
            <div className="group relative rounded-xl overflow-hidden shadow-card-hover border border-border/50 hover:shadow-elegant transition-all duration-300">
              <img
                src="/people-search-database.png"
                alt="People Management"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-sm font-semibold text-white mb-1">People Search</h4>
                <p className="text-xs text-white/80">Advanced member database</p>
              </div>
            </div>

            {/* Worship Planning */}
            <div className="group relative rounded-xl overflow-hidden shadow-card-hover border border-border/50 hover:shadow-elegant transition-all duration-300">
              <img
                src="/worship-service-planning.png"
                alt="Worship Planning"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-sm font-semibold text-white mb-1">Service Planning</h4>
                <p className="text-xs text-white/80">Schedule teams and assignments</p>
              </div>
            </div>

            {/* Song Library */}
            <div className="group relative rounded-xl overflow-hidden shadow-card-hover border border-border/50 hover:shadow-elegant transition-all duration-300">
              <img
                src="/song-library-arrangements.png"
                alt="Song Library"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-sm font-semibold text-white mb-1">Song Library</h4>
                <p className="text-xs text-white/80">Arrangements and chord charts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mb-20">
          <div className="relative rounded-3xl overflow-hidden shadow-card-hover border border-border/50">
            <img
              src="/chums-dashboard-preview.png"
              alt="CHUMS Dashboard"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <h3 className="text-2xl font-bold mb-2 text-white">
                Beautiful, Intuitive Dashboard
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                Access all your church data with our clean, modern interface designed for efficiency and ease of use.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {additionalFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="flex items-start space-x-4 p-4 rounded-xl border border-border/30 hover:border-primary/50 transition-colors"
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{feature.title}</h4>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" asChild>
            <a href="https://app.chums.org/login?action=register">
              Get Started for Free
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};