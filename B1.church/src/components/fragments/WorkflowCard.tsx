import { useTranslation } from "react-i18next";
import { CheckCircle2 } from "lucide-react";

const WorkflowCard = ({ className = "" }: { className?: string }) => {
  const { t } = useTranslation();
  return (
    <div className={`card-elevated w-fit min-w-[230px] rounded-xl p-4 ${className}`}>
      <div className="mb-2.5 flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-foreground">{t("brochure.fragments.workflow.title")}</span>
        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
          {t("brochure.fragments.workflow.badge")}
        </span>
      </div>
      <ul className="space-y-1.5">
        <li className="flex items-center gap-2 text-xs text-muted-foreground">
          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent" />
          {t("brochure.fragments.workflow.step1")}
        </li>
        <li className="flex items-center gap-2 text-xs text-muted-foreground">
          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent" />
          {t("brochure.fragments.workflow.step2")}
        </li>
      </ul>
    </div>
  );
};

export default WorkflowCard;
