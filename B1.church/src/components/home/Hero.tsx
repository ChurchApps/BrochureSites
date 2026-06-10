import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import LocaleLink from "@/components/LocaleLink";
import { trackChurchSignup, trackFeatureClick } from "@/utils/analytics";
import { useTArray } from "@/lib/i18nArray";
import BrowserFrame from "@/components/frames/BrowserFrame";
import PhoneFrame from "@/components/frames/PhoneFrame";
import CheckinToast from "@/components/fragments/CheckinToast";
import GivingStat from "@/components/fragments/GivingStat";

const Hero = () => {
  const { t } = useTranslation();
  const tArray = useTArray();
  const trustItems = tArray<string>("brochure.home.hero.trust");

  const scrollToFeatures = () => {
    trackFeatureClick("see_how_it_works");
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-mesh-hero pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr]">
          <div className="max-w-xl">
            <div className="eyebrow mb-5">{t("brochure.home.hero.eyebrow")}</div>
            <h1 className="text-4xl font-extrabold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-5xl xl:text-6xl">
              {t("brochure.home.hero.headline")}{" "}
              <span className="text-gradient">{t("brochure.home.hero.headlineAccent")}</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {t("brochure.home.hero.subheadline")}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="xl" className="group" asChild onClick={() => trackChurchSignup("hero_primary_cta")}>
                <LocaleLink to="/login">
                  {t("brochure.home.hero.ctaPrimary")}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </LocaleLink>
              </Button>
              <Button variant="outline" size="xl" onClick={scrollToFeatures}>
                {t("brochure.home.hero.ctaSecondary")}
              </Button>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {trustItems.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Product collage */}
          <div className="relative hidden pb-14 pr-6 lg:block">
            <div className="absolute -inset-y-6 -left-6 -right-2 -rotate-2 rounded-3xl bg-gradient-to-br from-primary/10 via-sky-100 to-indigo-100" />
            <BrowserFrame
              src="/people-search-database.webp"
              alt="B1Admin people search dashboard"
              eager
              className="relative -rotate-1"
            />
            <PhoneFrame
              src="/community-groups-phone.webp"
              alt="B1 mobile app showing church groups"
              tilt="right"
              eager
              className="absolute -bottom-8 -left-8 w-[180px]"
            />
            <CheckinToast className="absolute -top-8 right-4 animate-float" />
            <GivingStat className="absolute -bottom-6 right-0 animate-float [animation-delay:1.5s]" />
          </div>
        </div>

        {/* Compact collage for small screens */}
        <div className="relative mt-14 lg:hidden">
          <div className="absolute -inset-3 -rotate-1 rounded-3xl bg-gradient-to-br from-primary/10 via-sky-100 to-indigo-100" />
          <BrowserFrame src="/people-search-database.webp" alt="B1Admin people search dashboard" className="relative" />
          <CheckinToast className="absolute -bottom-6 left-1/2 w-max max-w-[90%] -translate-x-1/2 animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
