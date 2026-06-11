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
import ExternalRedirect from "@/components/ExternalRedirect";
import { ADMIN_LOGIN_URL } from "@/constants/externalUrls";

// Route tree as a react-router data-router object array (required by
// vite-react-ssg). "/" is the English home, legacy unprefixed paths redirect
// to the detected language, and the real pages live under /:lang/*.
// Sign-in moved to admin.b1.church; old /login links forward there with their
// query string (e.g. ?jwt=) intact.
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <RootHome /> },
      // Legacy unprefixed routes -> client redirect to /:lang/...
      { path: "login", element: <ExternalRedirect to={ADMIN_LOGIN_URL} /> },
      { path: "church-management", element: <LanguageRedirect /> },
      { path: "faq", element: <LanguageRedirect /> },
      { path: "compare", element: <LanguageRedirect /> },
      { path: "compare/:competitor", element: <LanguageRedirect /> },
      // Language-prefixed routes
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
