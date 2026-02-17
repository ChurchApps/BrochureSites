import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  const toggleLang = () => {
    setLang(lang === "en" ? "es" : "en");
  };

  return (
    <button
      onClick={toggleLang}
      className="flex items-center space-x-1.5 text-white hover:text-white/80 transition-colors"
      aria-label={lang === "en" ? "Cambiar a Espa\u00f1ol" : "Switch to English"}
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium uppercase">{lang === "en" ? "ES" : "EN"}</span>
    </button>
  );
};

export default LanguageSwitcher;
