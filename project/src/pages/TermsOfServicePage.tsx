import React from 'react';
import { FileText, AlertCircle, CheckCircle } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <FileText className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Términos de Servicio</h1>
            <p className="text-xl text-gray-600">Healing Herb - Condiciones de Uso</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Productos y Servicios</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Healing Herb ofrece productos de cannabis premium elaborados con materia prima de máxima calidad. 
                  Todos nuestros productos están destinados para uso personal y terapéutico según las regulaciones locales.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Aceites de cannabis con aceite de palta orgánico</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Cremas tópicas para aplicación local</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Productos probados en laboratorio</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Política de Entrega</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>IMPORTANTE:</strong> Healing Herb NO realiza envíos por correo o servicios de paquetería. 
                  Todos los productos se entregan únicamente mediante:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Entrega personal coordinada vía WhatsApp</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Recogida en punto de encuentro acordado</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Entrega discreta en Lima, Perú</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Proceso de Compra</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  El proceso de adquisición de productos se realiza de manera sencilla y directa:
                </p>
                <ol className="space-y-2 text-gray-600 list-decimal list-inside">
                  <li>Contacto inicial vía WhatsApp: +51 962 952 178</li>
                  <li>Consulta sobre productos disponibles y precios</li>
                  <li>Coordinación de punto y horario de entrega</li>
                  <li>Pago en efectivo al momento de la entrega</li>
                  <li>Entrega discreta del producto</li>
                </ol>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Responsabilidades y Limitaciones</h3>
              <ul className="space-y-2 text-red-700 text-sm">
                <li>• El cliente debe ser mayor de edad y cumplir con las regulaciones locales</li>
                <li>• Healing Herb no se responsabiliza por el uso indebido de los productos</li>
                <li>• Los productos son para uso personal únicamente</li>
                <li>• No se realizan devoluciones una vez entregado el producto</li>
                <li>• El cliente acepta mantener discreción sobre la transacción</li>
              </ul>
            </div>

            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                Términos vigentes desde: Enero 2025
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Para consultas: Dailyhealingherb@gmail.com | WhatsApp: +51 962 952 178
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;