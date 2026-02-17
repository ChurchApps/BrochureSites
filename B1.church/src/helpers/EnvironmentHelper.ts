import { ApiHelper, CommonEnvironmentHelper } from "@churchapps/apphelper";
import { Locale } from "@churchapps/apphelper";
import i18n from "i18next";

export class EnvironmentHelper {
  static Common = CommonEnvironmentHelper;
  static hasInit = false;

  static init = async () => {
    if (this.hasInit) return;
    this.hasInit = true;

    // Ensure process.env exists for browser compatibility
    if (typeof window !== 'undefined' && !window.process) {
      (window as any).process = { env: {} };
    }

    EnvironmentHelper.Common.init("prod");

    // Initialize locale for English
    await EnvironmentHelper.initLocale();

    ApiHelper.apiConfigs = [
      { keyName: "MembershipApi", url: EnvironmentHelper.Common.MembershipApi, jwt: "", permissions: [] },
      { keyName: "AttendanceApi", url: EnvironmentHelper.Common.AttendanceApi, jwt: "", permissions: [] },
      { keyName: "MessagingApi", url: EnvironmentHelper.Common.MessagingApi, jwt: "", permissions: [] },
      { keyName: "ContentApi", url: EnvironmentHelper.Common.ContentApi, jwt: "", permissions: [] },
      { keyName: "GivingApi", url: EnvironmentHelper.Common.GivingApi, jwt: "", permissions: [] },
      { keyName: "DoingApi", url: EnvironmentHelper.Common.DoingApi, jwt: "", permissions: [] }
    ];
  };

  static initLocale = async () => {
    console.log("Initializing locale...");
    await Locale.init([`/apphelper/locales/{{lng}}.json`, `/locales/{{lng}}.json`]);

    // Pre-load Spanish if browser language is not Spanish
    // (Locale.init already loads en + browser lang, so we need to ensure both en and es are available)
    const browserLang = navigator.language?.split("-")[0] || "en";
    const otherLang = browserLang === "es" ? "en" : "es";
    if (otherLang !== "en") {
      try {
        const [apphelperData, brochureData] = await Promise.all([
          fetch(`/apphelper/locales/${otherLang}.json`).then(r => r.json()).catch(() => ({})),
          fetch(`/locales/${otherLang}.json`).then(r => r.json()).catch(() => ({})),
        ]);
        const merged = { ...apphelperData, ...brochureData };
        i18n.addResourceBundle(otherLang, "translation", merged, true, true);
      } catch (e) {
        console.warn("Failed to pre-load translations:", e);
      }
    }
  };

}