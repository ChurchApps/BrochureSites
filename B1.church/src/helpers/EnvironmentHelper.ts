import { ApiHelper } from "@churchapps/apphelper/dist/helpers/ApiHelper";
import { CommonEnvironmentHelper } from "@churchapps/apphelper/dist/helpers/CommonEnvironmentHelper";
import { Locale } from "@churchapps/apphelper/dist/helpers/Locale";

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
    // Initialize with English locale only
    await Locale.init([`/apphelper/locales/{{lng}}.json`]);

  };

}