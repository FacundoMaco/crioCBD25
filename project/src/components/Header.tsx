import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

// Navigation links array for consistency
const NAV_LINKS = [
  { href: '/', label: 'Inicio', isInternal: true },
  { href: '/products', label: 'Productos', isInternal: true },
  { href: '#benefits', label: 'Beneficios', isInternal: false },
  { href: '#about', label: 'Nosotros', isInternal: false },
  { href: '#contact', label: 'Contacto', isInternal: false }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const location = useLocation();

  const languages = [
    { code: 'es', name: 'Español', flag: '🇵🇪' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const handleNavClick = (href: string, isInternal: boolean) => {
    if (!isInternal && location.pathname !== '/') {
      // If it's a hash link and we're not on home page, navigate to home first
      window.location.href = `/${href}`;
    }
    setIsMenuOpen(false);
  };
  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/LOGOPENEGE.png" 
              alt="Healing Herb Logo" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              link.isInternal ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    isActiveLink(link.href)
                      ? 'text-emerald-600'
                      : 'text-gray-700 hover:text-emerald-600'
                  }`}
                >
                  {link.label}
                  {isActiveLink(link.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full"></span>
                  )}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href, link.isInternal)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200 px-2 py-1 rounded-lg"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {languages.find(lang => lang.code === currentLanguage)?.flag}
                </span>
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setCurrentLanguage(language.code);
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-emerald-50 transition-colors duration-200 flex items-center space-x-3 ${
                        currentLanguage === language.code ? 'text-emerald-600 bg-emerald-50' : 'text-gray-700'
                      }`}
                    >
                      <span>{language.flag}</span>
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button 
              onClick={() => {
                const message = "¡Hola! Me interesa conocer más sobre los productos de cannabis premium que ofrecen. ¿Podrían brindarme información sobre sus aceites y cremas?";
                const whatsappUrl = `https://wa.me/51962952178?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-emerald-500 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-600 transition-colors duration-200"
            >
              Contactar Ahora
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-6 space-y-4 border-t border-gray-100 pt-4">
            {NAV_LINKS.map((link) => (
              link.isInternal ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block py-2 text-base font-medium transition-colors duration-200 ${
                    isActiveLink(link.href)
                      ? 'text-emerald-600 bg-emerald-50 px-3 rounded-lg'
                      : 'text-gray-700 hover:text-emerald-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href, link.isInternal)}
                  className="block py-2 text-base font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200"
                >
                  {link.label}
                </a>
              )
            ))}
            
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Idioma:</p>
              <div className="space-y-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      setCurrentLanguage(language.code);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors duration-200 flex items-center space-x-3 ${
                      currentLanguage === language.code ? 'text-emerald-600 bg-emerald-50' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{language.flag}</span>
                    <span>{language.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => {
                const message = "¡Hola! Me interesa conocer más sobre los productos de cannabis premium que ofrecen. ¿Podrían brindarme información sobre sus aceites y cremas?";
                const whatsappUrl = `https://wa.me/51962952178?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
                setIsMenuOpen(false);
              }}
              className="w-full bg-emerald-500 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors duration-200 mt-4"
            >
              Contactar Ahora
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;