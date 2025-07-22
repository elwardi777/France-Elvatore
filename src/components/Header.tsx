import React, { useState, useEffect } from 'react';
import { Phone, Mail, Facebook, Linkedin, Menu, X, ShoppingCart, Heart } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartItemsCount } = useCart();
  const { favorites } = useFavorites();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const linkBaseStyle = "font-semibold text-lg transition-all duration-300 ease-in-out relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-gradient-to-r after:from-[#D4AF37] after:to-[#D4AF37] after:bottom-[-5px] after:left-0 after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300";
  const activeLinkStyle = "text-yellow-500 after:scale-x-100 after:origin-bottom-left";
  const inactiveLinkStyle = "text-white/80 hover:text-[#D4AF37]";

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${linkBaseStyle} ${isActive ? activeLinkStyle : inactiveLinkStyle}`;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 shadow-lg py-3' : 'bg-transparent py-5'}`}>
      
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] text-white py-2 shadow-sm fixed top-0 w-full z-50">
  <div className="container mx-auto px-4 flex justify-between items-center text-sm">
    
    <div className="flex items-center space-x-4">
      
      {/* Numéro de téléphone cliquable sans soulignement */}
      <a href="tel:06 66 03 31 19" className="flex items-center space-x-2 no-underline hover:text-yellow-100 transition-colors">
        <Phone size={14} />
        <span>      +212 666-033119</span>
      </a>
      
      {/* Adresse email cliquable sans soulignement */}
      <a
        href="mailto:Franceascenseurs.maroc@gmail.com"
        className="hidden md:flex items-center space-x-2 no-underline hover:text-yellow-100 transition-colors"
      >
        <Mail size={14} />
        <span>Franceascenseurs.maroc@gmail.com</span>
      </a>
    </div>

    {/* Réseaux sociaux */}
    <div className="flex items-center space-x-3">
  {/* Lien Facebook */}
  <a
    href="https://www.facebook.com/France.Ascenseurss/" // ← Remplace ce lien par le vrai
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-100 transition-colors"
  >
    <Facebook size={16} className="cursor-pointer" />
  </a>

  {/* Lien LinkedIn */}
  <a
    href="https://www.linkedin.com/in/france-ascenseurs-7a6492187/" // ← Remplace aussi si besoin
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-100 transition-colors"
  >
    <Linkedin size={16} className="cursor-pointer" />
  </a>
</div>

  </div>
</div>

<br />
      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
       <Link to="/" className="block relative group">
  <img 
    src="/lovable-uploads/019708e0-e1ba-41d2-969f-8037e332131f.png" 
    alt="France Ascenseurs Logo" 
    className="h-20 w-auto transform translate-x-12 transition duration-700 ease-in-out group-hover:scale-105 group-hover:rotate-y-180"
    />
</Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white hover:text-yellow-400 transition-colors p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-10">
            <NavLink to="/" className={getLinkClass}>Accueil</NavLink>
            <NavLink to="/pieces" className={getLinkClass}>Catalogue</NavLink>

            <NavLink to="/installation" className={getLinkClass}>Installation</NavLink>
            <NavLink to="/reparation" className={getLinkClass}>Réparation</NavLink>
            <NavLink to="/maintenance" className={getLinkClass}>Maintenance</NavLink>
            <NavLink to="/contact" className={getLinkClass}>Contact</NavLink>
          </div>

          {/* Cart and Favorites Icons */}
          <div className="hidden md:flex items-center space-x-4 ml-6">
            <Link to="/favorites" className="relative p-2 text-white hover:text-yellow-400 transition-colors">
              <Heart size={24} />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative p-2 text-white hover:text-yellow-400 transition-colors">
              <ShoppingCart size={24} />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-black/95 text-white shadow-xl rounded-lg p-6 absolute left-0 right-0 mx-4 z-[60] border border-[#D4AF37]">
            <div className="flex flex-col space-y-4">
              {[
                { to: "/", label: "Accueil" },
                { to: "/pieces", label: "Catalogue" },

                { to: "/installation", label: "Installation" },
                
                { to: "/reparation", label: "Réparation" },
                { to: "/maintenance", label: "Maintenance" },
                { to: "/contact", label: "Contact" },
                { to: "/favorites", label: "Favoris" },
                { to: "/cart", label: "Panier" },
              ].map(link => (
                <NavLink 
                  key={link.to}
                  to={link.to} 
                  className={({isActive}) => `py-3 px-4 rounded-md text-lg transition-colors flex items-center justify-between ${isActive ? 'text-[#D4AF37] bg-yellow-100/10 font-semibold' : 'text-white/80 hover:text-[#D4AF37] hover:bg-white/10'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  {link.to === '/favorites' && favorites.length > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {favorites.length}
                    </span>
                  )}
                  {link.to === '/cart' && getCartItemsCount() > 0 && (
                    <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {getCartItemsCount()}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
