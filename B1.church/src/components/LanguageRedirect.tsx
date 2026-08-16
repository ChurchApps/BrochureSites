import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { SUPPORTED_LANGS } from "@/constants/languages";
import { withSlash } from "@/components/HtmlRedirect";

// SSG/crawlers get a real /en/… page (link + meta refresh). Client JS may refine the language.
const LanguageRedirect = () => {
  const location = useLocation();
  const path = location.pathname === "/" ? "/" : location.pathname;
  const fallback = withSlash(`/en${path}`);

  useEffect(() => {
    const browserLang = navigator.language?.split("-")[0] || "en";
    const targetLang = SUPPORTED_LANGS.includes(browserLang) ? browserLang : "en";
    window.location.replace(withSlash(`/${targetLang}${path}`) + location.search);
  }, [path, location.search]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <Head>
        <meta httpEquiv="refresh" content={`0;url=${fallback}`} />
        <link rel="canonical" href={`https://b1.church${fallback}`} />
        <title>Redirecting</title>
      </Head>
      <p className="text-center text-foreground/80">
        This page has moved to{" "}
        <a className="font-semibold text-primary underline" href={fallback}>{fallback}</a>.
      </p>
    </div>
  );
};

export default LanguageRedirect;
