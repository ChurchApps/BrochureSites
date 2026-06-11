import { useTranslation } from "react-i18next";

const bars = [40, 55, 35, 70, 90];

const GivingStat = ({ className = "" }: { className?: string }) => {
  const { t } = useTranslation();
  return (
    <div className={`card-elevated w-fit rounded-xl px-4 py-3 ${className}`}>
      <div className="flex items-end gap-4">
        <div>
          <div className="text-xs text-muted-foreground">{t("brochure.fragments.givingStat.label")}</div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold tabular-nums text-foreground">$2,480</span>
            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">+12%</span>
          </div>
        </div>
        <div className="flex h-9 items-end gap-1">
          {bars.map((h, i) => (
            <span key={i} className="w-1.5 rounded-sm bg-accent/70" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GivingStat;
