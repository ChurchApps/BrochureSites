import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SUPPORTED_LANGS, LANGUAGE_NAMES } from "@/constants/languages";
import { Globe, ChevronDown } from "lucide-react";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-1.5 text-white hover:text-white/80 transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium uppercase">{lang}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg bg-gray-900 border border-white/20 shadow-xl z-50 py-1 max-h-80 overflow-y-auto">
          {SUPPORTED_LANGS.map((code) => (
            <button
              key={code}
              onClick={() => { setLang(code); setOpen(false); }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                code === lang
                  ? "bg-primary/20 text-white font-medium"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="uppercase font-mono mr-2">{code}</span>
              {LANGUAGE_NAMES[code]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
