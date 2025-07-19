import React, { useContext, useEffect } from "react";
import { LoginPage } from "@churchapps/apphelper-login";
import { useNavigate } from "react-router-dom";
import UserContext from "@/context/UserContext";
import { ApiHelper } from "@churchapps/helpers";
import { UserInterface, PersonInterface, LoginUserChurchInterface, ChurchInterface } from "@churchapps/helpers";

const Login: React.FC = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const search = new URLSearchParams(window.location?.search);
  const jwtParam = search.get("jwt");
  const authParam = search.get("auth");

  useEffect(() => {
    ApiHelper.apiConfigs = [
      {
        keyName: "MembershipApi",
        url: "https://membershipapi.churchapps.org",
        jwt: "",
        permissions: []
      }
    ];
  }, []);

  const handleRedirect = (url: string, user: UserInterface, person: PersonInterface, userChurch: LoginUserChurchInterface) => {
    const redirectUrl = `https://${userChurch.church.subDomain}.b1.church/login?jwt=${userChurch.jwt}`
    console.log("Handle Redirect", redirectUrl)
    console.log(user, person, userChurch);
    window.location.href = redirectUrl;
  };

  return (
    <LoginPage
      context={userContext}
      jwt={jwtParam || ""}
      auth={authParam || ""}
      appName="B1"
      appUrl={window.location.origin}
      logo="/images/logo-login.png"
      showLogo={true}
      handleRedirect={handleRedirect}
    />
  );
};

export default Login;