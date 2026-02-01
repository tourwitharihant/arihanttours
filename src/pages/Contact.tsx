import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { submitContactEnquiry } from "../utils/googleSheets";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setIsSubmitted(false);

    try {
      // 1️⃣ Save to Google Sheet
      const success = await submitContactEnquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        destination: formData.destination,
        message: formData.message,
      });

      if (!success) {
        alert("Something went wrong while saving. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // 2️⃣ Prepare data for Web3Forms email
      const emailData = {
        access_key: "55947fb9-037f-428f-bba8-1cb537cd0b1e", // Replace with your Web3Forms Access Key
        subject: "📩 New Contact Enquiry Received",
        from_name: formData.name,
        from_email: formData.email,
        message: `
          📩 New Contact Enquiry Details:

          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Destination: ${formData.destination}
          Message: ${formData.message}
        `,
      };

      // 3️⃣ Send email via Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) throw new Error("Email sending failed");

      console.log("✅ Email triggered via Web3Forms");

      // 4️⃣ Success states
      setIsSubmitting(false);
      setIsSubmitted(true);

      // 5️⃣ Reset after delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          destination: "",
          message: "",
        });
      }, 3000);
    } catch (err) {
      console.error("❌ Submission failed:", err);
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Branch 1: Shop no. 5, Near IDBI Somwariya, Jaora",
        "Jaora, MP 457226, India",
      ],
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Branch 2: Shop no. 10, Chhajed Market, Chandani Chowk",
        "Ratlam, MP 457001, India",
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 7987323660", "+91 8602413045"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["tourwitharihant@gmail.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
    },
  ];

  const popularDestinations = [
    "Santorini, Greece",
    "Bali, Indonesia",
    "Paris, France",
    "Maldives",
    "Dubai, UAE",
    "Switzerland",
    "Thailand",
    "Singapore",
    "Other",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Banner Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/85 to-orange-400/85"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Let's plan your next adventure together. We're here to help!
          </p>
        </div>
      </section>

      {/* Form + Info Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
                <Mail className="h-4 w-4 text-orange-600" />
                <span className="text-orange-600 text-sm font-semibold">
                  CONTACT FORM
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="destination"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Preferred Destination *
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select a destination</option>
                    {popularDestinations.map((dest, index) => (
                      <option key={index} value={dest}>
                        {dest}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your travel plans..."
                  ></textarea>
                </div>

                {/* ✅ Button with all 3 states */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitted
                      ? "bg-green-500 text-white"
                      : isSubmitting
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl hover:scale-105"
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="h-6 w-6" />
                      <span>Message Sent!</span>
                    </>
                  ) : isSubmitting ? (
                    <>
                      <Send className="h-5 w-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
                <MapPin className="h-4 w-4 text-orange-600" />
                <span className="text-orange-600 text-sm font-semibold">
                  CONTACT INFO
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Reach Out to Us
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions? We're here to help you plan the perfect trip.
              </p>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border-2 border-orange-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Contact Us?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Expert travel consultation",
                    "Customized itineraries",
                    "Best price guarantee",
                    "Quick response time",
                    "24/7 customer support",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Travel background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-red-900/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Our travel experts are waiting to help you create unforgettable
            memories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transform transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
            <a
              href="mailto:info@arihanttours.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-orange-600 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Email Us</span>
            </a>
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
