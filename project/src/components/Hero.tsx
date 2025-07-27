import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, Shield, Leaf, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const heroProducts = [
  {
    id: 1,
    name: 'Aceite Cannabis Premium',
    description: 'Aceite de cannabis elaborado con materia prima de máxima calidad y aceite de palta orgánico',
    image: '/products/AceiteCBD.png',
    badge: 'Más Vendido',
    details: 'Materia Prima Premium',
    subtitle: 'Con aceite de palta orgánico'
  },
  {
    id: 2,
    name: 'Crema Cannabis Premium',
    description: 'Crema tópica con cannabis y aceite de palta para aplicación local y alivio natural',
    image: '/products/cremaCBD.png',
    badge: 'Nuevo',
    details: 'Aplicación Tópica',
    subtitle: 'Para uso externo'
  }
];

const Hero: React.FC = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % heroProducts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % heroProducts.length);
    setIsAutoPlaying(false);
  };

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev - 1 + heroProducts.length) % heroProducts.length);
    setIsAutoPlaying(false);
  };

  const goToProduct = (index: number) => {
    setCurrentProduct(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="pt-20 pb-20 min-h-screen flex items-center" style={{ backgroundColor: '#F7FAF7' }}>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className={`space-y-8 lg:space-y-10 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Artisanal Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200/50 shadow-sm">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span className="font-medium text-sm text-emerald-700 tracking-wide">Elaboración Artesanal</span>
            </div>
            
            {/* Main Headline with Artisanal Typography */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="block text-stone-800 mb-2">Una Alternativa Real.</span>
                <span className="block bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Un Cambio Consciente.
                </span>
              </h1>
              
              {/* Artisanal Subtitle */}
              <div className="relative">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-600 leading-relaxed tracking-wide">
                  <span className="relative">
                    Alivio sin Combustión
                    <svg className="absolute -bottom-2 left-0 w-full h-1" viewBox="0 0 100 4" preserveAspectRatio="none">
                      <path d="M0,2 Q25,0 50,2 T100,2" stroke="currentColor" strokeWidth="1" fill="none" className="text-emerald-400 opacity-60"/>
                    </svg>
                  </span>
                </p>
              </div>
            </div>

            {/* CTA Section with Enhanced Design */}
            <div className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button 
                  onClick={() => {
                    const element = document.querySelector('#products');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group relative bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-lg hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="relative z-10">Descubre tu Alternativa</span>
                  <ArrowRight className="relative z-10 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button className="group border-2 border-stone-300 text-stone-700 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-lg hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all duration-300 backdrop-blur-sm">
                  <span className="group-hover:scale-105 transition-transform duration-200 inline-block">
                    Conoce Más
                  </span>
                </button>
              </div>

              {/* Quality Indicators with Refined Design */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-8 sm:gap-12 pt-6">
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
                    <Leaf className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span className="text-base font-medium text-stone-600">100% Natural</span>
                </div>
                
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
                    <Shield className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span className="text-base font-medium text-stone-600">Materia Prima Premium</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Showcase with Enhanced Visual Design */}
          <div className={`relative group transition-all duration-1200 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Artisanal Frame Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-stone-50/40 to-emerald-50/30 rounded-3xl transform rotate-1 shadow-2xl backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-emerald-100/20 to-amber-50/20 rounded-3xl transform -rotate-1 shadow-xl"></div>
            
            {/* Main Product Container */}
            <div className="relative rounded-3xl shadow-2xl w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-white/90 backdrop-blur-sm border border-white/50">
              {heroProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentProduct 
                      ? 'opacity-100 transform translate-x-0' 
                      : index < currentProduct 
                        ? 'opacity-0 transform -translate-x-full'
                        : 'opacity-0 transform translate-x-full'
                  }`}
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-stone-50 via-white to-emerald-50/30 flex items-center justify-center p-8">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.pexels.com/photos/6231874/pexels-photo-6231874.jpeg?auto=compress&cs=tinysrgb&w=800';
                      }}
                    />
                  </div>
                  
                  {/* Artisanal Product Badge */}
                  <div className="absolute top-6 left-6 z-30">
                    <div className="bg-white/95 backdrop-blur-sm text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-emerald-200/50">
                      {product.badge}
                    </div>
                  </div>
                </div>
              ))}

              {/* Enhanced Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {heroProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToProduct(index)}
                    className={`transition-all duration-300 ${
                      index === currentProduct 
                        ? 'w-8 h-3 bg-emerald-500 shadow-lg scale-110' 
                        : 'w-3 h-3 bg-white/70 hover:bg-white/90 hover:scale-105'
                    } rounded-full backdrop-blur-sm`}
                  />
                ))}
              </div>
            </div>

            {/* Enhanced Navigation Arrows */}
            <button
              onClick={prevProduct}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-stone-700 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button
              onClick={nextProduct}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-stone-700 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Enhanced Product Info Card */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/50 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="font-semibold text-stone-800 text-sm sm:text-base">
                    {heroProducts[currentProduct].details}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600">
                    {heroProducts[currentProduct].subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animation delays */}
      <style>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
};

export default Hero;