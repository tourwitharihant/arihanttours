import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Globe,
  Shield,
  Star,
  Sparkles,
  Award,
  Users,
  TrendingUp,
  Plane,
  Hotel,
  Ship,
  ArrowRight,
  Tag,
  Clock,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import TextType from "../components/AnimationCompo/TextType";
import DealsOfTheDay from "../components/DealsOfTheDay";

gsap.registerPlugin(ScrollTrigger);

interface LandingPageProps {
  onNavigate?: (page: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps = {}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const serviceCardsRef = useRef<HTMLDivElement[]>([]);

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const images = [
    "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg",
    "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg",
    "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg",
    "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg",
    "https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=1920",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    serviceCardsRef.current.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 45%",
              scrub: 0.5,
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const features = [
    {
      icon: Globe,
      title: "Worldwide Destinations",
      description:
        "Explore 500+ destinations across 6 continents with expert guidance",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description:
        "Travel with confidence knowing you are fully insured and protected",
    },
    {
      icon: Star,
      title: "Premium Experience",
      description:
        "Hand-picked hotels, exclusive tours, and unforgettable experiences",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "15+ years of excellence with 50,000+ satisfied travelers",
    },
  ];

  const stats = [
    { icon: Users, value: "50,000+", label: "Happy Travelers" },
    { icon: MapPin, value: "500+", label: "Destinations" },
    { icon: TrendingUp, value: "15+", label: "Years Experience" },
    { icon: Award, value: "25+", label: "Awards Won" },
  ];

  const services = [
    {
      icon: Plane,
      title: "Flight Booking",
      description:
        "Find the best deals on domestic and international flights. Compare prices across airlines and book with confidence.",
      features: ["Best Price Guarantee", "24/7 Support", "Easy Cancellation"],
      image:
        "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "flight-enquiry",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Hotel,
      title: "Hotel Booking",
      description:
        "Discover handpicked hotels, resorts, and accommodations worldwide. From budget to luxury, find your perfect stay.",
      features: [
        "Verified Reviews",
        "Instant Confirmation",
        "Free Cancellation",
      ],
      image:
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "hotel-enquiry",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Ship,
      title: "Cruise Booking",
      description:
        "Embark on unforgettable ocean adventures. Explore exotic destinations while enjoying world-class amenities onboard.",
      features: [
        "All-Inclusive Packages",
        "Premium Cabins",
        "Shore Excursions",
      ],
      image:
        "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "cruise-enquiry",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Hotel,
      title: "Villa Booking",
      description:
        "Experience luxurious private villas with personalized service and breathtaking views. Perfect for families, couples, or group getaways.",
      features: [
        "Private Pools & Beachfronts",
        "24/7 Concierge Service",
        "Exclusive Deals",
      ],
      image:
        "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "villa-enquiry",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const offers = [
    {
      title: "Early Bird Special",
      discount: "30% OFF",
      description: "Book 3 months in advance",
      validUntil: "Dec 31, 2025",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Honeymoon Package",
      discount: "25% OFF",
      description: "Special romantic getaways",
      validUntil: "Valid Year Round",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Group Travel",
      discount: "40% OFF",
      description: "Book for 10+ travelers",
      validUntil: "Limited Time",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      location: "Indore, India",
      rating: 5,
      text: "Arihant Tours made our dream vacation to Bali a reality! Every detail was perfect, from the flight bookings to the stunning resort. The team was incredibly responsive and helpful throughout our journey.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      trip: "Bali Luxury Package",
    },
    {
      name: "Piyush Verma",
      location: "Pune, India",
      rating: 5,
      text: "Outstanding service! The cruise booking was seamless and the recommendations were spot-on. We had the most amazing Mediterranean experience. Will definitely book again for our next adventure!",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200",
      trip: "Mediterranean Cruise",
    },
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      text: "Best travel agency ever! They handled everything for our family trip to Paris. The hotel was gorgeous and exactly as promised. Their attention to detail and customer care is unmatched.",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      trip: "Paris Family Tour",
    },
    {
      name: "David Martinez",
      location: "Banglore, India",
      rating: 5,
      text: "Incredible experience from start to finish! The team found us the best flight deals and the hotel exceeded our expectations. Their 24/7 support gave us peace of mind throughout our trip.",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
      trip: "Maldives Getaway",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION with Video Background */}
      <section
        className="
    relative
    h-[100vh]        /* tall mobile hero */
    sm:h-[100vh]
    md:h-screen
    overflow-hidden
    pt-24 sm:pt-0
  "
      >
        {/* Background Video - responsive YouTube Embeds */}
        <div className="absolute inset-0 bg-black overflow-hidden">
          {/* Desktop / larger screens: show main YouTube video */}
          <div className="hidden md:block absolute inset-0">
            <iframe
              className="
                absolute
                top-1/2 left-1/2
                w-[150%]
                h-[110%]
                -translate-x-1/2
                -translate-y-1/2
                pointer-events-none
              "
              src="https://www.youtube.com/embed/NGv1B3dY584?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=NGv1B3dY584&playsinline=1"
              title="Hero background - desktop"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
            />
          </div>

          {/* Mobile / small screens: show the Shorts video */}
          <div className="block md:hidden absolute inset-0">
            <iframe
              className="
                absolute
                top-1/2 left-1/2
                w-[400%]
                h-[140%]
                sm:w-[250%]
                sm:h-[120%]
                -translate-x-1/2
                -translate-y-1/2
                pointer-events-none
              "
              src="https://www.youtube.com/embed/qwU9Qp1vwK4?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&playsinline=1"
              title="Hero background - mobile short"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
            />
          </div>
        </div>

        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div> */}

        {/* Content */}
      </section>

      {/*DEALS OF THE DAY */}

      <DealsOfTheDay />

      {/* STATS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 transition-all duration-300 group"
              >
                <stat.icon className="h-10 w-10 mx-auto text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES - Interactive Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need for Your Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From flights to cruises, we've got you covered with seamless
              booking experiences
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) serviceCardsRef.current[index] = el;
                }}
                className={`group relative flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] transition-all duration-500 overflow-hidden`}
              >
                {/* IMAGE */}
                <div className="lg:w-1/2 h-80 lg:h-[26rem] overflow-hidden rounded-[2.5rem]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-[2.5rem] transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="lg:w-1/2 p-8 lg:p-14 flex flex-col justify-center">
                  {/* Icon */}
                  <div
                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span
                          className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${service.gradient}`}
                        />
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => handleNavigate(service.link)}
                    className={`inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-r ${service.gradient} px-8 py-4 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300`}
                  >
                    Book Now
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL OFFERS */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
              <Tag className="h-4 w-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">
                LIMITED TIME OFFERS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Exclusive Deals Just for You
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't miss out on these incredible savings for your next adventure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${offer.color} opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-500`}
                ></div>

                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-6">
                    <Tag className="h-8 w-8 text-orange-600" />
                    <div
                      className={`bg-gradient-to-r ${offer.color} text-white px-3 py-1 rounded-full text-sm font-bold`}
                    >
                      {offer.discount}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {offer.title}
                  </h3>

                  <p className="text-gray-600 mb-6">{offer.description}</p>

                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
                    <Clock className="h-4 w-4" />
                    <span>{offer.validUntil}</span>
                  </div>

                  <button
                    onClick={() => handleNavigate("contact")}
                    className={`w-full bg-gradient-to-r ${offer.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                  >
                    Claim Offer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
              <Star className="h-4 w-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">
                WHY CHOOSE US
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Travel with Confidence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide exceptional service and unforgettable experiences for
              every traveler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-orange-500 to-red-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
              <Star className="h-4 w-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from real travelers who trusted us with their
              journeys
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                <div className="flex">
                  {reviews.map((review, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
                        <Quote className="h-12 w-12 text-orange-500 mb-6" />

                        <div className="flex mb-6">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-6 w-6 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>

                        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                          "{review.text}"
                        </p>

                        <div className="flex items-center space-x-4">
                          <img
                            src={review.image}
                            alt={review.name}
                            className="w-16 h-16 rounded-full object-cover border-4 border-orange-100"
                          />
                          <div>
                            <h4 className="text-lg font-bold text-gray-900">
                              {review.name}
                            </h4>
                            <p className="text-gray-600">{review.location}</p>
                            <p className="text-sm text-orange-600 font-medium">
                              {review.trip}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-orange-50 transition-all duration-300 group"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-orange-600" />
            </button>

            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-orange-50 transition-all duration-300 group"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-orange-600" />
            </button>

            <div className="flex justify-center space-x-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview
                      ? "bg-orange-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Let us help you create memories that will last a lifetime. Contact
            us today and begin your journey!
          </p>
          <button
            onClick={() => handleNavigate("contact")}
            className="bg-white text-orange-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            Plan Your Trip Now
          </button>
        </div>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/916268639659"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform duration-300 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path d="M20.52 3.48A11.91 11.91 0 0012 0C5.38 0 .09 5.29.09 11.91a11.9 11.9 0 001.68 6.06L0 24l6.24-1.63a11.89 11.89 0 005.76 1.47h.01c6.62 0 11.91-5.29 11.91-11.91a11.86 11.86 0 00-3.4-8.45zM12 21.44a9.48 9.48 0 01-4.82-1.31l-.35-.21-3.7.96.99-3.6-.23-.37A9.44 9.44 0 012.52 12C2.52 6.75 6.75 2.52 12 2.52a9.43 9.43 0 016.67 2.76A9.45 9.45 0 0121.48 12c0 5.25-4.23 9.48-9.48 9.48zm5.47-7.15c-.3-.15-1.77-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.23-.66.08-.3-.15-1.26-.47-2.4-1.5-.89-.79-1.5-1.76-1.68-2.06-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.53.08-.81.38-.28.3-1.06 1.03-1.06 2.5s1.09 2.9 1.24 3.1c.15.2 2.14 3.28 5.18 4.6.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35z" />
        </svg>
      </a>
    </div>
  );
}
