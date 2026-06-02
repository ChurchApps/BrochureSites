import { Head } from "vite-react-ssg";
import { useLanguage } from "@/context/LanguageContext";

const SITE = "https://b1.church";

interface SeoProps {
  title: string;
  description: string;
  /** Locale-relative path, e.g. "/faq" or "/". The current language prefix and
   *  a trailing slash are added automatically. */
  path: string;
}

// Per-page <head> metadata. The key job is a self-referential canonical URL
// (current language prefix + trailing slash) so prerendered subpages are NOT
// deduped to the homepage by the canonical that used to live in index.html.
// Renders on both the server (SSG) and the client via vite-react-ssg's <Head>.
const Seo = ({ title, description, path }: SeoProps) => {
  const { localePath } = useLanguage();
  const url = `${SITE}${localePath(path)}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default Seo;
