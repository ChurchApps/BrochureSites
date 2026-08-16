import type { RouteRecord } from "vite-react-ssg";
import RootLayout from "@/layouts/RootLayout";
import LanguageLayout from "@/layouts/LanguageLayout";
import RootHome from "@/pages/RootHome";
import Index from "@/pages/Index";
import ChurchManagement from "@/pages/ChurchManagement";
import FAQ from "@/pages/FAQ";
import Compare from "@/pages/Compare";
import NotFound from "@/pages/NotFound";
import LanguageRedirect from "@/components/LanguageRedirect";
import HtmlRedirect from "@/components/HtmlRedirect";
import ExternalRedirect from "@/components/ExternalRedirect";
import { ADMIN_LOGIN_URL } from "@/constants/externalUrls";

const PCO_COMPARE = "/en/compare/planning-center/";

// Legacy unprefixed paths redirect to /en/… (HTML + meta refresh) so S3 has a real key.
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <RootHome /> },
      { path: "login", element: <ExternalRedirect to={ADMIN_LOGIN_URL} /> },
      { path: "church-management", element: <LanguageRedirect /> },
      { path: "faq", element: <LanguageRedirect /> },
      { path: "compare", element: <LanguageRedirect /> },
      { path: "compare/:competitor", element: <LanguageRedirect /> },
      { path: "vs", element: <HtmlRedirect to={PCO_COMPARE} /> },
      { path: "vs/planning-center", element: <HtmlRedirect to={PCO_COMPARE} /> },
      {
        path: ":lang",
        element: <LanguageLayout />,
        children: [
          { index: true, element: <Index /> },
          { path: "login", element: <ExternalRedirect to={ADMIN_LOGIN_URL} /> },
          { path: "church-management", element: <ChurchManagement /> },
          { path: "faq", element: <FAQ /> },
          { path: "compare", element: <Compare /> },
          { path: "compare/:competitor", element: <Compare /> },
          { path: "*", element: <NotFound /> }
        ]
      },
      { path: "*", element: <NotFound /> }
    ]
  }
];
