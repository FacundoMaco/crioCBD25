import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "¿Qué productos ofrecen?",
    answer: "Ofrecemos aceites de cannabis premium elaborados con materia prima de máxima calidad y aceite de palta orgánico, así como cremas tópicas para aplicación local. Todos nuestros productos están probados en laboratorio."
  },
  {
    question: "¿Cómo realizan las entregas?",
    answer: "NO realizamos envíos por correo. Todas las entregas son personales y discretas en Lima, Perú. Coordinamos el punto de encuentro y horario vía WhatsApp para mayor comodidad y privacidad."
  },
  {
    question: "¿Cuáles son los métodos de pago?",
    answer: "Aceptamos únicamente pago en efectivo al momento de la entrega. Esto garantiza la discreción y seguridad tanto para el cliente como para nosotros."
  },
  {
    question: "¿Los productos contienen THC?",
    answer: "Ofrecemos productos con diferentes concentraciones. Tenemos opciones con y sin THC, incluyendo variedades Indica, Sativa e Híbrida. Consulta por WhatsApp para conocer las opciones disponibles."
  },
  {
    question: "¿Cómo puedo contactarlos?",
    answer: "Puedes contactarnos vía WhatsApp al +51 962 952 178 o por email a Dailyhealingherb@gmail.com. Preferimos WhatsApp para una comunicación más rápida y discreta."
  },
  {
    question: "¿Hacen entregas fuera de Lima?",
    answer: "Actualmente solo realizamos entregas en Lima, Perú. No hacemos envíos a otras ciudades ni países por políticas de seguridad y discreción."
  },
  {
    question: "¿Qué garantías ofrecen sobre la calidad?",
    answer: "Todos nuestros productos están elaborados con materia prima de máxima calidad y aceite de palta orgánico. Cada lote es probado en laboratorio para garantizar pureza y potencia."
  },
  {
    question: "¿Puedo devolver un producto?",
    answer: "No aceptamos devoluciones una vez entregado el producto por razones de seguridad e higiene. Te recomendamos hacer todas las consultas necesarias antes de confirmar tu pedido."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-emerald-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
          <p className="text-xl text-gray-600">Encuentra respuestas a las consultas más comunes sobre Healing Herb</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
            <h3 className="text-xl font-semibold text-emerald-800 mb-4">¿No encuentras tu respuesta?</h3>
            <p className="text-emerald-700 mb-6">
              Estamos aquí para ayudarte. Contáctanos directamente para resolver cualquier duda específica.
            </p>
            <button
              onClick={() => {
                const message = "Hola! Tengo una consulta que no está en las preguntas frecuentes. ¿Podrían ayudarme?";
                const whatsappUrl = `https://wa.me/51962952178?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contactar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 