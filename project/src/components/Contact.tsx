import React from 'react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
          <p className="text-xl text-gray-600">Estamos aquí para ayudarte con cualquier consulta sobre nuestros productos</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">+51 962 952 178</p>
                    <p className="text-sm text-gray-500">Respuesta rápida y discreta</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">Dailyhealingherb@gmail.com</p>
                    <p className="text-sm text-gray-500">Para consultas detalladas</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Zona de Entrega</h4>
                    <p className="text-gray-600">Lima, Perú</p>
                    <p className="text-sm text-gray-500">Entregas personales y discretas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
              <h4 className="font-semibold text-emerald-800 mb-3">Horarios de Atención</h4>
              <p className="text-emerald-700 text-sm">
                Lunes a Domingo: 9:00 AM - 8:00 PM<br />
                Coordinamos entregas según tu disponibilidad
              </p>
            </div>
          </div>

          {/* Botón de contacto principal */}
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h3>
              <p className="text-emerald-100 mb-8 leading-relaxed">
                Contáctanos por WhatsApp para conocer más sobre nuestros productos premium y coordinar tu pedido de manera discreta y segura.
              </p>
              <button
                onClick={() => {
                  const message = "¡Hola! Me interesa conocer más sobre los productos de cannabis premium que ofrecen. ¿Podrían brindarme información sobre sus aceites y cremas?";
                  const whatsappUrl = `https://wa.me/51962952178?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full"
              >
                Contactar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 