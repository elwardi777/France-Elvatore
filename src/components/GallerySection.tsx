import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState({});

  // Sample images with proper aspect ratios
  const galleryImages = [

    {
      id: 2,
      src: "469313626_1142532597273545_97929.jpg",
      alt: "",
      title: ""
    },
    
    {
      id: 5,
      src: "491972626_1197667665697874_11325.jpg",
      alt: "",
      title: ""
    },
    {
      id: 6,
      src: "494664453_1209716037826370_79348.jpg",
      alt: "",
      title: ""
    },
    {
      id: 2,
      src: "494159058_1208685447929429_27460.jpg",
      alt: "",
      title: ""
    },
    {
      id: 2,
      src: "491348674_1196709479127026_20576.jpg",
      alt: "",
      title: ""
    },
    {
      id: 2,
      src: "499247558_1224437116354262_50754.jpg",
      alt: "",
      title: ""
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  const handleImageLoad = (imageId) => {
    setIsLoading(prev => ({
      ...prev,
      [imageId]: false
    }));
  };

  const handleImageError = (imageId) => {
    setIsLoading(prev => ({
      ...prev,
      [imageId]: false
    }));
  };

  return (
<section className="relative py-24 bg-gradient-to-br from-gray-300 via-gray-800 to-black overflow-hidden">
<div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Découvrez notre <span className="text-[#D4AF37]">galerie</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Plongez dans l'univers de nos réalisations et explorez nos projets d'installation, 
            de maintenance et de modernisation d'ascenseurs, réalisés avec passion et professionnalisme.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20"
              onClick={() => openLightbox(image)}
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              {/* Image Container with Fixed Aspect Ratio */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Loading Skeleton */}
                {isLoading[image.id] !== false && (
                  <div className="absolute inset-0 bg-white/20 animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
                
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  onLoad={() => handleImageLoad(image.id)}
                  onError={() => handleImageError(image.id)}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {image.title}
                    </h3>
                    <div className="flex items-center text-white/80 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <ZoomIn size={16} className="mr-5" />
                      <span className="text-sm">Cliquez pour agrandir</span>
                    </div>
                  </div>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ZoomIn size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-16">
        
        <Link to="/contact">
              <button className="center group bg-[#D4AF37] hover:bg-[#FFD700] text-white text-lg font-semibold px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold-500/25 flex items-center">
                Je souhaite obtenir un devis
              </button>
            </Link>
              
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors duration-300 z-10 bg-black/20 rounded-full p-2 hover:bg-black/40"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          {/* Image Navigation Info */}
          <div className="absolute top-6 left-6 text-white/80 z-10">
            <p className="text-sm font-medium">{selectedImage.title}</p>
            <p className="text-xs text-white/60 mt-1">
              {galleryImages.findIndex(img => img.id === selectedImage.id) + 1} / {galleryImages.length}
            </p>
          </div>

          {/* Main Image */}
          <div className="relative w-full max-w-[50vw] max-h-[90vh] mx-auto flex items-center justify-center">
  <img 
    src={selectedImage.src}
    alt={selectedImage.alt}
    className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
    onClick={(e) => e.stopPropagation()}
  />
</div>


          {/* Image Info */}
          <div className="absolute bottom-6 left-6 right-6 text-center">
            <p className="text-white/90 font-medium text-lg">{selectedImage.title}</p>
            <p className="text-white/70 text-sm mt-1">{selectedImage.alt}</p>
          </div>
        </div>
      )}

    </section>
  );
};

export default GallerySection;