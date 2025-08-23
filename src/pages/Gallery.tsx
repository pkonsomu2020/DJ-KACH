import React, { useState, useRef } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [playingVideos, setPlayingVideos] = useState<{ [key: number]: boolean }>({});
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const galleryCategories = [
    {
      title: 'Corporate Events',
      description: 'Professional corporate entertainment and business events',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      count: 5,
      path: '/gallery/corporate-events'
    },
    {
      title: 'Wedding Ceremonies',
      description: 'Beautiful wedding celebrations and ceremonies',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      count: 6,
      path: '/gallery/wedding-ceremonies'
    },
    {
      title: 'School Functions',
      description: 'Educational events and school celebrations',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      count: 0,
      path: '/gallery/school-functions'
    },
    {
      title: 'Church Functions',
      description: 'Religious gatherings and church events',
      image: 'https://images.pexels.com/photos/1779447/pexels-photo-1779447.jpeg?auto=compress&cs=tinysrgb&w=800',
      count: 0,
      path: '/gallery/church-functions'
    },
    {
      title: 'Birthday Parties',
      description: 'Fun and energetic birthday celebrations',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
      count: 0,
      path: '/gallery/birthday-parties'
    },
    {
      title: 'Gospel Festivals',
      description: 'Uplifting gospel music festivals and events',
      image: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=800',
      count: 0,
      path: '/gallery/gospel-festivals'
    },
    {
      title: 'Youth Concerts',
      description: 'Energetic youth events and concerts',
      image: '/GALLERY/Youth Concerts/youth 1.jpg',
      count: 14,
      path: '/gallery/youth-concerts'
    },
    {
      title: 'Children Concerts',
      description: 'Fun and engaging children events',
      image: '/GALLERY/Children Concerts/children 1.jpg',
      count: 3,
      path: '/gallery/children-concerts'
    },
    {
      title: 'Pool Parties',
      description: 'Exciting poolside celebrations and parties',
      image: '/GALLERY/Pool Parties/pool 1.jpg',
      count: 10,
      path: '/gallery/pool-parties'
    }
  ];

  const videoHighlights = [
    {
      title: 'Wedding Highlight Reel',
      description: 'Best moments from recent weddings',
      video: '/VIDEOS/Video 1.mp4',
      thumbnail: '/VIDEOS/Video 1.mp4'
    },
    {
      title: 'Gospel Festival Performance',
      description: 'Live performance at Gospel Festival 2024',
      video: '/VIDEOS/Video 2.mp4',
      thumbnail: '/VIDEOS/Video 2.mp4'
    },
    {
      title: 'Corporate Event Compilation',
      description: 'Highlights from various corporate events',
      video: '/VIDEOS/Video 3.mp4',
      thumbnail: '/VIDEOS/Video 3.mp4'
    },
    {
      title: 'Youth Event Highlights',
      description: 'Fun moments from youth events',
      video: '/VIDEOS/Video 4.mp4',
      thumbnail: '/VIDEOS/Video 4.mp4'
    }
  ];

  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (playingVideos[index]) {
        video.pause();
        setPlayingVideos(prev => ({ ...prev, [index]: false }));
      } else {
        // Pause all other videos first
        Object.keys(videoRefs.current).forEach(key => {
          const otherVideo = videoRefs.current[parseInt(key)];
          if (otherVideo && parseInt(key) !== index) {
            otherVideo.pause();
          }
        });
        setPlayingVideos({ [index]: true });
        video.play();
      }
    }
  };

  const handleVideoEnded = (index: number) => {
    setPlayingVideos(prev => ({ ...prev, [index]: false }));
  };

  const handleVideoLoadedMetadata = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
    }
  };

  return (
    <div className="pt-16 sm:pt-20 px-0 sm:px-4">
      {/* Hero Section */}
      <section className="relative py-20">
        <img src="/banner_img.jpg" alt="Banner" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-transparent opacity-90 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Gallery
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Capturing moments of joy, celebration, and inspiration from our events
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-2xl sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Photo Gallery Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our collection of memorable moments from various events and celebrations
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {galleryCategories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                    <p className="text-white/90 text-sm mb-2">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-sm">{category.count} images</span>
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Video Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videoHighlights.map((video, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-w-16 aspect-h-9 relative h-48 overflow-hidden cursor-pointer" onClick={() => handleVideoClick(index)}>
                  <video
                    ref={el => videoRefs.current[index] = el}
                    src={video.video}
                    className="w-full h-full object-cover"
                    preload="metadata"
                    onEnded={() => handleVideoEnded(index)}
                    onLoadedMetadata={() => handleVideoLoadedMetadata(index)}
                    muted
                    loop
                  />
                  {!playingVideos[index] && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to Be Featured in Our Gallery?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Book DJ Kach for your event and create memories worth capturing
          </p>
          <Link
            to="/contact"
            className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-200 shadow-lg inline-block"
          >
            Book Your Event
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Gallery;