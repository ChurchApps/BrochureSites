import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { trackChurchSignup } from "@/utils/analytics";
import LocaleLink from "@/components/LocaleLink";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { LANG_HOME_REGEX } from "@/constants/languages";

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { localePath } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);

    if (!LANG_HOME_REGEX.test(location.pathname)) {
      // Navigate to home page first, then scroll after a brief delay
      navigate(localePath("/"));
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-900 to-blue-700 border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/b1-church-header-logo.png"
              alt="B1 Church - Free Church Management Platform Logo"
              className="h-8 w-auto"
              width="auto"
              height="32"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-white hover:text-white/80 transition-colors"
            >
              {t("brochure.header.features")}
            </button>
            <LocaleLink to="/church-management" className="text-white hover:text-white/80 transition-colors">
              {t("brochure.header.churchManagement")}
            </LocaleLink>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-white/80 transition-colors"
            >
              {t("brochure.header.about")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-white/80 transition-colors"
            >
              {t("brochure.header.contact")}
            </button>
            <LanguageSwitcher />
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10" asChild>
              <LocaleLink to="/login">{t("brochure.header.signIn")}</LocaleLink>
            </Button>
            <Button
              className="bg-white text-blue-900 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-semibold"
              size="lg"
              asChild
              onClick={() => trackChurchSignup('header_cta')}
            >
              <LocaleLink to="/login">{t("brochure.header.getStartedFree")}</LocaleLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-white hover:text-white/80 transition-colors text-left"
              >
                {t("brochure.header.features")}
              </button>
              <LocaleLink
                to="/church-management"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-white/80 transition-colors"
              >
                {t("brochure.header.churchManagement")}
              </LocaleLink>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-white/80 transition-colors text-left"
              >
                {t("brochure.header.about")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-white/80 transition-colors text-left"
              >
                {t("brochure.header.contact")}
              </button>
              <LanguageSwitcher />
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <Button variant="ghost" className="justify-start text-white hover:text-white hover:bg-white/10" asChild>
                  <LocaleLink to="/login">{t("brochure.header.signIn")}</LocaleLink>
                </Button>
                <Button
                  className="bg-white text-blue-900 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-semibold"
                  asChild
                  onClick={() => trackChurchSignup('mobile_header_cta')}
                >
                  <LocaleLink to="/login">{t("brochure.header.getStartedFree")}</LocaleLink>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
