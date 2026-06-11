import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LocaleLink from "@/components/LocaleLink";
import { trackChurchSignup, trackFeatureClick } from "@/utils/analytics";
import BrowserFrame from "@/components/frames/BrowserFrame";
import PhoneFrame from "@/components/frames/PhoneFrame";
import CheckinToast from "@/components/fragments/CheckinToast";
import GivingStat from "@/components/fragments/GivingStat";

const Hero = () => {
  const { t } = useTranslation();

  const scrollToProducts = () => {
    trackFeatureClick("see_how_it_works");
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-mesh-hero pt-32 lg:pt-44">
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="eyebrow mb-6">{t("brochure.home.hero.eyebrow")}</div>
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-6xl xl:text-7xl">
          {t("brochure.home.hero.headline")}{" "}
          <span className="accent-underline">{t("brochure.home.hero.headlineAccent")}</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          {t("brochure.home.hero.subheadline")}
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="xl" className="group" asChild onClick={() => trackChurchSignup("hero_primary_cta")}>
            <LocaleLink to="/login">
              {t("brochure.home.hero.ctaPrimary")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </LocaleLink>
          </Button>
          <Button variant="outline" size="xl" onClick={scrollToProducts}>
            {t("brochure.home.hero.ctaSecondary")}
          </Button>
        </div>

        {/* Product showcase: one big screenshot, centered, with floating moments */}
        <div className="relative mx-auto mt-16 max-w-5xl pb-16 lg:mt-20 lg:pb-20">
          <div className="absolute -inset-x-12 top-12 bottom-0 rounded-[3rem] bg-gradient-to-b from-secondary to-surface-tint" aria-hidden="true" />
          <BrowserFrame
            src="/people-search-database.webp"
            alt="B1Admin people search dashboard"
            eager
            className="relative"
          />
          <PhoneFrame
            src="/community-groups-phone.webp"
            alt="B1 mobile app showing church groups"
            tilt="right"
            eager
            className="absolute -right-8 -bottom-2 hidden w-[190px] md:block"
          />
          <CheckinToast className="absolute -left-10 top-16 hidden animate-float lg:block" />
          <GivingStat className="absolute -left-14 bottom-12 hidden animate-float [animation-delay:1.5s] lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
