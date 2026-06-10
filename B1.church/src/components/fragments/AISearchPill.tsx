import { useTranslation } from "react-i18next";
import { Sparkles } from "lucide-react";

const AISearchPill = ({ className = "" }: { className?: string }) => {
  const { t } = useTranslation();
  return (
    <div className={`card-elevated flex w-fit items-center gap-2.5 rounded-full py-2.5 pl-3.5 pr-5 ${className}`}>
      <Sparkles className="h-4 w-4 shrink-0 text-lilac" />
      <span className="text-sm italic text-muted-foreground">&ldquo;{t("brochure.fragments.aiSearch.query")}&rdquo;</span>
    </div>
  );
};

export default AISearchPill;
