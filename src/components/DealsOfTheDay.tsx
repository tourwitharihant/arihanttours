import React, { useEffect, useState } from "react";
import { fetchPackages, TravelPackage } from "../utils/fetchPackages";
import { X } from "lucide-react";
import ClipLoader from "react-spinners/ClipLoader";
import ReactMarkdown from "react-markdown";

const DealsOfTheDay: React.FC = () => {
  const [deals, setDeals] = useState<TravelPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<TravelPackage | null>(null);

  useEffect(() => {
    fetchPackages()
      .then((data) => {
        // filter only deals marked TRUE / Yes
        const dealPackages = data.filter(
          (pkg) =>
            pkg["Deal of the Day"]?.toString().toLowerCase() === "true" ||
            pkg["Deal of the Day"]?.toString().toLowerCase() === "yes"
        );
        setDeals(dealPackages);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 bg-gradient-to-br from-orange-50 to-white">
        <ClipLoader color="#f97316" size={50} />
      </div>
    );
  }

  if (!deals.length) return null;

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
        🔥 Deals of the Day
      </h2>

      {/* Horizontal Scroller */}
      <div className="flex space-x-6 overflow-x-auto px-6 md:px-12 pb-6 scrollbar-hide snap-x snap-mandatory">
        {deals.map((pkg, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(pkg)}
            className="snap-center flex-shrink-0 w-72 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="h-44 overflow-hidden rounded-t-2xl">
              <img
                src={pkg["Image"] || "/placeholder.jpg"}
                alt={pkg["Package Name"]}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {pkg["Package Name"]}
              </h3>
              <p className="text-orange-600 font-bold text-lg">
                ₹{pkg["Price Per Person"]}{" "}
                <span className="text-sm text-gray-500">/person</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>

            <img
              src={selected["Image"] || "/placeholder.jpg"}
              alt={selected["Package Name"]}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {selected["Package Name"]}
            </h3>
            <p className="text-orange-600 font-semibold text-lg mb-4">
              ₹{selected["Price Per Person"]} / person
            </p>
            <div className="prose prose-orange max-w-none text-gray-700 leading-relaxed">
              <ReactMarkdown>{selected["Description"]}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DealsOfTheDay;
