import { useTranslation } from "react-i18next";
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
import LocaleLink from "@/components/LocaleLink";
import heroImage from "@/assets/church-hero-background.jpg";
import checkinImage from "@/assets/church-checkin-station-interface.png";

const ChurchManagement = () => {
  const { t } = useTranslation();

  const rawMainFeatures = t("brochure.churchManagement.mainFeatures", { returnObjects: true });
  const mainFeaturesTranslated = Array.isArray(rawMainFeatures) ? rawMainFeatures as { title: string; description: string }[] : [];
  const mainFeaturesIcons = [Users, BarChart3, UserCheck, DollarSign, Calendar, FileText, MessageSquare, Database];
  const mainFeatures = mainFeaturesIcons.map((icon, i) => ({ icon, ...(mainFeaturesTranslated[i] || { title: "", description: "" }) }));

  const additionalFeaturesData = [
    {
      icon: Shield,
      title: t("brochure.features.additional.security.title"),
      description: t("brochure.features.additional.security.description"),
    },
    {
      icon: Smartphone,
      title: t("brochure.features.additional.mobile.title"),
      description: t("brochure.features.additional.mobile.description"),
    },
    {
      icon: Mail,
      title: t("brochure.features.additional.workflows.title"),
      description: t("brochure.features.additional.workflows.description"),
    },
    {
      icon: Clock,
      title: t("brochure.features.additional.reporting.title"),
      description: t("brochure.features.additional.reporting.description"),
    },
    {
      icon: FileText,
      title: t("brochure.features.additional.forms.title"),
      description: t("brochure.features.additional.forms.description"),
    },
    {
      icon: Users,
      title: t("brochure.features.additional.roles.title"),
      description: t("brochure.features.additional.roles.description"),
    },
  ];

  const rawAllFeatures = t("brochure.churchManagement.allFeatures.items", { returnObjects: true });
  const allFeaturesItems = Array.isArray(rawAllFeatures) ? rawAllFeatures as string[] : [];

  const rawStats = t("brochure.churchManagement.stats", { returnObjects: true });
  const statsItems = Array.isArray(rawStats) ? rawStats as { number: string; label: string; description: string }[] : [];

  const rawTestimonials = t("brochure.churchManagement.testimonials.items", { returnObjects: true });
  const testimonialsItems = Array.isArray(rawTestimonials) ? rawTestimonials as { content: string }[] : [];

  const testimonials = [
    {
      name: "Pastor Daniel Webster",
      church: "Believers Bible Assembly",
      location: "Kumasi, Ghana",
      content: testimonialsItems[0]?.content ?? "",
    },
    {
      name: "Theresa Fraser",
      church: "Mission of Hope Worship Center",
      location: "Orlando, FL",
      content: testimonialsItems[1]?.content ?? "",
    },
    {
      name: "Maria Rodriguez",
      church: "St. Mark's Episcopal",
      location: "Phoenix, AZ",
      content: testimonialsItems[2]?.content ?? "",
    },
  ];

  const rawCheckinFeatures = t("brochure.churchManagement.checkinStations.features", { returnObjects: true });
  const checkinFeatures = Array.isArray(rawCheckinFeatures) ? rawCheckinFeatures as string[] : [];

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
                {t("brochure.churchManagement.hero.title")} <span className="text-gradient">{t("brochure.churchManagement.hero.titleHighlight")}</span>
                <br />
                {t("brochure.churchManagement.hero.titleLine2")}
              </h1>

              <p
                className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t("brochure.churchManagement.hero.description") }}
              />

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button variant="gradient" size="xl" className="group shadow-glow" asChild>
                  <LocaleLink to="/login">
                    {t("brochure.churchManagement.hero.ctaPrimary")}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </LocaleLink>
                </Button>
                <Button variant="outline" size="xl" className="group" asChild>
                  <LocaleLink to="/login">
                    <Play className="mr-2 h-5 w-5" />
                    {t("brochure.churchManagement.hero.ctaSecondary")}
                  </LocaleLink>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col items-center space-y-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                  {t("brochure.churchManagement.hero.trustLine")}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-80">
                  <div className="text-sm font-medium">✨ {t("brochure.churchManagement.hero.trustFree")}</div>
                  <div className="hidden md:block h-4 w-px bg-border"></div>
                  <div className="text-sm font-medium">🏛️ {t("brochure.churchManagement.hero.trustNonProfit")}</div>
                  <div className="hidden md:block h-4 w-px bg-border"></div>
                  <div className="text-sm font-medium">📖 {t("brochure.churchManagement.hero.trustOpenSource")}</div>
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
                {t("brochure.churchManagement.featuresHeader.title")}{" "}
                <span className="text-gradient">{t("brochure.churchManagement.featuresHeader.titleHighlight")}</span>{" "}
                {t("brochure.churchManagement.featuresHeader.titleSuffix")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t("brochure.churchManagement.featuresHeader.description")}
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
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">{t("brochure.churchManagement.checkinStations.title")}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {t("brochure.churchManagement.checkinStations.description")}
                    </p>
                  </div>
                  <div className="space-y-4">
                    {checkinFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <p className="text-foreground/80">{feature}</p>
                      </div>
                    ))}
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
                  <h4 className="text-sm font-semibold text-white mb-1">{t("brochure.features.showcase.groupsMinistries.title")}</h4>
                  <p className="text-xs text-white/80">{t("brochure.features.showcase.groupsMinistries.description")}</p>
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
                  <h4 className="text-sm font-semibold text-white mb-1">{t("brochure.features.showcase.peopleSearch.title")}</h4>
                  <p className="text-xs text-white/80">{t("brochure.features.showcase.peopleSearch.description")}</p>
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
                  <h4 className="text-sm font-semibold text-white mb-1">{t("brochure.features.showcase.servicePlanning.title")}</h4>
                  <p className="text-xs text-white/80">{t("brochure.features.showcase.servicePlanning.description")}</p>
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
                  <h4 className="text-sm font-semibold text-white mb-1">{t("brochure.features.showcase.songLibrary.title")}</h4>
                  <p className="text-xs text-white/80">{t("brochure.features.showcase.songLibrary.description")}</p>
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
                    {t("brochure.features.dashboard.title")}
                  </h3>
                  <p className="text-white/90 max-w-2xl mx-auto">
                    {t("brochure.features.dashboard.description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {additionalFeaturesData.map((feature, index) => (
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
                {t("brochure.churchManagement.testimonials.title")}{" "}
                <span className="text-gradient">{t("brochure.churchManagement.testimonials.titleHighlight")}</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t("brochure.churchManagement.testimonials.subtitle")}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{t("brochure.testimonials.stats.churches.value")}</div>
                <div className="text-muted-foreground">{t("brochure.testimonials.stats.churches.label")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{t("brochure.testimonials.stats.price.value")}</div>
                <div className="text-muted-foreground">{t("brochure.testimonials.stats.price.label")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{t("brochure.testimonials.stats.uptime.value")}</div>
                <div className="text-muted-foreground">{t("brochure.testimonials.stats.uptime.label")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{t("brochure.testimonials.stats.support.value")}</div>
                <div className="text-muted-foreground">{t("brochure.testimonials.stats.support.label")}</div>
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
                {t("brochure.churchManagement.aboutSection.title")}{" "}
                <span className="text-gradient">{t("brochure.churchManagement.aboutSection.titleHighlight")}</span>
              </h2>
              <p
                className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t("brochure.churchManagement.aboutSection.description") }}
              />
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {statsItems.map((stat, index) => (
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
                {t("brochure.churchManagement.mission.title")}
              </h3>
              <p
                className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t("brochure.churchManagement.mission.description") }}
              />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="lg" className="group shadow-glow" asChild>
                  <a href="https://churchapps.org/" target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-5 w-5" />
                    {t("brochure.churchManagement.mission.learnMore")}
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="group" asChild>
                  <a href="https://github.com/ChurchApps" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    {t("brochure.churchManagement.mission.viewOnGitHub")}
                  </a>
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              <div className="lg:col-span-3 text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">{t("brochure.churchManagement.allFeatures.title")}</h3>
                <p className="text-muted-foreground">{t("brochure.churchManagement.allFeatures.subtitle")}</p>
              </div>
              {allFeaturesItems.map((feature, index) => (
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
                  {t("brochure.churchManagement.cta.title")}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t("brochure.churchManagement.cta.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="gradient" size="xl" className="shadow-glow" asChild>
                    <LocaleLink to="/login">
                      {t("brochure.churchManagement.cta.primaryButton")}
                    </LocaleLink>
                  </Button>
                  <Button variant="outline" size="xl" asChild>
                    <LocaleLink to="/login">
                      {t("brochure.churchManagement.cta.secondaryButton")}
                    </LocaleLink>
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
