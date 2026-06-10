import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LocaleLink from "@/components/LocaleLink";
import { trackChurchSignup } from "@/utils/analytics";
import Reveal from "@/components/Reveal";

const FinalCta = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-ink-aurora py-28 lg:py-36">
      <div className="stained-strip absolute inset-x-0 top-0 h-[3px] opacity-80" aria-hidden="true" />
      <div className="absolute inset-0 bg-dots-dark" aria-hidden="true" />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-ink-foreground sm:text-5xl lg:text-6xl">
            {t("brochure.home.finalCta.title")}{" "}
            <span className="bg-gradient-to-r from-amber-300 to-rose-400 bg-clip-text text-transparent">{t("brochure.home.finalCta.titleAccent")}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted md:text-xl">
            {t("brochure.home.finalCta.description")}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="xl" className="group" asChild onClick={() => trackChurchSignup("final_cta")}>
              <LocaleLink to="/login">
                {t("brochure.home.finalCta.ctaPrimary")}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </LocaleLink>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-white/25 bg-transparent text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
              asChild
            >
              <LocaleLink to="/faq">{t("brochure.home.finalCta.ctaSecondary")}</LocaleLink>
            </Button>
          </div>
          <p className="mt-8 text-sm text-ink-muted">{t("brochure.home.finalCta.reassurance")}</p>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCta;
