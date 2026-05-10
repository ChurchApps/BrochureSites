import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocaleLink from "@/components/LocaleLink";

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "About - B1.Church";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">B1.Church</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Free tools for churches, built by a ministry for ministries.
            </p>
          </div>

          <div className="space-y-8">
            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                B1.Church is a ministry of <strong className="text-foreground">Live Church Solutions</strong>, a 501(c)(3) non-profit organization (EIN: 45-5349618). We exist to free the church from software costs so they can focus on what matters most — ministry and making disciples.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that every church, regardless of size or budget, should have access to professional-quality tools. That's why everything we build is 100% free.
              </p>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">What is B1.Church?</h2>
              <p className="text-muted-foreground leading-relaxed">
                B1.Church is a free, all-in-one church management platform. It provides everything a church needs in one place: custom websites, mobile apps, member management, online giving, check-in, volunteer scheduling, live streaming integration, and more — all completely free.
              </p>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">How Can This Be Free?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Live Church Solutions is funded by the generous support of partner churches and individual donors. We are a volunteer-driven ministry where developers, designers, and church leaders contribute their time and skills to serve the body of Christ.
              </p>
              <p className="text-muted-foreground leading-relaxed italic">
                "Freely you have received; freely give." — Matthew 10:8
              </p>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Our Apps</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">B1.Church is part of the ChurchApps family of free tools for churches:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong className="text-foreground">B1.Church</strong> — Church management, websites, and mobile apps</li>
                <li><a href="https://lessons.church" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Lessons.church</a> — Free church curriculum</li>
                <li><a href="https://freeshow.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">FreeShow</a> — Presentation software for churches</li>
                <li><a href="https://freeplay.church" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">FreePlay</a> — Curriculum and media on TV platforms</li>
              </ul>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Non-Profit Status</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">Live Church Solutions is a registered 501(c)(3) tax-exempt organization.</p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li><strong className="text-foreground">EIN:</strong> 45-5349618</li>
                <li><strong className="text-foreground">Location:</strong> Broken Arrow, Oklahoma</li>
                <li><strong className="text-foreground">Mail:</strong> P.O. Box 1553, Broken Arrow, OK 74013</li>
              </ul>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">There are several ways you can support our mission:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><a href="https://churchapps.org/partner" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Partner with us</a> — financially support our ministry</li>
                <li><a href="https://github.com/ChurchApps" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Contribute code</a> — all our projects are open-source</li>
                <li>Spread the word — tell other churches about free tools available to them</li>
              </ul>
            </section>

            <section className="gradient-glass rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
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

export default About;
