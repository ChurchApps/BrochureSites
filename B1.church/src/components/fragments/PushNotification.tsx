import { useTranslation } from "react-i18next";
import { Church } from "lucide-react";

const PushNotification = ({ className = "" }: { className?: string }) => {
  const { t } = useTranslation();
  return (
    <div className={`card-elevated flex w-fit max-w-[290px] items-start gap-3 rounded-2xl px-4 py-3 ${className}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary">
        <Church className="h-5 w-5 text-primary-foreground" />
      </span>
      <div className="min-w-0">
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-sm font-semibold text-foreground">{t("brochure.fragments.pushNotification.app")}</span>
          <span className="text-[10px] text-muted-foreground">{t("brochure.fragments.pushNotification.time")}</span>
        </div>
        <p className="text-xs leading-snug text-muted-foreground">{t("brochure.fragments.pushNotification.message")}</p>
      </div>
    </div>
  );
};

export default PushNotification;
