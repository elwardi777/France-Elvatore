import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const links = [
  { to: '/installation', label: 'Installation' },
  { to: '/pieces', label: 'Catalogue' },
  { to: '/reparation', label: 'Réparation' },
  { to: '/maintenance', label: 'Maintenance' },
];

const ServiceSidebar = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `group relative overflow-hidden block w-full text-left px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 shadow-sm hover:shadow-md ${
      isActive 
        ? 'bg-primary text-primary-foreground scale-105' 
        : 'bg-card hover:bg-secondary text-foreground/80 hover:text-primary'
    }`;

  return (
    <aside className="w-full space-y-8 p-1">
      {/* Navigation Links */}
      <nav className="space-y-4">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={navLinkClass}
          >
            {/* Hover background effect */}
            <span
              className={`
                absolute top-0 right-0 h-full bg-primary transition-all duration-500 z-0
                w-0 group-hover:w-full group-hover:left-0
              `}
              style={{
                left: 'auto',
                transitionProperty: 'width, left'
              }}
            />
            {/* Label on top */}
            <span className="relative z-10 transition-colors duration-200 group-hover:text-primary-foreground">
              {label}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* CTA Box */}
      <div className="bg-gradient-to-br from-secondary to-card p-6 rounded-xl shadow-lg text-center border border-border">
        <Phone size={52} className="mx-auto text-primary mb-5" />
        <h3 className="text-xl font-bold text-foreground mb-3">
          Besoin d'un ascenseur fonctionnel et sécurisé ?
        </h3>
        <p className="text-foreground/70 mb-6 leading-relaxed">
          Nos experts sont à votre écoute pour vous conseiller et vous offrir les meilleures solutions.
        </p>
        <Link 
          to="/contact"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-gold-300 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75"
        >
          Contactez-nous
        </Link>
      </div>
    </aside>
  );
};

export default ServiceSidebar;
