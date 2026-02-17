import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Index from "./pages/Index";
import Login from "./pages/Login";
import ChurchManagement from "./pages/ChurchManagement";
import FAQ from "./pages/FAQ";
import Compare from "./pages/Compare";
import NotFound from "./pages/NotFound";
import { UserProvider } from "./context/UserContext";
import { LanguageProvider } from "./context/LanguageContext";
import { EnvironmentHelper } from "./helpers/EnvironmentHelper";
import { CookiesProvider } from "react-cookie";
import LanguageRedirect from "./components/LanguageRedirect";

// Create a Material-UI theme for the login page
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

// Initialize environment and API configuration
EnvironmentHelper.init().catch(console.error);

const queryClient = new QueryClient();

const LanguageLayout = () => (
  <LanguageProvider>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/church-management" element={<ChurchManagement />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/compare/:competitor" element={<Compare />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </LanguageProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                {/* Root redirects to detected language */}
                <Route path="/" element={<LanguageRedirect />} />
                {/* Legacy routes redirect to language-prefixed versions */}
                <Route path="/login" element={<LanguageRedirect />} />
                <Route path="/church-management" element={<LanguageRedirect />} />
                <Route path="/faq" element={<LanguageRedirect />} />
                <Route path="/compare" element={<LanguageRedirect />} />
                <Route path="/compare/:competitor" element={<LanguageRedirect />} />
                {/* Language-prefixed routes */}
                <Route path="/:lang/*" element={<LanguageLayout />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </UserProvider>
      </ThemeProvider>
    </CookiesProvider>
  </QueryClientProvider>
);

export default App;
