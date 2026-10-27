import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { SUPPORTED_LANGS, langFromPath } from "./src/constants/languages";
import { FEATURE_PAGES } from "./src/constants/pages";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [react()].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  define: {
    global: "globalThis",
    "process.env": {}
  },
  ssgOptions: {
    dirStyle: "nested",
    // main.tsx sets the shared i18n language per route, so pages must render one at a time.
    concurrency: 1,
    onBeforePageRender: (route: string, html: string) => html.replace('<html lang="en">', `<html lang="${langFromPath(route)}">`),
    includedRoutes: () => {
      const competitors = ["planning-center", "pushpay", "tithely", "breeze"];
      const pages = ["", "/church-management", "/faq", "/compare", ...competitors.map((c) => `/compare/${c}`), ...FEATURE_PAGES.map((p) => `/${p.slug}`)];
      return [
        "/",
        ...SUPPORTED_LANGS.flatMap((lang) => pages.map((p) => `/${lang}${p}`)),
        "/church-management",
        "/faq",
        "/compare",
        ...competitors.map((c) => `/compare/${c}`),
        "/vs",
        "/vs/planning-center",
        "/404"
      ];
    }
  }
}));
