import React from 'react';
import { Music, Heart, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Music, number: '500+', label: 'Events Played' },
    { icon: Heart, number: '1000+', label: 'Happy Clients' },
    { icon: Users, number: '50K+', label: 'People Entertained' },
    { icon: Award, number: '8+', label: 'Years Experience' },
  ];

  const skills = [
    'Gospel Music Mixing',
    'Live Event Performance', 
    'Sound System Setup',
    'MC Services',
    'Music Production',
    'Wedding Ceremonies'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Meet DJ Kach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate gospel music minister dedicated to spreading joy and inspiration through music
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="DJ Kach performing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Music className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Spreading Joy Through Gospel Music
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 8 years of experience in the music industry, DJ Kach has become 
              one of the most sought-after gospel DJs in the region. Known for creating 
              an atmosphere of worship and celebration, every performance is crafted to 
              touch hearts and lift spirits.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From intimate church gatherings to large corporate events, DJ Kach brings 
              the perfect blend of contemporary gospel, traditional hymns, and uplifting 
              Christian music that resonates with audiences of all ages.
            </p>

            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Specializations</h4>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-200 shadow-lg">
              Get to Know More
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;