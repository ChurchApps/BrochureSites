import React from "react";
import { useCookies } from "react-cookie";
import { LoginPage } from "@churchapps/apphelper/dist/pageComponents/LoginPage";
import { EnvironmentHelper } from "../helpers/EnvironmentHelper";
import { UserHelper } from "@churchapps/apphelper/dist/helpers/UserHelper";
import { Box } from "@mui/material";
import UserContext from "@/context/UserContext";

const Login: React.FC = (props: any) => {
  const [cookies] = useCookies(["jwt"]);
  const context = React.useContext(UserContext);

  const search = new URLSearchParams(window.location?.search);
  let jwt = search.get("jwt") || cookies.jwt;
  let auth = search.get("auth");
  if (!jwt) jwt = "";
  if (!auth) auth = "";

  const getAppName = () => {
    let result = "B1";
    if (window.location.host.indexOf("streaminglive.church") > -1) result = "streamingLive";
    return result;
  }

  const getUrl = () => {
    const url = "https://{key}.b1.church".replace("{key}", UserHelper.currentUserChurch.church.subDomain) + "/login?jwt=" + UserHelper.currentUserChurch.jwt;
    return url;
  }

  const handleLogin = () => {
    window.location.href = getUrl();
  }

  return (
    <Box sx={{ backgroundColor: "#EEEEEE", minHeight: "100vh", padding: "0 15px" }}>
      <LoginPage auth={auth} context={context} jwt={jwt} appName={getAppName()} loginSuccessOverride={handleLogin} />
    </Box>
  );

};

export default Login;