import { useState } from "react";
import {
  Home,
  User,
  Phone,
  MapPin,
  Calendar,
  Users,
  CheckCircle,
  Send,
  DollarSign,
  BedDouble,
} from "lucide-react";
import { submitVillaEnquiry } from "../utils/googleSheets";

export default function VillaEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    location: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    bedrooms: "2",
    budgetRange: "₹10,000 - ₹20,000 / night",
    specialRequests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1️⃣ Submit to Google Sheets
    const success = await submitVillaEnquiry(formData);

    // 2️⃣ Send email notification via Web3Forms
    const emailData = {
      access_key: "55947fb9-037f-428f-bba8-1cb537cd0b1e", // replace with your Web3Forms key
      subject: "🏡 New Villa Enquiry Received",
      from_name: formData.name,
      from_email: formData.mobile,
      message: `
        Name: ${formData.name}
        Mobile: ${formData.mobile}
        Location: ${formData.location}
        Check-In: ${formData.checkIn}
        Check-Out: ${formData.checkOut}
        Guests: ${formData.guests}
        Bedrooms: ${formData.bedrooms}
        Budget: ${formData.budgetRange}
        Special Requests: ${formData.specialRequests}
      `,
    };

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(emailData),
      });
      console.log("✅ Email sent via Web3Forms");
    } catch (err) {
      console.error("❌ Email trigger failed", err);
    }

    // 3️⃣ Reset
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        mobile: "",
        location: "",
        checkIn: "",
        checkOut: "",
        guests: "2",
        bedrooms: "2",
        budgetRange: "₹10,000 - ₹20,000 / night",
        specialRequests: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/262405/pexels-photo-262405.jpeg"
          alt="Luxury Villa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-orange-400/80" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Book Your Private Villa</h1>
          <p className="text-xl text-gray-100">
            Luxury stays tailored to your comfort and privacy
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <div className="flex items-center mb-8 space-x-3">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl">
              <Home className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Villa Booking Enquiry
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <User className="inline h-4 w-4 mr-1" /> Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Phone className="inline h-4 w-4 mr-1" /> Mobile Number *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-1" /> Villa Location *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="Goa, Bali, Maldives..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" /> Check-In Date *
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" /> Check-Out Date *
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Users className="inline h-4 w-4 mr-1" /> Guests *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <BedDouble className="inline h-4 w-4 mr-1" /> Bedrooms *
                </label>
                <select
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} Bedroom{num > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <DollarSign className="inline h-4 w-4 mr-1" /> Budget Range *
              </label>
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
              >
                <option value="₹5,000 - ₹10,000 / night">
                  ₹5,000 - ₹10,000 / night
                </option>
                <option value="₹10,000 - ₹20,000 / night">
                  ₹10,000 - ₹20,000 / night
                </option>
                <option value="₹20,000 - ₹40,000 / night">
                  ₹20,000 - ₹40,000 / night
                </option>
                <option value="₹40,000+ / night">₹40,000+ / night</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Special Requests
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={4}
                placeholder="E.g., Private pool, chef service, beach access..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none resize-none"
              ></textarea>
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
                <span>Submitting...</span>
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
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/916268639659"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path d="M20.52 3.48A11.91 11.91 0 0012 0C5.38 0 .09 5.29.09 11.91a11.9 11.9 0 001.68 6.06L0 24l6.24-1.63a11.89 11.89 0 005.76 1.47h.01c6.62 0 11.91-5.29 11.91-11.91a11.86 11.86 0 00-3.4-8.45zM12 21.44a9.48 9.48 0 01-4.82-1.31l-.35-.21-3.7.96.99-3.6-.23-.37A9.44 9.44 0 012.52 12C2.52 6.75 6.75 2.52 12 2.52a9.43 9.43 0 016.67 2.76A9.45 9.45 0 0121.48 12c0 5.25-4.23 9.48-9.48 9.48z" />
        </svg>
      </a>
    </div>
  );
}
