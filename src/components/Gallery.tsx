import React, { useState } from 'react';
import { X, Play, Image } from 'lucide-react';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const mediaItems = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'DJ Kach performing at wedding',
      title: 'Wedding Performance'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Gospel concert crowd',
      title: 'Gospel Festival 2024'
    },
    {
      type: 'image', 
      src: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Church event setup',
      title: 'Church Anniversary Setup'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1779447/pexels-photo-1779447.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Wedding ceremony',
      title: 'Ceremony Music'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Sound equipment setup',
      title: 'Professional Setup'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Youth event',
      title: 'Youth Conference'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Corporate event',
      title: 'Corporate Entertainment'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Outdoor festival',
      title: 'Outdoor Gospel Festival'
    }
  ];

  const categories = ['All', 'Weddings', 'Church Events', 'Festivals', 'Corporate'];
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Capturing moments of joy, celebration, and inspiration from our events
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {mediaItems.map((item, index) => (
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
                    {item.type === 'video' ? (
                      <Play className="w-6 h-6 text-purple-600" />
                    ) : (
                      <Image className="w-6 h-6 text-purple-600" />
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 truncate">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Video Highlights Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Video Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9 relative bg-gradient-to-br from-purple-100 to-blue-100 h-64 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Wedding Highlight Reel</h4>
                  <p className="text-gray-600">Best moments from recent weddings</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9 relative bg-gradient-to-br from-yellow-100 to-orange-100 h-64 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Festival Performance</h4>
                  <p className="text-gray-600">Live performance at Gospel Festival</p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                <p className="text-gray-300">{selectedMedia.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;