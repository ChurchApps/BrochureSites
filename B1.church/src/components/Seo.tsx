import { Head } from "vite-react-ssg";
import { useLanguage } from "@/context/LanguageContext";
import { SUPPORTED_LANGS } from "@/constants/languages";

const SITE = "https://b1.church";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown>;
}

// CloudFront 301s /en/ to /, so the English home's canonical is the bare root.
const urlFor = (lang: string, path: string) => {
  const rel = path.endsWith("/") ? path : `${path}/`;
  return lang === "en" && rel === "/" ? `${SITE}/` : `${SITE}/${lang}${rel}`;
};

// Canonical URL prevents subpage deduplication to homepage.
const Seo = ({ title, description, path, jsonLd }: SeoProps) => {
  const { lang } = useLanguage();
  const url = urlFor(lang, path);
  const schema = jsonLd ? { ...jsonLd, url: (jsonLd.url as string) || url } : null;
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
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Head>
  );
};

export default Seo;
