import { Head } from "vite-react-ssg";
import { useLanguage } from "@/context/LanguageContext";
import { SUPPORTED_LANGS } from "@/constants/languages";

const SITE = "https://b1.church";

interface Crumb {
  name: string;
  path: string;
}

interface SeoProps {
  title: string;
  description: string;
  path: string;
  breadcrumbs?: Crumb[];
  jsonLd?: Record<string, unknown>;
}

// CloudFront 301s /en/ to /, so the English home's canonical is the bare root.
const urlFor = (lang: string, path: string) => {
  const rel = path.endsWith("/") ? path : `${path}/`;
  return lang === "en" && rel === "/" ? `${SITE}/` : `${SITE}/${lang}${rel}`;
};

// Canonical URL prevents subpage deduplication to homepage.
const Seo = ({ title, description, path, breadcrumbs, jsonLd }: SeoProps) => {
  const { lang } = useLanguage();
  const url = urlFor(lang, path);
  const crumbs = breadcrumbs && [{ name: "B1 Church", path: "/" }, ...breadcrumbs];
  const graph = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: lang,
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#software` },
      ...(crumbs && { breadcrumb: { "@id": `${url}#breadcrumb` } }),
      ...jsonLd
    },
    ...(crumbs ? [
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: urlFor(lang, c.path) }))
      }
    ] : [])
  ];
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {SUPPORTED_LANGS.map((l) => <link key={l} rel="alternate" hrefLang={l} href={urlFor(l, path)} />)}
      <link rel="alternate" hrefLang="x-default" href={urlFor("en", path)} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>
    </Head>
  );
};

export default Seo;
