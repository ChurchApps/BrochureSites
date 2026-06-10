import { Star, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocaleLink from "@/components/LocaleLink";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

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
    <section id="testimonials" className="bg-surface-tint py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title={
              <>
                {t("brochure.testimonials.title")}{" "}
                <span className="text-primary">{t("brochure.testimonials.titleHighlight")}</span>
              </>
            }
            lead={t("brochure.testimonials.subtitle")}
          />
        </Reveal>

        {/* Stats */}
        <div className="mx-auto mt-14 mb-16 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-1 text-3xl font-extrabold tabular-nums tracking-tight text-foreground md:text-4xl">{t("brochure.testimonials.stats.churchesValue")}</div>
            <div className="text-sm text-muted-foreground">{t("brochure.testimonials.stats.churchesLabel")}</div>
          </div>
          <div className="text-center">
            <div className="mb-1 text-3xl font-extrabold tabular-nums tracking-tight text-foreground md:text-4xl">{t("brochure.testimonials.stats.freeValue")}</div>
            <div className="text-sm text-muted-foreground">{t("brochure.testimonials.stats.freeLabel")}</div>
          </div>
          <div className="text-center">
            <div className="mb-1 text-3xl font-extrabold tabular-nums tracking-tight text-foreground md:text-4xl">{t("brochure.testimonials.stats.openValue")}</div>
            <div className="text-sm text-muted-foreground">{t("brochure.testimonials.stats.openLabel")}</div>
          </div>
          <div className="text-center">
            <div className="mb-1 text-3xl font-extrabold tabular-nums tracking-tight text-foreground md:text-4xl">{t("brochure.testimonials.stats.languagesValue")}</div>
            <div className="text-sm text-muted-foreground">{t("brochure.testimonials.stats.languagesLabel")}</div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="card-elevated group flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
                    {/* Quote Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <Quote className="h-8 w-8 text-primary/40" />
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <p className="mb-6 flex-grow leading-relaxed text-foreground/80">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="mt-auto border-t border-border pt-4">
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
        <div className="mt-16 text-center">
          <LocaleLink
            to="/compare"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            {t("brochure.testimonials.compareLink")}
            <ArrowRight className="h-4 w-4" />
          </LocaleLink>
          <div className="card-elevated mx-auto mt-6 max-w-3xl rounded-2xl p-6 sm:p-8">
            <h3 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">
              {t("brochure.testimonials.ctaTitle")}
            </h3>
            <p className="mb-6 text-sm text-muted-foreground sm:text-base">
              {t("brochure.testimonials.ctaDescription")}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
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
