import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Ken Idleman, A.B. M.Div. D.D.",
    church: "",
    location: "",
    content: "I heartily recommend ChurchApps. It is a ministry in the truest and best sense of the word. ChurchApps provides technical services to enhance and elevate the church's spiritual impact in their communities. They will help the infrastructure of the Church for years to come.",
    rating: 5
  },
  {
    name: "Robert Cooper",
    church: "Friend and Kin",
    location: "",
    content: "ChurchApps helped us become more visible in our community—boosting awareness, donations, and volunteers so we can better serve families in need.",
    rating: 5
  },
  {
    name: "Theresa Hooper, CEO",
    church: "OnBoard Strategies, LLC",
    location: "Monmouth County, NJ",
    content: "ChurchApps is more than software—it's a practical tool that supports the mission, vision, and daily work of ministry. I am grateful for the opportunity to learn it, teach it, and witness how it empowers churches to operate with greater clarity, efficiency, and purpose.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 pattern-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Loved by Churches{" "}
            <span className="text-gradient">Everywhere</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join growing churches that have transformed their ministry with our completely free platform.
            Here's what pastors and church administrators have to say about B1.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">100+</div>
            <div className="text-muted-foreground">Churches Trust Us</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">Free</div>
            <div className="text-muted-foreground">Forever & Always</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="gradient-glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-primary hover:-translate-y-1 group"
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
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                {testimonial.church && <div className="text-sm text-muted-foreground">{testimonial.church}</div>}
                {testimonial.location && <div className="text-sm text-muted-foreground">{testimonial.location}</div>}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="gradient-glass rounded-2xl p-6 sm:p-8 border border-border/50 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Ready to Transform Your Church Management?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              Join the growing community of churches already using B1 - completely free forever.
              No credit card required, no trials, no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/login">
                  Get Started for Free
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
