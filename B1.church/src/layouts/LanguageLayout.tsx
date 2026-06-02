import { Outlet } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";

// Layout for the /:lang/* branch. LanguageProvider reads the :lang route param
// and (on the client) loads that language's bundle. Children render via Outlet.
const LanguageLayout = () => (
  <LanguageProvider>
    <Outlet />
  </LanguageProvider>
);

export default LanguageLayout;
