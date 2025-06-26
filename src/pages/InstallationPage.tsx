import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeroInternal from '../components/PageHeroInternal';
import ServiceSidebar from '../components/ServiceSidebar';
import CallToActionSection from '../components/CallToActionSection';
import AnimatedCounter from '../components/AnimatedCounter'; // Import the new component
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircle, Eye, Briefcase, Clock, ShieldCheck, Zap, Award, Users } from 'lucide-react';

const InstallationPage = () => {
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation(0.2);
  const { ref: expertiseRef, isVisible: expertiseVisible } = useScrollAnimation(0.2, 50);
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation(0.2, 100);
  const { ref: whyUsRef, isVisible: whyUsVisible } = useScrollAnimation(0.2, 150);
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation(0.2, 200);
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollAnimation(0.3, 250);


  const expertiseItems = [
    { icon: <Eye size={32} className="text-primary" />, title: 'Étude Personnalisée et Conseil', description: 'Analyse approfondie de vos besoins et contraintes architecturales pour une solution d\'ascenseur parfaitement adaptée (électriques, hydrauliques, panoramiques).' },
    { icon: <Briefcase size={32} className="text-primary" />, title: 'Technologies de Pointe', description: 'Utilisation de matériaux durables, systèmes écoénergétiques et technologies intelligentes pour une performance optimale et une maintenance réduite.' },
    { icon: <Clock size={32} className="text-primary" />, title: 'Gestion de Projet Rigoureuse', description: 'Coordination experte avec tous les corps de métier, respect des délais et intégration fluide dans vos bâtiments neufs ou existants.' },
    { icon: <ShieldCheck size={32} className="text-primary" />, title: 'Conformité et Sécurité Maximale', description: 'Installation conforme aux normes EN 81-20 et EN 81-50, avec tests de sécurité exhaustifs et accompagnement pour la certification.' },
  ];

  const processItems = [
    { number: '01', title: 'Consultation & Devis Gratuit', description: 'Première prise de contact, évaluation de vos besoins et proposition détaillée sous 48h.' },
    { number: '02', title: 'Conception & Planification', description: 'Choix du modèle, design, capacité, vitesse, et élaboration des plans techniques précis.' },
    { number: '03', title: 'Installation Professionnelle', description: 'Montage par nos techniciens certifiés, dans le respect strict des normes de sécurité.' },
    { number: '04', title: 'Tests & Mise en Service', description: 'Vérifications complètes, formation à l\'utilisation et remise des documents techniques et garanties.' },
  ];
  
  const whyChooseUsItems = [
    "Plus de 15 ans d'expertise reconnue dans l'installation et la maintenance d'ascenseurs.",
    "Équipe de techniciens hautement qualifiés et certifiés, formés aux dernières technologies.",
    "Engagement qualité : utilisation de composants premium pour une durabilité et fiabilité accrues.",
    "Service client réactif et disponible 7j/7 pour un accompagnement personnalisé.",
    "Solutions éco-responsables visant à minimiser l'empreinte énergétique de vos installations.",
    "Garantie constructeur étendue et contrats de maintenance préventive sur mesure.",
  
  ];

  const keyMetrics = [
    { targetValue: 97, label: "Clients Satisfaits", suffix: "%", icon: <Users size={36} className="text-primary mb-3"/>, delay:0 },
    { targetValue: 500, label: "Installations Réussies", suffix: "+", icon: <Award size={36} className="text-primary mb-3"/>, delay:100 },
    { targetValue: 24, label: "Heures d'Intervention Rapide", suffix: "/7", icon: <Zap size={36} className="text-primary mb-3"/>, delay:200 },
  ];


  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHeroInternal 
          title="Installation d'Ascenseurs sur Mesure"
          subtitle="Solutions Innovantes, Sécurisées et Performantes pour Tous Types de Bâtiments"
          backgroundImageUrl="494012969_1208686654595975_38696.jpg" 
        />

        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="flex-1 space-y-20">
              {/* ... keep existing code (introRef section) */}
              <section ref={introRef} className={`transition-all duration-700 ease-out ${introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Votre Partenaire de Confiance pour l'Installation d'Ascenseurs</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                <div className="text-center mt-6">
  <p>
    Confiez votre projet à une équipe de professionnels qualifiés, engagés à vous fournir un service fiable, sécurisé et conforme aux normes en vigueur.
  </p>
  <p className="mt-4">
    Que vous soyez particulier, copropriété ou entreprise, nous concevons des solutions sur mesure, parfaitement adaptées à chaque type de bâtiment : résidentiel, commercial ou industriel.
  </p>
  <p className="mt-4">
    Qualité, sécurité et expertise sont les piliers de notre engagement à vos côtés.
  </p>
  <p className="mt-10 font-bold text-[#D4AF37] text-3xl md:text-4xl drop-shadow-lg">
    الإتقان في التفاصيل... والراحة في كل طابق
  </p>
</div>

              </p>
              </section>

              {/* ... keep existing code (metricsRef section) */}
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

              <section ref={expertiseRef} className={`transition-all duration-700 ease-out ${expertiseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">Notre Savoir-Faire en Installation</h2>
                <div className="space-y-8">
                  {expertiseItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-6 p-6 bg-card rounded-xl shadow-lg border-l-4 border-primary 
                                 transform hover:scale-[1.03] hover:shadow-2xl transition-all duration-500 ease-in-out"
                    >
                      <div className="flex-shrink-0 mt-1 p-3 bg-primary/10 rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-primary mb-2">{item.title}</h3>
                        <p className="text-foreground/80 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section ref={processRef} className={`transition-all duration-700 ease-out ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">Un Processus d'Installation Transparent</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {processItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="relative p-8 bg-card rounded-xl shadow-lg border-t-4 border-primary 
                                 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-in-out"
                    >
                      <div className="absolute -top-5 -left-3 bg-primary text-primary-foreground h-12 w-12 flex items-center justify-center rounded-full font-bold text-xl shadow-md">
                        {item.number}
                      </div>
                      <h3 className="text-2xl font-semibold text-primary mt-5 mb-3">{item.title}</h3>
                      <p className="text-foreground/80 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ... keep existing code (whyUsRef and galleryRef sections) */}
               <section ref={whyUsRef} className={`transition-all duration-700 ease-out ${whyUsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">Pourquoi Choisir Addamane Ascenseurs ?</h2>
  <ul className="space-y-5">
    {whyChooseUsItems.map((item, index) => (
      <li key={index} className="flex items-start text-foreground/80 text-lg p-4 bg-card rounded-lg shadow-sm"> {/* Hover effect removed */}
        <CheckCircle size={28} className="text-green-500 mr-4 mt-1 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
</section>

              <section ref={galleryRef} className={`transition-all duration-700 ease-out ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Quelques Réalisations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                  <img src="22f5404b-b8f1-409e-8020-ef7fb4f932e2.jpg" alt="Ascenseur moderne dans un immeuble de bureaux" className="rounded-xl shadow-xl object-cover w-full h-80 md:h-96 transform hover:scale-105 transition-transform duration-300 ease-in-out" />
                  <img src="494664453_1209716037826370_79348.jpg" alt="Ascenseur panoramique en verre dans un centre commercial" className="rounded-xl shadow-xl object-cover w-full h-80 md:h-96 transform hover:scale-105 transition-transform duration-300 ease-in-out" />
                </div>
              </section>
            </div>
            {/* Sidebar */}
            {/* ... keep existing code (Sidebar) */}
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

export default InstallationPage;
