import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { X, ArrowLeft, Image } from 'lucide-react';

const GalleryCategory = () => {
  const { category } = useParams();
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  // Define images for each category
  const categoryImages = {
    'corporate-events': [
      {
        src: '/GALLERY/Corporate Events/corporate 1.jpg',
        alt: 'Corporate event with professional setup',
        title: 'Corporate Event 1'
      },
      {
        src: '/GALLERY/Corporate Events/corporate 2.jpg',
        alt: 'Business function with DJ setup',
        title: 'Corporate Event 2'
      },
      {
        src: '/GALLERY/Corporate Events/corporate 3.jpg',
        alt: 'Professional corporate entertainment',
        title: 'Corporate Event 3'
      },
      {
        src: '/GALLERY/Corporate Events/corporate 4.jpg',
        alt: 'Corporate celebration with music',
        title: 'Corporate Event 4'
      },
      {
        src: '/GALLERY/Corporate Events/corporate 5.jpg',
        alt: 'Business event with professional DJ',
        title: 'Corporate Event 5'
      }
    ],
    'wedding-ceremonies': [
      {
        src: '/GALLERY/Wedding ceremonies/wedding 1.jpg',
        alt: 'Beautiful wedding ceremony with music',
        title: 'Wedding Ceremony 1'
      },
      {
        src: '/GALLERY/Wedding ceremonies/wedding 2.jpg',
        alt: 'Wedding celebration with gospel music',
        title: 'Wedding Ceremony 2'
      },
      {
        src: '/GALLERY/Wedding ceremonies/wedding 3.jpg',
        alt: 'Wedding reception with DJ setup',
        title: 'Wedding Ceremony 3'
      },
      {
        src: '/GALLERY/Wedding ceremonies/wedding 4.jpg',
        alt: 'Wedding event with professional entertainment',
        title: 'Wedding Ceremony 4'
      },
      {
        src: '/GALLERY/Wedding ceremonies/wedding 5.jpg',
        alt: 'Wedding celebration with live music',
        title: 'Wedding Ceremony 5'
      },
      {
        src: '/GALLERY/Wedding ceremonies/wedding 6.jpg',
        alt: 'Wedding ceremony with gospel DJ',
        title: 'Wedding Ceremony 6'
      }
    ],
    'youth-concerts': [
      {
        src: '/GALLERY/Youth Concerts/youth 1.jpg',
        alt: 'Youth concert with energetic crowd',
        title: 'Youth Concert 1'
      },
      {
        src: '/GALLERY/Youth Concerts/youth 2.jpg',
        alt: 'Youth event with gospel music',
        title: 'Youth Concert 2'
      },
      {
        src: '/GALLERY/Youth Concerts/youth 3.jpg',
        alt: 'Youth concert performance',
        title: 'Youth Concert 3'
      },
      {
        src: '/GALLERY/Youth Concerts/youth 4.jpg',
        alt: 'Youth event with DJ setup',
        title: 'Youth Concert 4'
      },
      {
        src: '/GALLERY/Youth Concerts/youth 5.jpg',
        alt: 'Youth concert celebration',
        title: 'Youth Concert 5'
      },
      {
        src: '/GALLERY/Youth Concerts/youth 6.jpg',
        alt: 'Youth event with gospel entertainment',
        title: 'Youth Concert 6'
      },
      {
        src: '/GALLERY/Youth Concerts/youth 7.jpg',
        alt: 'Youth concert with live music',
        title: 'Youth Concert 7'
      },
      {
        src: '/GALLERY/Youth Concerts/youth 8.jpg',
        alt: 'Youth event performance',
        title: 'Youth Concert 8'
      },
      {
        src: '/GALLERY/Youth Concerts/youth 9.jpg',
        alt: 'Youth concert with DJ',
        title: 'Youth Concert 9'
      },
      {
        src: '/GALLERY/Youth Concerts/youth 10.jpg',
        alt: 'Youth event celebration',
        title: 'Youth Concert 10'
      },
      {
        src: '/GALLERY/Youth Concerts/youth 11.jpg',
        alt: 'Youth concert with gospel music',
        title: 'Youth Concert 11'
      },
      {
        src: '/GALLERY/Youth Concerts/youth 12.jpg',
        alt: 'Youth event entertainment',
        title: 'Youth Concert 12'
      },
      {
        src: '/GALLERY/Youth Concerts/youth 13.jpg',
        alt: 'Youth concert performance',
        title: 'Youth Concert 13'
      },
      {
        src: '/GALLERY/Youth Concerts/youth 15.jpg',
        alt: 'Youth event with professional setup',
        title: 'Youth Concert 15'
      }
    ],
    'pool-parties': [
      {
        src: '/GALLERY/Pool Parties/pool 1.jpg',
        alt: 'Pool party with music and entertainment',
        title: 'Pool Party 1'
      },
      {
        src: '/GALLERY/Pool Parties/pool 2.jpg',
        alt: 'Poolside celebration with DJ',
        title: 'Pool Party 2'
      },
      {
        src: '/GALLERY/Pool Parties/pool 3.jpg',
        alt: 'Pool party entertainment setup',
        title: 'Pool Party 3'
      },
      {
        src: '/GALLERY/Pool Parties/pool 4.jpg',
        alt: 'Pool party with gospel music',
        title: 'Pool Party 4'
      },
      {
        src: '/GALLERY/Pool Parties/pool 5.jpg',
        alt: 'Pool party celebration',
        title: 'Pool Party 5'
      },
      {
        src: '/GALLERY/Pool Parties/pool 6.jpg',
        alt: 'Pool party with professional DJ',
        title: 'Pool Party 6'
      },
      {
        src: '/GALLERY/Pool Parties/pool 7.jpg',
        alt: 'Poolside entertainment',
        title: 'Pool Party 7'
      },
      {
        src: '/GALLERY/Pool Parties/pool 8.jpg',
        alt: 'Pool party with music setup',
        title: 'Pool Party 8'
      },
      {
        src: '/GALLERY/Pool Parties/pool 9.jpg',
        alt: 'Pool party celebration',
        title: 'Pool Party 9'
      },
      {
        src: '/GALLERY/Pool Parties/pool 10.jpg',
        alt: 'Pool party with gospel entertainment',
        title: 'Pool Party 10'
      }
    ],
    'children-concerts': [
      {
        src: '/GALLERY/Children Concerts/children 1.jpg',
        alt: 'Children concert with professional setup',
        title: 'Children concert 1'
      },
      {
        src: '/GALLERY/Children Concerts/children 2.jpg',
        alt: 'Children concert with professional setup',
        title: 'Children concert 2'
      },
      {
        src: '/GALLERY/Children Concerts/children 3.jpg',
        alt: 'Children concert with professional setup',
        title: 'Children concert 3'
      }
    ]
  };

  // Category titles mapping
  const categoryTitles = {
    'corporate-events': 'Corporate Events',
    'wedding-ceremonies': 'Wedding Ceremonies',
    'school-functions': 'School Functions',
    'church-functions': 'Church Functions',
    'birthday-parties': 'Birthday Parties',
    'gospel-festivals': 'Gospel Festivals',
    'youth-concerts': 'Youth Concerts',
    'children-concerts': 'Children Concerts',
    'pool-parties': 'Pool Parties'
  };

  const images = categoryImages[category as keyof typeof categoryImages] || [];
  const categoryTitle = categoryTitles[category as keyof typeof categoryTitles] || 'Gallery';

  return (
    <div className="pt-16 sm:pt-20 px-0 sm:px-4">
      {/* Hero Section */}
      <section className="relative py-20">
        <img src="/banner_img.jpg" alt="Banner" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-transparent opacity-90 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Link
              to="/gallery"
              className="inline-flex items-center text-white hover:text-red-200 transition-colors duration-200 mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Gallery
            </Link>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            {categoryTitle}
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            {images.length} images from {categoryTitle}
          </p>
        </div>
      </section>

      {/* Images Grid */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  onClick={() => setSelectedMedia(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-40 sm:h-56 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-3 sm:p-4 text-center">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{image.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Images Available</h3>
              <p className="text-gray-600 mb-6">
                Images for {categoryTitle} will be added soon. Please check back later.
              </p>
              <Link
                to="/gallery"
                className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-200"
              >
                Back to Gallery
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedMedia(null)}>
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

      {/* Back to Gallery CTA */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Link
            to="/gallery"
            className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors duration-200 shadow-lg inline-flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Gallery Categories
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GalleryCategory;
