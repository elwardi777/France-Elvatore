import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1);
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation(0.1, 300);
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation(0.1, 600);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden pt-24">
      {/* Background Image with gold overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: 'url("/public/maintenance_ascenseurs.jpg")'
        }}
      />
      
      {/* Gold overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-900/30 to-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center justify-center min-h-screen text-center">
        <div className="max-w-4xl text-white">
          <div
            ref={titleRef}
            className={`transition-all duration-1000 ${
              titleVisible ? 'animate-slide-right opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <br className="sm:hidden"/>
              <span className="text-gold-400 animate-text-gold-glow">
                Votre partenaire de confiance en ascenseurs au Maroc
              </span>
            </h1>
          </div>
          
          <div
            ref={subtitleRef}
            className={`transition-all duration-1000 ${
              subtitleVisible ? 'animate-slide-right opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Installation, réparation et maintenance d'ascenseurs au Maroc avec une expertise de plus de <br />   15 ans
            </p>
          </div>
          
          <div
            ref={buttonRef}
            className={`transition-all duration-1000 flex justify-center ${
              buttonVisible ? 'animate-slide-right opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            <Link to="/contact">
              <button className="group bg-[#D4AF37] hover:bg-[#FFD700] text-white text-lg font-semibold px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold-500/25 flex items-center">
                Je souhaite obtenir un devis
              </button>
            </Link>
          </div>
        </div>
      </div>

     

      {/* Spacer to push the features section */}
      <div className="relative z-10 h-1"></div>

      {/* Features Section - Garantie / Expertise / Service */}
      <div className="relative z-10 px-6 md:px-12 flex justify-center">
        <div className="bg-white rounded-xl shadow-lg py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 text-center max-w-5xl w-full">
          {/* Garantie de satisfaction totale */}
          <div className="flex flex-col items-center gap-4 max-w-xs">
            <img
              src="/3700396-certificate-certified-contract-diploma-guarantee-patent-qualification_108784.ico"
              alt="Service Icon"
              className="w-12 h-12"
            />
            <p className="text-[#1d1c6e] font-bold">Garantie de satisfaction totale</p>
          </div>

          {/* +30 ans d'expertise en ascenseurs */}
          <div className="flex flex-col items-center gap-4 max-w-xs">
            <img
              src="/electronic_repair_service_tool_equipment_icon_193578.ico"
              alt="Service Icon"
              className="w-12 h-12"
            />
            <p className="text-[#1d1c6e] font-bold">+15 ans d'expertise en ascenseurs</p>
          </div>

          {/* Service rapide 7j/7 – Dépannage & maintenance */}
          <div className="flex flex-col items-center gap-4 max-w-xs">
            <img
              src="/3709743-assistance-fix-problem-service-trouble_108085.ico"
              alt="Service Icon"
              className="w-12 h-12"
            />
            <p className="text-[#1d1c6e] font-bold">Service rapide 7j/7 – Dépannage & maintenance</p>
          </div>
        </div>
      </div>
 {/* Scroll indicator */}

      {/* Spacer to balance the layout */}
      <div className="relative z-10 h-20"></div>
      <br /><br />
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-[#D4AF37] text-sm mb-2">Scroll</span>
        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-gold-400 to-transparent"></div>
      </div>
    </section>
    
  );
};

export default HeroSection;