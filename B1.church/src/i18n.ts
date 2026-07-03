import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enBrochure from "../public/locales/en.json";

// Synchronously seed English to avoid hydration mismatch; other languages load at runtime.
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

export default i18n;
