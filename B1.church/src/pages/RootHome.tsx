import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import { SUPPORTED_LANGS } from "@/constants/languages";
import Index from "@/pages/Index";

// The bare domain "/" is prerendered as the English homepage (so crawlers and
// the first paint get real content instead of an empty redirect shell). After
// hydration, non-English browsers are forwarded to their language-prefixed
// home, preserving the previous auto-redirect behavior. English browsers stay
// on "/", and because the server- and client-rendered markup match (English),
// hydration is clean.
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
