import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";
import LocaleLink from "@/components/LocaleLink";

interface ComparisonData {
  competitor: string;
  competitorLogo?: string;
  tagline: string;
  description: string;
  features: {
    name: string;
    b1: boolean | string;
    competitor: boolean | string;
  }[];
  pricing: {
    b1: string;
    competitor: string;
  };
  verdict: string;
}

const Compare = () => {
  const { t } = useTranslation();
  const { competitor } = useParams<{ competitor: string }>();

  const rawCompetitorData = t("brochure.compare.competitors", { returnObjects: true });
  const competitorData = (typeof rawCompetitorData === "object" && !Array.isArray(rawCompetitorData)) ? rawCompetitorData as Record<string, any> : {};

  const comparisons: Record<string, ComparisonData> = Object.keys(competitorData).reduce(
    (acc, key) => {
      const entry = competitorData[key];
      acc[key] = {
        competitor: entry.name,
        tagline: entry.tagline,
        description: entry.description,
        features: entry.features,
        pricing: {
          b1: entry.pricingB1,
          competitor: entry.pricingCompetitor,
        },
        verdict: entry.verdict,
      };
      return acc;
    },
    {} as Record<string, ComparisonData>
  );

  const data = competitor ? comparisons[competitor] : null;

  useEffect(() => {
    if (data) {
      document.title = `B1.church vs ${data.competitor} - Free Church Software Comparison`;

      // Add comparison schema
      const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `B1.church vs ${data.competitor} Comparison`,
        "description": data.description,
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "SoftwareApplication",
              "name": "B1.church",
              "applicationCategory": "BusinessApplication",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            },
            {
              "@type": "SoftwareApplication",
              "name": data.competitor,
              "applicationCategory": "BusinessApplication"
            }
          ]
        }
      };

      const existingSchema = document.getElementById('compare-schema');
      if (existingSchema) existingSchema.remove();

      const script = document.createElement('script');
      script.id = 'compare-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        const el = document.getElementById('compare-schema');
        if (el) el.remove();
      };
    }
  }, [data]);

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">{t("brochure.compare.notFound.title")}</h1>
          <p className="text-foreground/70 mb-8">
            {t("brochure.compare.notFound.subtitle")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.keys(comparisons).map(key => (
              <LocaleLink
                key={key}
                to={`/compare/${key}`}
                className="px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-foreground"
              >
                {t("brochure.compare.b1vsPrefix")} {comparisons[key].competitor}
              </LocaleLink>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-6 h-6 text-green-400 mx-auto" />;
    } else if (value === false) {
      return <X className="w-6 h-6 text-red-400 mx-auto" />;
    } else {
      return <span className="text-sm text-white/90">{value}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
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

          {/* Pricing Comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="gradient-glass rounded-2xl p-8 border-2 border-primary">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">B1.church</h3>
                <div className="text-4xl font-bold text-primary mb-2">{data.pricing.b1}</div>
                <p className="text-foreground/70">{t("brochure.compare.noHiddenFees")}</p>
              </div>
            </div>
            <div className="gradient-glass rounded-2xl p-8 border border-border/50">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{data.competitor}</h3>
                <div className="text-2xl font-bold text-foreground/60 mb-2">{data.pricing.competitor}</div>
                <p className="text-foreground/70">{t("brochure.compare.plusTransactionFees")}</p>
              </div>
            </div>
          </div>

          {/* Feature Comparison Table */}
          <div className="gradient-glass rounded-2xl overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20 bg-white/5">
                    <th className="text-left p-4 font-semibold text-white">{t("brochure.compare.featureColumn")}</th>
                    <th className="text-center p-4 font-semibold text-primary">B1.church</th>
                    <th className="text-center p-4 font-semibold text-white">{data.competitor}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.features.map((feature, index) => (
                    <tr key={index} className="border-b border-white/10 last:border-0">
                      <td className="p-4 font-medium text-white">{feature.name}</td>
                      <td className="p-4 text-center">{renderFeatureValue(feature.b1)}</td>
                      <td className="p-4 text-center">{renderFeatureValue(feature.competitor)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Verdict */}
          <div className="gradient-glass rounded-2xl p-8 mb-16 border border-primary/30">
            <h2 className="text-2xl font-bold mb-4">{t("brochure.compare.ourTake")}</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {data.verdict}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">{t("brochure.compare.ctaTitle")}</h2>
            <p className="text-foreground/70 mb-8">
              {t("brochure.compare.ctaDescription")}
            </p>
            <Button variant="gradient" size="xl" className="shadow-glow" asChild>
              <LocaleLink to="/login">
                {t("brochure.compare.ctaButton")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </LocaleLink>
            </Button>
          </div>

          {/* Other Comparisons */}
          <div className="mt-16 pt-16 border-t border-border/30">
            <h3 className="text-xl font-semibold mb-6 text-center">{t("brochure.compare.otherComparisons")}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {Object.keys(comparisons)
                .filter(key => key !== competitor)
                .map(key => (
                  <LocaleLink
                    key={key}
                    to={`/compare/${key}`}
                    className="px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-foreground"
                  >
                    {t("brochure.compare.b1vsPrefix")} {comparisons[key].competitor}
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
