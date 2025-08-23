import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Music, ArrowRight, Star, Users, Award } from 'lucide-react';

const Home = () => {
  const stats = {
    events_played: 500,
    happy_clients: 1000,
    years_experience: 15,
    average_rating: 5.0
  };

  // Countdown logic for upcoming event
  const eventDate = new Date('2025-08-23T14:00:00+03:00');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  React.useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();
    return () => clearInterval(timer);
  }, []);

  // Image slider state
  const sliderImages = [
    '/Slides/slide 1.jpg',
    '/Slides/slide 2.jpg',
    '/Slides/slide 3.jpg',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3500); // 3.5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16 sm:pt-20 px-0 sm:px-4">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Fullscreen Image Slider Background */}
        {sliderImages.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`Slide ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{ zIndex: 0 }}
          />
        ))}
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-2xl sm:max-w-4xl mx-auto w-full">
          {/* Main Content */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 animate-fade-in">
              <span className="block text-white">
                DJ <span className="text-red-500">KACH</span>
              </span>
            </h1>
            <p className="text-lg sm:text-2xl lg:text-3xl font-light mb-4 sm:mb-6 animate-fade-in-delay-1">
              Gospel DJ • Music Minister • Event Specialist
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in-delay-2">
              Bringing the joy of gospel music to every celebration. 
              Professional DJ services that uplift spirits and create unforgettable moments.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-4 w-full">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book DJ Kach
            </Link>
            <Link
              to="/gallery"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-200 inline-flex items-center justify-center w-full sm:w-auto"
            >
              Listen to Mixes
            </Link>
          </div>
        </div>

        {/* Dots navigation for slider - moved to bottom */}
        <div className="absolute bottom-8 sm:bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
          {sliderImages.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${idx === currentSlide ? 'bg-red-500' : 'bg-white/40'} transition-colors duration-300`}
            ></span>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:w-1 sm:h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Upcoming Event Section */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-3xl sm:max-w-5xl mx-auto flex flex-col md:flex-row gap-6 sm:gap-8 items-center justify-center bg-white rounded-2xl shadow-lg p-4 sm:p-8">
          {/* Left: Event Details */}
          <div className="flex-1 flex flex-col items-center justify-center text-center bg-gradient-to-br from-red-500 to-red-700 rounded-2xl p-6 sm:p-10 text-white w-full">
            <div className="uppercase text-xs sm:text-sm tracking-widest mb-1 sm:mb-2">Upcoming Event</div>
            <div className="text-2xl sm:text-4xl font-extrabold mb-2 sm:mb-4">JIKUBALI AFRIFEST</div>
            <div className="text-lg sm:text-2xl font-semibold mb-1">2nd Edition – Nairobi</div>
            <div className="text-lg sm:text-2xl font-semibold mb-1">August 23rd 2025</div>
            <div className="mb-4 sm:mb-8 text-base sm:text-lg">Venue: FOCUS CENTER, KASARANI</div>
            <div className="mb-4 sm:mb-8 text-base sm:text-lg">Theme: Celebrating African Strength, Style and Spirit</div>
            <button className="bg-white text-red-600 font-bold px-6 sm:px-8 py-2 sm:py-3 rounded shadow hover:bg-gray-100 mb-6 sm:mb-10 transition-colors duration-200 text-base sm:text-lg">Join Now</button>
            <div className="flex gap-4 sm:gap-8 justify-center items-center mt-2">
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-6xl font-extrabold">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-xs sm:text-base font-semibold text-gray-200">DAYS</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-6xl font-extrabold">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-xs sm:text-base font-semibold text-gray-200">HOURS</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-6xl font-extrabold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-xs sm:text-base font-semibold text-gray-200">MINUTES</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-6xl font-extrabold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-xs sm:text-base font-semibold text-gray-200">SECONDS</span>
              </div>
            </div>
          </div>
          {/* Right: Poster */}
          <div className="flex-1 flex justify-center items-center w-full">
            <img
              src="/EVENTS/Jikubali Afrifest_Poster.jpg"
              alt="Jikubali Afrifest Poster"
              className="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-md object-contain"
              style={{ display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-20 bg-gray-900">
        <div className="max-w-4xl sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <Music className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stats.events_played}+</div>
              <div className="text-gray-400 text-xs sm:text-base">Events Played</div>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stats.happy_clients}+</div>
              <div className="text-gray-400 text-xs sm:text-base">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stats.years_experience}+</div>
              <div className="text-gray-400 text-xs sm:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stats.average_rating}</div>
              <div className="text-gray-400 text-xs sm:text-base">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-4xl sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
              Featured Services
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              Professional DJ services tailored to create memorable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border flex flex-col h-full"
            >
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="African Festival DJ"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Gospel DJ Services</h3>
                <p className="text-gray-600 mb-2 sm:mb-4 flex-1">Professional gospel music mixing for all types of events and celebrations.</p>
                <Link
                  to="/services"
                  className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center mt-auto"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border flex flex-col h-full"
            >
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Radio Broadcasting"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Wedding Ceremonies</h3>
                <p className="text-gray-600 mb-2 sm:mb-4 flex-1">Special wedding packages with processional, ceremony, and reception music</p>
                <Link
                  to="/services"
                  className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center mt-auto"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border flex flex-col h-full"
            >
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Album Launch Events"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Corporate Events</h3>
                <p className="text-gray-600 mb-2 sm:mb-4 flex-1">Professional entertainment for corporate functions and business celebrations</p>
                <Link
                  to="/services"
                  className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center mt-auto"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:scale-105 transform transition-all duration-200 shadow-lg inline-flex items-center"
            >
              View All Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-2xl sm:max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Make Your Event Unforgettable?
          </h2>
          <p className="text-base sm:text-xl text-red-100 mb-6 sm:mb-8">
            Let's create the perfect soundtrack for your special occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:scale-105 transform transition-all duration-200 shadow-lg inline-flex items-center justify-center w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Now
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-red-600 transition-all duration-200 inline-flex items-center justify-center w-full sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;