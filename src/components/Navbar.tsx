import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "flight-enquiry", label: "Flights" },
    { id: "hotel-enquiry", label: "Hotels" },
    { id: "cruise-enquiry", label: "Cruises" },
    { id: "villa-enquiry", label: "Villa" },
    { id: "packages", label: "Packages" },
    { id: "videos", label: "Videos" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" },
  ];

  const isWhiteBackground = currentPage !== "home" || isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isWhiteBackground
          ? "bg-white/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer flex-shrink-0"
            onClick={() => onNavigate("home")}
          >
            <img
              src={logo}
              alt="Arihant Tours Logo"
              className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />

            <div className="flex flex-col leading-tight">
              <span
                className={`text-lg sm:text-2xl font-extrabold tracking-wide transition-colors duration-300 ${
                  isWhiteBackground
                    ? "text-orange-600"
                    : "text-white drop-shadow-lg"
                }`}
              >
                Arihant <span className="text-orange-500">Tours</span>
              </span>
              <span
                className={`text-xs sm:text-sm block ${
                  isWhiteBackground
                    ? "text-gray-600"
                    : "text-gray-200 opacity-90"
                }`}
              >
                Your Journey, Our Care
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm xl:text-base font-medium transition-all duration-300 relative group whitespace-nowrap ${
                  currentPage === item.id
                    ? "text-orange-600"
                    : isWhiteBackground
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-white hover:text-orange-200"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-orange-600 transition-all duration-300 ${
                    currentPage === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}

            <button
              onClick={() => onNavigate("contact")}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 xl:px-6 py-2 xl:py-2.5 rounded-full font-medium hover:shadow-xl hover:scale-105 transform transition-all duration-300 text-sm xl:text-base whitespace-nowrap"
            >
              Book Now
            </button>
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isWhiteBackground ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t shadow-lg">
          <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? "bg-orange-50 text-orange-600 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => {
                onNavigate("contact");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
