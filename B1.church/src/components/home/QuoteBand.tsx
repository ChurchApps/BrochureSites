import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import LocaleLink from "@/components/LocaleLink";
import Reveal from "@/components/Reveal";

const QuoteBand = () => {
  const { t } = useTranslation();
  const rawItems = t("brochure.testimonials.items", { returnObjects: true });
  const quote = Array.isArray(rawItems) ? (rawItems[0] as { content: string })?.content : "";

  return (
    <section className="bg-surface-tint py-20 lg:py-28">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <Reveal>
          <div className="text-7xl font-extrabold leading-none text-sun" aria-hidden="true">&ldquo;</div>
          <blockquote className="mt-2 text-2xl font-bold leading-snug tracking-tight text-foreground md:text-3xl">
            {quote}
          </blockquote>
          <div className="mt-8 font-bold text-foreground">Ken Idleman</div>
          <div className="text-sm text-muted-foreground">A.B. M.Div. D.D.</div>
          <LocaleLink
            to="/compare"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            {t("brochure.testimonials.compareLink")}
            <ArrowRight className="h-4 w-4" />
          </LocaleLink>
        </Reveal>
      </div>
    </section>
  );
};

export default QuoteBand;
