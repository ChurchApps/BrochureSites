import { useTranslation } from "react-i18next";
import { Music, FileText, Zap, Building2, ShieldCheck, BarChart3, Github, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

interface SmallCellProps {
  icon: typeof Music;
  title: string;
  desc: string;
}

const SmallCell = ({ icon: Icon, title, desc }: SmallCellProps) => (
  <div className="card-elevated card-hover rounded-2xl p-6">
    <div className="mb-4 w-fit rounded-xl bg-primary/10 p-2.5">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <h3 className="mb-1 font-bold text-foreground">{title}</h3>
    <p className="text-sm text-muted-foreground">{desc}</p>
  </div>
);

interface ImageCellProps {
  src: string;
  alt: string;
  title: string;
  desc: string;
}

const ImageCell = ({ src, alt, title, desc }: ImageCellProps) => (
  <div className="card-elevated card-hover overflow-hidden rounded-2xl lg:col-span-2">
    <div className="p-6 pb-4">
      <h3 className="font-bold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
    <div className="h-44 overflow-hidden px-6 md:h-52">
      <img src={src} alt={alt} loading="lazy" className="h-full w-full rounded-t-xl border border-border object-cover object-top" />
    </div>
  </div>
);

const CapabilitiesSection = () => {
  const { t } = useTranslation();
  const cell = (key: string) => ({
    title: t(`brochure.home.capabilities.cells.${key}.title`),
    desc: t(`brochure.home.capabilities.cells.${key}.desc`)
  });

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <Reveal>
          <SectionHeading
            eyebrow={t("brochure.home.capabilities.eyebrow")}
            title={t("brochure.home.capabilities.title")}
            lead={t("brochure.home.capabilities.lead")}
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ImageCell
            src="/worship-service-planning-bento.webp"
            alt="B1Admin worship schedule with team assignments"
            {...cell("servicePlanning")}
          />
          <SmallCell icon={Music} {...cell("songs")} />
          <SmallCell icon={FileText} {...cell("forms")} />
          <ImageCell
            src="/groups-ministry-management-bento.webp"
            alt="B1Admin group management page"
            {...cell("groups")}
          />
          <SmallCell icon={Zap} {...cell("automations")} />
          <SmallCell icon={Building2} {...cell("multiCampus")} />
          <SmallCell icon={ShieldCheck} {...cell("roles")} />
          <a
            href="https://github.com/ChurchApps"
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover group flex flex-col justify-between rounded-2xl bg-ink p-6 lg:col-span-2"
          >
            <div>
              <div className="mb-4 w-fit rounded-xl bg-white/10 p-2.5">
                <Github className="h-5 w-5 text-ink-foreground" />
              </div>
              <h3 className="mb-1 font-bold text-ink-foreground">{t("brochure.home.capabilities.openSource.title")}</h3>
              <p className="text-sm text-ink-muted">{t("brochure.home.capabilities.openSource.desc")}</p>
            </div>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-light">
              {t("brochure.home.capabilities.openSource.linkLabel")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
          <SmallCell icon={BarChart3} {...cell("reports")} />
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
