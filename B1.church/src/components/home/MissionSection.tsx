import { useTranslation } from "react-i18next";
import { Church, Users, Network, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTArray } from "@/lib/i18nArray";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const audienceIcons = [Church, Users, Network, Globe2];
const audienceTones = ["text-sky-400", "text-orange-400", "text-cyan-400", "text-purple-300"];

const MissionSection = () => {
  const { t } = useTranslation();
  const tArray = useTArray();
  const audiences = tArray<{ title: string; description: string }>("brochure.home.mission.audiences");

  return (
    <section id="about" className="relative overflow-hidden bg-ink-aurora py-24 lg:py-36">
      <div className="container relative z-10 mx-auto px-4">
        <Reveal>
          <div className="text-center">
            <div className="eyebrow mb-6 text-sun">{t("brochure.home.mission.eyebrow")}</div>
            <h2 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.03em] text-ink-foreground sm:text-6xl lg:text-7xl">
              {t("brochure.home.mission.statement1")}
              <br />
              <span className="text-sun">{t("brochure.home.mission.statement2")}</span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
              {t("brochure.home.mission.lead")}
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-10 text-center md:grid-cols-4">
          <div>
            <div className="text-4xl font-extrabold tabular-nums tracking-tight text-ink-foreground md:text-5xl">
              <CountUp value={100} suffix="%" />
            </div>
            <div className="mt-1 text-sm text-ink-muted">{t("brochure.home.mission.stats.free")}</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold tabular-nums tracking-tight text-sun md:text-5xl">$0</div>
            <div className="mt-1 text-sm text-ink-muted">{t("brochure.home.mission.stats.fees")}</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold tabular-nums tracking-tight text-ink-foreground md:text-5xl">2012</div>
            <div className="mt-1 text-sm text-ink-muted">{t("brochure.home.mission.stats.founded")}</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold tabular-nums tracking-tight text-sun md:text-5xl">
              <CountUp value={30} />
            </div>
            <div className="mt-1 text-sm text-ink-muted">{t("brochure.home.mission.stats.languages")}</div>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <h3 className="text-center text-2xl font-extrabold tracking-tight text-ink-foreground">
            {t("brochure.home.mission.title")}
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience, index) => {
              const IconComponent = audienceIcons[index];
              return (
                <div key={index} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
                  <IconComponent className={`mx-auto mb-4 h-7 w-7 ${audienceTones[index % audienceTones.length]}`} />
                  <h4 className="mb-1 font-bold text-ink-foreground">{audience.title}</h4>
                  <p className="text-sm leading-relaxed text-ink-muted">{audience.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-2xl text-center">
          <p className="text-ink-muted">{t("brochure.home.mission.sister")}</p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant="outline" className="border-white/25 bg-transparent text-ink-foreground hover:border-white/60 hover:text-ink-foreground" asChild>
              <a href="https://churchapps.org/" target="_blank" rel="noopener noreferrer">
                {t("brochure.home.mission.aboutChurchApps")}
              </a>
            </Button>
            <Button variant="outline" className="border-white/25 bg-transparent text-ink-foreground hover:border-white/60 hover:text-ink-foreground" asChild>
              <a href="https://lessons.church/" target="_blank" rel="noopener noreferrer">Lessons.church</a>
            </Button>
            <Button variant="outline" className="border-white/25 bg-transparent text-ink-foreground hover:border-white/60 hover:text-ink-foreground" asChild>
              <a href="https://freeshow.app/" target="_blank" rel="noopener noreferrer">FreeShow</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
