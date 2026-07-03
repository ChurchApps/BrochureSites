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
  localePath: (path) => path
});

export const useLanguage = () => useContext(LanguageContext);

const loadLanguage = async (lang: string) => {
  try {
    const data = await fetch(`/locales/${lang}.json`).then(r => r.json());
    i18n.addResourceBundle(lang, "translation", data, true, true);
  } catch (e) {
    console.warn("Failed to load translations for", lang, e);
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang: paramLang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const isUnsupported = paramLang && !SUPPORTED_LANGS.includes(paramLang);
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
    // Trailing slash required for static directory-index hosting without rewrite.
    const rel = path.startsWith("/") ? path : "/" + path;
    const full = `/${lang}${rel}`;
    return full.endsWith("/") ? full : `${full}/`;
  };

  if (isUnsupported) {
    return <Navigate to={`/en${location.pathname.replace(/^\/[^/]+/, "")}${location.search}`} replace />;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, localePath }}>
      {children}
    </LanguageContext.Provider>
  );
};
