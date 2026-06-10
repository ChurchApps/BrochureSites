import { useTranslation } from "react-i18next";
import { CheckCircle2 } from "lucide-react";

const CheckinToast = ({ className = "" }: { className?: string }) => {
  const { t } = useTranslation();
  return (
    <div className={`card-elevated flex w-fit items-center gap-3 rounded-xl px-4 py-3 ${className}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10">
        <CheckCircle2 className="h-5 w-5 text-accent" />
      </span>
      <div>
        <div className="text-sm font-semibold text-foreground">{t("brochure.fragments.checkinToast.title")}</div>
        <div className="text-xs text-muted-foreground">{t("brochure.fragments.checkinToast.detail")}</div>
      </div>
    </div>
  );
};

export default CheckinToast;
