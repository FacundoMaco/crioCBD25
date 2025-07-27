import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

// Navigation links array for smooth scrolling sections
const NAV_LINKS = [
  { href: '#home', label: 'Inicio' },
  { href: '#products', label: 'Productos' },
  { href: '#benefits', label: 'Beneficios' },
  { href: '#about', label: 'Nosotros' },
  { href: '#testimonials', label: 'Testimonios' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contacto' }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const languages = [
    { code: 'es', name: 'Español', flag: '🇵🇪' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button onClick={handleLogoClick} className="flex items-center space-x-2">
            <img 
              src="/LOGOPENEGE.png" 
              alt="Healing Herb Logo" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </button>
          
          <nav className="hidden lg:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200"
              >
                {link.label}
              </button>
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
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-2 text-base font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200"
              >
                {link.label}
              </button>
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