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
    if (typeof window !== "undefined" && !window.process) {
      (window as any).process = { env: {} };
    }

    EnvironmentHelper.Common.init("prod");

    // Initialize locale for English + browser language
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
    // i18n is pre-seeded synchronously with English in src/i18n.ts so that SSG
    // and the first client render have content. Only fall back to apphelper's
    // fetch-based init if i18n somehow isn't initialized yet. Additional
    // languages are loaded on-demand by LanguageContext when the user switches.
    if (i18n.isInitialized) return;
    await Locale.init([`/apphelper/locales/{{lng}}.json`, `/locales/{{lng}}.json`]);
  };

}
