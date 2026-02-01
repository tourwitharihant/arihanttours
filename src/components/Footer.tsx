import {
  Plane,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const footerLinks = {
    company: [
      { label: "About Us", page: "about" },
      { label: "Contact Us", page: "contact" },
    ],
    services: [
      { label: "Tour Packages", page: "packages" },
      { label: "Flight Booking", page: "flight-enquiry" },
      { label: "Hotel Booking", page: "hotel-enquiry" },
      { label: "Cruise Booking", page: "cruise-enquiry" },
      { label: "Villa Booking", page: "villa-enquiry" },
    ],
    legal: [
      { label: "Terms & Conditions", page: "terms" },
      { label: "Privacy Policy", page: "privacy" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1FM4ntukvA/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/tourwitharihant?igsh=MXB5N2E2bzdzYTJhZA==", label: "Instagram" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2 rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Arihant Tours</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted travel partner since 2008. We specialize in creating
              unforgettable journeys to destinations around the world.
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Branch 1: Shop no. 5, Near IDBI Bank Somwariya, Jaora
                  <br />
                  Jaora, MP 457226
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Branch 2: Shop no. 10, Chhajed Market, Chandani Chowk
                  <br />
                  Ratlam, MP 457001
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a
                  href="tel:+917987323660"
                  className="text-gray-400 text-sm hover:text-orange-500 transition-colors"
                >
                  +91 7987323660, +91 8602413045, +91 9131422832
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a
                  href="mailto: tourwitharihant@gmail.com"
                  className="text-gray-400 text-sm hover:text-orange-500 transition-colors"
                >
                  tourwitharihant@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigate(link.page)}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigate(link.page)}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigate(link.page)}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm mb-2">
                © {currentYear} Arihant Tours. All rights reserved.
              </p>
              <a
                href="https://purplemindstech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300 group"
              >
                <span>Crafted with passion by</span>
                <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-300">
                  Purple Minds Tech
                </span>
                <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500 transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
