import React from 'react';
import { Leaf, Award, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
                <span>Una forma diferente de cuidarse</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Nuestra <span className="text-emerald-600">Historia</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Creamos una opción natural, precisa y confiable, pensada especialmente 
                  para quienes merecen sentirse bien.
                </p>
                <p>
                  Nuestros productos están hechos en lotes pequeños, con dedicación total 
                  y una exclusividad artesanal en cada gota.
                </p>
                <p className="text-xl font-medium text-gray-800">
                  <span className="text-emerald-600">No es medicina industrial.</span><br />
                  Es bienestar consciente, elaborado con cuidado extremo.
                </p>
                <p>
                  Healing Herb representa dedicación y pasión por crear productos cannabis premium 
                  con materia prima de máxima calidad que realmente marcan la diferencia.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Origen Sostenible</h3>
                  <p className="text-gray-600">Seleccionamos cuidadosamente materia prima de máxima calidad usando prácticas sostenibles y responsables.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Calidad Asegurada</h3>
                  <p className="text-gray-600">Cada producto se elabora con aceite de palta orgánico y pasa por controles rigurosos de calidad.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Enfocados en la Comunidad</h3>
                  <p className="text-gray-600">Estamos comprometidos a educar y apoyar a nuestra comunidad en su viaje de bienestar.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">100+</div>
                <div className="text-sm text-gray-600">Primeros Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">2024</div>
                <div className="text-sm text-gray-600">Año de Fundación</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">100%</div>
                <div className="text-sm text-gray-600">Cannabis Premium</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl transform -rotate-3 opacity-20"></div>
            <img
              src="/alejo.webp"
              alt="Atleta de Jiu Jitsu con productos Healing Herb"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.pexels.com/photos/6231874/pexels-photo-6231874.jpeg?auto=compress&cs=tinysrgb&w=800';
              }}
            />
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3">
                <Heart className="h-8 w-8 text-emerald-500" />
                <div>
                  <p className="font-semibold text-gray-900">Hecho con Amor</p>
                  <p className="text-sm text-gray-600">Elaborado en lotes pequeños</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;