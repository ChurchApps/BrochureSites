import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import { SUPPORTED_LANGS } from "@/constants/languages";
import Index from "@/pages/Index";

// Prerendering "/" as English keeps hydration clean (server/client markup match).
const RootHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const browserLang = navigator.language?.split("-")[0] || "en";
    if (browserLang !== "en" && SUPPORTED_LANGS.includes(browserLang)) {
      navigate(`/${browserLang}/`, { replace: true });
    }
  }, [navigate]);

  return (
    <LanguageProvider>
      <Index />
    </LanguageProvider>
  );
};

export default RootHome;
