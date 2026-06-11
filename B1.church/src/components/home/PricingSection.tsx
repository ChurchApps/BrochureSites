import { useTranslation } from "react-i18next";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackChurchSignup } from "@/utils/analytics";
import { ADMIN_REGISTER_URL } from "@/constants/externalUrls";
import { useTArray } from "@/lib/i18nArray";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const PricingSection = () => {
  const { t } = useTranslation();
  const tArray = useTArray();
  const included = tArray<string>("brochure.home.hero.trust");

  return (
    <section id="pricing" className="bg-surface-tint py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <Reveal>
          <SectionHeading
            eyebrow={t("brochure.home.pricing.eyebrow")}
            title={t("brochure.home.pricing.title")}
            lead={t("brochure.home.pricing.lead")}
          />
        </Reveal>

        <Reveal>
          <div className="card-elevated mx-auto mt-14 max-w-2xl rounded-[2.5rem] p-10 text-center md:p-14">
            <div className="text-8xl font-extrabold tabular-nums tracking-tight text-foreground md:text-9xl">
              <span className="text-primary">$</span>0
            </div>
            <div className="mt-2 text-lg font-semibold text-muted-foreground">
              {t("brochure.home.pricing.per")}
            </div>
            <ul className="mx-auto mt-9 grid max-w-md grid-cols-1 gap-x-6 gap-y-3 text-left sm:grid-cols-2">
              {included.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Button size="xl" className="group mt-10" asChild onClick={() => trackChurchSignup("pricing_cta")}>
              <a href={ADMIN_REGISTER_URL}>
                {t("brochure.home.pricing.cta")}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              {t("brochure.home.pricing.note")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PricingSection;
