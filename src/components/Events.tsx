import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      date: '2024-02-15',
      title: 'Grace Community Wedding',
      venue: 'Riverside Chapel',
      location: 'Downtown',
      time: '4:00 PM - 11:00 PM',
      attendees: 150,
      type: 'Wedding',
      image: 'https://images.pexels.com/photos/1779447/pexels-photo-1779447.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      date: '2024-02-22',
      title: 'Youth Conference 2024',
      venue: 'Faith Center Auditorium',
      location: 'Eastside',
      time: '6:00 PM - 10:00 PM',
      attendees: 300,
      type: 'Conference',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      date: '2024-03-01',
      title: 'Corporate Appreciation Night',
      venue: 'Grand Ballroom',
      location: 'City Center',
      time: '7:00 PM - 12:00 AM',
      attendees: 200,
      type: 'Corporate',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      date: '2024-03-08',
      title: 'Spring Gospel Festival',
      venue: 'Community Park',
      location: 'Westside',
      time: '2:00 PM - 8:00 PM',
      attendees: 500,
      type: 'Festival',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const pastEvents = [
    'New Year Gospel Celebration 2024',
    'Christmas Joy Concert 2023',
    'Annual Church Anniversary',
    'Summer Youth Camp',
    'Wedding Season 2023 - 25+ Events'
  ];

  const getEventTypeColor = (type: string) => {
    const colors = {
      Wedding: 'from-pink-500 to-rose-500',
      Conference: 'from-blue-500 to-indigo-500',
      Corporate: 'from-gray-600 to-gray-800',
      Festival: 'from-purple-500 to-violet-500'
    };
    return colors[type as keyof typeof colors] || 'from-gray-500 to-gray-700';
  };

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Events & Performances
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us at upcoming events or book DJ Kach for your special occasion
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
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
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h4>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                      <span className="text-sm">{event.venue} • {event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">{event.attendees} expected attendees</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-200">
                    Get Tickets
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Recent Performances</h3>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{event}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Book DJ Kach?</h3>
            <p className="text-lg mb-6 text-purple-100">
              Let's make your next event unforgettable with the perfect gospel soundtrack
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-200">
                <Calendar className="w-5 h-5 inline mr-2" />
                Check Availability
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all duration-200">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;