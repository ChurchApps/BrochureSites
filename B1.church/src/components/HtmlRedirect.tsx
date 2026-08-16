import { useEffect } from "react";
import { Head } from "vite-react-ssg";

const withSlash = (path: string) => (path.endsWith("/") ? path : `${path}/`);

// Real HTML (link + meta refresh) so S3/SSG serves a page instead of an empty LanguageRedirect.
const HtmlRedirect = ({ to }: { to: string }) => {
  const target = withSlash(to);

  useEffect(() => {
    window.location.replace(target + window.location.search);
  }, [target]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <Head>
        <meta httpEquiv="refresh" content={`0;url=${target}`} />
        <link rel="canonical" href={`https://b1.church${target}`} />
        <title>Redirecting</title>
      </Head>
      <p className="text-center text-foreground/80">
        This page has moved to{" "}
        <a className="font-semibold text-primary underline" href={target}>{target}</a>.
      </p>
    </div>
  );
};

export default HtmlRedirect;
export { withSlash };
