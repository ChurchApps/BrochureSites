import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import LocaleLink from "@/components/LocaleLink";
import { FEATURE_PAGES } from "@/constants/pages";
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
              {FEATURE_PAGES.filter((p) => p.key !== "about").map((p) => (
                <li key={p.key}><LocaleLink to={`/${p.slug}`} className="text-ink-muted hover:text-ink-foreground transition-colors">{t(`brochure.pages.${p.key}.name`)}</LocaleLink></li>
              ))}
              <li><LocaleLink to="/church-management" className="text-ink-muted hover:text-ink-foreground transition-colors">{t("brochure.header.churchManagement")}</LocaleLink></li>
              <li><LocaleLink to="/compare" className="text-ink-muted hover:text-ink-foreground transition-colors">{t("brochure.compare.hubTitle")}</LocaleLink></li>
              <li><LocaleLink to="/faq" className="text-ink-muted hover:text-ink-foreground transition-colors">{t("brochure.footer.faq")}</LocaleLink></li>
              <li><a href="https://churchapps.org/" target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-ink-foreground transition-colors">{t("brochure.footer.aboutChurchApps")}</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-ink-foreground">{t("brochure.footer.appsAndResources")}</h3>
            <ul className="space-y-3">
              <li><LocaleLink to="/church-app" className="text-ink-muted hover:text-ink-foreground transition-colors">{t("brochure.footer.installApp")}</LocaleLink></li>
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
            <LocaleLink to="/about" className="text-ink-muted hover:text-ink-foreground transition-colors text-sm">{t("brochure.pages.about.name")}</LocaleLink>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
