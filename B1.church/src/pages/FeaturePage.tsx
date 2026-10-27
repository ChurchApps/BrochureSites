import { useTranslation } from "react-i18next";
import { ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import LocaleLink from "@/components/LocaleLink";
import Reveal from "@/components/Reveal";
import FinalCta from "@/components/home/FinalCta";
import BrowserFrame from "@/components/frames/BrowserFrame";
import PhoneFrame from "@/components/frames/PhoneFrame";
import TabletFrame from "@/components/frames/TabletFrame";
import { Button } from "@/components/ui/button";
import { ADMIN_REGISTER_URL } from "@/constants/externalUrls";
import { FEATURE_PAGES } from "@/constants/pages";
import { trackChurchSignup } from "@/utils/analytics";

interface Section {
  title: string;
  body: string;
  bullets?: string[];
}

interface Faq {
  q: string;
  a: string;
}

interface PageImage {
  frame: "browser" | "phone" | "tablet";
  src: string;
  alt: string;
}

const IMAGES: Record<string, PageImage | undefined> = {
  app: { frame: "phone", src: "/community-groups-phone.webp", alt: "B1 member app showing church groups on a phone" },
  websiteBuilder: { frame: "browser", src: "/website-builder-interface.webp", alt: "B1 church website builder editing a page" },
  giving: { frame: "phone", src: "/giving-phone.webp", alt: "Giving to a church from the B1 member app" },
  checkin: { frame: "tablet", src: "/images/checkin/family.webp", alt: "Self check-in kiosk showing a family's members" }
};

const Frame = ({ image }: { image: PageImage }) => {
  if (image.frame === "browser") return <BrowserFrame src={image.src} alt={image.alt} eager />;
  if (image.frame === "phone") return <PhoneFrame src={image.src} alt={image.alt} className="mx-auto" eager />;
  return <TabletFrame src={image.src} alt={image.alt} />;
};

function asArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? value as T[] : [];
}

const FeaturePage = ({ pageKey }: { pageKey: string }) => {
  const { t } = useTranslation();
  const page = FEATURE_PAGES.find((p) => p.key === pageKey)!;
  const k = `brochure.pages.${pageKey}`;
  const sections = asArray<Section>(t(`${k}.sections`, { returnObjects: true }));
  const faq = asArray<Faq>(t(`${k}.faq`, { returnObjects: true }));
  const image = IMAGES[pageKey];
  const related = FEATURE_PAGES.filter((p) => p.key !== pageKey);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        path={`/${page.slug}`}
        title={t(`${k}.meta.title`)}
        description={t(`${k}.meta.description`)}
        breadcrumbs={[{ name: t(`${k}.name`), path: `/${page.slug}` }]}
      />
      <Header />

      <main>
        <section className="relative overflow-hidden bg-mesh-hero pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className={`relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:px-8 ${image ? "lg:grid-cols-2" : "text-center"}`}>
            <div>
              <div className="eyebrow mb-4">{t(`${k}.hero.eyebrow`)}</div>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.06] tracking-[-0.03em] text-foreground md:text-5xl lg:text-6xl">
                {t(`${k}.hero.title`)}
              </h1>
              <p className={`mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl ${image ? "" : "mx-auto"}`}>
                {t(`${k}.hero.subtitle`)}
              </p>
              <div className={`flex flex-col gap-4 sm:flex-row ${image ? "" : "justify-center"}`}>
                <Button size="xl" className="group" asChild onClick={() => trackChurchSignup(`${pageKey}_hero`)}>
                  <a href={ADMIN_REGISTER_URL}>
                    {t("brochure.header.getStartedFree")}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <LocaleLink to="/compare">{t("brochure.churchManagement.hero.ctaSecondary")}</LocaleLink>
                </Button>
              </div>
            </div>
            {image && <div className="relative mx-auto w-full max-w-xl"><Frame image={image} /></div>}
          </div>
        </section>

        <section className="bg-background py-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
            {sections.map((s) => (
              <Reveal key={s.title} className="card-elevated rounded-2xl p-8">
                <h2 className="mb-3 text-2xl font-bold text-foreground">{s.title}</h2>
                <p className="text-muted-foreground">{s.body}</p>
                {s.bullets && s.bullets.length > 0 && (
                  <ul className="mt-5 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <Check className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-foreground/80">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </section>

        {faq.length > 0 && (
          <section className="bg-surface-tint py-24">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">{t(`${k}.faqTitle`)}</h2>
              <div className="space-y-8">
                {faq.map((f) => (
                  <div key={f.q}>
                    <h3 className="mb-2 text-xl font-bold text-foreground">{f.q}</h3>
                    <p className="text-muted-foreground">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-background py-16">
          <nav className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-4 sm:px-6 lg:px-8">
            {related.map((p) => (
              <LocaleLink key={p.key} to={`/${p.slug}`} className="card-elevated rounded-full px-5 py-2 text-sm font-semibold text-primary hover:border-primary/40">
                {t(`brochure.pages.${p.key}.name`)}
              </LocaleLink>
            ))}
            <LocaleLink to="/church-management" className="card-elevated rounded-full px-5 py-2 text-sm font-semibold text-primary hover:border-primary/40">
              {t("brochure.header.churchManagement")}
            </LocaleLink>
          </nav>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturePage;
