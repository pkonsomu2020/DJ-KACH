import React, { useState } from 'react';
import { X, Play, Image, Filter } from 'lucide-react';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const mediaItems = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'DJ Kach performing at wedding',
      title: 'Wedding Performance',
      category: 'Weddings'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Gospel concert crowd',
      title: 'Gospel Festival 2024',
      category: 'Festivals'
    },
    {
      type: 'image', 
      src: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Church event setup',
      title: 'Church Anniversary Setup',
      category: 'Church Events'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1779447/pexels-photo-1779447.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Wedding ceremony',
      title: 'Ceremony Music',
      category: 'Weddings'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Sound equipment setup',
      title: 'Professional Setup',
      category: 'Corporate'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Youth event',
      title: 'Youth Conference',
      category: 'Church Events'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Corporate event',
      title: 'Corporate Entertainment',
      category: 'Corporate'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Outdoor festival',
      title: 'Outdoor Gospel Festival',
      category: 'Festivals'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'DJ equipment close-up',
      title: 'Professional Equipment',
      category: 'Behind the Scenes'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'DJ mixing live',
      title: 'Live Mixing Session',
      category: 'Behind the Scenes'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Crowd dancing',
      title: 'Dance Floor Energy',
      category: 'Weddings'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Church worship',
      title: 'Worship Atmosphere',
      category: 'Church Events'
    }
  ];

  const categories = ['All', 'Weddings', 'Church Events', 'Festivals', 'Corporate', 'Behind the Scenes'];

  const filteredItems = activeCategory === 'All' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory);

  const videoHighlights = [
    {
      title: 'Wedding Highlight Reel',
      description: 'Best moments from recent weddings',
      thumbnail: 'https://images.pexels.com/photos/1779447/pexels-photo-1779447.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Gospel Festival Performance',
      description: 'Live performance at Gospel Festival 2024',
      thumbnail: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Church Event Compilation',
      description: 'Highlights from various church events',
      thumbnail: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Behind the Scenes',
      description: 'Setup and preparation process',
      thumbnail: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-20">
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

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 md:mb-0">Photo Gallery</h2>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedMedia(item)}
              >
                <div className="aspect-w-4 aspect-h-3 relative">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <Image className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 truncate">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
              </div>
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
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="aspect-w-16 aspect-h-9 relative h-48 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
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

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <img
              src={selectedMedia.src}
              alt={selectedMedia.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 rounded-b-lg">
              <h3 className="text-xl font-semibold mb-2">{selectedMedia.title}</h3>
              <p className="text-gray-300">{selectedMedia.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to Be Featured in Our Gallery?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Book DJ Kach for your event and create memories worth capturing
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-200 shadow-lg">
            Book Your Event
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;