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
import { ADMIN_LOGIN_URL, ADMIN_REGISTER_URL, DEMO_URL } from "@/constants/externalUrls";

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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <LocaleLink to="/" className="flex items-center">
            <img
              src="/b1-church-logo.png"
              alt="B1 Church - Free Church Management Platform Logo"
              className="h-8 w-auto"
              width="auto"
              height="32"
            />
          </LocaleLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("products")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {t("brochure.header.features")}
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {t("brochure.header.pricing")}
            </button>
            <LocaleLink to="/church-management" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              {t("brochure.header.churchManagement")}
            </LocaleLink>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {t("brochure.header.demo")}
            </a>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {t("brochure.header.about")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {t("brochure.header.contact")}
            </button>
            <LanguageSwitcher />
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" asChild>
              <a href={ADMIN_LOGIN_URL}>{t("brochure.header.signIn")}</a>
            </Button>
            <Button
              size="lg"
              asChild
              onClick={() => trackChurchSignup("header_cta")}
            >
              <a href={ADMIN_REGISTER_URL}>{t("brochure.header.getStartedFree")}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("products")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left"
              >
                {t("brochure.header.features")}
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left"
              >
                {t("brochure.header.pricing")}
              </button>
              <LocaleLink
                to="/church-management"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {t("brochure.header.churchManagement")}
              </LocaleLink>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {t("brochure.header.demo")}
              </a>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left"
              >
                {t("brochure.header.about")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left"
              >
                {t("brochure.header.contact")}
              </button>
              <LanguageSwitcher />
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start" asChild>
                  <a href={ADMIN_LOGIN_URL}>{t("brochure.header.signIn")}</a>
                </Button>
                <Button
                  asChild
                  onClick={() => trackChurchSignup("mobile_header_cta")}
                >
                  <a href={ADMIN_REGISTER_URL}>{t("brochure.header.getStartedFree")}</a>
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
