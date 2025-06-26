
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface PageHeroInternalProps {
  title: string;
  subtitle?: string;
  backgroundImageUrl: string;
}

const PageHeroInternal: React.FC<PageHeroInternalProps> = ({ title, subtitle, backgroundImageUrl }) => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.2);

  return (
    <section 
      ref={heroRef}
      className="relative py-32 md:py-48 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay */}
      <div className={`relative z-10 container mx-auto px-4 text-center text-white transition-all duration-1000 ${heroVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl text-gray-300">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHeroInternal;
