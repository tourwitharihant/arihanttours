import { useState } from "react";
import { Play, X, MapPin } from "lucide-react";

interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  mainVideoId: string;
  relatedVideoIds: string[];
}

export default function Videos() {
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [currentVideoId, setCurrentVideoId] = useState<string>("");

  const destinations: Destination[] = [
    {
      id: "kashmir",
      name: "Kashmir",
      country: "India",
      image:
        "https://images.pexels.com/photos/35464237/pexels-photo-35464237.jpeg?auto=compress&cs=tinysrgb&w=800",
      mainVideoId: "Sr4rIMb83mA",
      relatedVideoIds: ["pchXZ3T1t30", "D_bgCyM1nRY", "S5tGX6o84us"],
    },
    {
      id: "bali",
      name: "Bali",
      country: "Indonesia",
      image:
        "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
      mainVideoId: "3Xvp3LGfrvQ", // Bali Travel VLOG 2025 :contentReference[oaicite:1]{index=1}
      relatedVideoIds: [
        "kZ06nOhdr6Q",
        "WOoNdUjzmBI",
        "zGL7fwrUdM8",
        "Z0cRt5TvpiU",
      ],
    },
    {
      id: "goa",
      name: "Goa",
      country: "India",
      image:
        "https://images.pexels.com/photos/4428289/pexels-photo-4428289.jpeg?auto=compress&cs=tinysrgb&w=800",
      mainVideoId: "jU7ZyViNu2U", // Goa Travel Vlog – First Impressions :contentReference[oaicite:2]{index=2}
      relatedVideoIds: ["ATwrB0ln-mg", "bNjJZ5sx6OU", "17LKFGML4gw"],
    },
    {
      id: "kerala",
      name: "Kerala",
      country: "India",
      image:
        "https://images.pexels.com/photos/3370598/pexels-photo-3370598.jpeg?auto=compress&cs=tinysrgb&w=800",
      mainVideoId: "GISoFxnbb7I",
      relatedVideoIds: ["ti39UJYgc5s", "3qPGPJzscro", "-a1OcPrThps"],
    },
    {
      id: "andaman",
      name: "Andaman",
      country: "India",
      image:
        "https://images.pexels.com/photos/19736837/pexels-photo-19736837.jpeg?auto=compress&cs=tinysrgb&w=800",
      mainVideoId: "d84Klz_a39c",
      relatedVideoIds: ["dt8mBqM0ygk", "Zloizv0fQSE", "YjNApfi1BdI"],
    },
    {
      id: "singapore",
      name: "Singapore",
      country: "Singapore",
      image:
        "https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800",
      mainVideoId: "WjrSLrcm-BA", // Singapore 2025 Travel :contentReference[oaicite:3]{index=3}
      relatedVideoIds: ["px60ShWizkw", "mnE_jlgJU_k"],
    },
    {
      id: "malaysia",
      name: "Malaysia",
      country: "Malaysia",
      image:
        "https://images.pexels.com/photos/908055/pexels-photo-908055.jpeg?auto=compress&cs=tinysrgb&w=800",
      mainVideoId: "9g3lVBXwTqM", // Best Places in Asia (includes Malaysia) :contentReference[oaicite:4]{index=4}
      relatedVideoIds: ["0TwTizmeXLo", "mzmc0m2IZnM", "ks5RhTuD2BE"],
    },
    {
      id: "thailand",
      name: "Thailand",
      country: "Thailand",
      image:
        "https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=800",
      mainVideoId: "tGDSNd7lsVY", // Southeast Asia travel includes Thailand :contentReference[oaicite:5]{index=5}
      relatedVideoIds: ["jOEzMTNrrd4", "SadzfrxVuF0", "BWqB7KGHTq4"],
    },
    {
      id: "sri-lanka",
      name: "Sri Lanka",
      country: "Sri Lanka",
      image:
        "https://images.pexels.com/photos/57457/parade-local-trumpet-musician-ritual-57457.jpeg?auto=compress&cs=tinysrgb&w=800",
      mainVideoId: "7h4wud3HMZQ", // Related to Vietnam/Asia playlist :contentReference[oaicite:6]{index=6}
      relatedVideoIds: ["uiC8EGNC1EY", "frm7pr4nUao", "NGoCQ3HyxQs"],
    },
    {
      id: "usa",
      name: "USA",
      country: "United States",
      image:
        "https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=800",
      mainVideoId: "u43YRqJndB4", // Travel experiences including Hong Kong/Thailand etc. :contentReference[oaicite:7]{index=7}
      relatedVideoIds: ["F91cyK7XqJE", "dlzFFBJGDCg"],
    },
    {
      id: "hong-kong",
      name: "Hong Kong",
      country: "Hong Kong",
      image:
        "https://images.pexels.com/photos/3999943/pexels-photo-3999943.jpeg?auto=compress&cs=tinysrgb&w=800",
      mainVideoId: "2OlnG-GMSpI", // same as top multi-country travel :contentReference[oaicite:8]{index=8}
      relatedVideoIds: ["wlE3x_DuSd8", "K8DhtlIsfAY", "gYO1uk7vIcc"],
    },
    {
      id: "turkey",
      name: "Turkey",
      country: "Turkey",
      image:
        "https://images.pexels.com/photos/3185493/pexels-photo-3185493.jpeg?auto=compress&cs=tinysrgb&w=800",
      mainVideoId: "2vqvBzb0xJY", // from SE Asia/travel playlist :contentReference[oaicite:9]{index=9}
      relatedVideoIds: ["oXSyayBPHhI", "_zNoSdIk_0I", "aWa_Sd_IBME"],
    },
    {
      id: "vietnam",
      name: "Vietnam",
      country: "Vietnam",
      image:
        "https://images.pexels.com/photos/2796627/pexels-photo-2796627.jpeg?auto=compress&cs=tinysrgb&w=800",
      mainVideoId: "HjNyj2q_FVU", // part of SE Asia playlist :contentReference[oaicite:10]{index=10}
      relatedVideoIds: [
        "GimGRNGTt2Y",
        "wk4lP5t-Sw0",
        "nBdrgGJsCJo",
        "KuKHih_QwhM",
      ],
    },
    {
      id: "greece",
      name: "Greece",
      country: "Greece",
      image:
        "https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=800",
      mainVideoId: "xg-TrT569lc",
      relatedVideoIds: ["j6GQjc3mFQk", "7t_VD6_1AGY", "4zAEDLwl9HI"],
    },
    {
      id: "spain",
      name: "Spain",
      country: "Spain",
      image:
        "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=800",
      mainVideoId: "L5JORXmV_A0", // Best Asia travel compilation :contentReference[oaicite:11]{index=11}
      relatedVideoIds: ["qrm4uAYKHTk", "fQw_reiChaE", "8cE5JXU8YmQ"],
    },
    {
      id: "amarnath",
      name: "Amarnath Yatra",
      country: "India",
      image:
        "https://images.pexels.com/photos/17905659/pexels-photo-17905659.jpeg?auto=compress&cs=tinysrgb&w=800",
      mainVideoId: "QhiAGkizqRY",
      relatedVideoIds: ["b9bC4KGg4EI", "zyCMSAYdDR0"],
    },
    {
      id: "bada-char-dham",
      name: "Bada Char Dham",
      country: "India",
      image:
        "https://images.pexels.com/photos/11354923/pexels-photo-11354923.jpeg?auto=compress&cs=tinysrgb&w=800",
      mainVideoId: "EuRs_GP29Lo",
      relatedVideoIds: ["Bkv7RIVf8M4", "e8912oRRj30"],
    },
  ];

  const openVideo = (destination: Destination) => {
    setSelectedDestination(destination);
    setCurrentVideoId(destination.mainVideoId);
  };

  const closeModal = () => {
    setSelectedDestination(null);
    setCurrentVideoId("");
  };

  const handleRelatedVideoClick = (videoId: string) => {
    setCurrentVideoId(videoId);
  };

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Destination Videos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/85 to-orange-400/85"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-4 border border-white/20">
            <Play className="h-4 w-4 text-white" />
            <span className="text-white text-sm sm:text-base font-medium">
              Video Gallery
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-snug">
            Explore Destinations
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200">
            Watch stunning videos of the world&apos;s most beautiful places
          </p>
        </div>
      </section>

      {/* ===== GRID SECTION ===== */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-3 sm:mb-4">
              <MapPin className="h-4 w-4 text-orange-600" />
              <span className="text-orange-600 text-xs sm:text-sm font-semibold">
                VIDEO TOURS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Discover Amazing Places
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Click on any destination to watch breathtaking videos and explore
              more
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                onClick={() => openVideo(destination)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 sm:h-8 w-6 sm:w-8 text-orange-600" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-orange-600 text-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                    Watch Now
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 flex items-center text-sm sm:text-base">
                    <MapPin className="h-4 w-4 mr-1" />
                    {destination.country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VIDEO MODAL ===== */}
      {selectedDestination && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="relative w-full max-w-6xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </button>

            <div className="flex flex-col lg:grid lg:grid-cols-3">
              {/* Main Video Section */}
              <div className="lg:col-span-2">
                <div className="relative pt-[56.25%]">
                  <iframe
                    src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&rel=0`}
                    title={selectedDestination.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4 sm:p-6 bg-gray-800">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                    {selectedDestination.name}, {selectedDestination.country}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Explore the beauty and culture of {selectedDestination.name}
                  </p>
                </div>
              </div>

              {/* Related Videos */}
              <div className="bg-gray-800 p-4 sm:p-6 overflow-y-auto max-h-[70vh] sm:max-h-[80vh]">
                <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 sticky top-0 bg-gray-800 pb-2">
                  More Videos
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:space-y-4">
                  {selectedDestination.relatedVideoIds.map((videoId, index) => (
                    <div
                      key={index}
                      onClick={() => handleRelatedVideoClick(videoId)}
                      className={`group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                        currentVideoId === videoId
                          ? "ring-2 ring-orange-500"
                          : "hover:ring-2 hover:ring-gray-600"
                      }`}
                    >
                      <div className="relative aspect-video">
                        <img
                          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                          alt={`Video ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                          <div className="bg-white/90 p-2 rounded-full">
                            <Play className="h-4 w-4 text-orange-600" />
                          </div>
                        </div>
                      </div>
                      <div className="p-2 sm:p-3 bg-gray-700">
                        <p className="text-xs sm:text-sm text-white font-medium line-clamp-2">
                          {selectedDestination.name} - Video {index + 1}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== WHATSAPP FLOATING BUTTON ===== */}
      <a
        href="https://wa.me/916268639659"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg z-50 transition-transform duration-300 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 sm:w-7 sm:h-7"
        >
          <path d="M20.52 3.48A11.91 11.91 0 0012 0C5.38 0 .09 5.29.09 11.91a11.9 11.9 0 001.68 6.06L0 24l6.24-1.63a11.89 11.89 0 005.76 1.47h.01c6.62 0 11.91-5.29 11.91-11.91a11.86 11.86 0 00-3.4-8.45zM12 21.44a9.48 9.48 0 01-4.82-1.31l-.35-.21-3.7.96.99-3.6-.23-.37A9.44 9.44 0 012.52 12C2.52 6.75 6.75 2.52 12 2.52a9.43 9.43 0 016.67 2.76A9.45 9.45 0 0121.48 12c0 5.25-4.23 9.48-9.48 9.48z" />
        </svg>
      </a>
    </div>
  );
}
