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
  // Prerender English paths to static HTML; other languages render client-side.
  ssgOptions: {
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
        "/church-management",
        "/faq",
        "/compare",
        ...competitors.map((c) => `/compare/${c}`),
        "/vs",
        "/vs/planning-center",
      ];
    },
  },
}));
