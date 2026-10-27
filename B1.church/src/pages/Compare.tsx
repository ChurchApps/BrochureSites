import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";
import LocaleLink from "@/components/LocaleLink";
import Seo from "@/components/Seo";
import { ADMIN_REGISTER_URL } from "@/constants/externalUrls";

interface ComparisonFeature {
  name: string;
  b1: boolean | string;
  competitor: boolean | string;
}

interface ComparisonData {
  competitor: string;
  tagline: string;
  description: string;
  features: ComparisonFeature[];
  pricingCompetitor: string;
  verdict: string;
}

const COMPETITOR_SLUGS = ["planning-center", "pushpay", "tithely", "breeze"] as const;

const Compare = () => {
  const { t } = useTranslation();
  const { competitor } = useParams<{ competitor: string }>();

  const rawCompetitorData = t("brochure.compare.competitors", { returnObjects: true });
  const competitorData = (typeof rawCompetitorData === "object" && !Array.isArray(rawCompetitorData)) ? rawCompetitorData as Record<string, any> : {};

  const comparisons: Record<string, ComparisonData> = Object.keys(competitorData).reduce(
    (acc, key) => {
      const entry = competitorData[key];
      if (!entry || typeof entry !== "object") return acc;
      acc[key] = {
        competitor: entry.name,
        tagline: entry.tagline,
        description: entry.description,
        features: Array.isArray(entry.features) ? entry.features : [],
        pricingCompetitor: entry.pricingCompetitor,
        verdict: entry.verdict
      };
      return acc;
    },
    {} as Record<string, ComparisonData>
  );

  const hubSlugs = COMPETITOR_SLUGS.filter((slug) => comparisons[slug]);
  const data = competitor ? comparisons[competitor] : null;
  const hubTitle = t("brochure.compare.hubTitle");
  const hubSubtitle = t("brochure.compare.hubSubtitle");
  const priceB1Label = t("brochure.compare.priceB1Label");
  const priceB1Note = t("brochure.compare.priceB1Note");
  const ctaTitle = t("brochure.compare.ctaTitle");
  const ctaDescription = t("brochure.compare.ctaDescription");
  const rawSteps = t("brochure.compare.switching.steps", { returnObjects: true });
  const switchingSteps = Array.isArray(rawSteps) ? rawSteps as string[] : [];

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true || value === "Yes") {
      return <Check className="w-6 h-6 text-accent mx-auto" />;
    } else if (value === false || value === "No") {
      return <X className="w-6 h-6 text-destructive mx-auto" />;
    } else {
      return <span className="text-sm text-foreground/80">{value}</span>;
    }
  };

  const cta = (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">{ctaTitle}</h2>
      <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">{ctaDescription}</p>
      <Button size="xl" asChild>
        <a href={ADMIN_REGISTER_URL}>
          {t("brochure.compare.ctaButton")}
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </Button>
    </div>
  );

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Seo
          path="/compare"
          title={t("brochure.compare.meta.hubTitle")}
          description={t("brochure.compare.meta.hubDescription")}
          breadcrumbs={[{ name: t("brochure.compare.meta.hubTitle"), path: "/compare" }]}
        />
        <Header />
        <main className="container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{hubTitle}</h1>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">{hubSubtitle}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 mb-16">
              {hubSlugs.map((slug) => (
                <LocaleLink
                  key={slug}
                  to={`/compare/${slug}`}
                  className="card-elevated rounded-2xl p-8 hover:border-primary/40 transition-colors text-left group"
                >
                  <h2 className="text-2xl font-bold mb-2">{comparisons[slug].competitor}</h2>
                  <p className="text-foreground/70 mb-4">{comparisons[slug].tagline}</p>
                  <span className="inline-flex items-center font-semibold text-primary">
                    {t("brochure.compare.b1vsPrefix")} {comparisons[slug].competitor}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </LocaleLink>
              ))}
            </div>
            {cta}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Seo
        path={`/compare/${competitor}`}
        title={t("brochure.compare.meta.detailTitle", { competitor: data.competitor })}
        description={t(`brochure.compare.meta.descriptions.${competitor}`, { defaultValue: data.description })}
        breadcrumbs={[
          { name: t("brochure.compare.meta.hubTitle"), path: "/compare" },
          { name: data.competitor, path: `/compare/${competitor}` }
        ]}
        jsonLd={{
          mainEntity: {
            "@type": "ItemList",
            itemListElement: [
              { "@type": "ListItem", position: 1, item: { "@id": "https://b1.church/#software" } },
              { "@type": "ListItem", position: 2, item: { "@type": "SoftwareApplication", name: data.competitor, applicationCategory: "BusinessApplication" } }
            ]
          }
        }}
      />
      <Header />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Check className="w-4 h-4" />
              <span>{data.tagline}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              B1.church vs <span className="text-gradient">{data.competitor}</span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              {data.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="card-elevated rounded-2xl p-8 border-2 border-primary">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">B1.church</h3>
                <div className="text-4xl font-bold text-primary mb-2">{priceB1Label}</div>
                <p className="text-foreground/70">{priceB1Note}</p>
              </div>
            </div>
            <div className="card-elevated rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{data.competitor}</h3>
                <div className="text-2xl font-bold text-foreground/60 mb-2">{data.pricingCompetitor}</div>
              </div>
            </div>
          </div>

          <div className="card-elevated rounded-2xl overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/60">
                    <th className="text-left p-4 font-semibold text-foreground">{t("brochure.compare.featureColumn")}</th>
                    <th className="text-center p-4 font-semibold text-primary">B1.church</th>
                    <th className="text-center p-4 font-semibold text-foreground">{data.competitor}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.features.map((feature, index) => (
                    <tr key={index} className="border-b border-border last:border-0">
                      <td className="p-4 font-medium text-foreground">{feature.name}</td>
                      <td className="p-4 text-center">{renderFeatureValue(feature.b1)}</td>
                      <td className="p-4 text-center">{renderFeatureValue(feature.competitor)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card-elevated rounded-2xl p-8 mb-16 border-primary/30">
            <h2 className="text-2xl font-bold mb-4">{t("brochure.compare.ourTake")}</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {data.verdict}
            </p>
          </div>

          <div className="card-elevated rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">{t("brochure.compare.switching.title", { competitor: data.competitor })}</h2>
            <ol className="space-y-4">
              {switchingSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">{i + 1}</span>
                  <span className="pt-1 text-foreground/80">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-muted-foreground">{t("brochure.compare.switching.note")}</p>
          </div>

          {cta}

          <div className="mt-16 pt-16 border-t border-border/30">
            <h3 className="text-xl font-semibold mb-6 text-center">{t("brochure.compare.otherComparisons")}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <LocaleLink
                to="/compare"
                className="px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-foreground"
              >
                {hubTitle}
              </LocaleLink>
              {hubSlugs
                .filter((slug) => slug !== competitor)
                .map((slug) => (
                  <LocaleLink
                    key={slug}
                    to={`/compare/${slug}`}
                    className="px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-foreground"
                  >
                    {t("brochure.compare.b1vsPrefix")} {comparisons[slug].competitor}
                  </LocaleLink>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Compare;
