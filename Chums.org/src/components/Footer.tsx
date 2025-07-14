import { Heart, Mail, Phone, MapPin } from "lucide-react";
const footerLinks = {
  Platform: [{
    name: "Features",
    href: "#features"
  }, {
    name: "Demo",
    href: "https://chumsdemo.churchapps.org/login"
  }, {
    name: "Check-in Stations",
    href: "#checkin"
  }, {
    name: "GitHub",
    href: "https://github.com/ChurchApps/ChumsApp"
  }],
  Resources: [{
    name: "Help Center",
    href: "https://support.churchapps.org/"
  },
  {
    name: "Data Import",
    href: "https://transfer.chums.org/"
  },
  {
    name: "Support",
    href: "#support"
  }],
  Ministry: [{
    name: "About Live Church Solutions",
    href: "https://churchapps.org/"
  }, {
    name: "Our Mission",
    href: "https://churchapps.org/#about"
  }, {
    name: "Partner with Us",
    href: "https://churchapps.org/partner"
  }, {
    name: "Donate",
    href: "https://churchapps.org/partner"
  }],
  Legal: [{
    name: "Privacy Policy",
    href: "https://churchapps.org/privacy"
  }, {
    name: "Terms of Service",
    href: "https://churchapps.org/privacy"
  }, {
    name: "Open Source License",
    href: "https://github.com/ChurchApps/ChumsApp/blob/main/LICENSE"
  }]
};
export const Footer = () => {
  return <footer className="bg-gradient-to-br from-muted/50 via-background to-muted/30 border-t border-border/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
        {/* Brand Section */}
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <img src="/chums-logo.png" alt="CHUMS Logo" className="h-8 w-auto" />

          </div>
          <p className="text-foreground/70 mb-6 leading-relaxed">
            Completely free, open-source church management platform provided by Live Church Solutions,
            a 501(c)(3) non-profit ministry helping churches save money and focus on ministry.
          </p>

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground/70">support@churchapps.org</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground/70">918-994-2638</span>
            </div>
          </div>
        </div>

        {/* Links Sections */}
        {Object.entries(footerLinks).map(([category, links]) => <div key={category}>
          <h4 className="font-semibold mb-4">{category}</h4>
          <ul className="space-y-3">
            {links.map(link => <li key={link.name}>
              <a href={link.href} className="text-foreground/70 hover:text-foreground transition-colors text-sm">
                {link.name}
              </a>
            </li>)}
          </ul>
        </div>)}
      </div>

      {/* Newsletter Signup */}

      {/*
      <div className="gradient-card rounded-2xl p-8 border border-border/50 mb-12">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Join Our Ministry Newsletter</h3>
          <p className="text-foreground/70 mb-6">
            Get church management tips, feature updates, and ministry insights from Live Church Solutions - completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
            <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      */}

      {/* Bottom Bar */}
      <div className="border-t border-border/30 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-foreground/60">
            <span>© 2025 Live Church Solutions. Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by a ministry, for ministries.</span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-foreground/60">All systems operational</span>
            </div>
            <div className="text-sm text-foreground/60">
              Trusted by churches everywhere
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>;
};