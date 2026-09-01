import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Server,
  Lock,
  CreditCard,
  KeyRound,
  Database,
  Users,
  ScrollText,
  Globe,
  Network,
  Bell,
  Github,
  Check,
  ArrowRight
} from "lucide-react";

const SUPPORT_DOC_URL = "https://support.churchapps.org/docs/b1-admin/settings/data-security";
const GITHUB_URL = "https://github.com/ChurchApps";
const SUPPORT_EMAIL = "support@churchapps.org";

const factIcons = [Server, Lock, CreditCard, KeyRound, Users, Bell];
const sectionIcons = [
  Server, Lock, CreditCard, KeyRound, Database, Users, ScrollText, Globe, Network, Bell
];
const sectionTones = ["bg-primary/10 text-primary", "bg-coral/10 text-coral", "bg-lilac/10 text-lilac", "bg-accent/10 text-accent"];

const Security = () => {
  const { t } = useTranslation();

  const rawFacts = t("brochure.security.facts", { returnObjects: true });
  const facts = Array.isArray(rawFacts) ? rawFacts as { label: string; value: string }[] : [];

  const rawSections = t("brochure.security.sections", { returnObjects: true });
  const sections = Array.isArray(rawSections) ? rawSections as { title: string; description: string; points?: string[] }[] : [];

  const rawHonestyPoints = t("brochure.security.honesty.points", { returnObjects: true });
  const honestyPoints = Array.isArray(rawHonestyPoints) ? rawHonestyPoints as string[] : [];

  const securitySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: t("brochure.security.documentTitle"),
    description: t("brochure.security.pageSubtitle"),
    isPartOf: { "@type": "WebSite", name: "B1.church", url: "https://b1.church" }
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        path="/security"
        title={t("brochure.security.documentTitle")}
        description={t("brochure.security.pageSubtitle")}
        jsonLd={securitySchema}
      />
      <Header />

      <main>
        <section className="relative overflow-hidden bg-mesh-hero pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="eyebrow mb-4">{t("brochure.security.eyebrow")}</div>
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.06] tracking-[-0.03em] text-foreground md:text-5xl lg:text-6xl">
              {t("brochure.security.pageTitle")} <span className="text-gradient">{t("brochure.security.pageTitleHighlight")}</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {t("brochure.security.pageSubtitle")}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group" asChild>
                <a href={SUPPORT_DOC_URL} target="_blank" rel="noopener noreferrer">
                  {t("brochure.security.hero.ctaPrimary")}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`mailto:${SUPPORT_EMAIL}`}>{t("brochure.security.hero.ctaSecondary")}</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-surface-tint py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow={t("brochure.security.factsSection.eyebrow")}
                title={t("brochure.security.factsSection.title")}
                lead={t("brochure.security.factsSection.lead")}
              />
            </Reveal>
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {facts.map((fact, index) => {
                const Icon = factIcons[index % factIcons.length];
                return (
                  <div key={index} className="card-elevated rounded-2xl p-6">
                    <div className={`mb-4 w-fit rounded-xl p-3 ${sectionTones[index % sectionTones.length]}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mb-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">{fact.label}</div>
                    <div className="text-lg font-bold text-foreground">{fact.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-background py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {sections.map((section, index) => {
                const Icon = sectionIcons[index % sectionIcons.length];
                return (
                  <div key={index} className="card-elevated rounded-2xl p-6 md:p-8">
                    <div className="mb-4 flex items-center space-x-3">
                      <div className={`rounded-xl p-3 ${sectionTones[index % sectionTones.length]}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground md:text-2xl">{section.title}</h2>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">{section.description}</p>
                    {section.points && section.points.length > 0 && (
                      <div className="mt-4 space-y-3">
                        {section.points.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-start space-x-3">
                            <Check className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                            <p className="text-foreground/80">{point}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-surface-tint py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="card-elevated rounded-3xl p-8 text-center md:p-12">
              <Github className="mx-auto mb-6 h-14 w-14 text-foreground" />
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                {t("brochure.security.openSource.title")}
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {t("brochure.security.openSource.description")}
              </p>
              <Button size="lg" asChild>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  {t("brochure.security.openSource.cta")}
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-background py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="card-elevated rounded-2xl p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                {t("brochure.security.honesty.title")}
              </h2>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                {t("brochure.security.honesty.description")}
              </p>
              <div className="space-y-4">
                {honestyPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    <p className="leading-relaxed text-foreground/80">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 card-elevated rounded-3xl p-8 text-center md:p-12">
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                {t("brochure.security.cta.title")}
              </h2>
              <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
                {t("brochure.security.cta.description")}
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <a href={`mailto:${SUPPORT_EMAIL}`}>{t("brochure.security.cta.primaryButton")}</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href={SUPPORT_DOC_URL} target="_blank" rel="noopener noreferrer">
                    {t("brochure.security.cta.secondaryButton")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Security;
