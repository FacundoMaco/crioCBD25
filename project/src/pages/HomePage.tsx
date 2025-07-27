import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      
      <section className="relative isolate overflow-hidden py-20 md:py-28">
        {/* Natural Texture Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-amber-50/20 to-emerald-50/30"></div>
        
        {/* Subtle Botanical Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" viewBox="0 0 60 60" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="botanical-texture" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                {/* Leaf patterns */}
                <path d="M15,20 Q20,10 25,20 Q20,30 15,20" fill="currentColor" opacity="0.3"/>
                <path d="M35,40 Q40,30 45,40 Q40,50 35,40" fill="currentColor" opacity="0.2"/>
                <path d="M5,45 Q10,35 15,45 Q10,55 5,45" fill="currentColor" opacity="0.25"/>
                {/* Fiber textures */}
                <path d="M0,15 Q15,10 30,15 Q45,20 60,15" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.15"/>
                <path d="M0,35 Q15,30 30,35 Q45,40 60,35" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.1"/>
                {/* Organic dots */}
                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.2"/>
                <circle cx="50" cy="25" r="0.8" fill="currentColor" opacity="0.15"/>
                <circle cx="25" cy="50" r="1.2" fill="currentColor" opacity="0.18"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#botanical-texture)" className="text-emerald-800"/>
          </svg>
        </div>

        {/* Floating organic elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[10%] w-2 h-2 bg-emerald-200/40 rounded-full animate-pulse"></div>
          <div className="absolute top-[30%] right-[15%] w-1.5 h-1.5 bg-amber-300/30 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-[25%] left-[20%] w-3 h-3 bg-stone-200/50 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 right-[25%] w-1 h-1 bg-emerald-300/40 rounded-full animate-pulse animation-delay-3000"></div>
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="space-y-8 md:space-y-12">
            {/* Main Title with Enhanced Typography */}
            <div className="space-y-4 opacity-0 animate-fade-in-up">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="block text-stone-800 mb-2 font-serif">Hecho con</span>
                <span className="block text-stone-800 mb-3 font-serif">Cuidado Extremo,</span>
                <span className="block bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent font-serif">
                  100% Artesanal
                </span>
              </h2>
              
              {/* Artisanal underline */}
              <div className="flex justify-center">
                <svg className="w-32 h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,4 Q25,1 50,4 T100,4" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-emerald-400 opacity-60"/>
                  <path d="M10,6 Q35,3 60,6 Q85,9 90,6" stroke="currentColor" strokeWidth="0.8" fill="none" className="text-amber-400 opacity-40"/>
                </svg>
              </div>
            </div>

            {/* Subtitle with Enhanced Presence */}
            <div className="opacity-0 animate-fade-in-up animation-delay-300">
              <p className="text-2xl sm:text-3xl md:text-4xl font-light text-stone-700 leading-relaxed tracking-wide font-serif italic">
                Desde Perú para el mundo.
              </p>
            </div>

            {/* Content Paragraphs with Staggered Animation */}
            <div className="space-y-6 md:space-y-8 max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl text-stone-600 leading-relaxed font-light opacity-0 animate-fade-in-up animation-delay-600">
                Cada uno de nuestros productos nace en pequeños lotes, elaborado a mano con atención absoluta en cada etapa: desde la selección de la planta hasta el sellado final del frasco.
              </p>
              
              <p className="text-lg sm:text-xl md:text-2xl text-stone-600 leading-relaxed font-light opacity-0 animate-fade-in-up animation-delay-900">
                No seguimos fórmulas industriales. No trabajamos con prisa. Elegimos el camino del detalle, del tiempo necesario y del respeto por cada ingrediente natural.
              </p>
              
              <p className="text-lg sm:text-xl md:text-2xl text-stone-600 leading-relaxed font-light opacity-0 animate-fade-in-up animation-delay-1200">
                Hecho en Perú, con manos peruanas, con un estándar de calidad que honra lo natural y un control preciso en cada preparación.
              </p>
              
              {/* Final Statement with Special Styling */}
              <div className="pt-6 md:pt-8 opacity-0 animate-fade-in-up animation-delay-1500">
                <p className="text-xl sm:text-2xl md:text-3xl font-medium text-stone-800 leading-relaxed font-serif">
                  <span className="text-emerald-700">Esto no es una tendencia.</span>
                  <br className="hidden sm:block" />
                  <span className="block mt-2">Es nuestra forma de trabajar.</span>
                  <br />
                  <span className="block mt-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-bold">
                    Artesanía botánica en su máxima expresión.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="benefits">
        <Benefits />
      </section>
      
      <section id="products">
        <Products />
      </section>
      
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <FAQ />
      <Contact />
    </>
  );
};

export default HomePage;