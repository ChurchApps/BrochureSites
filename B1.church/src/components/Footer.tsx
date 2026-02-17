import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Smartphone,
  Globe
} from "lucide-react";

// Custom Apple and Android icons as SVG components
const AppleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const AndroidIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();
  const { localePath } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (!/^\/(en|es)\/?$/.test(location.pathname)) {
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
