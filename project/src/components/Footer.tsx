import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-50 text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src="/LOGOPENEGE.png" 
                alt="Healing Herb Logo" 
                className="h-16 w-auto object-contain filter drop-shadow-md"
              />
            </div>
            <p className="text-gray-600 leading-relaxed">
              Productos Cannabis premium "Healing Herb" elaborados con cuidado para tu viaje de bienestar natural.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/criocbd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Instagram className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#products" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 font-medium">Productos</a></li>
              <li><a href="#benefits" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 font-medium">Beneficios</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 font-medium">Nosotros</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Soporte</h3>
            <ul className="space-y-3">
              <li><a href="/faq" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 font-medium">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="text-gray-600">Dailyhealingherb@gmail.com</span>
              </div>
              <button
                onClick={() => {
                  const message = "¡Hola! Me interesa conocer más sobre los productos de cannabis premium que ofrecen. ¿Podrían brindarme información sobre sus aceites y cremas?";
                  const whatsappUrl = `https://wa.me/51962952178?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="flex items-center space-x-3 text-gray-600 hover:text-emerald-600 transition-colors duration-200 group w-full text-left"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <span className="font-medium">+51 962 952 178 (WhatsApp)</span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="text-gray-600">Lima, Perú</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-gray-500 text-sm">
                © 2025 Healing Herb. Todos los derechos reservados.
              </p>
              <p className="text-gray-400 text-sm">
                Desarrollado por <span className="text-emerald-600 font-semibold">Mavre Works</span>
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/privacy-policy" className="text-gray-500 hover:text-emerald-600 transition-colors duration-200 font-medium">Política de Privacidad</a>
              <a href="/terms-of-service" className="text-gray-500 hover:text-emerald-600 transition-colors duration-200 font-medium">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;