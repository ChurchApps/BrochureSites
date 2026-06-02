import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CookiesProvider } from "react-cookie";
import { UserProvider } from "@/context/UserContext";

// Material-UI theme (used by the login page)
const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    background: { default: "#f5f5f5" }
  }
});

const queryClient = new QueryClient();

// App-wide providers + outlet. Replaces the old App.tsx provider stack.
// EnvironmentHelper (and the @churchapps/apphelper tree it pulls in) is imported
// dynamically inside the effect so it stays out of the SSG/server module graph
// — apphelper is browser-only here. We don't block rendering on it, because
// content renders fine with the synchronously-seeded English i18n (src/i18n.ts).
const RootLayout = () => {
  useEffect(() => {
    import("@/helpers/EnvironmentHelper")
      .then(({ EnvironmentHelper }) => EnvironmentHelper.init())
      .catch(console.error);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <UserProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <Outlet />
            </TooltipProvider>
          </UserProvider>
        </ThemeProvider>
      </CookiesProvider>
    </QueryClientProvider>
  );
};

export default RootLayout;
