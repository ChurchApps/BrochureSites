import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enApphelper from "../public/apphelper/locales/en.json";
import enBrochure from "../public/locales/en.json";

// Synchronously seed English so it is available during static generation (SSG)
// AND on the client's first render. This gives crawlers fully-rendered English
// HTML and avoids a hydration mismatch. Other languages are still loaded at
// runtime by LanguageContext (fetch + addResourceBundle), exactly as before.
//
// `initImmediate: false` makes init synchronous (resources are inline, no
// network backend), so t() returns real strings on the very first render.
if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    resources: { en: { translation: { ...enApphelper, ...enBrochure } } },
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    initImmediate: false,
  });
}

export default i18n;
