import { useTranslation } from "react-i18next";
import { Church, Users, Network, Globe2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTArray } from "@/lib/i18nArray";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CountUp from "@/components/CountUp";

const audienceIcons = [Church, Users, Network, Globe2];

const MissionSection = () => {
  const { t } = useTranslation();
  const tArray = useTArray();
  const audiences = tArray<{ title: string; description: string }>("brochure.home.mission.audiences");

  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="mx-auto mb-6 w-fit rounded-2xl bg-primary/10 p-3">
            <Heart className="h-7 w-7 text-primary" />
          </div>
          <SectionHeading
            eyebrow={t("brochure.home.mission.eyebrow")}
            title={t("brochure.home.mission.title")}
            lead={t("brochure.home.mission.lead")}
          />
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-5 md:grid-cols-4">
          <div className="rounded-2xl border border-border p-6 text-center">
            <div className="text-4xl font-extrabold tabular-nums tracking-tight text-foreground md:text-5xl">
              <CountUp value={100} suffix="%" />
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{t("brochure.home.mission.stats.free")}</div>
          </div>
          <div className="rounded-2xl border border-border p-6 text-center">
            <div className="text-4xl font-extrabold tabular-nums tracking-tight text-foreground md:text-5xl">$0</div>
            <div className="mt-1 text-sm text-muted-foreground">{t("brochure.home.mission.stats.fees")}</div>
          </div>
          <div className="rounded-2xl border border-border p-6 text-center">
            <div className="text-4xl font-extrabold tabular-nums tracking-tight text-foreground md:text-5xl">2012</div>
            <div className="mt-1 text-sm text-muted-foreground">{t("brochure.home.mission.stats.founded")}</div>
          </div>
          <div className="rounded-2xl border border-border p-6 text-center">
            <div className="text-4xl font-extrabold tabular-nums tracking-tight text-foreground md:text-5xl">
              <CountUp value={29} />
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{t("brochure.home.mission.stats.languages")}</div>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => {
            const IconComponent = audienceIcons[index];
            return (
              <div key={index} className="card-elevated card-hover rounded-2xl p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">{audience.title}</h3>
                <p className="text-sm text-muted-foreground">{audience.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-14 max-w-2xl text-center">
          <p className="text-muted-foreground">{t("brochure.home.mission.sister")}</p>
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant="outline" asChild>
              <a href="https://churchapps.org/" target="_blank" rel="noopener noreferrer">
                {t("brochure.home.mission.aboutChurchApps")}
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://lessons.church/" target="_blank" rel="noopener noreferrer">Lessons.church</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://freeshow.app/" target="_blank" rel="noopener noreferrer">FreeShow</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
