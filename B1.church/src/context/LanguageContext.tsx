import React, { createContext, useContext, useEffect } from "react";
import { useParams, useNavigate, useLocation, Navigate } from "react-router-dom";
import i18n from "i18next";
import { SUPPORTED_LANGS, LANG_PATH_REGEX } from "@/constants/languages";

interface LanguageContextType {
  lang: string;
  setLang: (lang: string) => void;
  localePath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  localePath: (path) => path,
});

export const useLanguage = () => useContext(LanguageContext);

const loadLanguage = async (lang: string) => {
  try {
    const [apphelperData, brochureData] = await Promise.all([
      fetch(`/apphelper/locales/${lang}.json`).then(r => r.json()).catch(() => ({})),
      fetch(`/locales/${lang}.json`).then(r => r.json()).catch(() => ({})),
    ]);
    const merged = { ...apphelperData, ...brochureData };
    i18n.addResourceBundle(lang, "translation", merged, true, true);
  } catch (e) {
    console.warn("Failed to load translations for", lang, e);
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang: paramLang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  if (paramLang && !SUPPORTED_LANGS.includes(paramLang)) {
    return <Navigate to={`/en${location.pathname.replace(/^\/[^/]+/, "")}${location.search}`} replace />;
  }

  const lang = paramLang && SUPPORTED_LANGS.includes(paramLang) ? paramLang : "en";

  useEffect(() => {
    const switchLang = async () => {
      if (!i18n.isInitialized) {
        const onInit = async () => {
          if (!i18n.hasResourceBundle(lang, "translation")) await loadLanguage(lang);
          if (i18n.language !== lang) i18n.changeLanguage(lang);
        };
        i18n.on("initialized", onInit);
        return () => { i18n.off("initialized", onInit); };
      }
      if (!i18n.hasResourceBundle(lang, "translation")) await loadLanguage(lang);
      if (i18n.language !== lang) i18n.changeLanguage(lang);
    };
    switchLang();
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang: string) => {
    const currentPath = location.pathname.replace(LANG_PATH_REGEX, "") || "/";
    navigate(`/${newLang}${currentPath}${location.search}`);
  };

  const localePath = (path: string) => {
    return `/${lang}${path.startsWith("/") ? path : "/" + path}`;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, localePath }}>
      {children}
    </LanguageContext.Provider>
  );
};
