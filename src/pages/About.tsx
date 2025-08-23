import React from 'react';
import { Music, Heart, Users, Award, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Music, number: '500+', label: 'Events Played' },
    { icon: Heart, number: '1000+', label: 'Happy Clients' },
    { icon: Users, number: '50K+', label: 'People Entertained' },
    { icon: Award, number: '15+', label: 'Years Experience' },
  ];

  const skills = [
    'Gospel Music Mixing',
    'Live Event Performance', 
    'Sound System Setup',
    'MC Services',
    'Music Production',
    'Wedding Ceremonies'
  ];

  const values = [
    {
      title: 'Faith-Centered',
      description: 'Every performance is rooted in faith and designed to uplift spirits and bring people closer to God through music.'
    },
    {
      title: 'Professional Excellence',
      description: 'We maintain the highest standards of professionalism in every aspect of our service delivery.'
    },
    {
      title: 'Community Impact',
      description: 'Committed to making a positive impact in our community through music ministry and entertainment.'
    }
  ];

  return (
    <div className="pt-16 sm:pt-20 px-0 sm:px-4">
      {/* Banner Section */}
      <section className="relative py-10 sm:py-20">
        <img src="/banner_img.jpg" alt="Banner" className="absolute inset-0 w-full h-48 sm:h-full object-cover z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-transparent opacity-90 z-10"></div>
        <div className="relative z-20 max-w-2xl sm:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">
            About DJ <span className="text-red-600">Kach</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-100 mb-6 sm:mb-8">
            A passionate gospel music minister dedicated to spreading joy and inspiration through music
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-red-100 to-gray-100 rounded-2xl overflow-hidden">
                <img
                  src="/slide_4.jpg"
                  alt="DJ Kach performing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <Music className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Spreading Joy Through Gospel Music
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 15 years of experience in the music industry, DJ Kach has become 
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Specializations</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-red-500" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-red-100 leading-relaxed">
            To create unforgettable musical experiences that bring people together, 
            celebrate life's precious moments, and spread the joy of gospel music 
            throughout our community. We believe that music has the power to heal, 
            inspire, and unite people from all walks of life.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;