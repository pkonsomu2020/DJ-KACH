import React, { useState, useRef } from 'react';
import { Music, Mic, Settings, Users, Calendar, Camera, CheckCircle, Send, Radio, Tv } from 'lucide-react';
import { apiService } from '../services/api';

const Services = () => {
  const services = [
    {
      icon: Music,
      title: 'Gospel DJ Services',
      description: 'Professional gospel music mixing for all types of events and celebrations',
      features: ['Custom playlist creation', 'Live mixing', 'Request accommodations', 'Premium sound quality'],
      color: 'from-red-500 to-red-700'
    },
    {
      icon: Mic,
      title: 'MC & Hosting',
      description: 'Complete event hosting services with professional announcements and crowd engagement',
      features: ['Event coordination', 'Professional announcements', 'Crowd engagement', 'Seamless transitions'],
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: Settings,
      title: 'Sound System Setup',
      description: 'Professional audio equipment setup and management for any venue size',
      features: ['Equipment delivery', 'Professional setup', 'Technical support', 'Quality assurance'],
      color: 'from-red-600 to-red-800'
    },
    {
      icon: Users,
      title: 'Wedding Ceremonies',
      description: 'Special wedding packages with processional, ceremony, and reception music',
      features: ['Bridal consultation', 'Ceremony music', 'Reception entertainment', 'Special requests'],
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: Calendar,
      title: 'Church Events',
      description: 'Specialized services for church services, conferences, and religious gatherings',
      features: ['Worship integration', 'Scripture-based selections', 'Prayer support', 'Ministry collaboration'],
      color: 'from-red-500 to-red-700'
    },
    {
      icon: Camera,
      title: 'Corporate Events',
      description: 'Professional entertainment for corporate functions and business celebrations',
      features: ['Brand alignment', 'Professional atmosphere', 'Client networking', 'Custom experience'],
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: Radio,
      title: 'Media Services',
      description: 'Professional TV and radio presenting services for media and broadcasting',
      features: ['TV Presenter', 'Radio Presenter', 'Script preparation', 'Professional delivery'],
      color: 'from-red-500 to-red-700'
    }
  ];

  const packages = [
    {
      name: 'Basic Package',
      duration: '4 hours',
      features: [
        'Professional DJ services',
        'Basic sound system',
        'Music mixing',
        'Microphone for announcements',
        'Setup and breakdown'
      ]
    },
    {
      name: 'Premium Package',
      duration: '6 hours',
      features: [
        'Everything in Basic',
        'Enhanced sound system',
        'Wireless microphones',
        'Lighting effects',
        'MC services',
        'Music requests'
      ],
      popular: true
    },
    {
      name: 'Deluxe Package',
      duration: '8 hours',
      features: [
        'Everything in Premium',
        'Premium sound system',
        'Advanced lighting',
        'Fog machine effects',
        'Photo booth integration',
        'Custom playlist consultation'
      ]
    }
  ];

  // Booking form state - matches backend bookings table
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event_type: '',
    event_date: '',
    event_time: '',
    venue: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await apiService.submitBookingForm(formData);
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          event_type: '',
          event_date: '',
          event_time: '',
          venue: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting booking form:', error);
      setIsSubmitting(false);
    }
  };

  const formRef = useRef(null);

  // Update event type options to match service titles
  const eventTypeOptions = services.map(service => service.title);

  // Scroll and set event type when Book Now is clicked
  const handleBookNow = (eventType) => {
    setFormData((prev) => ({ ...prev, event_type: eventType }));
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Wait for state update
  };

  return (
    <div className="pt-16 sm:pt-20 px-0 sm:px-4">
      {/* Hero Section */}
      <section className="relative py-10 sm:py-20">
        <img src="/banner_img.jpg" alt="Banner" className="absolute inset-0 w-full h-48 sm:h-full object-cover z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-transparent opacity-90 z-10"></div>
        <div className="relative z-20 max-w-2xl sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-6xl font-bold text-white mb-4 sm:mb-6">
            Our Services
          </h1>
          <p className="text-base sm:text-xl text-gray-100 max-w-xl sm:max-w-3xl mx-auto">
            Professional DJ services tailored to create memorable experiences for every occasion
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-2xl sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group border flex flex-col h-full"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-2 sm:mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto">
                  <span></span>
                  <button
                    type="button"
                    onClick={() => handleBookNow(service.title)}
                    className={`bg-gradient-to-r ${service.color} text-white px-4 sm:px-6 py-2 rounded-full font-semibold hover:scale-105 transform transition-all duration-200 w-full sm:w-auto`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section ref={formRef} className="py-10 sm:py-20 bg-gray-50">
        <div className="max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Book Your Event</h2>
            {isSubmitted ? (
              <div className="text-center py-8 sm:py-12">
                <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">Your inquiry has been sent. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="event_date" className="block text-sm font-medium text-gray-700 mb-2">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      id="event_date"
                      name="event_date"
                      required
                      value={formData.event_date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="event_type" className="block text-sm font-medium text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      id="event_type"
                      name="event_type"
                      required
                      value={formData.event_type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select event type</option>
                      {eventTypeOptions.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="event_time" className="block text-sm font-medium text-gray-700 mb-2">
                      Event Time
                    </label>
                    <input
                      type="time"
                      id="event_time"
                      name="event_time"
                      value={formData.event_time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="venue" className="block text-sm font-medium text-gray-700 mb-2">
                    Venue/Location
                  </label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="Event venue or location"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us more about your event, special requests, or any questions you have..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:scale-105 transform transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 inline mr-2" />
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      {/* The entire Service Packages section has been removed as requested. */}

      {/* CTA Section */}
      <section className="py-10 sm:py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-2xl sm:max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Need a Custom Package?
          </h2>
          <p className="text-base sm:text-xl text-red-100 mb-6 sm:mb-8">
            We're here to help create the perfect solution for your event
          </p>
          <button className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:scale-105 transform transition-all duration-200 shadow-lg">
            Request Custom Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;