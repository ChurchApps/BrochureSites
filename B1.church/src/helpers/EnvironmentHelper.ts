import { ApiHelper } from "@churchapps/apphelper/dist/helpers/ApiHelper";
import { CommonEnvironmentHelper } from "@churchapps/apphelper/dist/helpers/CommonEnvironmentHelper";

export class EnvironmentHelper {
  static Common = CommonEnvironmentHelper;
  static hasInit = false;

  static init = () => {
    if (this.hasInit) return;
    this.hasInit = true;
    
    // Ensure process.env exists for browser compatibility
    if (typeof window !== 'undefined' && !window.process) {
      (window as any).process = { env: {} };
    }
    
    let stage = import.meta.env.VITE_STAGE || "dev";

    switch (stage) {
      case "staging": EnvironmentHelper.initStaging(); break;
      case "prod": EnvironmentHelper.initProd(); break;
      default: EnvironmentHelper.initDev(); break;
    }
    EnvironmentHelper.Common.init(stage);

    ApiHelper.apiConfigs = [
      { keyName: "MembershipApi", url: EnvironmentHelper.Common.MembershipApi, jwt: "", permissions: [] },
      { keyName: "AttendanceApi", url: EnvironmentHelper.Common.AttendanceApi, jwt: "", permissions: [] },
      { keyName: "MessagingApi", url: EnvironmentHelper.Common.MessagingApi, jwt: "", permissions: [] },
      { keyName: "ContentApi", url: EnvironmentHelper.Common.ContentApi, jwt: "", permissions: [] },
      { keyName: "GivingApi", url: EnvironmentHelper.Common.GivingApi, jwt: "", permissions: [] },
      { keyName: "DoingApi", url: EnvironmentHelper.Common.DoingApi, jwt: "", permissions: [] }
    ];
  };

  static initDev = () => {
    this.initStaging();
  };

  //NOTE: None of these values are secret.
  static initStaging = () => {
    // Development/staging uses staging APIs
  };

  //NOTE: None of these values are secret.
  static initProd = () => {
    // Production configuration
  };
}