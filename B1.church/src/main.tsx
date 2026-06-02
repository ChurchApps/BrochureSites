import { ViteReactSSG } from "vite-react-ssg";
import "./i18n";
import "./index.css";
import { routes } from "./routes";

// ViteReactSSG prerenders the routes listed in `ssgOptions.includedRoutes`
// (vite.config.ts) to static HTML at build time, then hydrates them on the
// client. Non-prerendered routes/languages render client-side as before.
export const createRoot = ViteReactSSG({ routes });
