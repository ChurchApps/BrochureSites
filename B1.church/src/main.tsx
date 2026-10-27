import { ViteReactSSG } from "vite-react-ssg";
import i18n, { loadLanguage } from "./i18n";
import "./index.css";
import { routes } from "./routes";
import { langFromPath } from "./constants/languages";

export const createRoot = ViteReactSSG({ routes }, async ({ isClient, routePath }) => {
  const lang = langFromPath(isClient ? window.location.pathname : routePath ?? "/");
  await loadLanguage(lang);
  await i18n.changeLanguage(lang);
});
