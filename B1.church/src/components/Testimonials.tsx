import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect, useRef } from "react";

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
  },
  {
    name: "Krista Thomason",
    church: "A New Name in Indonesia",
    location: "",
    content: "Having the donation page has increased giving to our organization. Not only do people appreciate the ease of scanning a code to take them directly to the donation page, monthly giving can be set up for those who want online giving to be easy.",
    rating: 5
  },
  {
    name: "Daniel Webster",
    church: "Believers Bible Assembly",
    location: "Kumasi, Ghana",
    content: "I like to keep attendance records, and we use B1 Admin every Sunday for that purpose. We really appreciate the service of B1 Admin, which has proven an effective way for our church to keep records of people and attendance.",
    rating: 5
  }
];

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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

        {/* Testimonials Carousel */}
        <div className="px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div
                    className="gradient-glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-primary group h-full flex flex-col"
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
                    <p className="text-foreground/80 mb-6 leading-relaxed flex-grow">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="border-t border-border/30 pt-4 mt-auto">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      {testimonial.church && <div className="text-sm text-muted-foreground">{testimonial.church}</div>}
                      {testimonial.location && <div className="text-sm text-muted-foreground">{testimonial.location}</div>}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
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
