import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Privacy Policy - B1.Church";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-muted-foreground">Last updated: May 10, 2026</p>
          </div>

          <div className="space-y-8">
            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                B1.Church is provided by Live Church Solutions, a 501(c)(3) non-profit organization (EIN: 45-5349618). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use the B1.Church platform.
              </p>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <h3 className="text-lg font-semibold text-muted-foreground mt-4 mb-2">Information You Provide</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">When you create an account or use our services, we may collect:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Name and email address</li>
                <li>Church or organization name</li>
                <li>Account login credentials</li>
                <li>Church member data you enter into the platform</li>
                <li>Content you create (websites, pages, media)</li>
              </ul>
              <h3 className="text-lg font-semibold text-muted-foreground mt-6 mb-2">Information Collected Automatically</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">When you visit our website, we may automatically collect:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Device and browser information</li>
                <li>IP address</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website or source</li>
              </ul>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide and maintain the B1.Church platform</li>
                <li>Manage your account and church data</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send updates about our services (with your consent)</li>
                <li>Improve our website and platform</li>
                <li>Analyze usage patterns to enhance user experience</li>
              </ul>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We may use third-party services that collect information, including:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Google Analytics</strong> — to understand how visitors interact with our website. You can opt out by installing the Google Analytics Opt-out Browser Add-on.</li>
                <li><strong className="text-foreground">Payment processors</strong> — if your church uses donation/giving features, payments are processed by third-party providers under their own privacy policies.</li>
                <li><strong className="text-foreground">Cloud hosting</strong> — our services are hosted on Amazon Web Services (AWS).</li>
              </ul>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect the rights and safety of our organization and users</li>
                <li>With service providers who assist in operating our services (under confidentiality agreements)</li>
              </ul>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement reasonable security measures to protect your personal information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Your Church's Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your church owns its data. You can export or delete your church's data at any time. We do not access your church's member data except when necessary for technical support at your request.
              </p>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us so we can promptly remove it.
              </p>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Export your church's data</li>
              </ul>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">If you have questions about this Privacy Policy, please contact us:</p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li>Email: <a href="mailto:support@churchapps.org" className="text-primary hover:underline">support@churchapps.org</a></li>
                <li>Phone: (918) 994-2638</li>
                <li>Mail: Live Church Solutions, P.O. Box 1553, Broken Arrow, OK 74013</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
