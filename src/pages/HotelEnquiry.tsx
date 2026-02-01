import { useState } from "react";
import {
  Building2,
  User,
  Phone,
  MapPin,
  Calendar,
  Users,
  Star,
  CheckCircle,
  Send,
  Coffee,
  XCircle,
} from "lucide-react";
import { submitHotelEnquiry } from "../utils/googleSheets";

export default function HotelEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    area: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    starCategory: "3",
    nationality: "",
    freeCancellation: false,
    breakfastIncluded: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1️⃣ Save data to Google Sheet
    const success = await submitHotelEnquiry(formData);

    // 2️⃣ Prepare data for Web3Forms email
    const emailData = {
      access_key: "55947fb9-037f-428f-bba8-1cb537cd0b1e", // Replace with your Web3Forms access key (UUID)
      subject: "New Hotel Enquiry Received",
      from_name: formData.name,
      from_email: "tourwitharihant@gmail.com",
      message: `
        🏨 New Hotel Enquiry Details:

        Name: ${formData.name}
        Mobile: ${formData.mobile}
        Area: ${formData.area}
        Check-in: ${formData.checkIn}
        Check-out: ${formData.checkOut}
        Guests: ${formData.guests}
        Star Category: ${formData.starCategory}
        Nationality: ${formData.nationality}
        Free Cancellation: ${formData.freeCancellation ? "Yes" : "No"}
        Breakfast Included: ${formData.breakfastIncluded ? "Yes" : "No"}
      `,
    };

    // 3️⃣ Send the email via Web3Forms API
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(emailData),
      });
      console.log("✅ Email triggered via Web3Forms");
    } catch (err) {
      console.error("❌ Email trigger failed", err);
    }

    // 4️⃣ Reset form and show success
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        mobile: "",
        area: "",
        checkIn: "",
        checkOut: "",
        guests: "1",
        starCategory: "3",
        nationality: "",
        freeCancellation: false,
        breakfastIncluded: false,
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Hotel Booking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/85 to-orange-400/85"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
            <Building2 className="h-4 w-4 text-white" />
            <span className="text-white text-sm font-medium">
              Hotel Booking
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Book Your Hotel
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Find the perfect accommodation for your stay
          </p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Hotel Enquiry Form
                </h2>
                <p className="text-gray-600">
                  We'll find you the best hotel deals
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    <User className="inline h-4 w-4 mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    <Phone className="inline h-4 w-4 mr-1" />
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="area"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Area/Location *
                </label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  placeholder="e.g., Bali, Dubai, Paris"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="checkIn"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="checkOut"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    min={
                      formData.checkIn || new Date().toISOString().split("T")[0]
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    <Users className="inline h-4 w-4 mr-1" />
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                    <option value="9+">9+ Guests</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="starCategory"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    <Star className="inline h-4 w-4 mr-1" />
                    Star Category *
                  </label>
                  <select
                    id="starCategory"
                    name="starCategory"
                    value={formData.starCategory}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="2">2 Star</option>
                    <option value="3">3 Star</option>
                    <option value="4">4 Star</option>
                    <option value="5">5 Star</option>
                    <option value="luxury">Luxury/Resort</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="nationality"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Nationality *
                </label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  placeholder="e.g., Indian, American, British"
                />
              </div>

              <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Additional Preferences
                </h3>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="freeCancellation"
                    name="freeCancellation"
                    checked={formData.freeCancellation}
                    onChange={handleChange}
                    className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label
                    htmlFor="freeCancellation"
                    className="ml-3 flex items-center text-gray-700"
                  >
                    <XCircle className="h-5 w-5 mr-2 text-orange-600" />
                    Free Cancellation Required
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="breakfastIncluded"
                    name="breakfastIncluded"
                    checked={formData.breakfastIncluded}
                    onChange={handleChange}
                    className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label
                    htmlFor="breakfastIncluded"
                    className="ml-3 flex items-center text-gray-700"
                  >
                    <Coffee className="h-5 w-5 mr-2 text-orange-600" />
                    Breakfast Included
                  </label>
                </div>
              </div>

              <div className="bg-orange-50 border-2 border-orange-100 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What Happens Next?
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                    Our team will search for the best available hotels
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                    You'll receive quotes with photos and reviews within 24
                    hours
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                    Free booking assistance and best price guarantee
                  </li>
                </ul>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl hover:scale-105"
                } ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? (
                  <>
                    <span>Submitting...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="h-6 w-6" />
                    <span>Enquiry Submitted!</span>
                  </>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* ===== WHATSAPP FLOATING BUTTON ===== */}
      <a
        href="https://wa.me/916268639659" // replace with your actual WhatsApp number
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
