import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LocaleLink from "@/components/LocaleLink";
import { trackChurchSignup } from "@/utils/analytics";
import { ADMIN_REGISTER_URL } from "@/constants/externalUrls";
import Reveal from "@/components/Reveal";

const FinalCta = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-mesh-hero py-28 lg:py-36">
      <div className="container relative z-10 mx-auto px-4 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
            {t("brochure.home.finalCta.title")}{" "}
            <span className="accent-underline">{t("brochure.home.finalCta.titleAccent")}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {t("brochure.home.finalCta.description")}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="xl" className="group" asChild onClick={() => trackChurchSignup("final_cta")}>
              <a href={ADMIN_REGISTER_URL}>
                {t("brochure.home.finalCta.ctaPrimary")}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <LocaleLink to="/faq">{t("brochure.home.finalCta.ctaSecondary")}</LocaleLink>
            </Button>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">{t("brochure.home.finalCta.reassurance")}</p>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCta;
