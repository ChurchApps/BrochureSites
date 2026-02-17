import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const { t } = useTranslation();

  const rawFaqData = t("brochure.faq.items", { returnObjects: true });
  const faqData = Array.isArray(rawFaqData) ? rawFaqData as Array<{ question: string; answer: string }> : [];

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

  useEffect(() => {
    document.title = t("brochure.faq.documentTitle");

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
              {t("brochure.faq.pageTitle")} <span className="text-gradient">{t("brochure.faq.pageTitleHighlight")}</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {t("brochure.faq.pageSubtitle")}
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
              {t("brochure.faq.stillHaveQuestions")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t("brochure.faq.supportText")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@churchapps.org"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {t("brochure.faq.contactSupport")}
              </a>
              <a
                href="https://support.churchapps.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary/50 bg-primary/10 text-foreground hover:bg-primary/20 hover:border-primary transition-colors"
              >
                {t("brochure.faq.viewDocumentation")}
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
