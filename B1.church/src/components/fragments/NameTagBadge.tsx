import { useTranslation } from "react-i18next";

const NameTagBadge = ({ className = "" }: { className?: string }) => {
  const { t } = useTranslation();
  return (
    <div className={`card-elevated w-44 overflow-hidden rounded-xl ${className}`}>
      <div className="bg-primary px-3 py-1.5 text-center">
        <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary-foreground">
          {t("brochure.fragments.nameTag.hello")}
        </div>
        <div className="text-[9px] text-primary-foreground/80">{t("brochure.fragments.nameTag.myNameIs")}</div>
      </div>
      <div className="px-3 py-3 text-center">
        <div className="text-2xl font-extrabold text-foreground">Emma</div>
        <div className="mt-1 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">K4Q7</div>
      </div>
      <div className="flex items-center justify-between border-t border-dashed border-border bg-muted/60 px-3 py-2">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
          {t("brochure.fragments.nameTag.pickup")}
        </span>
        <span className="font-mono text-xs font-bold tracking-[0.2em] text-foreground">K4Q7</span>
      </div>
    </div>
  );
};

export default NameTagBadge;
