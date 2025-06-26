import React from 'react';
import { Settings, Wrench, Activity, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation(0.1, 100);

  const services = [
    {
      icon: <Settings className="w-12 h-12 md:w-16 md:h-16 text-white" />,
      title: "Installation d'ascenseurs",
      description: "Nous concevons et installons des ascenseurs sur mesure, adaptés à tous types de bâtiments. Nos solutions allient performance, sécurité et respect des normes.",
      delay: 0,
      image: "494012969_1208686654595975_38696.jpg",
      link: "/installation"
    },
    {
      icon: <Wrench className="w-12 h-12 md:w-16 md:h-16 text-white" />,
      title: "Réparation & Dépannage",
      description: "Intervention rapide 24/7 pour pannes. Nos techniciens certifiés diagnostiquent et réparent votre ascenseur avec des pièces de qualité, garantissant performance et sécurité.",
      delay: 150,
      image: "490377572_1193204496144191_16634.jpg",
      link: "/reparation"
    },
    {
      icon: <Activity className="w-12 h-12 md:w-16 md:h-16 text-white" />,
      title: "Maintenance & Modernisation",
      description: "Contrats de maintenance personnalisés pour la longévité de votre ascenseur. Modernisez pour améliorer efficacité, sécurité et esthétique.",
      delay: 300,
      image: "/Les-différents-types-dascenseurs.jpg",
      link: "/maintenance"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/ascensur-hydraulique-electrique.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-6 transition-all duration-1000 ${
            titleVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-[50px]'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Découvrez nos <span className="text-[#D4AF37] ">services experts</span>
          </h2>
        </div>

        <div
          ref={subtitleRef}
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 delay-100 ${
            subtitleVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-[50px]'
          }`}
        >
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Solutions complètes et sur mesure pour tous vos besoins en ascenseurs, de l'installation à la maintenance préventive et curative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
          {services.map((service, index) => {
            const { ref, isVisible } = useScrollAnimation(0.1, service.delay);
            
            return (
              <div
                key={index}
                ref={ref}
                className={`transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-12 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col group transform hover:-translate-y-2">
                  <div className="relative h-60 md:h-72 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      {React.cloneElement(service.icon, { className: "w-10 h-10 text-[#D4AF37] mb-2 opacity-80 group-hover:opacity-100 transition-opacity" })}
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    <Link 
                      to={service.link}
                      className="group/link mt-auto inline-flex items-center text-[#D4AF37] font-semibold hover:text-[#FFD700] transition-colors text-lg"
                    >
                      En savoir plus
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/link:translate-x-1.5 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;