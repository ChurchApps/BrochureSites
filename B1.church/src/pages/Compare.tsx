import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";

interface ComparisonData {
  competitor: string;
  competitorLogo?: string;
  tagline: string;
  description: string;
  features: {
    name: string;
    b1: boolean | string;
    competitor: boolean | string;
  }[];
  pricing: {
    b1: string;
    competitor: string;
  };
  verdict: string;
}

const comparisons: Record<string, ComparisonData> = {
  "planning-center": {
    competitor: "Planning Center",
    tagline: "Free alternative to Planning Center",
    description: "Planning Center is a popular church management platform with modular pricing. B1.church offers similar features completely free.",
    features: [
      { name: "Member Database", b1: true, competitor: true },
      { name: "Check-in System", b1: true, competitor: "$99/mo" },
      { name: "Online Giving", b1: "No B1 fees", competitor: "Platform + Stripe fees" },
      { name: "Groups Management", b1: true, competitor: "$50/mo" },
      { name: "Service Planning", b1: true, competitor: "$14-99/mo" },
      { name: "Mobile App", b1: "Free branded app", competitor: "$0-199/mo" },
      { name: "Website Builder", b1: true, competitor: false },
      { name: "Sermon Management", b1: true, competitor: false },
      { name: "Multi-Campus", b1: true, competitor: "Extra cost" },
      { name: "Open Source", b1: true, competitor: false },
    ],
    pricing: {
      b1: "100% Free",
      competitor: "$0 - $500+/month depending on modules"
    },
    verdict: "B1.church provides all the core features of Planning Center without the modular pricing complexity. If budget is a concern, B1 is the clear choice."
  },
  "pushpay": {
    competitor: "Pushpay",
    tagline: "Free alternative to Pushpay",
    description: "Pushpay is known for mobile giving but comes with significant monthly costs and transaction fees. B1.church offers giving with zero platform fees.",
    features: [
      { name: "Online Giving", b1: "No B1 fees", competitor: "Platform + Stripe fees" },
      { name: "Recurring Donations", b1: true, competitor: true },
      { name: "Mobile App", b1: "Free branded app", competitor: "Included" },
      { name: "Member Database", b1: true, competitor: "ChMS extra" },
      { name: "Check-in System", b1: true, competitor: "Extra cost" },
      { name: "Website Builder", b1: true, competitor: false },
      { name: "Groups Management", b1: true, competitor: "Extra cost" },
      { name: "Giving Statements", b1: true, competitor: true },
      { name: "Fund Management", b1: true, competitor: true },
      { name: "Open Source", b1: true, competitor: false },
    ],
    pricing: {
      b1: "100% Free",
      competitor: "$300 - $1,000+/month"
    },
    verdict: "Pushpay is feature-rich but expensive. B1.church offers comparable giving features plus full church management at no cost. The savings can be redirected to ministry."
  },
  "tithely": {
    competitor: "Tithe.ly",
    tagline: "Free alternative to Tithe.ly",
    description: "Tithe.ly offers church giving and management tools with freemium pricing. B1.church provides everything free without transaction fees.",
    features: [
      { name: "Online Giving", b1: "No B1 fees", competitor: "Platform + Stripe fees" },
      { name: "Recurring Donations", b1: true, competitor: true },
      { name: "Mobile App", b1: "Free branded app", competitor: "$99/mo" },
      { name: "Member Database", b1: true, competitor: "$99/mo" },
      { name: "Check-in System", b1: true, competitor: "$49/mo" },
      { name: "Website Builder", b1: true, competitor: "$49/mo" },
      { name: "Groups Management", b1: true, competitor: "$99/mo" },
      { name: "Sermon Management", b1: true, competitor: "$49/mo" },
      { name: "Multi-Campus", b1: true, competitor: "Extra cost" },
      { name: "Open Source", b1: true, competitor: false },
    ],
    pricing: {
      b1: "100% Free",
      competitor: "Free tier + $49-199/mo for features"
    },
    verdict: "Tithe.ly's free tier is limited. To get full functionality, costs add up quickly. B1.church includes everything from day one with no upgrade pressure."
  },
  "breeze": {
    competitor: "Breeze ChMS",
    tagline: "Free alternative to Breeze ChMS",
    description: "Breeze is a simple church management system with straightforward pricing. B1.church offers more features at no cost.",
    features: [
      { name: "Member Database", b1: true, competitor: true },
      { name: "Giving Management", b1: "No B1 fees", competitor: "2.9% + 30¢" },
      { name: "Check-in System", b1: true, competitor: "Basic" },
      { name: "Mobile App", b1: "Free branded app", competitor: "Limited" },
      { name: "Website Builder", b1: true, competitor: false },
      { name: "Groups Management", b1: true, competitor: true },
      { name: "Event Management", b1: true, competitor: true },
      { name: "Volunteer Scheduling", b1: true, competitor: true },
      { name: "Multi-Campus", b1: true, competitor: false },
      { name: "Open Source", b1: true, competitor: false },
    ],
    pricing: {
      b1: "100% Free",
      competitor: "$72 - $135/month"
    },
    verdict: "Breeze is simple and affordable, but B1.church is simpler on the budget (free!) while offering more features like a website builder and full mobile app."
  }
};

