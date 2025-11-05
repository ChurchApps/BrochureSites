import React, { useContext } from "react";
import { LoginPage } from "@churchapps/apphelper-login";
import UserContext from "@/context/UserContext";
import type { UserInterface, PersonInterface, LoginUserChurchInterface } from "@churchapps/helpers";

const Login: React.FC = () => {
  const context = useContext(UserContext);
  const search = new URLSearchParams(window.location?.search);
  const jwtParam = search.get("jwt");
  const authParam = search.get("auth");

  const handleRedirect = (
    url: string,
    user?: UserInterface,
    person?: PersonInterface,
    userChurch?: LoginUserChurchInterface,
    userChurches?: LoginUserChurchInterface[]
  ) => {
    // If user is logged in and has churches
    if (userChurch?.church?.subDomain && userChurch?.jwt) {
      // Check if user has "View People" permission
      const membershipApi = userChurch.apis?.find(api => api.keyName === "MembershipApi");
      const hasViewPeoplePermission = membershipApi?.permissions?.some(p => p.contentType === "People" && p.action === "View");

      if (hasViewPeoplePermission) window.location.href = `https://admin.b1.church/login?jwt=${userChurch.jwt}&returnUrl=/`;
      else window.location.href = `https://${userChurch.church.subDomain}.b1.church/login?jwt=${userChurch.jwt}&returnUrl=/my`;
    } else if (url) window.location.href = url;
    
  };

  return (
    <LoginPage
      context={context}
      jwt={jwtParam}
      auth={authParam}
      appName="B1"
      logo="/images/logo-login.png"
      showLogo={true}
      showFooter={true}
      handleRedirect={handleRedirect}
    />
  );
};

export default Login;
