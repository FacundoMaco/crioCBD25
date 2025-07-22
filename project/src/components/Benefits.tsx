import React, { useEffect, useRef, useState } from 'react';
import { Heart, Moon, Zap, Dumbbell, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Cuidado Cardiaco Natural',
    description: 'Formulado para apoyar tu bienestar cardiovascular con extractos botánicos de alta pureza.'
  },
  {
    icon: Moon,
    title: 'Descanso Restaurador',
    description: 'Promueve un sueño profundo y reparador con la sinergia de nuestros aceites nocturnos.'
  },
  {
    icon: Zap,
    title: 'Energía Equilibrada',
    description: 'Aumenta tu vitalidad diaria sin estimulantes agresivos. Energía natural, sin bajones.'
  },
  {
    icon: Dumbbell,
    title: 'Relajación Muscular',
    description: 'Calma natural para músculos tensos y sobrecargados. Ideal para el cuerpo y la mente.'
  },
  {
    icon: Sparkles,
    title: 'Bienestar Integral',
    description: 'Diseñado para armonizar tu rutina diaria con alivio real y sin químicos agresivos.'
  }
];

const Benefits: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Transition Section with Parallax */}
      <div className="relative overflow-hidden py-16 md:py-20">
        {/* Parallax Background Elements */}
        <div ref={parallaxRef} className="absolute inset-0 pointer-events-none">
          {/* Organic flowing shapes */}
          <div className="absolute top-10 left-[10%] w-32 h-32 bg-gradient-to-br from-emerald-100/30 to-teal-100/20 rounded-full blur-xl"></div>
          <div className="absolute top-[40%] right-[15%] w-24 h-24 bg-gradient-to-br from-amber-100/40 to-emerald-100/30 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-[25%] w-40 h-40 bg-gradient-to-br from-stone-100/50 to-emerald-100/20 rounded-full blur-2xl"></div>
          
          {/* Botanical texture overlay */}
          <div className="absolute inset-0 opacity-[0.015]">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="transition-texture" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M10,15 Q15,5 20,15 Q15,25 10,15" fill="currentColor" opacity="0.4"/>
                  <path d="M30,35 Q35,25 40,35 Q35,45 30,35" fill="currentColor" opacity="0.3"/>
                  <path d="M5,40 Q10,30 15,40 Q10,50 5,40" fill="currentColor" opacity="0.35"/>
                  <circle cx="25" cy="10" r="1.5" fill="currentColor" opacity="0.25"/>
                  <circle cx="45" cy="25" r="1" fill="currentColor" opacity="0.2"/>
                  <circle cx="15" cy="45" r="1.8" fill="currentColor" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#transition-texture)" className="text-emerald-600"/>
            </svg>
          </div>
        </div>

        {/* Gradient transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 via-emerald-50/40 to-white"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[20%] w-1 h-1 bg-emerald-300/60 rounded-full animate-pulse"></div>
          <div className="absolute top-[60%] right-[30%] w-1.5 h-1.5 bg-amber-300/40 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-[30%] left-[40%] w-0.5 h-0.5 bg-stone-400/50 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute top-[80%] right-[20%] w-2 h-2 bg-emerald-200/50 rounded-full animate-pulse animation-delay-3000"></div>
        </div>

        {/* Transition content */}
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto"></div>
            <p className="text-lg md:text-xl text-stone-600 font-light italic">
              "Cada beneficio, una promesa cumplida"
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section 
        ref={sectionRef}
        className="py-16 md:py-20 bg-white relative overflow-hidden"
      >
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.008]">
          <svg className="w-full h-full" viewBox="0 0 60 60" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="benefits-texture" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M15,20 Q20,10 25,20 Q20,30 15,20" fill="currentColor"/>
                <path d="M35,40 Q40,30 45,40 Q40,50 35,40" fill="currentColor"/>
                <circle cx="10" cy="45" r="2" fill="currentColor"/>
                <circle cx="50" cy="15" r="1.5" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#benefits-texture)" className="text-emerald-800"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Mobile: Horizontal Scrolling Carousel */}
          <div className="block lg:hidden">
            <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-6 -mx-4 px-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex-none w-80 snap-center transition-all duration-700 ease-out ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 150}ms` 
                  }}
                >
                  <div className="group h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-emerald-50 hover:from-emerald-50 hover:to-emerald-100 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-emerald-200">
                    <div className="space-y-4 h-full flex flex-col">
                      <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300 group-hover:scale-110">
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed flex-1">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll indicator for mobile */}
            <div className="flex justify-center mt-6">
              <div className="flex space-x-2">
                {benefits.map((_, index) => (
                  <div key={index} className="w-2 h-2 bg-emerald-200 rounded-full"></div>
                ))}
              </div>
              <p className="text-sm text-gray-500 ml-4 italic">Desliza para ver más</p>
            </div>
          </div>

          {/* Desktop: Static Grid with Fade-in Animation */}
          <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms` 
                }}
              >
                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-emerald-50 hover:from-emerald-50 hover:to-emerald-100 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-emerald-200 group-hover:scale-[1.02]">
                  <div className="space-y-4 h-full flex flex-col">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom transition element */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>
    </>
  );
};

export default Benefits;