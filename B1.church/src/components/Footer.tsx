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
  Youtube
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
    <footer id="contact" className="bg-gray-900/95 text-white backdrop-blur-md">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src="/b1-church-logo.png"
                alt="B1 Church"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t("brochure.footer.companyDescription")}
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" asChild>
                <a href="https://www.facebook.com/churchapps.org" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" asChild>
                <a href="https://twitter.com/ChurchApps_org" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" asChild>
                <a href="https://www.linkedin.com/in/micheal-byrd-ab4927179/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" asChild>
                <a href="https://www.youtube.com/@ChurchApps_org" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">{t("brochure.footer.product")}</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection("features")} className="text-gray-300 hover:text-white transition-colors text-left">{t("brochure.footer.mobileFeatures")}</button></li>
              <li><button onClick={() => scrollToSection("siteBuilder")} className="text-gray-300 hover:text-white transition-colors text-left">{t("brochure.footer.websiteBuilder")}</button></li>
              <li><button onClick={() => navigate(localePath("/faq"))} className="text-gray-300 hover:text-white transition-colors text-left">{t("brochure.footer.faq")}</button></li>
              <li><a href="https://churchapps.org/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">{t("brochure.footer.aboutChurchApps")}</a></li>
            </ul>
          </div>

          {/* Apps & Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">{t("brochure.footer.appsAndResources")}</h3>
            <ul className="space-y-3">
              <li><a href="https://play.google.com/store/apps/details?id=church.b1.mobile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">{t("brochure.footer.androidApp")}</a></li>
              <li><a href="https://apps.apple.com/us/app/b1-church/id1610587256" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">{t("brochure.footer.iosApp")}</a></li>
              <li><a href="https://support.churchapps.org/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">{t("brochure.footer.helpCenter")}</a></li>
              <li><a href="https://freeshow.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">FreeShow</a></li>
              <li><a href="https://lessons.church/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Lessons.church</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">{t("brochure.footer.contact")}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">support@churchapps.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">918-994-2638</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">{t("brochure.footer.availableWorldwide")}</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
