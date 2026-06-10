import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Monitor, Palette, Globe, Zap, ArrowRight } from "lucide-react";
import LocaleLink from "@/components/LocaleLink";
import { trackWebsiteBuilderClick } from "@/utils/analytics";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import BrowserFrame from "@/components/frames/BrowserFrame";

const WebsiteBuilder = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Palette, tone: "bg-coral/10 text-coral", title: t("brochure.websiteBuilder.dragDrop.title"), description: t("brochure.websiteBuilder.dragDrop.description") },
    { icon: Globe, tone: "bg-primary/10 text-primary", title: t("brochure.websiteBuilder.templates.title"), description: t("brochure.websiteBuilder.templates.description") },
    { icon: Zap, tone: "bg-sun/10 text-sun", title: t("brochure.websiteBuilder.integration.title"), description: t("brochure.websiteBuilder.integration.description") }
  ];

  return (
    <section id="siteBuilder" className="overflow-hidden bg-background py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="eyebrow mb-4 flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              {t("brochure.websiteBuilder.badge")}
            </div>
            <SectionHeading
              align="left"
              title={
                <>
                  {t("brochure.websiteBuilder.title")}{" "}
                  <span className="text-primary">{t("brochure.websiteBuilder.titleHighlight")}</span>
                </>
              }
              lead={t("brochure.websiteBuilder.description")}
            />
            <div className="mt-8 space-y-5">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`rounded-xl p-2.5 ${feature.tone}`}>
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button size="xl" className="group" asChild onClick={() => trackWebsiteBuilderClick()}>
                <LocaleLink to="/login">
                  {t("brochure.websiteBuilder.cta")}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </LocaleLink>
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">{t("brochure.websiteBuilder.ctaSubtext")}</p>
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute -inset-y-6 -left-4 -right-6 rotate-2 rounded-3xl bg-gradient-to-br from-indigo-100 via-violet-100 to-rose-100" />
            <BrowserFrame
              src="/website-builder-interface.webp"
              alt="B1 church website builder editing a church home page"
              url="yourchurch.b1.church"
              className="relative rotate-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteBuilder;
