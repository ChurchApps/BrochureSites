import { useTranslation } from "react-i18next";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useTArray } from "@/lib/i18nArray";
import LocaleLink from "@/components/LocaleLink";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import BrowserFrame from "@/components/frames/BrowserFrame";
import AISearchPill from "@/components/fragments/AISearchPill";
import WorkflowCard from "@/components/fragments/WorkflowCard";

const PeopleSection = () => {
  const { t } = useTranslation();
  const tArray = useTArray();
  const items = tArray<string>("brochure.home.people.items");

  return (
    <section id="people" className="overflow-hidden bg-background py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow={t("brochure.home.people.eyebrow")}
              title={
                <>
                  {t("brochure.home.people.title")}{" "}
                  <span className="text-primary">{t("brochure.home.people.titleAccent")}</span>
                </>
              }
              lead={t("brochure.home.people.lead")}
            />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <LocaleLink
              to="/church-management"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              {t("brochure.home.people.link")}
              <ArrowRight className="h-4 w-4" />
            </LocaleLink>
          </Reveal>

          <div className="relative pb-12 pt-8">
            <div className="absolute -inset-y-2 -left-2 -right-4 rounded-[2.5rem] bg-secondary" />
            <AISearchPill className="absolute -top-0 left-6 z-10 animate-float" />
            <BrowserFrame
              src="/attendance-analytics-dashboard.webp"
              alt="B1Admin attendance trend report"
              className="relative mt-6"
            />
            <WorkflowCard className="absolute -bottom-2 -right-2 animate-float [animation-delay:1.5s]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
