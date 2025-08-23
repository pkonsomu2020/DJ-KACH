import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, ArrowLeft, Share2, Heart } from 'lucide-react';

const EventDetails = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);

  const events = [
    {
      id: 0,
      title: 'Amefanya Makuu – Thanksgiving Album Launch',
      date: '2024-11-26',
      time: 'TBA',
      venue: 'CITAM Thika Road',
      location: 'Thika Road',
      attendees: 200,
      type: 'Album Launch',
      image: '/EVENTS/Amefanya-Makuu_Poster.jpg',
      status: 'Available',
      description: 'Join us for the official launch of the "Amefanya Makuu" Thanksgiving Album. This special event will feature live performances, testimonies, and a celebration of God\'s faithfulness through music.',
      details: [
        'Live album performance',
        'Special guest appearances',
        'Testimony sharing',
        'Prayer and worship session',
        'Album signing and meet & greet'
      ],
      organizer: 'DJ Kach Music Ministry',
      contact: '+254 723 157-309',
      email: 'bookings@djkach.com'
    },
    {
      id: 1,
      title: 'BREAKOUT Dj Praise Experience Vol 10',
      date: '2022-10-29',
      time: '6pm – 10pm',
      venue: 'Barizi Resort, Along Gataka Road',
      location: 'Gataka Road',
      attendees: 150,
      type: 'Gospel Experience',
      image: '/EVENTS/Breakout-Praise_Poster.jpg',
      status: 'Past Event',
      description: 'The 10th edition of the BREAKOUT Dj Praise Experience was a powerful evening of gospel music, worship, and spiritual breakthrough. This event brought together gospel music lovers for an unforgettable experience.',
      details: [
        'Gospel music mixing',
        'Live worship session',
        'Prayer and intercession',
        'Youth ministry focus',
        'Community fellowship'
      ],
      organizer: 'DJ Kach Music Ministry',
      contact: '+254 723 157-309',
      email: 'bookings@djkach.com'
    },
    {
      id: 2,
      title: 'The Call Show',
      date: '2025-01-18',
      time: '7pm – 10pm',
      venue: 'MMU Radio 99.9 FM / KBR Radio 254',
      location: 'Radio Broadcast',
      attendees: 1000,
      type: 'Radio Show',
      image: '/EVENTS/Call-show_Poster.jpg',
      status: 'Available',
      description: 'Tune in to "The Call Show" featuring DJ Kach on MMU Radio 99.9 FM and KBR Radio 254. This special radio program will feature gospel music, interviews, and spiritual encouragement.',
      details: [
        'Gospel music selection',
        'Special interviews',
        'Prayer requests',
        'Scripture reading',
        'Community engagement'
      ],
      organizer: 'DJ Kach Music Ministry',
      contact: '+254 723 157-309',
      email: 'bookings@djkach.com'
    },
    {
      id: 3,
      title: 'Hour of Worship',
      date: '2024-10-27',
      time: '2pm – 4pm',
      venue: 'See Light International Ministries, Along Magadi Road',
      location: 'Magadi Road',
      attendees: 300,
      type: 'Worship Service',
      image: '/EVENTS/hour_of_worship poster.jpg',
      status: 'Available',
      description: 'Join us for "Hour of Worship" with the theme "Power in Worship" based on Psalm 96. This special worship service will focus on the transformative power of worship and praise.',
      details: [
        'Worship and praise session',
        'Scripture-based message',
        'Prayer and intercession',
        'Community fellowship',
        'Spiritual renewal'
      ],
      organizer: 'DJ Kach Music Ministry',
      contact: '+254 723 157-309',
      email: 'bookings@djkach.com'
    },
    {
      id: 4,
      title: 'FEMA 2023 Award',
      date: '2023-12-29',
      time: 'TBA',
      venue: 'KICC, Nairobi',
      location: 'Nairobi',
      attendees: 500,
      type: 'Award Ceremony',
      image: '/EVENTS/Fema_2023 Poster.jpg',
      status: 'Past Event',
      description: 'The FEMA 2023 Award ceremony was a prestigious event recognizing excellence in gospel music ministry. DJ Kach was honored for outstanding contributions to the gospel music industry.',
      details: [
        'Award presentation',
        'Gospel music performances',
        'Industry recognition',
        'Networking opportunity',
        'Celebration of excellence'
      ],
      organizer: 'FEMA Awards Committee',
      contact: '+254 723 157-309',
      email: 'bookings@djkach.com'
    },
    {
      id: 5,
      title: 'Jikubali Afrifest 2nd Edition – Nairobi',
      date: '2025-08-23',
      time: 'TBA',
      venue: 'Focus Center, Kasarani',
      location: 'Kasarani',
      attendees: 400,
      type: 'African Festival',
      image: '/EVENTS/Jikubali Afrifest_Poster.jpg',
      status: 'Available',
      description: 'Join us for the 2nd Edition of Jikubali Afrifest – Nairobi, celebrating African Strength, Style and Spirit. This vibrant festival showcases the rich culture, music, and heritage of Africa.',
      details: [
        'African music and dance performances',
        'Cultural exhibitions',
        'Fashion shows',
        'Traditional food and crafts',
        'Community celebration'
      ],
      organizer: 'DJ Kach Music Ministry',
      contact: '+254 723 157-309',
      email: 'bookings@djkach.com'
    }
  ];

  const event = events[parseInt(id || '0')] || events[0];

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
      <section className="relative py-20">
        <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-transparent opacity-90 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              to="/events"
              className="inline-flex items-center text-white hover:text-red-200 transition-colors duration-200 mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Events
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className={`bg-gradient-to-r ${getEventTypeColor(event.type)} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                  {event.type}
                </span>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(event.status)}`}>
                  {event.status}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">{event.title}</h1>
              <p className="text-lg text-gray-200 mb-6">{event.description}</p>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors duration-200 ${
                    isLiked ? 'bg-red-600 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{isLiked ? 'Liked' : 'Like'}</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors duration-200">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Event Details</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-red-300" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { 
                    weekday: 'long',
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-red-300" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-300" />
                  <span>{event.venue}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-red-300" />
                  <span>{event.attendees} expected attendees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">About This Event</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{event.description}</p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-2">
                {event.details.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Event Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Organizer</h4>
                    <p className="text-gray-600">{event.organizer}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Contact</h4>
                    <p className="text-gray-600">{event.contact}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">{event.email}</p>
                  </div>
                </div>
                
                {event.status === 'Available' && (
                  <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-full font-semibold mt-6 hover:scale-105 transform transition-all duration-200">
                    RSVP Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Interested in Similar Events?</h2>
          <p className="text-base sm:text-xl text-red-100 mb-6 sm:mb-8">
            Book DJ Kach for your own event and create unforgettable memories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:scale-105 transform transition-all duration-200 shadow-lg inline-flex items-center justify-center w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book DJ Kach
            </Link>
            <Link
              to="/events"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-red-600 transition-all duration-200 inline-flex items-center justify-center w-full sm:w-auto"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;