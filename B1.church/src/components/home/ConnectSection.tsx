import { useTranslation } from "react-i18next";
import { CheckCircle2, Smartphone } from "lucide-react";
import { useTArray } from "@/lib/i18nArray";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PhoneFrame from "@/components/frames/PhoneFrame";
import PushNotification from "@/components/fragments/PushNotification";

const ConnectSection = () => {
  const { t } = useTranslation();
  const tArray = useTArray();
  const items = tArray<string>("brochure.home.connect.items");

  return (
    <section id="features" className="overflow-hidden bg-background py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow={t("brochure.home.connect.eyebrow")}
              title={
                <>
                  {t("brochure.home.connect.title")}{" "}
                  <span className="text-primary">{t("brochure.home.connect.titleAccent")}</span>
                </>
              }
              lead={t("brochure.home.connect.lead")}
            />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <div className="text-sm font-semibold text-foreground">{t("brochure.home.connect.pwaTitle")}</div>
                <p className="text-sm text-muted-foreground">{t("brochure.home.connect.pwaNote")}</p>
              </div>
            </div>
          </Reveal>

          <div className="relative mx-auto flex max-w-md justify-center gap-6 pb-10">
            <div className="absolute inset-x-0 inset-y-6 rotate-2 rounded-3xl bg-gradient-to-br from-violet-100 via-sky-100 to-primary/10" />
            <PhoneFrame
              src="/community-groups-phone.webp"
              alt="B1 mobile app groups screen"
              tilt="left"
              className="relative mt-12 w-[230px]"
            />
            <PhoneFrame
              src="/sermons-phone.webp"
              alt="B1 mobile app sermons screen"
              tilt="right"
              className="relative w-[230px]"
            />
            <PushNotification className="absolute -bottom-2 left-1/2 -translate-x-1/2 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
