import { Lock } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center space-x-3 mb-8">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600 mt-1">Last updated: October 2025</p>
            </div>
          </div>

          <div className="prose prose-orange max-w-none space-y-6 text-gray-700">
            <p className="lead text-lg">
              At Arihant Tours, we are committed to protecting your privacy and ensuring the security of your
              personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, phone number, and postal address</li>
                <li>Passport information and travel document details</li>
                <li>Payment and billing information</li>
                <li>Travel preferences and special requirements</li>
                <li>Emergency contact information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
              <p>We use your personal information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process your bookings and provide travel services</li>
                <li>Communicate with you about your travel plans</li>
                <li>Send booking confirmations and travel documents</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Improve our services and website experience</li>
                <li>Send promotional offers (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized
                access, alteration, disclosure, or destruction. All payment transactions are encrypted using
                secure SSL technology.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Sharing of Information</h2>
              <p>
                We may share your information with third-party service providers (airlines, hotels, insurance
                companies) necessary to fulfill your travel arrangements. We do not sell your personal
                information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us
                at tourwitharihant@gmail.com or +91 7987323660/+91 8602413045.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
