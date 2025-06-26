import React, { useState, useEffect } from 'react';
import { Phone, Mail, Facebook, Linkedin, Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <a href="tel:+212626597561" className="flex items-center space-x-2 no-underline hover:text-yellow-100 transition-colors">
        <Phone size={14} />
        <span>+212 626-597561</span>
      </a>
      
      {/* Adresse email cliquable sans soulignement */}
      <a
        href="mailto:support@FranceAscenseurs.ma"
        className="hidden md:flex items-center space-x-2 no-underline hover:text-yellow-100 transition-colors"
      >
        <Mail size={14} />
        <span>support@FranceAscenseurs.ma</span>
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
    className="h-20 w-auto relative transform translate-x-12" // ~3cm depending on base font size
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
            <NavLink to="/installation" className={getLinkClass}>Installation</NavLink>
            <NavLink to="/reparation" className={getLinkClass}>Réparation</NavLink>
            <NavLink to="/maintenance" className={getLinkClass}>Maintenance</NavLink>
            <NavLink to="/contact" className={getLinkClass}>Contact</NavLink>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-black/95 text-white shadow-xl rounded-lg p-6 absolute left-0 right-0 mx-4 z-[60] border border-[#D4AF37]">
            <div className="flex flex-col space-y-4">
              {[
                { to: "/", label: "Accueil" },
                { to: "/installation", label: "Installation" },
                { to: "/reparation", label: "Réparation" },
                { to: "/maintenance", label: "Maintenance" },
                { to: "/contact", label: "Contact" },
              ].map(link => (
                <NavLink 
                  key={link.to}
                  to={link.to} 
                  className={({isActive}) => `py-3 px-4 rounded-md text-lg transition-colors ${isActive ? 'text-[#D4AF37] bg-yellow-100/10 font-semibold' : 'text-white/80 hover:text-[#D4AF37] hover:bg-white/10'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
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
