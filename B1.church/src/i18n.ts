import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enBrochure from "../public/locales/en.json";

const locales = import.meta.glob<{ default: Record<string, unknown> }>(["../public/locales/*.json", "!../public/locales/en.json"]);

// Synchronously seed English; main.tsx loads the route's language before render/hydrate.
if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    resources: { en: { translation: enBrochure } },
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    initAsync: false
  });
}

export const loadLanguage = async (lang: string) => {
  if (i18n.hasResourceBundle(lang, "translation")) return;
  const mod = await locales[`../public/locales/${lang}.json`]?.();
  if (mod) i18n.addResourceBundle(lang, "translation", mod.default, true, true);
};

export default i18n;
