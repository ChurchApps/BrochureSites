import { useTranslation } from "react-i18next";
import { CheckCircle2 } from "lucide-react";
import { useTArray } from "@/lib/i18nArray";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TabletFrame from "@/components/frames/TabletFrame";
import NameTagBadge from "@/components/fragments/NameTagBadge";

const CheckinSection = () => {
  const { t } = useTranslation();
  const tArray = useTArray();
  const items = tArray<string>("brochure.home.checkin.items");

  return (
    <section className="overflow-hidden bg-surface-warm py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 mx-auto w-full max-w-sm pb-10 lg:order-1">
            <div className="absolute -inset-x-8 inset-y-8 -rotate-2 rounded-3xl bg-gradient-to-br from-amber-100 via-rose-100 to-sky-100" />
            <TabletFrame
              src="/images/checkin/family.webp"
              alt="B1Checkin kiosk household check-in screen"
              className="relative w-[280px] sm:w-[300px]"
            />
            <NameTagBadge className="absolute -right-6 top-16 rotate-3 animate-float sm:-right-10" />
            <div className="card-elevated absolute -bottom-2 -right-2 w-52 rounded-xl p-4 sm:-right-6">
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                {t("brochure.home.checkin.receipt.title")}
              </div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex justify-between"><span>{t("brochure.home.checkin.receipt.tablet")}</span><span className="tabular-nums">~$150</span></div>
                <div className="flex justify-between"><span>{t("brochure.home.checkin.receipt.printer")}</span><span className="tabular-nums">~$200</span></div>
              </div>
              <div className="mt-2 flex justify-between border-t border-dashed border-border pt-2 text-xs font-semibold text-foreground">
                <span>{t("brochure.home.checkin.receipt.total")}</span>
                <span className="tabular-nums">~$350</span>
              </div>
              <div className="mt-1 flex justify-between text-xs font-bold text-accent">
                <span>{t("brochure.home.checkin.receipt.software")}</span>
                <span className="tabular-nums">$0</span>
              </div>
            </div>
          </div>

          <Reveal className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow={t("brochure.home.checkin.eyebrow")}
              title={
                <>
                  {t("brochure.home.checkin.title")}{" "}
                  <span className="text-primary">{t("brochure.home.checkin.titleAccent")}</span>
                </>
              }
              lead={t("brochure.home.checkin.lead")}
            />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CheckinSection;
