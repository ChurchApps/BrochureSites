import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Terms of Service - B1.Church";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-muted-foreground">Last updated: May 10, 2026</p>
          </div>

          <div className="space-y-8">
            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using B1.Church, provided by Live Church Solutions (a 501(c)(3) non-profit organization, EIN: 45-5349618), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
              </p>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                B1.Church is a free, all-in-one church management platform providing websites, mobile apps, member management, donation processing, check-in, and streaming tools. B1.Church is provided at no cost as part of our mission to support churches worldwide.
              </p>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Account Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">You are responsible for:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activity that occurs under your account</li>
                <li>Ensuring the accuracy of information you provide</li>
                <li>Complying with applicable laws regarding data you enter into the platform</li>
              </ul>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Acceptable Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Use the service for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Transmit any malicious code or content</li>
                <li>Interfere with the proper functioning of the service</li>
                <li>Use the service to send spam or unsolicited communications</li>
              </ul>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Your Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                You retain ownership of all data you enter into B1.Church. We do not claim ownership of your content, member data, or church information. You may export or delete your data at any time.
              </p>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The B1.Church name, logo, and platform design are the property of Live Church Solutions. Our software is open-source and available under the applicable license on our{" "}
                <a href="https://github.com/ChurchApps" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub repository</a>.
              </p>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                B1.Church is provided "as is" and "as available" without warranties of any kind, either express or implied. As a non-profit ministry, we strive to provide reliable service but cannot guarantee uninterrupted or error-free operation.
              </p>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, Live Church Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of B1.Church.
              </p>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Continued use of B1.Church after changes constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of the State of Oklahoma, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">If you have questions about these Terms, please contact us:</p>
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

export default Terms;
