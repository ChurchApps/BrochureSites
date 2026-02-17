import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SUPPORTED_LANGS } from "@/constants/languages";

const LanguageRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const browserLang = navigator.language?.split("-")[0] || "en";
    const targetLang = SUPPORTED_LANGS.includes(browserLang) ? browserLang : "en";
    const targetPath = location.pathname === "/" ? "/" : location.pathname;
    navigate(`/${targetLang}${targetPath}${location.search}`, { replace: true });
  }, [navigate, location.pathname, location.search]);

  return null;
};

export default LanguageRedirect;
