import { useTranslation } from "react-i18next";
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
import LocaleLink from "@/components/LocaleLink";
import communityPhoto from "@/assets/community-photo.jpg";
import givingPhoto from "@/assets/giving-photo.jpg";
import checkinPhoto from "@/assets/checkin-photo.jpg";
import heroImage from "@/assets/hero-image.jpg";
import checkinImage from "@/assets/church-checkin-station-interface.png";
import dashboardImage from "@/assets/church-management-dashboard-preview.jpg";

const Features = () => {
  const { t } = useTranslation();

  // Helper to safely get arrays from i18n (returns [] if translations not yet loaded)
  const tArray = <T,>(key: string): T[] => {
    const result = t(key, { returnObjects: true });
    return Array.isArray(result) ? result : [];
  };

  const features = [
    {
      icon: Users,
      title: t("brochure.features.community.title"),
      description: t("brochure.features.community.description"),
      image: communityPhoto,
      phoneImage: "/community-groups-phone.png",
      phoneAlt: "B1 Church Community Groups",
      features: tArray<string>("brochure.features.community.items"),
      reverse: false,
      ctaText: t("brochure.features.community.cta")
    },
    {
      icon: Play,
      title: t("brochure.features.content.title"),
      description: t("brochure.features.content.description"),
      image: heroImage,
      phoneImage: "/sermons-phone.png",
      phoneAlt: "B1 Church Sermons",
      features: tArray<string>("brochure.features.content.items"),
      reverse: true,
      ctaText: t("brochure.features.content.cta")
    },
    {
      icon: CreditCard,
      title: t("brochure.features.giving.title"),
      description: t("brochure.features.giving.description"),
      image: givingPhoto,
      phoneImage: "/giving-phone.png",
      phoneAlt: "B1 Church Digital Giving",
      features: tArray<string>("brochure.features.giving.items"),
      reverse: false,
      ctaText: t("brochure.features.giving.cta")
    },
    {
      icon: CheckCircle,
      title: t("brochure.features.checkin.title"),
      description: t("brochure.features.checkin.description"),
      image: checkinPhoto,
      phoneImage: "/checkin-phone.png",
      phoneAlt: "B1 Church Check-in Complete",
      features: tArray<string>("brochure.features.checkin.items"),
      reverse: true,
      ctaText: t("brochure.features.checkin.cta")
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
                  <div className="flex items-start sm:items-center space-x-4 mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center shadow-glow flex-shrink-0">
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{feature.title}</h2>
                    </div>
                  </div>

                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    {feature.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="gradient" size="lg" className="group" asChild>
                    <LocaleLink to="/login">
                      {feature.ctaText}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </LocaleLink>
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
                      {t("brochure.features.mobileFirst")}
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t("brochure.features.managementSystem.title")}{" "}
              <span className="text-gradient">{t("brochure.features.managementSystem.titleHighlight")}</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("brochure.features.managementSystem.description")}
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="gradient-glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all card-hover">
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("brochure.features.grid.peopleManagement.title")}</h3>
              <p className="text-muted-foreground">{t("brochure.features.grid.peopleManagement.description")}</p>
            </div>

            <div className="gradient-glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all card-hover">
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("brochure.features.grid.attendanceAnalytics.title")}</h3>
              <p className="text-muted-foreground">{t("brochure.features.grid.attendanceAnalytics.description")}</p>
            </div>

            <div className="gradient-glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all card-hover">
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                <UserCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("brochure.features.grid.groupsMinistries.title")}</h3>
              <p className="text-muted-foreground">{t("brochure.features.grid.groupsMinistries.description")}</p>
            </div>

            <div className="gradient-glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all card-hover">
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("brochure.features.grid.givingManagement.title")}</h3>
              <p className="text-muted-foreground">{t("brochure.features.grid.givingManagement.description")}</p>
            </div>

            <div className="gradient-glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all card-hover">
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("brochure.features.grid.servicePlanning.title")}</h3>
              <p className="text-muted-foreground">{t("brochure.features.grid.servicePlanning.description")}</p>
            </div>

            <div className="gradient-glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all card-hover">
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("brochure.features.grid.songLibrary.title")}</h3>
              <p className="text-muted-foreground">{t("brochure.features.grid.songLibrary.description")}</p>
            </div>

            <div className="gradient-glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all card-hover">
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("brochure.features.grid.communications.title")}</h3>
              <p className="text-muted-foreground">{t("brochure.features.grid.communications.description")}</p>
            </div>

            <div className="gradient-glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all card-hover">
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("brochure.features.grid.multiCampus.title")}</h3>
              <p className="text-muted-foreground">{t("brochure.features.grid.multiCampus.description")}</p>
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
            <div className="flex items-start space-x-4 p-4 rounded-xl border border-border/30 hover:border-primary/50 transition-colors gradient-glass">
              <div className="p-2 rounded-lg bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t("brochure.features.additional.security.title")}</h4>
                <p className="text-sm text-muted-foreground">{t("brochure.features.additional.security.description")}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl border border-border/30 hover:border-primary/50 transition-colors gradient-glass">
              <div className="p-2 rounded-lg bg-primary/10">
                <Smartphone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t("brochure.features.additional.mobile.title")}</h4>
                <p className="text-sm text-muted-foreground">{t("brochure.features.additional.mobile.description")}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl border border-border/30 hover:border-primary/50 transition-colors gradient-glass">
              <div className="p-2 rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t("brochure.features.additional.workflows.title")}</h4>
                <p className="text-sm text-muted-foreground">{t("brochure.features.additional.workflows.description")}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl border border-border/30 hover:border-primary/50 transition-colors gradient-glass">
              <div className="p-2 rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t("brochure.features.additional.reporting.title")}</h4>
                <p className="text-sm text-muted-foreground">{t("brochure.features.additional.reporting.description")}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl border border-border/30 hover:border-primary/50 transition-colors gradient-glass">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t("brochure.features.additional.forms.title")}</h4>
                <p className="text-sm text-muted-foreground">{t("brochure.features.additional.forms.description")}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl border border-border/30 hover:border-primary/50 transition-colors gradient-glass">
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t("brochure.features.additional.roles.title")}</h4>
                <p className="text-sm text-muted-foreground">{t("brochure.features.additional.roles.description")}</p>
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
          <div className="gradient-glass rounded-3xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t("brochure.features.ctaSection.title")}
              <span className="text-gradient block">{t("brochure.features.ctaSection.titleHighlight")}</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("brochure.features.ctaSection.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="gradient" size="xl" className="shadow-glow" asChild>
                <LocaleLink to="/login">{t("brochure.features.ctaSection.cta")}</LocaleLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
