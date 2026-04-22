export const SUPPORTED_LANGS = [
  "ar", "cs", "da", "de", "en", "es", "fi", "fr", "hi", "hu",
  "id", "it", "ja", "ko", "lt", "nl", "no", "pl", "pt", "ru",
  "sk", "sl", "sr", "sv", "tl", "tr", "uk", "vi", "zh"
];

export const LANGUAGE_NAMES: Record<string, string> = {
  ar: "العربية",
  cs: "Čeština",
  da: "Dansk",
  de: "Deutsch",
  en: "English",
  es: "Español",
  fi: "Suomi",
  fr: "Français",
  hi: "हिन्दी",
  hu: "Magyar",
  id: "Bahasa Indonesia",
  it: "Italiano",
  ja: "日本語",
  ko: "한국어",
  lt: "Lietuvių",
  nl: "Nederlands",
  no: "Norsk",
  pl: "Polski",
  pt: "Português",
  ru: "Русский",
  sk: "Slovenčina",
  sl: "Slovenščina",
  sr: "Српски",
  sv: "Svenska",
  tl: "Tagalog",
  tr: "Türkçe",
  uk: "Українська",
  vi: "Tiếng Việt",
  zh: "中文"
};

const LANG_ALTERNATION = SUPPORTED_LANGS.join("|");

/** Matches any supported language code at start of a path, e.g. /en/faq */
export const LANG_PATH_REGEX = new RegExp(`^/(${LANG_ALTERNATION})`);

/** Matches a language-prefixed home route, e.g. /en/ or /es */
export const LANG_HOME_REGEX = new RegExp(`^/(${LANG_ALTERNATION})/?$`);
