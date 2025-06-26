
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ExpertiseSection from '../components/ExpertiseSection';
import ServicesSection from '../components/ServicesSection';
import TrustSection from '../components/TrustSection';
import GallerySection from '../components/GallerySection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section id="accueil">
          <HeroSection />
        </section>
        <section id="expertise">
          <ExpertiseSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="trust">
          <TrustSection />
        </section>
        <section id="galerie">
          <GallerySection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
