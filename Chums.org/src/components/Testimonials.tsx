import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Pastor Daniel Webster",
    church: "Believers Bible Assembly",
    location: "Kumasi, Ghana",
    content: "We use CHUMS every Sunday to track attendance and keep records of everyone who attends, including our Sunday school children. As missionaries with a limited budget, we appreciate that CHUMS is free and effective.",
    rating: 5
  },
  {
    name: "Theresa Fraser",
    church: "Mission of Hope Worship Center",
    location: "Orlando, FL",
    content: "CHUMS is a church saver. As a small Church with a limited budget, this software is GOD SENT and a blessing. It is user- friendly and easy to set up. Donation reports are easy to draft. In addition, the fact that data I can export to excel, makes analysis of records very simple. CHUMS has shaved off at least 25% of my Clerk’s office time. Lastly, Customer support is fast and Helpful and the response is awesome. I truly recommend CHUMS!!!",
    rating: 5
  },
  {
    name: "Maria Rodriguez",
    church: "St. Mark's Episcopal",
    location: "Phoenix, AZ",
    content: "CHUMS helped us transition to digital giving seamlessly during the pandemic. The support team was fantastic and the platform is incredibly reliable. Being free allowed us to redirect our software budget to actual ministry.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Loved by Churches{" "}
            <span className="text-gradient-primary">Everywhere</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Join growing churches that have transformed their ministry with our completely free platform.
            Here's what pastors and church administrators have to say about CHUMS.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">100+</div>
            <div className="text-foreground/70">Churches Trust Us</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">Free</div>
            <div className="text-foreground/70">Forever & Always</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">99.9%</div>
            <div className="text-foreground/70">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">24/7</div>
            <div className="text-foreground/70">Support Available</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="gradient-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="h-8 w-8 text-primary/50" />
                <div className="flex items-center space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border/30 pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-foreground/60">{testimonial.church}</div>
                <div className="text-sm text-foreground/60">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="gradient-card rounded-2xl p-8 border border-border/50 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Church Management?
            </h3>
            <p className="text-foreground/80 mb-6">
              Join the growing community of churches already using CHUMS - completely free forever.
              No credit card required, no trials, no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://app.chums.org/login?action=register">
                  Get Started for Free
                </a>
              </Button>
              <Button variant="elegant" size="lg" asChild>
                <a href="https://chumsdemo.churchapps.org/login">
                  Try Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};