import React from 'react';
import { Music, Mic, Settings, Users, Calendar, Camera } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Music,
      title: 'Gospel DJ Services',
      description: 'Professional gospel music mixing for all types of events and celebrations',
      features: ['Custom playlist creation', 'Live mixing', 'Request accommodations', 'Premium sound quality'],
      price: 'From $300',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Mic,
      title: 'MC & Hosting',
      description: 'Complete event hosting services with professional announcements and crowd engagement',
      features: ['Event coordination', 'Professional announcements', 'Crowd engagement', 'Seamless transitions'],
      price: 'From $200',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Settings,
      title: 'Sound System Setup',
      description: 'Professional audio equipment setup and management for any venue size',
      features: ['Equipment delivery', 'Professional setup', 'Technical support', 'Quality assurance'],
      price: 'From $150',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Users,
      title: 'Wedding Ceremonies',
      description: 'Special wedding packages with processional, ceremony, and reception music',
      features: ['Bridal consultation', 'Ceremony music', 'Reception entertainment', 'Special requests'],
      price: 'From $500',
      color: 'from-pink-500 to-pink-700'
    },
    {
      icon: Calendar,
      title: 'Church Events',
      description: 'Specialized services for church services, conferences, and religious gatherings',
      features: ['Worship integration', 'Scripture-based selections', 'Prayer support', 'Ministry collaboration'],
      price: 'From $250',
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      icon: Camera,
      title: 'Corporate Events',
      description: 'Professional entertainment for corporate functions and business celebrations',
      features: ['Brand alignment', 'Professional atmosphere', 'Client networking', 'Custom experience'],
      price: 'From $400',
      color: 'from-yellow-500 to-yellow-700'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional DJ services tailored to create memorable experiences for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">
                  {service.price}
                </span>
                <button className={`bg-gradient-to-r ${service.color} text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transform transition-all duration-200`}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Need a custom package? We're here to help create the perfect solution for your event.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-200 shadow-lg">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;