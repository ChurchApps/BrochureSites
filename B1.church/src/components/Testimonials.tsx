import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocaleLink from "@/components/LocaleLink";
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
import { useTranslation } from "react-i18next";

const testimonialsBase = [
  {
    name: "Ken Idleman, A.B. M.Div. D.D.",
    church: "",
    location: "",
    rating: 5
  },
  {
    name: "Robert Cooper",
    church: "Friend and Kin",
    location: "",
    rating: 5
  },
  {
    name: "Theresa Hooper, CEO",
    church: "OnBoard Strategies, LLC",
    location: "Monmouth County, NJ",
    rating: 5
  },
  {
    name: "Krista Thomason",
    church: "A New Name in Indonesia",
    location: "",
    rating: 5
  },
  {
    name: "Daniel Webster",
    church: "Believers Bible Assembly",
    location: "Kumasi, Ghana",
    rating: 5
  }
];

export const Testimonials = () => {
  const { t } = useTranslation();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const rawItems = t("brochure.testimonials.items", { returnObjects: true });
  const translatedItems = Array.isArray(rawItems) ? rawItems as Array<{ content: string }> : [];

  const testimonials = testimonialsBase.map((base, index) => ({
    ...base,
    content: translatedItems[index]?.content ?? ""
  }));

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
            {t("brochure.testimonials.title")}{" "}
            <span className="text-gradient">{t("brochure.testimonials.titleHighlight")}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("brochure.testimonials.subtitle")}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{t("brochure.testimonials.stats.churchesValue")}</div>
            <div className="text-muted-foreground">{t("brochure.testimonials.stats.churchesLabel")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{t("brochure.testimonials.stats.freeValue")}</div>
            <div className="text-muted-foreground">{t("brochure.testimonials.stats.freeLabel")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{t("brochure.testimonials.stats.uptimeValue")}</div>
            <div className="text-muted-foreground">{t("brochure.testimonials.stats.uptimeLabel")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{t("brochure.testimonials.stats.supportValue")}</div>
            <div className="text-muted-foreground">{t("brochure.testimonials.stats.supportLabel")}</div>
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
              {t("brochure.testimonials.ctaTitle")}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              {t("brochure.testimonials.ctaDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <LocaleLink to="/login">
                  {t("brochure.testimonials.ctaButton")}
                </LocaleLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
