import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { LANG_HOME_REGEX } from "@/constants/languages";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Github
} from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const { localePath } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (!LANG_HOME_REGEX.test(location.pathname)) {
      // Navigate to home first, then scroll
      navigate(localePath("/"));
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on home, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer id="contact" className="bg-ink text-ink-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src="/b1-church-header-logo.png"
                alt="B1 Church"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-ink-muted leading-relaxed">
              {t("brochure.footer.companyDescription")}
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-ink-muted hover:text-ink-foreground hover:bg-white/10" asChild>
                <a href="https://www.facebook.com/churchapps.org" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-ink-muted hover:text-ink-foreground hover:bg-white/10" asChild>
                <a href="https://twitter.com/ChurchApps_org" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-ink-muted hover:text-ink-foreground hover:bg-white/10" asChild>
                <a href="https://www.linkedin.com/in/micheal-byrd-ab4927179/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-ink-muted hover:text-ink-foreground hover:bg-white/10" asChild>
                <a href="https://www.youtube.com/@ChurchApps_org" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-ink-muted hover:text-ink-foreground hover:bg-white/10" asChild>
                <a href="https://github.com/ChurchApps" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-ink-foreground">{t("brochure.footer.product")}</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection("features")} className="text-ink-muted hover:text-ink-foreground transition-colors text-left">{t("brochure.footer.mobileFeatures")}</button></li>
              <li><button onClick={() => scrollToSection("siteBuilder")} className="text-ink-muted hover:text-ink-foreground transition-colors text-left">{t("brochure.footer.websiteBuilder")}</button></li>
              <li><button onClick={() => navigate(localePath("/church-management"))} className="text-ink-muted hover:text-ink-foreground transition-colors text-left">{t("brochure.header.churchManagement")}</button></li>
              <li><button onClick={() => navigate(localePath("/faq"))} className="text-ink-muted hover:text-ink-foreground transition-colors text-left">{t("brochure.footer.faq")}</button></li>
              <li><a href="https://churchapps.org/" target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-ink-foreground transition-colors">{t("brochure.footer.aboutChurchApps")}</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-ink-foreground">{t("brochure.footer.appsAndResources")}</h3>
            <ul className="space-y-3">
              <li><button onClick={() => navigate(localePath("/faq"))} className="text-ink-muted hover:text-ink-foreground transition-colors text-left">{t("brochure.footer.installApp")}</button></li>
              <li><a href="https://support.churchapps.org/" target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-ink-foreground transition-colors">{t("brochure.footer.helpCenter")}</a></li>
              <li><a href="https://freeshow.app/" target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-ink-foreground transition-colors">FreeShow</a></li>
              <li><a href="https://lessons.church/" target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-ink-foreground transition-colors">Lessons.church</a></li>
              <li><a href="https://github.com/ChurchApps" target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-ink-foreground transition-colors">GitHub</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-ink-foreground">{t("brochure.footer.contact")}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-ink-muted" />
                <span className="text-ink-muted">support@churchapps.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-ink-muted" />
                <span className="text-ink-muted">918-994-2638</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-ink-muted" />
                <span className="text-ink-muted">{t("brochure.footer.availableWorldwide")}</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ink-muted/70 text-sm">
            © {new Date().getFullYear()} Live Church Solutions. A 501(c)(3) non-profit ministry (EIN: 45-5349618).
          </p>
          <div className="flex items-center gap-6">
            <a href="https://churchapps.org/privacy" target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-ink-foreground transition-colors text-sm">Privacy Policy</a>
            <a href="https://churchapps.org/terms" target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-ink-foreground transition-colors text-sm">Terms of Service</a>
            <a href="https://churchapps.org/about" target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-ink-foreground transition-colors text-sm">About</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
