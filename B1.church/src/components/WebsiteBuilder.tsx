import { Button } from "@/components/ui/button";
import { Monitor, Palette, Globe, Zap } from "lucide-react";
import LocaleLink from "@/components/LocaleLink";
import communityPhoto from "@/assets/community-photo.jpg";
import { trackWebsiteBuilderClick } from "@/utils/analytics";
import { useTranslation } from "react-i18next";

const WebsiteBuilder = () => {
  const { t } = useTranslation();

  return (
    <section id="siteBuilder" className="relative min-h-screen flex items-center justify-center py-24">
      {/* Pattern Background */}
      <div className="absolute inset-0 pattern-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 gradient-glass px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Monitor className="w-4 h-4 text-primary" />
            <span className="text-foreground">{t("brochure.websiteBuilder.badge")}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">{t("brochure.websiteBuilder.title")}</span>
            <span className="text-gradient block">{t("brochure.websiteBuilder.titleHighlight")}</span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {t("brochure.websiteBuilder.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Features Grid */}
          <div className="space-y-8">
            <div className="gradient-glass rounded-2xl p-8 card-hover">
              <div className="flex items-start space-x-4">
                <div className="gradient-glass rounded-xl p-3">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{t("brochure.websiteBuilder.dragDrop.title")}</h3>
                  <p className="text-muted-foreground">
                    {t("brochure.websiteBuilder.dragDrop.description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-glass rounded-2xl p-8 card-hover">
              <div className="flex items-start space-x-4">
                <div className="gradient-glass rounded-xl p-3">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{t("brochure.websiteBuilder.templates.title")}</h3>
                  <p className="text-muted-foreground">
                    {t("brochure.websiteBuilder.templates.description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-glass rounded-2xl p-8 card-hover">
              <div className="flex items-start space-x-4">
                <div className="gradient-glass rounded-xl p-3">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{t("brochure.websiteBuilder.integration.title")}</h3>
                  <p className="text-muted-foreground">
                    {t("brochure.websiteBuilder.integration.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Website Builder Screenshot */}
          <div className="relative">
            <div className="gradient-glass rounded-3xl p-4">
              <div className="bg-card rounded-2xl overflow-hidden shadow-soft">
                <img
                  src="/website-builder-interface.png"
                  alt="B1 Church Website Builder Interface - Free Church Website Builder"
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 gradient-glass rounded-2xl p-4 animate-pulse">
              <Monitor className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 gradient-glass rounded-2xl p-4 animate-pulse delay-300">
              <Globe className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            variant="gradient"
            size="xl"
            className="shadow-glow"
            asChild
            onClick={() => trackWebsiteBuilderClick()}
          >
            <LocaleLink to="/login">
              {t("brochure.websiteBuilder.cta")}
              <Monitor className="w-6 h-6" />
            </LocaleLink>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            {t("brochure.websiteBuilder.ctaSubtext")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebsiteBuilder;