const Compare = () => {
  const { competitor } = useParams<{ competitor: string }>();
  const data = competitor ? comparisons[competitor] : null;

  useEffect(() => {
    if (data) {
      document.title = `B1.church vs ${data.competitor} - Free Church Software Comparison`;

      // Add comparison schema
      const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `B1.church vs ${data.competitor} Comparison`,
        "description": data.description,
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "SoftwareApplication",
              "name": "B1.church",
              "applicationCategory": "BusinessApplication",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            },
            {
              "@type": "SoftwareApplication",
              "name": data.competitor,
              "applicationCategory": "BusinessApplication"
            }
          ]
        }
      };

      const existingSchema = document.getElementById('compare-schema');
      if (existingSchema) existingSchema.remove();

      const script = document.createElement('script');
      script.id = 'compare-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        const el = document.getElementById('compare-schema');
        if (el) el.remove();
      };
    }
  }, [data]);

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Comparison Not Found</h1>
          <p className="text-foreground/70 mb-8">
            Check out our available comparisons:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.keys(comparisons).map(key => (
              <Link
                key={key}
                to={`/compare/${key}`}
                className="px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-foreground"
              >
                B1 vs {comparisons[key].competitor}
              </Link>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-6 h-6 text-green-400 mx-auto" />;
    } else if (value === false) {
      return <X className="w-6 h-6 text-red-400 mx-auto" />;
    } else {
      return <span className="text-sm text-white/90">{value}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Check className="w-4 h-4" />
              <span>{data.tagline}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              B1.church vs <span className="text-gradient">{data.competitor}</span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              {data.description}
            </p>
          </div>

          {/* Pricing Comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="gradient-glass rounded-2xl p-8 border-2 border-primary">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">B1.church</h3>
                <div className="text-4xl font-bold text-primary mb-2">{data.pricing.b1}</div>
                <p className="text-foreground/70">No hidden fees, forever</p>
              </div>
            </div>
            <div className="gradient-glass rounded-2xl p-8 border border-border/50">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{data.competitor}</h3>
                <div className="text-2xl font-bold text-foreground/60 mb-2">{data.pricing.competitor}</div>
                <p className="text-foreground/70">Plus transaction fees</p>
              </div>
            </div>
          </div>

          {/* Feature Comparison Table */}
          <div className="gradient-glass rounded-2xl overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20 bg-white/5">
                    <th className="text-left p-4 font-semibold text-white">Feature</th>
                    <th className="text-center p-4 font-semibold text-primary">B1.church</th>
                    <th className="text-center p-4 font-semibold text-white">{data.competitor}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.features.map((feature, index) => (
                    <tr key={index} className="border-b border-white/10 last:border-0">
                      <td className="p-4 font-medium text-white">{feature.name}</td>
                      <td className="p-4 text-center">{renderFeatureValue(feature.b1)}</td>
                      <td className="p-4 text-center">{renderFeatureValue(feature.competitor)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Verdict */}
          <div className="gradient-glass rounded-2xl p-8 mb-16 border border-primary/30">
            <h2 className="text-2xl font-bold mb-4">Our Take</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {data.verdict}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to save your church money?</h2>
            <p className="text-foreground/70 mb-8">
              Switch to B1.church and redirect your software budget to ministry.
            </p>
            <Button variant="gradient" size="xl" className="shadow-glow" asChild>
              <Link to="/login">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Other Comparisons */}
          <div className="mt-16 pt-16 border-t border-border/30">
            <h3 className="text-xl font-semibold mb-6 text-center">Other Comparisons</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {Object.keys(comparisons)
                .filter(key => key !== competitor)
                .map(key => (
                  <Link
                    key={key}
                    to={`/compare/${key}`}
                    className="px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-foreground"
                  >
                    B1 vs {comparisons[key].competitor}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Compare;
