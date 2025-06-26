import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Facebook, Linkedin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation(0.1);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Decorative SVG Shape */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Wave */}
        <svg
          className="absolute top-0 left-0 w-full h-24 md:h-32"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 Q360,0 720,60 Q1080,120 1440,40 L1440,0 L0,0 Z"
            fill="#1e293b"
            fillOpacity="0.20"
          />
        </svg>
        {/* Bottom Wave */}
        <svg
          className="absolute bottom-0 left-0 w-full h-24 md:h-32"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q360,120 720,60 Q1080,0 1440,80 L1440,120 L0,120 Z"
            fill="#1e293b"
            fillOpacity="0.18"
          />
        </svg>
        {/* Dotted Circle accent */}
        <svg
          className="absolute left-[-100px] bottom-24 md:bottom-32 w-60 h-60 opacity-30"
          viewBox="0 0 300 300"
          fill="none"
        >
          <circle cx="150" cy="150" r="130" stroke="#FFD700" strokeDasharray="8 12" strokeWidth="3" fill="none" />
        </svg>
        {/* Dotted Circle right accent */}
        <svg
          className="absolute right-[-80px] top-24 md:top-36 w-40 h-40 opacity-10"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="90" stroke="#D4AF37" strokeDasharray="6 8" strokeWidth="2" fill="none" />
        </svg>
      </div>
      {/* Scroll to top button - fixed and always visible */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-[#D4AF37] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#FFD700] transition-colors shadow-xl"
        aria-label="Remonter en haut"
        style={{boxShadow: '0 4px 24px 0 rgba(0,0,0,0.15)'}}
      >
        <ArrowUp />
      </button>
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div
            ref={footerRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-12 transition-all duration-1000 ${
              footerVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-[50px]'
            }`}
          >
            {/* About Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gold-300">À Propos</h3>
              <div className="flex items-center mb-6">
                <img 
                  src="/lovable-uploads/019708e0-e1ba-41d2-969f-8037e332131f.png" 
                  alt="France Ascenseurs Logo" 
                  className="h-16 w-auto mr-3"
                />
                <div className="text-xl font-bold">France Ascenseurs</div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Experts en <span className="text-gold-300 font-bold"
                >installation, réparation et maintenance</span> d'ascenseurs depuis plus de 30 ans, nous offrons des <span className="text-gold-300 font-bold">solutions sur mesure</span> adaptées à tous vos besoins.
              </p>
              
              <div className="flex space-x-4 mb-6">
  <a
    href="https://www.facebook.com/France.Ascenseurss/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-300 transition-colors"
  >
    <Facebook size={18} />
  </a>
  <a
    href="https://www.linkedin.com/in/france-ascenseurs-7a6492187/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-300 transition-colors"
  >
    <Linkedin size={18} />
  </a>
</div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 group">
                  <Phone className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
                  <a href="tel:+212 626-597561" className="hover:text-gold-300 transition-colors">
                  +212 626-597561
                  </a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
                  <a
                    href="mailto:support@franceascenseurs.ma"
                    className="hover:text-gold-300 transition-colors"
                  >
                    support@franceascenseurs.ma
                  </a>
                </div>
                <div className="flex items-start space-x-3 group">
                  <MapPin className="w-5 h-5 text-gold-400 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="hover:text-gold-300 transition-colors">
                    oulfa casablanca, Casablanca, Morocco
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gold-300">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-gold-300 transition-colors flex items-center space-x-2 group">
                    <span className="w-2 h-2 bg-gold-400 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>Accueil</span>
                  </Link>
                </li>
                <li>
                  <Link to="/installation" className="text-gray-300 hover:text-gold-300 transition-colors flex items-center space-x-2 group">
                    <span className="w-2 h-2 bg-gold-400 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>Installation d'ascenseurs</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reparation" className="text-gray-300 hover:text-gold-300 transition-colors flex items-center space-x-2 group">
                    <span className="w-2 h-2 bg-gold-400 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>Réparation</span>
                  </Link>
                </li>
                <li>
                  <Link to="/maintenance" className="text-gray-300 hover:text-gold-300 transition-colors flex items-center space-x-2 group">
                    <span className="w-2 h-2 bg-gold-400 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>Maintenance</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-gold-300 transition-colors flex items-center space-x-2 group">
                    <span className="w-2 h-2 bg-gold-400 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hours Section */}
            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-gold-300">Toujours ouvert</h3>
                <p className="text-white mb-4">
                  Nous sommes disponibles <span className="font-bold">24h/24 et 7j/7</span>, y compris les week-ends et jours fériés.
                </p>
                <div className="space-y-3 text-white">
                  <div>
                    <p className="font-semibold text-gray-200">Contact immédiat</p>
                    <p>Par appel, WhatsApp ou Facebook</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200">Service d'urgence</p>
                    <p>Disponible à tout moment, sans interruption</p>
                  </div>
                </div>
              </div>
              <br />
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-gold-300">Une question ?</h3>
                <p className="text-gray-300 mb-4">
                  Un projet ? Contactez-nous :
                </p>
                <a href="tel:+212 626-597561" className="block w-full bg-[#D4AF37] hover:bg-[#FFD700] text-white text-center py-3 rounded-lg font-semibold transition-colors">
                06 26 59 75 61
                </a>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="border-t border-blue-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} France Ascenseurs. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;