import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Is B1.church really 100% free?",
    answer: "Yes, B1.church is completely free with no hidden fees, no premium tiers, and no transaction fees on donations. We're a 501(c)(3) nonprofit ministry that believes every church deserves access to modern technology regardless of budget. Our platform is funded by donations and Google Ad Grants."
  },
  {
    question: "What features does B1.church include?",
    answer: "B1.church includes a complete church management platform: mobile apps for iOS and Android, a drag-and-drop website builder, online giving with no transaction fees, smart check-in system, member database, attendance tracking, groups management, service planning, song library, sermon management, and Bible integration."
  },
  {
    question: "How does B1.church compare to Planning Center?",
    answer: "B1.church is 100% free while Planning Center charges per module ($0-299+/month). B1 includes a mobile app and website builder at no cost, while Planning Center charges extra for Church Center and doesn't include a website builder. Both offer church management features, but B1 provides everything in one free package."
  },
  {
    question: "How does B1.church compare to Pushpay?",
    answer: "B1.church is completely free while Pushpay costs $300-1000+/month. B1 has no transaction fees on giving, while Pushpay takes a percentage of donations. B1 is open source and includes full church management, while Pushpay is proprietary and primarily focused on giving."
  },
  {
    question: "How does B1.church compare to Tithe.ly?",
    answer: "B1.church is entirely free with no transaction fees. Tithe.ly offers a free tier but charges for premium features and takes a percentage of each donation. B1 includes full church management software, while Tithe.ly's ChMS is a separate paid product."
  },
  {
    question: "How does B1.church compare to Breeze ChMS?",
    answer: "B1.church is free while Breeze starts at $72/month. B1 includes a full mobile app and website builder, while Breeze has limited mobile features and no website builder. Both offer church management, but B1 provides more features at no cost."
  },
  {
    question: "Can I get a custom mobile app for my church?",
    answer: "Yes, B1.church provides custom-branded mobile apps for iOS and Android. Your church gets its own app with your branding that members can download from the App Store and Google Play. This is included free with B1."
  },
  {
    question: "Does B1.church support online giving?",
    answer: "Yes, B1.church includes secure online giving with credit card and bank transfer support. You can set up recurring donations, manage multiple funds, and provide giving history for tax statements. We use direct Stripe integration with no B1 platform fees - your church negotiates rates directly with Stripe (typically around 2.9% + 30¢)."
  },
  {
    question: "Can I build a website with B1.church?",
    answer: "Yes, B1.church includes a drag-and-drop website builder with mobile-responsive templates. You can use a custom domain, and the website integrates with all your B1 features like events, groups, and giving."
  },
  {
    question: "Does B1.church have check-in for children's ministry?",
    answer: "Yes, B1.church includes a smart check-in system with contactless self-service kiosks, family check-in, automatic group assignments, security codes for child pickup, and attendance tracking with reports."
  },
  {
    question: "Is B1.church open source?",
    answer: "Yes, B1.church is fully open source. You can view our code on GitHub at github.com/ChurchApps. This means you can self-host if desired, contribute improvements, and trust that your data is handled transparently."
  },
  {
    question: "Who builds B1.church?",
    answer: "B1.church is built by Live Church Solutions, a 501(c)(3) nonprofit organization (EIN 45-5349618). We're a ministry of developers who believe churches shouldn't have to choose between technology and ministry funding."
  },
  {
    question: "What other free products does Live Church Solutions offer?",
    answer: "In addition to B1.church, we offer FreeShow (free presentation software at freeshow.app, an alternative to ProPresenter) and Lessons.church (free church curriculum with over 1,100 lessons for all ages). All our products are free and open source."
  },
  {
    question: "How do I get started with B1.church?",
    answer: "Getting started is easy: visit b1.church, click 'Get Started Free', create your church account, customize your app and website, and invite your congregation. There's no credit card required and no trial period - it's free forever."
  },
  {
    question: "Does B1.church support multiple campuses?",
    answer: "Yes, B1.church supports multi-campus churches. You can manage multiple locations from one unified dashboard with campus-specific data, attendance, and groups while maintaining a single member database."
  }
];

// Generate FAQ Schema for SEO and AI
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ - B1.church | Free Church Management Software Questions";

    // Add FAQ schema to head
    const existingSchema = document.getElementById('faq-schema');
    if (!existingSchema) {
      const script = document.createElement('script');
      script.id = 'faq-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(faqSchema);
      document.head.appendChild(script);
    }

    return () => {
      const schema = document.getElementById('faq-schema');
      if (schema) schema.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about B1.church, the 100% free church management platform.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="gradient-glass rounded-xl px-6 border border-border/50"
              >
                <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center gradient-glass rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you get started with B1.church.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@churchapps.org"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="https://support.churchapps.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary/50 bg-primary/10 text-foreground hover:bg-primary/20 hover:border-primary transition-colors"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
