import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
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
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import LocaleLink from "@/components/LocaleLink";
import { ADMIN_REGISTER_URL, DEMO_URL } from "@/constants/externalUrls";
import TabletFrame from "@/components/frames/TabletFrame";
import BrowserFrame from "@/components/frames/BrowserFrame";
import NameTagBadge from "@/components/fragments/NameTagBadge";

const featureTones = ["bg-primary/10 text-primary", "bg-coral/10 text-coral", "bg-lilac/10 text-lilac", "bg-accent/10 text-accent"];

const ChurchManagement = () => {
  const { t } = useTranslation();

  const rawMainFeatures = t("brochure.churchManagement.mainFeatures", { returnObjects: true });
  const mainFeaturesTranslated = Array.isArray(rawMainFeatures) ? rawMainFeatures as { title: string; description: string }[] : [];
  const mainFeaturesIcons = [
    Users, BarChart3, UserCheck, DollarSign, Calendar, FileText, MessageSquare, Database
  ];
  const mainFeatures = mainFeaturesIcons.map((icon, i) => ({ icon, ...(mainFeaturesTranslated[i] || { title: "", description: "" }) }));

  const additionalFeaturesData = [
    {
      icon: Shield,
      title: t("brochure.churchManagement.additional.security.title"),
      description: t("brochure.churchManagement.additional.security.description")
    },
    {
      icon: Smartphone,
      title: t("brochure.churchManagement.additional.mobile.title"),
      description: t("brochure.churchManagement.additional.mobile.description")
    },
    {
      icon: Mail,
      title: t("brochure.churchManagement.additional.workflows.title"),
      description: t("brochure.churchManagement.additional.workflows.description")
    },
    {
      icon: Clock,
      title: t("brochure.churchManagement.additional.reporting.title"),
      description: t("brochure.churchManagement.additional.reporting.description")
    },
    {
      icon: FileText,
      title: t("brochure.churchManagement.additional.forms.title"),
      description: t("brochure.churchManagement.additional.forms.description")
    },
    {
      icon: Users,
      title: t("brochure.churchManagement.additional.roles.title"),
      description: t("brochure.churchManagement.additional.roles.description")
    }
  ];

  const showcaseCards = [
    {
      src: "/groups-ministry-management.webp",
      title: t("brochure.churchManagement.showcase.groupsMinistries.title"),
      description: t("brochure.churchManagement.showcase.groupsMinistries.description")
    },
    {
      src: "/people-search-database.webp",
      title: t("brochure.churchManagement.showcase.peopleSearch.title"),
      description: t("brochure.churchManagement.showcase.peopleSearch.description")
    },
    {
      src: "/worship-service-planning.webp",
      title: t("brochure.churchManagement.showcase.servicePlanning.title"),
      description: t("brochure.churchManagement.showcase.servicePlanning.description")
    },
    {
      src: "/song-library-arrangements.webp",
      title: t("brochure.churchManagement.showcase.songLibrary.title"),
      description: t("brochure.churchManagement.showcase.songLibrary.description")
    }
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
      content: testimonialsItems[0]?.content ?? ""
    },
    {
      name: "Theresa Fraser",
      church: "Mission of Hope Worship Center",
      location: "Orlando, FL",
      content: testimonialsItems[1]?.content ?? ""
    },
    {
      name: "Maria Rodriguez",
      church: "St. Mark's Episcopal",
      location: "Phoenix, AZ",
      content: testimonialsItems[2]?.content ?? ""
    }
  ];

  const rawCheckinFeatures = t("brochure.churchManagement.checkinStations.features", { returnObjects: true });
  const checkinFeatures = Array.isArray(rawCheckinFeatures) ? rawCheckinFeatures as string[] : [];

  const rawFreeMeaning = t("brochure.churchManagement.freeMeaning.items", { returnObjects: true });
  const freeMeaningItems = Array.isArray(rawFreeMeaning) ? rawFreeMeaning as { title: string; description: string }[] : [];

  const rawHighlights = t("brochure.churchManagement.highlights", { returnObjects: true });
  const highlightItems = Array.isArray(rawHighlights) ? rawHighlights as { number: string; label: string }[] : [];

  const churchManagementSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "B1.church",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "People, giving, check-in, website, member app, and worship planning. One platform. $0 forever.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: ["People", "Giving", "Check-in", "Website", "Member app", "Worship planning"]
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        path="/church-management"
        title="Free Church Management Software (Including Hosting) | B1.church"
        description="People, giving, check-in, website, member app, and worship planning. One platform. $0 forever."
        jsonLd={churchManagementSchema}
      />
      <Header />

      <main>
        <section className="relative overflow-hidden bg-mesh-hero pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="animate-fade-in">
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.06] tracking-[-0.03em] text-foreground md:text-5xl lg:text-6xl">
                {t("brochure.churchManagement.hero.title")} <span className="text-gradient">{t("brochure.churchManagement.hero.titleHighlight")}</span>
                <br />
                {t("brochure.churchManagement.hero.titleLine2")}
              </h1>

              <p
                className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
                dangerouslySetInnerHTML={{ __html: t("brochure.churchManagement.hero.description") }}
              />

              <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="xl" className="group" asChild>
                  <a href={ADMIN_REGISTER_URL}>
                    {t("brochure.churchManagement.hero.ctaPrimary")}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" className="group" asChild>
                  <LocaleLink to="/compare">
                    {t("brochure.churchManagement.hero.ctaSecondary")}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </LocaleLink>
                </Button>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {t("brochure.churchManagement.hero.trustLine")}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground md:gap-8">
                  <div className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-accent" />{t("brochure.churchManagement.hero.trustFree")}</div>
                  <div className="hidden h-4 w-px bg-border md:block"></div>
                  <div className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-accent" />{t("brochure.churchManagement.hero.trustNonProfit")}</div>
                  <div className="hidden h-4 w-px bg-border md:block"></div>
                  <div className="flex items-center gap-2 text-sm font-medium"><Check className="h-4 w-4 text-accent" />{t("brochure.churchManagement.hero.trustOpenSource")}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-tint py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow={t("brochure.churchManagement.freeMeaning.eyebrow")}
                title={t("brochure.churchManagement.freeMeaning.title")}
                lead={t("brochure.churchManagement.freeMeaning.lead")}
              />
            </Reveal>
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {freeMeaningItems.map((item, index) => (
                <div key={index} className="card-elevated rounded-2xl p-6">
                  <h3 className="mb-3 text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center">
              <LocaleLink to="/compare" className="font-semibold text-primary hover:underline">
                {t("brochure.churchManagement.freeMeaning.compareLink")}
              </LocaleLink>
            </p>
          </div>
        </section>

        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                {t("brochure.churchManagement.featuresHeader.title")}{" "}
                <span className="text-gradient">{t("brochure.churchManagement.featuresHeader.titleHighlight")}</span>{" "}
                {t("brochure.churchManagement.featuresHeader.titleSuffix")}
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
                {t("brochure.churchManagement.featuresHeader.description")}
              </p>
            </Reveal>

            <div className="mb-20">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="rounded-xl bg-primary/10 p-3">
                        <UserCheck className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground md:text-3xl">{t("brochure.churchManagement.checkinStations.title")}</h3>
                    </div>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {t("brochure.churchManagement.checkinStations.description")}
                    </p>
                  </div>
                  <div className="space-y-4">
                    {checkinFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                        <p className="text-foreground/80">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative mx-auto w-full max-w-xs pb-8">
                  <div className="absolute -inset-x-6 inset-y-6 -rotate-2 rounded-3xl bg-gradient-to-br from-amber-100 via-rose-100 to-sky-100" />
                  <TabletFrame
                    src="/images/checkin/family.webp"
                    alt="Self-serve church check-in station showing household member selection"
                    className="relative"
                  />
                  <NameTagBadge className="absolute -right-8 top-12 rotate-3 animate-float" />
                </div>
              </div>
            </div>

            <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {mainFeatures.map((feature, index) => (
                <div key={index} className="card-elevated card-hover rounded-2xl p-6">
                  <div className={`mb-4 w-fit rounded-xl p-3 ${featureTones[index % featureTones.length]}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {showcaseCards.map((card, index) => (
                <div key={index} className="card-elevated card-hover overflow-hidden rounded-xl">
                  <img
                    src={card.src}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                  <div className="border-t border-border p-4">
                    <h4 className="mb-0.5 text-sm font-semibold text-foreground">{card.title}</h4>
                    <p className="text-xs text-muted-foreground">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-20">
              <Reveal className="mb-10 text-center">
                <h3 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
                  {t("brochure.churchManagement.dashboard.title")}
                </h3>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  {t("brochure.churchManagement.dashboard.description")}
                </p>
              </Reveal>
              <div className="relative mx-auto max-w-4xl">
                <div className="absolute -inset-x-4 -inset-y-5 rotate-1 rounded-3xl bg-gradient-to-br from-primary/10 via-sky-100 to-indigo-100" />
                <BrowserFrame
                  src="/attendance-analytics-dashboard.webp"
                  alt="B1Admin attendance dashboard with trend chart and report filters"
                  className="relative"
                />
              </div>
            </div>

            <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {additionalFeaturesData.map((feature, index) => (
                <div key={index} className="card-elevated flex items-start space-x-4 rounded-xl p-4 transition-colors hover:border-primary/50">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-tint py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                {t("brochure.churchManagement.testimonials.title")}{" "}
                <span className="text-gradient">{t("brochure.churchManagement.testimonials.titleHighlight")}</span>
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
                {t("brochure.churchManagement.testimonials.subtitle")}
              </p>
            </Reveal>

            <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
              {highlightItems.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">{item.number}</div>
                  <div className="text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="card-elevated card-hover rounded-2xl p-6"
                >
                  <p className="mb-6 leading-relaxed text-foreground/80">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.church}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                {t("brochure.churchManagement.aboutSection.title")}{" "}
                <span className="text-gradient">{t("brochure.churchManagement.aboutSection.titleHighlight")}</span>
              </h2>
              <p
                className="mx-auto max-w-4xl text-xl leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: t("brochure.churchManagement.aboutSection.description") }}
              />
            </Reveal>

            <div className={`mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 ${statsItems.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
              {statsItems.map((stat, index) => (
                <div
                  key={index}
                  className="card-elevated card-hover rounded-2xl p-6 text-center"
                >
                  <div className="mb-2 text-3xl font-extrabold tracking-tight text-gradient md:text-4xl">
                    {stat.number}
                  </div>
                  <div className="mb-2 font-semibold text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="card-elevated mb-16 rounded-3xl p-8 text-center md:p-12">
              <Heart className="mx-auto mb-6 h-16 w-16 text-coral" />
              <h3 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
                {t("brochure.churchManagement.mission.title")}
              </h3>
              <p
                className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: t("brochure.churchManagement.mission.description") }}
              />
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" className="group" asChild>
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

            <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="mb-8 text-center lg:col-span-3">
                <h3 className="mb-4 text-2xl font-bold text-foreground">{t("brochure.churchManagement.allFeatures.title")}</h3>
                <p className="text-muted-foreground">{t("brochure.churchManagement.allFeatures.subtitle")}</p>
              </div>
              {allFeaturesItems.map((feature, index) => (
                <div
                  key={index}
                  className="card-elevated flex items-center space-x-3 rounded-xl p-4 transition-colors hover:border-primary/50"
                >
                  <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="card-elevated mx-auto max-w-3xl rounded-2xl p-8">
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  {t("brochure.churchManagement.cta.title")}
                </h3>
                <p className="mb-6 text-muted-foreground">
                  {t("brochure.churchManagement.cta.description")}
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Button size="xl" asChild>
                    <a href={ADMIN_REGISTER_URL}>
                      {t("brochure.churchManagement.cta.primaryButton")}
                    </a>
                  </Button>
                  <Button variant="outline" size="xl" asChild>
                    <a href={DEMO_URL} target="_blank" rel="noopener">
                      {t("brochure.churchManagement.cta.secondaryButton")}
                    </a>
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
