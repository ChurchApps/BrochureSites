export const SUPPORTED_LANGS = ["de", "en", "es", "fr", "hi", "it", "ko", "no", "pt", "ru", "tl", "zh"];

export const LANGUAGE_NAMES: Record<string, string> = {
  de: "Deutsch",
  en: "English",
  es: "Español",
  fr: "Français",
  hi: "हिन्दी",
  it: "Italiano",
  ko: "한국어",
  no: "Norsk",
  pt: "Português",
  ru: "Русский",
  tl: "Tagalog",
  zh: "中文",
};

/** Matches any supported language code at start of a path, e.g. /en/faq */
export const LANG_PATH_REGEX = /^\/(de|en|es|fr|hi|it|ko|no|pt|ru|tl|zh)/;

/** Matches a language-prefixed home route, e.g. /en/ or /es */
export const LANG_HOME_REGEX = /^\/(de|en|es|fr|hi|it|ko|no|pt|ru|tl|zh)\/?$/;
