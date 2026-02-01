import React, { useEffect, useState } from "react";
import { fetchPackages, TravelPackage } from "../utils/fetchPackages";
import ReactMarkdown from "react-markdown";
import { X } from "lucide-react"; // for close icon
import ClipLoader from "react-spinners/ClipLoader";

const Packages: React.FC = () => {
  const [packages, setPackages] = useState<TravelPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);

  useEffect(() => {
    fetchPackages()
      .then(setPackages)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh] bg-gradient-to-br from-blue-50 to-white">
        <ClipLoader color="#f97316" size={60} />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen pt-24 pb-12 px-6 md:px-12">
      {/* 👆 Added pt-24 to offset fixed navbar (adjust to pt-20 or pt-28 if needed) */}

      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-800">
        Explore Our Travel Packages ✈️
      </h2>

      {/* Packages Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedPackage(pkg)}
            className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="h-48 w-full overflow-hidden rounded-t-2xl">
              <img
                src={pkg["Image"] || "/placeholder.jpg"}
                alt={pkg["Package Name"]}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {pkg["Package Name"]}
              </h3>
              <p className="text-blue-600 font-bold text-lg">
                ₹{pkg["Price Per Person"]}{" "}
                <span className="text-sm text-gray-600">/person</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 relative overflow-y-auto max-h-[90vh]">
            {/* Close button */}
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>

            <div className="mb-4">
              <img
                src={selectedPackage["Image"] || "/placeholder.jpg"}
                alt={selectedPackage["Package Name"]}
                className="w-full h-56 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedPackage["Package Name"]}
              </h3>
              <p className="text-blue-600 font-semibold text-lg mb-4">
                ₹{selectedPackage["Price Per Person"]} / person
              </p>

              <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed">
                <ReactMarkdown>{selectedPackage["Description"]}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      )}
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
};

export default Packages;
