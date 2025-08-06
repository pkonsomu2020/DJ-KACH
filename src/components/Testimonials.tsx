import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Sarah & Michael Johnson',
      role: 'Wedding Couple',
      image: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'DJ Kach made our wedding absolutely perfect! The music selection was incredible and every guest was on the dance floor. His professionalism and attention to detail exceeded our expectations.',
      rating: 5,
      event: 'Wedding Reception'
    },
    {
      name: 'Pastor David Williams',
      role: 'Faith Community Church',
      image: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'We have worked with DJ Kach for multiple church events and he consistently delivers exceptional service. His understanding of gospel music and worship atmosphere is unmatched.',
      rating: 5,
      event: 'Church Anniversary'
    },
    {
      name: 'Jennifer Martinez',
      role: 'Event Coordinator',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'As an event planner, I recommend DJ Kach to all my clients. He is reliable, professional, and always goes above and beyond to ensure every event is a success.',
      rating: 5,
      event: 'Corporate Event'
    },
    {
      name: 'The Thompson Family',
      role: 'Family Reunion Organizers',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'DJ Kach brought three generations of our family together on the dance floor! His music selection appealed to everyone from grandparents to grandchildren.',
      rating: 5,
      event: 'Family Reunion'
    },
    {
      name: 'Marcus & Lisa Brown',
      role: 'Anniversary Celebration',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Our 25th anniversary party was amazing thanks to DJ Kach. He played all our favorite songs and created such a joyful atmosphere. Highly recommended!',
      rating: 5,
      event: '25th Anniversary'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Hear from the families and organizations we've had the joy of serving
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 relative">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-yellow-400 mb-6" />
              
              {/* Testimonial Content */}
              <div className="text-center">
                <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed font-light">
                  "{testimonials[currentSlide].text}"
                </p>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
                  />
                  <div className="text-left">
                    <h4 className="text-xl font-semibold text-white">
                      {testimonials[currentSlide].name}
                    </h4>
                    <p className="text-purple-200">{testimonials[currentSlide].role}</p>
                    <p className="text-sm text-yellow-300">{testimonials[currentSlide].event}</p>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index ? 'bg-yellow-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">1000+</div>
            <div className="text-purple-200">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-purple-200">Events Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">5★</div>
            <div className="text-purple-200">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">8+</div>
            <div className="text-purple-200">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;