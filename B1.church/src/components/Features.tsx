import { Button } from "@/components/ui/button";
import {
  Play,
  Users,
  CreditCard,
  CheckCircle,
  Calendar,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import communityPhoto from "@/assets/community-photo.jpg";
import givingPhoto from "@/assets/giving-photo.jpg";
import checkinPhoto from "@/assets/checkin-photo.jpg";
import heroImage from "@/assets/hero-image.jpg";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Church Community Connection",
      description: "Build deeper relationships through groups, discussions, messaging, and events. Connect members beyond Sunday services with meaningful interactions.",
      image: communityPhoto,
      phoneImage: "/community-groups-phone.png",
      phoneAlt: "B1 Church Community Groups",
      features: ["Small Groups", "Direct Messaging", "Discussion Forums", "Member Directory"],
      reverse: false,
      ctaText: "Join Community"
    },
    {
      icon: Play,
      title: "Digital Church Content Hub",
      description: "Access sermons, classroom lessons, verse of the days and full bible translations. Keep your community engaged with fresh content throughout the week.",
      image: heroImage, // Using hero image for digital content hub
      phoneImage: "/sermons-phone.png",
      phoneAlt: "B1 Church Sermons",
      features: ["Sermon Library", "Bible Integration", "Verse of the Day", "Classroom Lessons"],
      reverse: true,
      ctaText: "Browse Content"
    },
    {
      icon: CreditCard,
      title: "Online Church Giving",
      description: "Secure donations via credit/bank with recurring options and fund-specific giving. No fees from B1 - direct Stripe integration.",
      image: givingPhoto,
      phoneImage: "/giving-phone.png",
      phoneAlt: "B1 Church Digital Giving",
      features: ["Secure Payments", "Recurring Donations", "Fund Management", "Giving History"],
      reverse: false,
      ctaText: "Start Giving"
    },
    {
      icon: CheckCircle,
      title: "Church Check-in Platform",
      description: "Contactless service check-in with family management and automatic group assignment. Streamline attendance tracking.",
      image: checkinPhoto,
      phoneImage: "/checkin-phone.png",
      phoneAlt: "B1 Church Check-in Complete",
      features: ["Contactless Check-in", "Family Management", "Auto Group Assignment", "Attendance Reports"],
      reverse: true,
      ctaText: "Try Check-in"
    }
  ];

  return (
    <section id="features" className="py-0">
      {features.map((feature, index) => (
        <div key={index} className="relative min-h-screen flex items-center">
          {/* Alternating Background - Photo vs Pattern */}
          {index % 2 === 0 ? (
            // Photo background (even indexes: 0, 2, 4...)
            feature.image && (
              <div
                className="absolute inset-0 parallax image-overlay"
                style={{
                  backgroundImage: `url(${feature.image})`,
                }}
                role="img"
                aria-label={`Background image for ${feature.title} feature`}
              />
            )
          ) : (
            // Pattern background (odd indexes: 1, 3, 5...)
            <div className="absolute inset-0 pattern-background" />
          )}

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${feature.reverse ? 'lg:grid-cols-2' : ''}`}>
              {/* Text Content */}
              <div className={`space-y-8 ${feature.reverse ? 'lg:order-2' : ''}`}>
                <div className="gradient-glass rounded-3xl p-8 md:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-glow">
                      <feature.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold">{feature.title}</h2>
                    </div>
                  </div>

                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    {feature.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="gradient" size="lg" className="group" asChild>
                    <Link to="/login#register">
                      {feature.ctaText}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Mobile App Screenshots */}
              <div className={`${feature.reverse ? 'lg:order-1' : ''}`}>
                <div className="relative max-w-sm mx-auto">
                  {/* Phone Frame with App Screenshot */}
                  <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl card-hover">
                    <div className="bg-black rounded-[2.5rem] overflow-hidden">
                      <img
                        src={feature.phoneImage}
                        alt={feature.phoneAlt}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Floating Badge - Only on first phone */}
                  {index === 0 && (
                    <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Mobile First
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Final CTA Section */}
      <div className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 parallax image-overlay"
          style={{
            backgroundImage: `url(${givingPhoto})`,
          }}
          role="img"
          aria-label="Church giving and stewardship background"
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="gradient-glass rounded-3xl p-12 md:p-16 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to Build Stronger
              <span className="text-gradient block">Church Community?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your church with our comprehensive free platform designed to deepen relationships and strengthen church communities through modern technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="gradient" size="xl" className="shadow-glow" asChild>
                <Link to="/login#register">Get Started Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;