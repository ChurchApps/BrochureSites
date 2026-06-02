import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    global: 'globalThis',
    'process.env': {},
  },
  // English-only prerendering: vite-react-ssg renders exactly these paths to
  // static HTML. The default handler drops all dynamic routes, so we list the
  // concrete English paths (incl. the :competitor compare pages) explicitly.
  // All other languages/routes continue to render client-side.
  ssgOptions: {
    // Emit `/en/faq` as `dist/en/faq/index.html` so S3/CloudFront serves it as
    // a directory index at the clean URL (matches the site's URL scheme).
    dirStyle: "nested",
    includedRoutes: () => {
      const competitors = ["planning-center", "pushpay", "tithely", "breeze"];
      return [
        "/",
        "/en",
        "/en/church-management",
        "/en/faq",
        "/en/compare",
        ...competitors.map((c) => `/en/compare/${c}`),
      ];
    },
  },
}));
