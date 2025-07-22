import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Mantente al Día
            </h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              Obtén acceso exclusivo a nuevos productos, consejos de bienestar y ofertas especiales 
              entregados directamente a tu bandeja de entrada.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu dirección de email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                required
              />
              <button
                type="submit"
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Suscribirse</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </form>

          <p className="text-emerald-100 text-sm">
            Sin spam, nunca. Cancela en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;