import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const upcomingEvents = [
    {
      date: '2024-11-26',
      title: 'Amefanya Makuu – Thanksgiving Album Launch',
      venue: 'CITAM Thika Road',
      location: 'Thika Road',
      time: 'TBA',
      attendees: 200,
      type: 'Album Launch',
      image: '/EVENTS/Amefanya-Makuu_Poster.jpg',
      status: 'Available'
    },
    {
      date: '2022-10-29',
      title: 'BREAKOUT Dj Praise Experience Vol 10',
      venue: 'Barizi Resort, Along Gataka Road',
      location: 'Gataka Road',
      time: '6pm – 10pm',
      attendees: 150,
      type: 'Gospel Experience',
      image: '/EVENTS/Breakout-Praise_Poster.jpg',
      status: 'Past Event'
    },
    {
      date: '2025-01-18',
      title: 'The Call Show',
      venue: 'MMU Radio 99.9 FM / KBR Radio 254',
      location: 'Radio Broadcast',
      time: '7pm – 10pm',
      attendees: 1000,
      type: 'Radio Show',
      image: '/EVENTS/Call-show_Poster.jpg',
      status: 'Available'
    },
    {
      date: '2024-10-27',
      title: 'Hour of Worship',
      venue: 'See Light International Ministries, Along Magadi Road',
      location: 'Magadi Road',
      time: '2pm – 4pm',
      attendees: 300,
      type: 'Worship Service',
      image: '/EVENTS/hour_of_worship poster.jpg',
      status: 'Available'
    },
    {
      date: '2023-12-29',
      title: 'FEMA 2023 Award',
      venue: 'KICC, Nairobi',
      location: 'Nairobi',
      time: 'TBA',
      attendees: 500,
      type: 'Award Ceremony',
      image: '/EVENTS/Fema_2023 Poster.jpg',
      status: 'Past Event'
    },
    {
      date: '2025-08-23',
      title: 'Jikubali Afrifest 2nd Edition – Nairobi',
      venue: 'Focus Center, Kasarani',
      location: 'Kasarani',
      time: 'TBA',
      attendees: 400,
      type: 'African Festival',
      image: '/EVENTS/Jikubali Afrifest_Poster.jpg',
      status: 'Available'
    }
  ];

  const pastEvents = [
    'FEMA 2023 Award - 500+ attendees',
    'BREAKOUT Dj Praise Experience Vol 10 - 150+ attendees',
    'Previous Album Launches - 200+ attendees',
    'Radio Shows - 1000+ listeners',
    'Worship Services - 300+ attendees',
    'Gospel Events - 250+ attendees'
  ];

  const eventTypes = ['All', 'Album Launch', 'Gospel Experience', 'Radio Show', 'Worship Service', 'Award Ceremony', 'African Festival'];

  const filteredEvents = activeFilter === 'All' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === activeFilter);

  const getEventTypeColor = (type: string) => {
    const colors = {
      'Album Launch': 'from-red-500 to-red-600',
      'Gospel Experience': 'from-red-600 to-red-700',
      'Radio Show': 'from-red-500 to-red-700',
      'Worship Service': 'from-red-500 to-red-600',
      'Award Ceremony': 'from-red-600 to-red-800',
      'African Festival': 'from-red-500 to-red-700'
    };
    return colors[type as keyof typeof colors] || 'from-red-500 to-red-700';
  };

  const getStatusColor = (status: string) => {
    return status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <div className="pt-16 sm:pt-20 px-0 sm:px-4">
      {/* Hero Section */}
      <section className="relative py-10 sm:py-20">
        <img src="/banner_img.jpg" alt="Banner" className="absolute inset-0 w-full h-48 sm:h-full object-cover z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-transparent opacity-90 z-10"></div>
        <div className="relative z-20 max-w-2xl sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-6xl font-bold text-white mb-4 sm:mb-6">
            Events & Performances
          </h1>
          <p className="text-base sm:text-xl text-gray-100 max-w-xl sm:max-w-3xl mx-auto">
            Join us at upcoming events or book DJ Kach for your special occasion
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-2xl sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-12 gap-4">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 md:mb-0">Events</h2>
            {/* Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                {eventTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
            {filteredEvents.map((event, index) => (
              <Link
                to={`/events/${index}`}
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border flex flex-col h-full no-underline"
              >
                <div className="relative h-40 sm:h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-2 sm:top-4 left-2 sm:left-4 bg-gradient-to-r ${getEventTypeColor(event.type)} text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold`}>
                    {event.type}
                  </div>
                  <div className={`absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${getStatusColor(event.status)}`}>
                    {event.status}
                  </div>
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                </div>

                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{event.title}</h3>
                  <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    <div className="flex items-center text-gray-600 text-xs sm:text-base">
                      <MapPin className="w-4 h-4 mr-2 text-red-600" />
                      <span>{event.venue} • {event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-xs sm:text-base">
                      <Clock className="w-4 h-4 mr-2 text-gray-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-xs sm:text-base">
                      <Users className="w-4 h-4 mr-2 text-gray-600" />
                      <span>{event.attendees} expected attendees</span>
                    </div>
                  </div>
                  <button 
                    className={`w-full py-2 sm:py-3 rounded-full font-semibold transition-all duration-200 ${
                      event.status === 'Available'
                        ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:scale-105'
                        : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={event.status !== 'Available'}
                  >
                    {event.status === 'Available' ? 'RSVP WITH US' : 'Past Event'}
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-10 sm:py-20 bg-gray-50">
        <div className="max-w-2xl sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">Recent Performances</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center"
              >
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium text-xs sm:text-base">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-10 sm:py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-2xl sm:max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to Book DJ Kach?</h2>
          <p className="text-base sm:text-xl text-red-100 mb-6 sm:mb-8">
            Let's make your next event unforgettable with the perfect gospel soundtrack
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:scale-105 transform transition-all duration-200 shadow-lg inline-flex items-center justify-center w-full sm:w-auto">
              <Calendar className="w-5 h-5 mr-2" />
              Check Availability
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-red-600 transition-all duration-200 inline-flex items-center justify-center w-full sm:w-auto">
              Request Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;