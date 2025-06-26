import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom'; 
import { ArrowRight } from 'lucide-react';

const TrustSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation(0.1, 300);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1, 600);

  const trustPoints = [
    { 
      iconImage: "repair-1-removebg-preview.png", 
      title: "Installation d’ascenseurs",
      color: "bg-gray-600 hover:bg-[#D4AF37]"
    },
    { 
      iconImage: "repair-removebg-preview.png", 
      title: "Maintenance et Réparation",
      color: "bg-gray-600 hover:bg-[#D4AF37]"
    },
    { 
      iconImage: "modernization-removebg-preview.png", 
      title: "Modernisation des systèmes",
      color: "bg-gray-600 hover:bg-[#D4AF37]"
    },
    { 
      iconImage: "quality-assurance-removebg-preview.png", 
      title: "Contrôle de sécurité",
      color: "bg-gray-600 hover:bg-[#D4AF37]"
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: 'url("Ascenseur-main-scaled.png")'
        }}
        aria-hidden="true"
      />
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Header section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          <div 
            ref={titleRef}
            className={`w-full max-w-2xl transition-all duration-1500 ${ 
              titleVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-[50px]'
            }`}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Pourquoi choisir nos{' '}
              <span className="text-[#D4AF37]">services ?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              En tant que spécialiste de l'installation, la réparation et la maintenance d'ascenseurs au Maroc, nous mettons à votre disposition plus de 15 ans d'expérience pour garantir des solutions sûres, performantes et conformes aux normes.
            </p>
          </div>
          
          <div
            ref={buttonRef}
            className={`transition-all duration-1000 delay-300 w-full max-w-xs lg:max-w-sm ${ 
              buttonVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-[50px]'
            }`}
          >
            <Link to="/contact" className="block">
              <button className="w-full group bg-[#D4AF37] hover:bg-[#FFD700] text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold-500/25 flex items-center justify-center">
                Je souhaite obtenir un devis
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>

        {/* Services grid */}
        <div
          ref={cardsRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 my-12 transition-all duration-1500 delay-600 ${ 
            cardsVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-[50px]'
          }`}
        >
          {trustPoints.map((item, index) => (
            <div 
              key={index}
              className={`group ${item.color} transition-all duration-500 rounded-2xl p-6 sm:p-8 md:p-12 cursor-pointer transform hover:scale-105`}
              style={{ transitionDelay: `${index * 20}ms` }}
            >
              <div className="mb-6 sm:mb-8">
                <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto overflow-hidden flex items-center justify-center rounded-2xl bg-white/10">
                  <img 
                    src={item.iconImage} 
                    alt={item.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center leading-tight text-white group-hover:text-black transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;