
import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CallToActionSectionProps {
  title?: string;
  phoneNumber?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  title = "Contactez-nous dès aujourd'hui",
  phoneNumber = "06 61 52 37 10",
  buttonText = "Appeler maintenant",
  buttonLink = "tel:+212661523710"
}) => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className={`py-12 md:py-20 bg-gray-100 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-12'}`}>
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl max-w-3xl mx-auto text-center">
          <HelpCircle size={56} className="mx-auto text-gold-600 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">{title}</h2>
          {phoneNumber && (
            <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="block text-3xl md:text-4xl font-semibold text-gold-600 hover:text-gold-700 transition-colors mb-8 group">
              <Phone size={28} className="inline-block mr-2 mb-1 group-hover:animate-pulse" />
              {phoneNumber}
            </a>
          )}
          <Link
            to={buttonLink.startsWith('tel:') ? '#' : buttonLink}
            onClick={buttonLink.startsWith('tel:') ? () => window.location.href = buttonLink : undefined}
            className="inline-block bg-gold-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gold-700 transition-colors transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
