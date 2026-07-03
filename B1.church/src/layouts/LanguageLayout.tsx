import { Outlet } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";

const LanguageLayout = () => (
  <LanguageProvider>
    <Outlet />
  </LanguageProvider>
);

export default LanguageLayout;
