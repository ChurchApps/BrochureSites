import React, { createContext, useContext, useEffect } from "react";
import { useParams, useNavigate, useLocation, Navigate } from "react-router-dom";
import i18n from "i18next";

const SUPPORTED_LANGS = ["en", "es"];

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

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang: paramLang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  if (paramLang && !SUPPORTED_LANGS.includes(paramLang)) {
    return <Navigate to={`/en${location.pathname.replace(/^\/[^/]+/, "")}${location.search}`} replace />;
  }

  const lang = paramLang && SUPPORTED_LANGS.includes(paramLang) ? paramLang : "en";

  useEffect(() => {
    if (i18n.isInitialized && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    } else if (!i18n.isInitialized) {
      const onInit = () => {
        if (i18n.language !== lang) i18n.changeLanguage(lang);
      };
      i18n.on("initialized", onInit);
      return () => { i18n.off("initialized", onInit); };
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang: string) => {
    const currentPath = location.pathname.replace(/^\/(en|es)/, "") || "/";
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
