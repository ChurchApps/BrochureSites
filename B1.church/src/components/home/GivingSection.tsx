import { useTranslation } from "react-i18next";
import { CheckCircle2, BadgeDollarSign } from "lucide-react";
import { useTArray } from "@/lib/i18nArray";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import BrowserFrame from "@/components/frames/BrowserFrame";
import PhoneFrame from "@/components/frames/PhoneFrame";
import GivingStat from "@/components/fragments/GivingStat";

const GivingSection = () => {
  const { t } = useTranslation();
  const tArray = useTArray();
  const items = tArray<string>("brochure.home.giving.items");

  return (
    <section id="giving" className="relative overflow-hidden bg-surface-tint py-24 lg:py-32">
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 pb-12 lg:order-1">
            <div className="absolute -inset-y-4 -left-4 -right-2 rounded-[2.5rem] bg-sun/10" />
            <BrowserFrame
              src="/giving-management-dashboard.webp"
              alt="B1Admin donation summary dashboard"
              className="relative"
            />
            <PhoneFrame
              src="/giving-phone.webp"
              alt="B1 mobile app giving screen"
              tilt="right"
              className="absolute -bottom-6 -right-4 w-[160px]"
            />
            <GivingStat className="absolute -bottom-4 left-4 animate-float" />
          </div>

          <Reveal className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              tone="text-sun-deep"
              eyebrow={t("brochure.home.giving.eyebrow")}
              title={
                <>
                  {t("brochure.home.giving.title")}{" "}
                  <span className="text-sun-deep">{t("brochure.home.giving.titleAccent")}</span>
                </>
              }
              lead={t("brochure.home.giving.lead")}
            />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-sun/30 bg-sun/10 p-4">
              <BadgeDollarSign className="mt-0.5 h-5 w-5 shrink-0 text-sun-deep" />
              <p className="text-sm text-muted-foreground">{t("brochure.home.giving.feeNote")}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default GivingSection;
