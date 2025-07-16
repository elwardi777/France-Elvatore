import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeroInternal from '../components/PageHeroInternal';
import ServiceSidebar from '../components/ServiceSidebar';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { PackageSearch, Tag, ShieldCheck } from 'lucide-react';

const PiecesPage = () => {
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation(0.2);

  const products = [
    {
      icon: <PackageSearch size={32} className="text-primary" />,
      title: "Tous types de pièces",
      description: "Moteurs, Câbles,Contrôle d’accès, Tags, vérins hydrauliques, et plus encore.",
    },
    {
      icon: <Tag size={32} className="text-primary" />,
      title: "Prix très compétitifs",
      description: "Nous proposons les meilleurs tarifs du marché avec des remises pour les professionnels.",
    },
    {
      icon: <ShieldCheck size={32} className="text-primary" />,
      title: "Qualité & Garantie",
      description: "Toutes nos pièces sont certifiées, testées et garanties pour une sécurité maximale.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHeroInternal 
          title="Pièces pour Ascenseurs"
          subtitle="Vente de toutes les pièces de rechange à des prix très abordables"
          backgroundImageUrl="/Untitled-3.fw_sr1_c1.jpg"
        />

        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* ===== Main Content ===== */}
            <div className="flex-1 space-y-10">
              <section ref={introRef} className={`transition-all duration-700 ease-out ${introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
                  France Ascenseurs – Toutes vos pièces au meilleur prix
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {products.map((item, index) => (
                    <div key={index} className="p-6 bg-card rounded-xl shadow-lg transform hover:scale-[1.03] transition-transform duration-300 ease-in-out">
                      <div className="mb-4">{item.icon}</div>
                      <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                      <p className="text-foreground/80 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>

                {/* ===== New Section ===== */}
                <section className="mt-20 bg-secondary rounded-xl px-6 py-16 shadow-xl">
                  <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                      Pourquoi choisir nos pièces de rechange ?
                    </h3>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                      Parce que chaque composant est essentiel, nous sélectionnons rigoureusement nos pièces pour garantir sécurité, durabilité et performance. Notre expertise nous permet de vous proposer des produits adaptés à tous types d’ascenseurs, à des prix imbattables.
                    </p>
                    <a
                      href="/contact"
                      className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                      Demandez un devis personnalisé
                    </a>
                  </div>
                </section>

                <p className="mt-12 text-center text-xl font-medium text-foreground">
                </p>
              </section>
            </div>

            {/* ===== Sidebar ===== */}
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

export default PiecesPage;
