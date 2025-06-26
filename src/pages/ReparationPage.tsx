import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeroInternal from '../components/PageHeroInternal';
import ServiceSidebar from '../components/ServiceSidebar';
import CallToActionSection from '../components/CallToActionSection';
import AnimatedCounter from '../components/AnimatedCounter';
import { Wrench, AlertTriangle, ShieldCheck, Clock, Users, Award, Zap, HeartHandshake } from 'lucide-react'; // Added Users, Award, Zap, HeartHandshake
import { useScrollAnimation } from '../hooks/useScrollAnimation';


const ReparationPage = () => {
  const { ref: mainContentRef, isVisible: mainContentVisible } = useScrollAnimation(0.2);
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation(0.2, 100);
  const { ref: commitmentRef, isVisible: commitmentVisible } = useScrollAnimation(0.2, 200);
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollAnimation(0.3, 250);

  const serviceHighlights = [
    { icon: <AlertTriangle size={28} className="text-primary" />, title: "Diagnostic Précis et Rapide", description: "Nos techniciens experts utilisent des outils de diagnostic avancés pour identifier rapidement l'origine de la panne et minimiser le temps d'arrêt de votre ascenseur." },
    { icon: <Wrench size={28} className="text-primary" />, title: "Réparations Toutes Marques", description: "Nous intervenons sur tous types et toutes marques d'ascenseurs, avec un large stock de pièces détachées pour garantir une réparation efficace." },
    { icon: <Clock size={28} className="text-primary" />, title: "Intervention d'Urgence 24/7", description: "Un service de dépannage est disponible 24h/24 et 7j/7 pour répondre à vos urgences et assurer la sécurité des usagers." },
    { icon: <ShieldCheck size={28} className="text-primary" />, title: "Qualité et Garantie", description: "Toutes nos réparations sont effectuées avec des pièces d'origine ou de qualité équivalente, et sont couvertes par une garantie pour votre tranquillité d'esprit." }
  ];

  const keyMetrics = [
    { targetValue: 2, label: "Heures d'Intervention (Moy.)", suffix: "h", icon: <Zap size={36} className="text-primary mb-3"/>, delay:0 },
    { targetValue: 95, label: "Taux de Résolution (1ère Visite)", suffix: "%", icon: <Wrench size={36} className="text-primary mb-3"/>, delay:100 },
    { targetValue: 1200, label: "Clients Dépannés Annuellement", suffix: "+", icon: <Users size={36} className="text-primary mb-3"/>, delay:200 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHeroInternal 
          title="Réparation et Dépannage d'Ascenseurs"
          subtitle="Intervention Rapide, Efficace et Sécurisée pour Toutes Pannes"
          backgroundImageUrl="fccbff2d120062b0b8b50fabbb9ba4d9.jpg"
        />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div ref={mainContentRef} className={`flex-1 space-y-12 md:space-y-20 transition-all duration-700 ease-out ${mainContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Votre Ascenseur est en Panne ? Nous Sommes Là.</h2>
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                Votre Ascenseur est en Panne ? Nous Sommes Là.
  Une panne d'ascenseur peut être source de désagréments importants. Chez <span className="text-gold-300 font-bold">France Ascenseurs</span>, nous offrons un service de réparation et de dépannage rapide et fiable pour remettre votre installation en état de fonctionnement optimal dans les plus brefs délais.
</p>
<p className="mt-4 text-lg text-foreground/80 leading-relaxed">
  Qu'il s'agisse d'un problème mécanique, électrique ou électronique, nos techniciens qualifiés sont équipés pour diagnostiquer et résoudre une vaste gamme de pannes, assurant la sécurité et le confort des utilisateurs.
</p>

              </section>

              {/* Key Metrics Section */}
              <section ref={metricsRef} className={`py-12 bg-secondary/50 rounded-xl transition-all duration-700 ease-out ${metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Nos Performances en Réparation</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                  {keyMetrics.map((metric, index) => (
                    <div key={index} className="flex flex-col items-center">
                       {metric.icon}
                       <AnimatedCounter 
                        targetValue={metric.targetValue} 
                        label={metric.label} 
                        suffix={metric.suffix}
                        className="w-full"
                        delay={metric.delay}
                      />
                    </div>
                  ))}
                </div>
              </section>

              <section ref={servicesRef} className={`transition-all duration-700 ease-out ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">Nos Services de Réparation en Détail</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {serviceHighlights.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-lg border-l-4 border-primary 
                                 transform hover:scale-[1.03] hover:shadow-2xl transition-all duration-500 ease-in-out"
                    >
                      <div className="flex-shrink-0 mt-1 p-3 bg-primary/10 rounded-full">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                        <p className="text-foreground/80 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              
              <section ref={commitmentRef} className={`p-8 md:p-12 bg-card rounded-xl shadow-xl border-t-4 border-primary transition-all duration-700 ease-out ${commitmentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transform hover:scale-[1.02] hover:shadow-2xl`}>
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-6">
                    <HeartHandshake size={48} className="text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Notre Engagement : Votre Sécurité et Satisfaction</h3>
                  <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
                    Nous nous engageons à fournir un service de réparation transparent, avec des devis clairs avant toute intervention. Notre priorité est de restaurer la fonctionnalité de votre ascenseur tout en garantissant les plus hauts standards de sécurité et votre entière satisfaction.
                  </p>
                </div>
              </section>

            </div>
            <div className="w-full lg:w-1/3 lg:sticky lg:top-36 h-fit">
              <ServiceSidebar />
            </div>
          </div>
        </div>
      
      </main>
      <Footer />
    </div>
  );
};

export default ReparationPage;
