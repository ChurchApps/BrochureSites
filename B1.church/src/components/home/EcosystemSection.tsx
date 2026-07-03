import { useTranslation } from "react-i18next";
import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { Database, LayoutDashboard, Globe, Smartphone, Tablet, ArrowRight } from "lucide-react";
import { trackChurchSignup } from "@/utils/analytics";
import { ADMIN_REGISTER_URL } from "@/constants/externalUrls";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const integrations = [
  "Slack", "Discord", "Zapier", "Make", "Google Sheets", "Mailchimp", "Claude", "ChatGPT", "Checkr", "Donorbox", "Subsplash", "Text In Church"
];

interface NodeProps {
  icon: ComponentType<{ className?: string }>;
  name: string;
  desc: string;
  iconClass?: string;
  className?: string;
}

const Node = ({ icon: Icon, name, desc, iconClass = "text-primary-light", className = "" }: NodeProps) => (
  <div className={`w-56 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur ${className}`}>
    <div className="flex items-center gap-2.5">
      <Icon className={`h-5 w-5 shrink-0 ${iconClass}`} />
      <span className="font-semibold text-ink-foreground">{name}</span>
    </div>
    <p className="mt-1 text-xs leading-snug text-ink-muted">{desc}</p>
  </div>
);

const Hub = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="w-fit rounded-2xl bg-primary/15 px-7 py-5 text-center ring-1 ring-primary/40 backdrop-blur shadow-[0_0_60px_hsl(221_93%_55%/0.35)]">
    <Database className="mx-auto h-7 w-7 text-primary-light" />
    <div className="mt-2 font-bold text-ink-foreground">{title}</div>
    <div className="text-xs text-ink-muted">{subtitle}</div>
  </div>
);

const EcosystemSection = () => {
  const { t } = useTranslation();

  const nodes = [
    { icon: LayoutDashboard, name: t("brochure.home.ecosystem.nodes.admin.name"), desc: t("brochure.home.ecosystem.nodes.admin.desc"), iconClass: "text-sky-400" },
    { icon: Globe, name: t("brochure.home.ecosystem.nodes.web.name"), desc: t("brochure.home.ecosystem.nodes.web.desc"), iconClass: "text-orange-400" },
    { icon: Smartphone, name: t("brochure.home.ecosystem.nodes.mobile.name"), desc: t("brochure.home.ecosystem.nodes.mobile.desc"), iconClass: "text-cyan-400" },
    { icon: Tablet, name: t("brochure.home.ecosystem.nodes.checkin.name"), desc: t("brochure.home.ecosystem.nodes.checkin.desc"), iconClass: "text-purple-300" }
  ];

  return (
    <section className="relative overflow-hidden bg-ink-aurora py-24 lg:py-32">
      <div className="container relative z-10 mx-auto px-4">
        <Reveal>
          <SectionHeading
            dark
            eyebrow={t("brochure.home.ecosystem.eyebrow")}
            title={
              <>
                {t("brochure.home.ecosystem.title")}{" "}
                <span className="text-primary-light">{t("brochure.home.ecosystem.titleAccent")}</span>
              </>
            }
            lead={t("brochure.home.ecosystem.lead")}
          />
        </Reveal>

        <div className="relative mx-auto mt-16 hidden h-[400px] max-w-4xl lg:block">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <line x1="22" y1="22" x2="50" y2="50" stroke="hsl(220 80% 65% / 0.35)" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" className="animate-dash" />
            <line x1="78" y1="22" x2="50" y2="50" stroke="hsl(220 80% 65% / 0.35)" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" className="animate-dash" />
            <line x1="22" y1="78" x2="50" y2="50" stroke="hsl(220 80% 65% / 0.35)" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" className="animate-dash" />
            <line x1="78" y1="78" x2="50" y2="50" stroke="hsl(220 80% 65% / 0.35)" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" className="animate-dash" />
          </svg>
          <Node {...nodes[0]} className="absolute left-[6%] top-[8%]" />
          <Node {...nodes[1]} className="absolute right-[6%] top-[8%]" />
          <Node {...nodes[2]} className="absolute bottom-[8%] left-[6%]" />
          <Node {...nodes[3]} className="absolute bottom-[8%] right-[6%]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hub title={t("brochure.home.ecosystem.hubTitle")} subtitle={t("brochure.home.ecosystem.hubSubtitle")} />
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-sm flex-col items-center gap-4 lg:hidden">
          <Hub title={t("brochure.home.ecosystem.hubTitle")} subtitle={t("brochure.home.ecosystem.hubSubtitle")} />
          <div className="h-6 w-px bg-primary-light/40" aria-hidden="true" />
          {nodes.map((node, i) => (
            <Node key={i} {...node} className="w-full" />
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
            {t("brochure.home.ecosystem.integrationsLabel")}
          </div>
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex w-max animate-marquee gap-3">
              {[...integrations, ...integrations].map((name, i) => (
                <span key={i} className="whitespace-nowrap rounded-full border border-white/15 px-4 py-1.5 text-sm text-ink-muted">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <Button size="xl" className="group" asChild onClick={() => trackChurchSignup("ecosystem_cta")}>
            <a href={ADMIN_REGISTER_URL}>
              {t("brochure.home.ecosystem.cta")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
