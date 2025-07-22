import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Claudia Rodriguez',
    role: 'Competidora de jiujitsu',
    quote: 'Como competidora de jiujitsu, la recuperación muscular es fundamental. Los productos de Healing Herb me ayudan enormemente después de entrenamientos intensos y competencias.',
    rating: 5,
    avatar: '/testimonials/ClauRoTest.jpeg'
  },
  {
    id: 2,
    name: 'Giovanna Ohlen',
    role: 'Profesional de bienestar (más de 10 años de experiencia en GSK)',
    quote: 'Usar las cremas de CrioCBD me ayudó a reducir la tensión muscular y a descansar profundamente cada noche. ¡Una rutina de cuidado que realmente funciona!',
    rating: 5,
    avatar: '/testimonials/GiovannaTest.jpeg'
  },
  {
    id: 3,
    name: 'José Alan',
    role: 'Ex futbolista profesional',
    quote: 'Desde que empecé con los aceites CrioCBD duermo de corrido y me despierto al 100%. Ya no necesito pastillas para el dolor ni para conciliar el sueño.',
    rating: 5,
    avatar: '/testimonials/ex-fut-jose.jpeg'
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      className="py-16 bg-white"
      aria-label="Testimonios de clientes satisfechos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Lo Que Dicen Nuestros <span className="text-emerald-600">Clientes</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Historias reales de personas reales que han experimentado los beneficios de nuestros productos
          </p>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Single Card with Navigation */}
        <div className="block lg:hidden">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-emerald-50/40 rounded-xl shadow-lg p-6 border border-emerald-100/50 min-h-[280px] flex flex-col justify-between">
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="h-6 w-6 text-emerald-200 absolute -top-1 -left-1" />
                  <p className="text-base leading-relaxed italic text-gray-700 pl-5">
                    {testimonials[currentIndex].quote}
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 mt-auto">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={`Foto de ${testimonials[currentIndex].name}`}
                  className="h-12 w-12 rounded-full object-cover border-2 border-emerald-200"
                  width="48"
                  height="48"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80';
                  }}
                />
                <div>
                  <h4 className="font-semibold text-base text-gray-900">{testimonials[currentIndex].name}</h4>
                  <span className="text-sm text-emerald-700 font-medium">{testimonials[currentIndex].role}</span>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-emerald-50 text-emerald-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 border border-emerald-200"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-emerald-50 text-emerald-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 border border-emerald-200"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-8 h-3 bg-emerald-500' 
                    : 'w-3 h-3 bg-emerald-200 hover:bg-emerald-300'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className="bg-emerald-50/40 rounded-xl shadow-lg p-6 border border-emerald-100/50 hover:scale-[1.02] transition-transform duration-300 flex flex-col"
              role="listitem"
            >
              <div className="space-y-4 flex-1">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative flex-1">
                  <Quote className="h-6 w-6 text-emerald-200 absolute -top-1 -left-1" />
                  <p className="text-base leading-relaxed italic text-gray-700 pl-5">
                    {testimonial.quote}
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 mt-auto">
                <img
                  src={testimonial.avatar}
                  alt={`Foto de ${testimonial.name}`}
                  className="h-12 w-12 rounded-full object-cover border-2 border-emerald-200"
                  width="48"
                  height="48"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80';
                  }}
                />
                <div>
                  <h4 className="font-semibold text-base text-gray-900">{testimonial.name}</h4>
                  <span className="text-sm text-emerald-700 font-medium">{testimonial.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;