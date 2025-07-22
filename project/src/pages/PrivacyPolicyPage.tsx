import React from 'react';
import { Shield, Eye, Lock } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidad</h1>
            <p className="text-xl text-gray-600">Healing Herb - Compromiso con la Discreción</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compromiso de Discreción</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  En Healing Herb, entendemos la importancia de la privacidad y discreción en el uso de productos de cannabis. 
                  Nos comprometemos a mantener la más estricta confidencialidad sobre nuestros clientes y sus compras.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Al adquirir nuestros productos, usted acepta y se compromete a mantener discreción sobre el uso y 
                  procedencia de los mismos, respetando las normativas locales y la privacidad de otros usuarios.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Protección de Datos</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Toda la información personal proporcionada durante el proceso de compra será tratada con la máxima 
                  confidencialidad y utilizada únicamente para fines de entrega y comunicación relacionada con su pedido.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>No compartimos información personal con terceros</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Embalaje discreto en todas las entregas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Comunicaciones confidenciales vía WhatsApp</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
              <h3 className="text-lg font-semibold text-emerald-800 mb-3">Responsabilidad del Cliente</h3>
              <p className="text-emerald-700 leading-relaxed">
                Al realizar una compra, el cliente se compromete a usar los productos de manera responsable, 
                mantener discreción sobre su adquisición y uso, y cumplir con todas las regulaciones locales aplicables. 
                Healing Herb no se hace responsable del uso indebido de sus productos.
              </p>
            </div>

            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                Última actualización: Enero 2025
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Para consultas sobre privacidad, contacta: Dailyhealingherb@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;