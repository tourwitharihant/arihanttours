import { Target, Eye, Heart, Users, Award, Plane, TrendingUp, CheckCircle, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'We live and breathe travel, bringing that passion to every journey we curate for you.',
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'Your safety and satisfaction are our top priorities in every adventure.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'We go above and beyond to ensure your travel experience exceeds expectations.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality service in every aspect of your journey.',
    },
  ];

  const milestones = [
    { year: '2008', event: 'Founded Arihant Tours', icon: Plane },
    { year: '2012', event: 'Reached 10,000 Happy Travelers', icon: Users },
    { year: '2018', event: 'Won Best Travel Agency Award', icon: Award },
    { year: '2023', event: 'Expanded to 500+ Destinations', icon: TrendingUp },
  ];

  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Amit Patel',
      role: 'Travel Experience Director',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Sneha Reddy',
      role: 'Customer Relations Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const achievements = [
    'ISO 9001:2015 Certified',
    'Member of IATA',
    'Award-winning Service',
    '24/7 Customer Support',
    'Best Price Guarantee',
    'Flexible Booking Options',
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-orange-400/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Arihant Tours
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Crafting unforgettable journeys since 2008 with passion, dedication, and expertise
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
                <Target className="h-4 w-4 text-orange-600" />
                <span className="text-orange-600 text-sm font-semibold">OUR STORY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Travel Partner
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2008, Arihant Tours began with a simple vision: to make travel accessible,
                enjoyable, and memorable for everyone. What started as a small travel agency has grown
                into a trusted name in the industry, serving over 50,000 satisfied travelers.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We specialize in creating personalized travel experiences that go beyond the ordinary.
                Our team of dedicated travel experts works tirelessly to ensure every journey is
                seamless, safe, and spectacular.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With partnerships across the globe and a commitment to excellence, we continue to set
                new standards in the travel industry, one happy traveler at a time.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Travel experience"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-orange-600 mb-1">15+</div>
                <div className="text-gray-600 font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
              <Eye className="h-4 w-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">MISSION & VISION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To inspire and enable people to explore the world by providing exceptional travel
                experiences, personalized service, and creating lasting memories that enrich lives
                and broaden perspectives.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the world's most trusted and innovative travel company, recognized for
                transforming dreams into reality and setting new benchmarks in customer satisfaction
                and sustainable tourism.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <value.icon className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="h-4 w-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">OUR JOURNEY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Milestones & Achievements
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-red-500 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 inline-block">
                      <div className="text-3xl font-bold text-orange-600 mb-2">{milestone.year}</div>
                      <div className="text-xl font-semibold text-gray-900">{milestone.event}</div>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                      <milestone.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 bg-gradient-to-br from-orange-50 to-red-50 p-10 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Our Team */}
      {/* <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
              <Users className="h-4 w-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">OUR TEAM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet the Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to making your travel dreams come true
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-200">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
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
