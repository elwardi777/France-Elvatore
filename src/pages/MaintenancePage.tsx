import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeroInternal from '../components/PageHeroInternal';
import ServiceSidebar from '../components/ServiceSidebar';
import CallToActionSection from '../components/CallToActionSection';
import AnimatedCounter from '../components/AnimatedCounter';
import { SlidersHorizontal, ShieldAlert, RefreshCcwDot, CheckSquare, CheckCircle, Users, Award, Zap, TrendingUp, ThumbsUp, FileText } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MaintenancePage = () => {
  const { ref: mainContentRef, isVisible: mainContentVisible } = useScrollAnimation(0.2);
  const { ref: programsRef, isVisible: programsVisible } = useScrollAnimation(0.2, 100);
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation(0.2, 200);
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollAnimation(0.3, 250); 

  const maintenancePrograms = [
    { icon: <SlidersHorizontal size={28} className="text-primary" />, title: "Maintenance Préventive Complète", description: "Inspections régulières, lubrification, ajustements et remplacement anticipé des pièces d'usure pour éviter les pannes et prolonger la durée de vie de votre ascenseur." },
    { icon: <ShieldAlert size={28} className="text-primary" />, title: "Maintenance Corrective Rapide", description: "Interventions ciblées en cas de dysfonctionnement, avec diagnostic précis et réparation efficace pour minimiser l'indisponibilité de l'équipement." },
    { icon: <RefreshCcwDot size={28} className="text-primary" />, title: "Modernisation et Mise aux Normes", description: "Solutions pour actualiser votre installation : amélioration de la performance énergétique, mise en conformité avec les nouvelles réglementations, et amélioration esthétique." },
    { icon: <CheckSquare size={28} className="text-primary" />, title: "Contrats Flexibles et Personnalisés", description: "Nous proposons différents niveaux de contrats de maintenance, adaptés à vos besoins spécifiques, à la typologie de votre bâtiment et à votre budget." }
  ];
  
  const maintenanceBenefits = [
    "Sécurité accrue pour tous les utilisateurs.",
    "Fiabilité optimisée et réduction des pannes.",
    "Prolongation de la durée de vie de votre installation.",
    "Conformité continue avec les réglementations en vigueur.",
    "Maîtrise de vos coûts de fonctionnement à long terme.",
    "Valorisation de votre patrimoine immobilier."
  ];

  const keyMetrics = [
    { targetValue: 99, label: "Disponibilité Équipements", suffix: "%", icon: <TrendingUp size={36} className="text-primary mb-3"/>, delay:0 },
    { targetValue: 96, label: "Satisfaction Maintenance", suffix: "%", icon: <ThumbsUp size={36} className="text-primary mb-3"/>, delay:100 },
    { targetValue: 350, label: "Contrats de Maintenance Actifs", suffix: "+", icon: <FileText size={36} className="text-primary mb-3"/>, delay:200 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHeroInternal 
          title="Maintenance d'Ascenseurs Professionnelle"
          subtitle="Assurez la Longévité, la Sécurité et la Performance de Vos Installations"
          backgroundImageUrl="im11.jpg"
        />
         <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div ref={mainContentRef} className={`flex-1 space-y-12 md:space-y-20 transition-all duration-700 ease-out ${mainContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">L'Importance d'une Maintenance Régulière</h2>
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
  Une maintenance rigoureuse et régulière est essentielle pour garantir la sécurité, la fiabilité et la performance optimale de vos ascenseurs. Chez <span className="text-gold-300 font-bold">France Ascenseurs</span>, nous proposons des programmes de maintenance sur mesure, conçus pour prévenir les pannes, prolonger la durée de vie de vos équipements et assurer leur conformité aux normes en vigueur.
</p>

              </section>

              {/* Key Metrics Section */}
              <section ref={metricsRef} className={`py-12 bg-secondary/50 rounded-xl transition-all duration-700 ease-out ${metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Nos Engagements en Chiffres</h2>
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

              <section ref={programsRef} className={`transition-all duration-700 ease-out ${programsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">Nos Programmes de Maintenance</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {maintenancePrograms.map((item, index) => (
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

              <section ref={benefitsRef} className={`transition-all duration-700 ease-out ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">Les Avantages de Notre Maintenance</h2>
                <ul className="space-y-5">
                  {maintenanceBenefits.map((item, index) => (
                    <li 
                      key={index} 
                      className="group flex items-start text-foreground/80 text-lg p-4 bg-card rounded-lg shadow-sm 
                                 transform hover:scale-[1.03] hover:shadow-xl hover:border-primary/50 border border-transparent transition-all duration-500 ease-in-out"
                    >
                      <div className="flex-shrink-0 mr-4 mt-1 p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <CheckCircle size={22} className="text-primary" />
                      </div>
                      <span className="group-hover:text-primary transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
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

export default MaintenancePage;
