import React, { useState } from 'react';
import { Play, Pause, Volume2, Calendar, Music } from 'lucide-react';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          {/* Animated circles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-gradient-to-r from-yellow-400/10 to-orange-400/10 animate-pulse`}
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in">
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              DJ KACH
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-6 animate-fade-in-delay-1">
            Gospel DJ • Music Minister • Event Specialist
          </p>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
            Bringing the joy of gospel music to every celebration. 
            Professional DJ services that uplift spirits and create unforgettable moments.
          </p>
        </div>

        {/* Music Player Widget */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 animate-fade-in-delay-3">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Now Playing</h3>
                <p className="text-sm text-gray-300">Latest Gospel Mix</p>
              </div>
            </div>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </button>
          </div>
          
          {/* Waveform Visualization */}
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`bg-gradient-to-t from-yellow-400 to-orange-400 rounded-full transition-all duration-300 ${
                  isPlaying ? 'animate-bounce' : ''
                }`}
                style={{
                  width: '4px',
                  height: `${Math.random() * 30 + 10}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              ></div>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <Volume2 className="w-4 h-4" />
            <div className="flex-1 bg-white/20 rounded-full h-1">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-1 rounded-full w-3/4"></div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-4">
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl">
            <Calendar className="w-5 h-5 inline mr-2" />
            Book DJ Kach
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-200">
            Listen to Mixes
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;