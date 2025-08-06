import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Filter } from 'lucide-react';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const upcomingEvents = [
    {
      date: '2024-02-15',
      title: 'Grace Community Wedding',
      venue: 'Riverside Chapel',
      location: 'Downtown',
      time: '4:00 PM - 11:00 PM',
      attendees: 150,
      type: 'Wedding',
      image: 'https://images.pexels.com/photos/1779447/pexels-photo-1779447.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Available'
    },
    {
      date: '2024-02-22',
      title: 'Youth Conference 2024',
      venue: 'Faith Center Auditorium',
      location: 'Eastside',
      time: '6:00 PM - 10:00 PM',
      attendees: 300,
      type: 'Conference',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Booked'
    },
    {
      date: '2024-03-01',
      title: 'Corporate Appreciation Night',
      venue: 'Grand Ballroom',
      location: 'City Center',
      time: '7:00 PM - 12:00 AM',
      attendees: 200,
      type: 'Corporate',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Available'
    },
    {
      date: '2024-03-08',
      title: 'Spring Gospel Festival',
      venue: 'Community Park',
      location: 'Westside',
      time: '2:00 PM - 8:00 PM',
      attendees: 500,
      type: 'Festival',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Booked'
    },
    {
      date: '2024-03-15',
      title: 'Church Anniversary Celebration',
      venue: 'New Life Church',
      location: 'Northside',
      time: '5:00 PM - 9:00 PM',
      attendees: 250,
      type: 'Church',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Available'
    },
    {
      date: '2024-03-22',
      title: 'Golden Anniversary Party',
      venue: 'Heritage Hall',
      location: 'Southside',
      time: '6:00 PM - 11:00 PM',
      attendees: 100,
      type: 'Wedding',
      image: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Available'
    }
  ];

  const pastEvents = [
    'New Year Gospel Celebration 2024 - 800+ attendees',
    'Christmas Joy Concert 2023 - 600+ attendees',
    'Annual Church Anniversary - 400+ attendees',
    'Summer Youth Camp - 300+ attendees',
    'Wedding Season 2023 - 25+ Events',
    'Corporate Holiday Parties - 15+ Events'
  ];

  const eventTypes = ['All', 'Wedding', 'Church', 'Corporate', 'Conference', 'Festival'];

  const filteredEvents = activeFilter === 'All' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === activeFilter);

  const getEventTypeColor = (type: string) => {
    const colors = {
      Wedding: 'from-red-500 to-red-600',
      Conference: 'from-gray-600 to-gray-700',
      Corporate: 'from-gray-700 to-gray-800',
      Festival: 'from-red-600 to-red-700',
      Church: 'from-red-500 to-red-700'
    };
    return colors[type as keyof typeof colors] || 'from-gray-500 to-gray-700';
  };

  const getStatusColor = (status: string) => {
    return status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20">
        <img src="/banner_img.jpg" alt="Banner" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-transparent opacity-90 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Events & Performances
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Join us at upcoming events or book DJ Kach for your special occasion
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 md:mb-0">Upcoming Events</h2>
            
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${getEventTypeColor(event.type)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {event.type}
                  </div>
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(event.status)}`}>
                    {event.status}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-red-600" />
                      <span className="text-sm">{event.venue} • {event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-gray-600" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-gray-600" />
                      <span className="text-sm">{event.attendees} expected attendees</span>
                    </div>
                  </div>

                  <button 
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${
                      event.status === 'Available'
                        ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:scale-105'
                        : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={event.status !== 'Available'}
                  >
                    {event.status === 'Available' ? 'Book Similar Event' : 'Fully Booked'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Recent Performances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Book DJ Kach?</h2>
          <p className="text-xl text-red-100 mb-8">
            Let's make your next event unforgettable with the perfect gospel soundtrack
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-200 shadow-lg inline-flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Check Availability
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-200 inline-flex items-center justify-center">
              Request Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;