import { useTranslation } from "react-i18next";
import type { ComponentType } from "react";
import { Smartphone, BadgeDollarSign, Users, ScanLine, Globe, Music, ArrowRight } from "lucide-react";
import LocaleLink from "@/components/LocaleLink";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

interface Product {
  key: string;
  icon: ComponentType<{ className?: string }>;
  anchor?: string;
  to?: string;
  text: string;
  chip: string;
}

const products: Product[] = [
  { key: "app", icon: Smartphone, anchor: "features", text: "text-cyan", chip: "bg-cyan/10" },
  { key: "giving", icon: BadgeDollarSign, anchor: "giving", text: "text-sun-deep", chip: "bg-sun/10" },
  { key: "people", icon: Users, anchor: "people", text: "text-primary", chip: "bg-primary/10" },
  { key: "checkin", icon: ScanLine, anchor: "checkin", text: "text-lilac-deep", chip: "bg-lilac/10" },
  { key: "web", icon: Globe, anchor: "siteBuilder", text: "text-coral-deep", chip: "bg-coral/10" },
  { key: "plans", icon: Music, to: "/church-management", text: "text-accent", chip: "bg-accent/10" }
];

const ProductsSection = () => {
  const { t } = useTranslation();

  const scrollTo = (anchor: string) => {
    document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="bg-background py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <Reveal>
          <SectionHeading
            eyebrow={t("brochure.home.products.eyebrow")}
            title={t("brochure.home.products.title")}
            lead={t("brochure.home.products.lead")}
          />
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map(({ key, icon: Icon, anchor, to, text, chip }) => {
            const body = (
              <>
                <div className={`mb-5 w-fit rounded-2xl p-3 ${chip}`}>
                  <Icon className={`h-6 w-6 ${text}`} />
                </div>
                <h3 className={`text-xl font-extrabold ${text}`}>{t(`brochure.home.products.items.${key}.name`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(`brochure.home.products.items.${key}.desc`)}
                </p>
                <span className={`mt-5 inline-flex items-center gap-1.5 text-sm font-bold ${text}`}>
                  {t("brochure.home.products.linkLabel")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </>
            );
            const cardClass = "card-elevated card-hover group flex flex-col items-start rounded-3xl p-7 text-left";
            return to ? (
              <LocaleLink key={key} to={to} className={cardClass}>
                {body}
              </LocaleLink>
            ) : (
              <button key={key} type="button" onClick={() => scrollTo(anchor!)} className={cardClass}>
                {body}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
