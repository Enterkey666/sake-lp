import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À Propos' },
    { path: '/products', label: 'Produits' },
    { path: '/process', label: 'Savoir-Faire' },
    { path: '/visit', label: 'Visite' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 shadow-lg' 
        : 'bg-white/70 backdrop-blur-md border-b border-amber-300/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <h1 className="font-serif text-2xl font-bold text-gray-900">
                Brasserie Miyashita
              </h1>
              <span className="text-xs text-gray-600 uppercase tracking-wider">
                Artisan Sake Premium
              </span>
            </Link>
          </div>

          {/* Gold Decoration */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 bg-gradient-to-r from-amber-200/20 to-amber-300/30 px-6 py-3 rounded-lg backdrop-blur-sm border border-amber-300/20">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link font-semibold transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-amber-600 border-b-2 border-amber-600'
                    : 'text-gray-800 hover:text-amber-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-300 text-sm font-semibold">
              Réserver
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 text-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-md rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-semibold transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-amber-400 border-l-2 border-amber-400 pl-2'
                      : 'text-white hover:text-amber-400'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-300 text-sm font-semibold w-full">
                Réserver
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 