import { Shield, CheckCircle } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center space-x-3 mb-8">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Terms & Conditions
              </h1>
              <p className="text-gray-600 mt-1">Last updated: October 2025</p>
            </div>
          </div>

          <div className="prose prose-orange max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using the services provided by Arihant Tours,
                you acknowledge that you have read, understood, and agree to be
                bound by these Terms and Conditions. If you do not agree with
                any part of these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Booking and Payment
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    All bookings are subject to availability and confirmation by
                    Arihant Tours.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Full payment or a deposit as specified must be received to
                    confirm your booking.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Prices are subject to change without notice until full
                    payment is received.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Payment can be made via credit card, debit card, bank
                    transfer, or other approved methods.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Cancellation and Refund Policy
              </h2>
              <div className="bg-orange-50 p-6 rounded-xl mb-4">
                <h3 className="font-bold text-gray-900 mb-3">
                  Cancellation by Customer:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• More than 30 days before departure: 75% refund</li>
                  <li>• 15-30 days before departure: 50% refund</li>
                  <li>• 7-14 days before departure: 25% refund</li>
                  <li>• Less than 7 days before departure: No refund</li>
                </ul>
              </div>
              <p className="text-gray-700">
                Arihant Tours reserves the right to cancel or modify tours due
                to unforeseen circumstances. In such cases, we will provide a
                full refund or offer alternative arrangements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Travel Documents
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                It is the customer's responsibility to ensure they have valid
                passports, visas, and all required travel documents. Arihant
                Tours can provide assistance but is not responsible for any
                delays or denied entry due to improper documentation.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-red-800 font-medium">
                  Important: Ensure your passport is valid for at least 6 months
                  beyond your travel dates.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Travel Insurance
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We strongly recommend that all travelers purchase comprehensive
                travel insurance covering medical expenses, trip cancellation,
                baggage loss, and other unforeseen events. Arihant Tours is not
                liable for any costs incurred due to lack of insurance coverage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Health and Safety
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Customers must inform us of any medical conditions,
                    disabilities, or dietary requirements.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Customers are responsible for obtaining necessary
                    vaccinations and health precautions.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Follow all safety instructions provided by tour guides and
                    local authorities.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Arihant Tours acts as an intermediary between customers and
                service providers (airlines, hotels, cruise lines, etc.). While
                we strive to ensure quality services, we are not liable for any
                acts, errors, omissions, or negligence of these third-party
                providers. Our liability is limited to the amount paid for the
                services booked.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Force Majeure
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Arihant Tours is not responsible for failure to perform services
                due to circumstances beyond our control, including but not
                limited to natural disasters, war, terrorism, epidemics,
                strikes, or government restrictions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Behavior and Conduct
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Customers are expected to conduct themselves in a responsible
                manner. Arihant Tours reserves the right to terminate services
                to any customer whose behavior is deemed detrimental to the
                safety, comfort, or enjoyment of other travelers, with no refund
                provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Changes to Itinerary
              </h2>
              <p className="text-gray-700 leading-relaxed">
                While every effort is made to adhere to the planned itinerary,
                Arihant Tours reserves the right to make changes due to weather,
                operational requirements, or other unforeseen circumstances. We
                will make every effort to provide suitable alternatives.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Complaints and Disputes
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Any complaints should be reported immediately to our tour
                representative or customer service team. If not resolved during
                the trip, written complaints must be submitted within 30 days of
                return. All disputes are subject to the jurisdiction of Mumbai,
                Maharashtra courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Privacy and Data Protection
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We respect your privacy and handle your personal information in
                accordance with our Privacy Policy. By using our services, you
                consent to the collection and use of your information as
                described.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                13. Contact Information
              </h2>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
                <p className="text-gray-700 mb-3">
                  For any questions regarding these Terms and Conditions, please
                  contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Email:</strong> info@arihanttours.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 98765 43210
                  </p>
                  <p>
                    <strong>Address 1:</strong> Branch 1: Shop no. 5, Near IDBI
                    Somwariya, Jaora, MP 457226, India
                  </p>
                  <p>
                    <strong>Address 2:</strong> Branch 2: Shop no. 10, Chhajed
                    Market, Chandani Chowk, Ratlam, MP 457001, India
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-gray-100 p-6 rounded-xl mt-8">
              <p className="text-sm text-gray-600 italic">
                By proceeding with a booking, you acknowledge that you have read
                and agreed to these Terms and Conditions. Arihant Tours reserves
                the right to update these terms at any time. Continued use of
                our services constitutes acceptance of any modifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
