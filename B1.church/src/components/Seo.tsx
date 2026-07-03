import { Head } from "vite-react-ssg";
import { useLanguage } from "@/context/LanguageContext";

const SITE = "https://b1.church";

interface SeoProps {
  title: string;
  description: string;
  path: string;
}

// Canonical URL prevents subpage deduplication to homepage.
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
