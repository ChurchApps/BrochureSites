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
import LocaleLink from "@/components/LocaleLink";
import campusWide from "@/assets/campus-wide.jpg";
import { useTranslation } from "react-i18next";

const audienceIcons = [Church, Building2, Network, Heart];

const PerfectFor = () => {
  const { t } = useTranslation();

  // Helper to safely get arrays from i18n (returns [] if translations not yet loaded)
  const tArray = <T,>(key: string): T[] => {
    const result = t(key, { returnObjects: true });
    return Array.isArray(result) ? result : [];
  };

  const audiences = tArray<{ title: string; description: string; stats: string }>("brochure.perfectFor.audiences");

  const aboutFeatures = tArray<string>("brochure.perfectFor.about.features");

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
          <div className="gradient-glass rounded-3xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">{t("brochure.perfectFor.title")}</span>
              <span className="text-gradient block">{t("brochure.perfectFor.titleHighlight")}</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("brochure.perfectFor.subtitle")}
            </p>
          </div>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {audiences.map((audience, index) => {
            const IconComponent = audienceIcons[index];
            return (
              <div key={index} className="gradient-glass rounded-2xl p-6 card-hover text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{audience.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{audience.description}</p>
                <div className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {audience.stats}
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="gradient-glass rounded-2xl p-8 card-hover text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-foreground">{t("brochure.perfectFor.integrations.adminIntegration.title")}</h3>
            <p className="text-muted-foreground">
              {t("brochure.perfectFor.integrations.adminIntegration.description")}
            </p>
          </div>

          <div className="gradient-glass rounded-2xl p-8 card-hover text-center">
            <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-foreground">{t("brochure.perfectFor.integrations.webPortal.title")}</h3>
            <p className="text-muted-foreground">
              {t("brochure.perfectFor.integrations.webPortal.description")}
            </p>
          </div>

          <div className="gradient-glass rounded-2xl p-8 card-hover text-center">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-foreground">{t("brochure.perfectFor.integrations.instantSetup.title")}</h3>
            <p className="text-muted-foreground">
              {t("brochure.perfectFor.integrations.instantSetup.description")}
            </p>
          </div>
        </div>

        {/* About Our Mission */}
        <div className="mb-16">
          <div className="gradient-glass rounded-2xl p-6 sm:p-8 md:p-12 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">{t("brochure.perfectFor.about.title")}</h3>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("brochure.perfectFor.about.description")}
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 rounded-xl border border-border/30">
                <div className="text-2xl font-bold text-gradient mb-1">{t("brochure.perfectFor.about.stats.freeValue")}</div>
                <div className="text-sm text-muted-foreground">{t("brochure.perfectFor.about.stats.freeLabel")}</div>
              </div>
              <div className="text-center p-4 rounded-xl border border-border/30">
                <div className="text-2xl font-bold text-gradient mb-1">{t("brochure.perfectFor.about.stats.setupValue")}</div>
                <div className="text-sm text-muted-foreground">{t("brochure.perfectFor.about.stats.setupLabel")}</div>
              </div>
              <div className="text-center p-4 rounded-xl border border-border/30">
                <div className="text-2xl font-bold text-gradient mb-1">{t("brochure.perfectFor.about.stats.churchesValue")}</div>
                <div className="text-sm text-muted-foreground">{t("brochure.perfectFor.about.stats.churchesLabel")}</div>
              </div>
              <div className="text-center p-4 rounded-xl border border-border/30">
                <div className="text-2xl font-bold text-gradient mb-1">{t("brochure.perfectFor.about.stats.openValue")}</div>
                <div className="text-sm text-muted-foreground">{t("brochure.perfectFor.about.stats.openLabel")}</div>
              </div>
            </div>

            {/* Features List */}
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-8 text-left max-w-3xl mx-auto">
              {aboutFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>

            {/* Learn More Links */}
            <div className="text-center pt-6 border-t border-border/30">
              <p className="text-muted-foreground mb-4">{t("brochure.perfectFor.about.learnMore")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://churchapps.org/" target="_blank" rel="noopener noreferrer">
                    {t("brochure.perfectFor.about.aboutChurchApps")}
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/ChurchApps" target="_blank" rel="noopener noreferrer">
                    {t("brochure.perfectFor.about.viewOnGitHub")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="gradient-glass rounded-3xl p-6 sm:p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
              {t("brochure.perfectFor.cta.title")}
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              {t("brochure.perfectFor.cta.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="gradient" size="xl" className="group shadow-glow" asChild>
                <LocaleLink to="/login">
                  {t("brochure.perfectFor.cta.button")}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </LocaleLink>
              </Button>
            </div>

            <div className="mt-8 text-sm text-muted-foreground">
              {t("brochure.perfectFor.cta.tagline")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectFor;
