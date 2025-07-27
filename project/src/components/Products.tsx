import React from 'react';
import { Star, MessageCircle, Award, Leaf, Shield } from 'lucide-react';
import { Product } from '../types/Product';

const products: Product[] = [
  {
    id: 1,
    name: 'Aceite Cannabis Premium',
    description: 'Aceite de cannabis elaborado con materia prima de máxima calidad y aceite de palta orgánico. Cada gota contiene extracto premium de cannabis en base oleosa natural.',
    rating: 4.9,
    reviews: 23,
    image: '/products/AceiteCBD.png',
    badge: 'Más Vendido',
    category: 'Aceites',
    inStock: true,
    features: ['Materia Prima Premium', 'Aceite de Palta Orgánico', 'Base oleosa natural', 'Concentración equilibrada por gota', 'Disfruta cannabis sin combustión'],
    ingredients: ['Extracto de cannabis orgánico', 'Aceite de palta (aguacate) orgánico', 'Terpenos naturales'],
    usage: 'Tomar 1-2 gotas bajo la lengua, 2 veces al día',
    dosage: [
      { level: 'Dosis Baja', drops: '5 gotas', volume: 'aprox 0,25ml' },
      { level: 'Dosis Media Baja', drops: '10 gotas', volume: 'aprox 0,5ml' },
      { level: 'Dosis Media', drops: '15 gotas', volume: 'aprox 0,75ml' },
      { level: 'Dosis Alta', drops: '20 gotas', volume: 'aprox 1ml' }
    ],
    sizes: [
      {
        volume: '5 ML',
        price: 20.00,
      },
      {
        volume: '10 ML',
        price: 40.00,
      },
      {
        volume: '20 ML',
        price: 80.00,
      },
      {
        volume: '30 ML',
        price: 110.00,
      },
    ],
  },
  {
    id: 2,
    name: 'Crema Cannabis Premium',
    description: 'Crema tópica con cannabis y aceite de palta para aplicación local y alivio natural',
    rating: 4.8,
    reviews: 18,
    image: '/products/cremaCBD.png',
    badge: 'Nuevo',
    category: 'Tópicos',
    inStock: true,
    features: ['Uso Tópico', 'Aceite de Palta', 'Absorción Rápida', 'Disfruta cannabis sin combustión'],
    ingredients: ['Extracto de cannabis', 'Aceite de palta (aguacate) orgánico', 'Manteca de karité', 'Cera de abeja natural'],
    usage: 'Aplicar en la zona deseada 2-3 veces al día con masaje suave',
    sizes: [
      {
        volume: '100 gr',
        price: 59.00,
      },
    ],
  }
];

const Products: React.FC = () => {
  const formatPrice = (price: number): string => {
    return `S/ ${price.toFixed(2)}`;
  };

  const handleWhatsAppContact = (product: Product) => {
    // Use the first size by default for the featured products section
    const defaultSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : null;
    const message = `Hola! Me interesa el producto: ${product.name}${defaultSize ? ` - Tamaño: ${defaultSize.volume} - ${formatPrice(defaultSize.price)}` : ''}. ¿Podrían darme más información?`;
    const whatsappUrl = `https://wa.me/51962952178?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Productos <span className="text-emerald-600">Destacados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Productos Cannabis cuidadosamente elaborados usando los mejores ingredientes orgánicos y estándares de calidad rigurosos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 relative flex flex-col"
            >
              {/* Badge */}
              <div className="absolute top-6 left-6 z-20">
                <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {product.badge}
                </span>
              </div>

              {/* Product Image */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-6 sm:p-8 z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 to-teal-100/20 rounded-t-3xl"></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative z-5 max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/6231874/pexels-photo-6231874.jpeg?auto=compress&cs=tinysrgb&w=800';
                  }}
                />
              </div>
              
              {/* Product Info */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col">
                {/* Title and Volume */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 leading-tight">
                      {product.name}
                    </h3>
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {product.sizes && product.sizes.length > 0 ? product.sizes[0].volume : 'N/A'}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{product.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-2 flex-1">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                  
                  {/* Dosage Information for Oil Products */}
                  {product.dosage && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-semibold text-gray-800 mb-3">Guía de Dosificación:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.dosage.map((dose, doseIndex) => (
                          <div key={doseIndex} className="bg-emerald-50 p-2 rounded-lg">
                            <div className="text-xs font-medium text-emerald-800">{dose.level}</div>
                            <div className="text-xs text-emerald-600">{dose.drops}</div>
                            <div className="text-xs text-gray-500">{dose.volume}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">
                    {product.rating} ({product.reviews} reseñas)
                  </span>
                </div>

                {/* Price and CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-100 mt-auto">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {product.sizes && product.sizes.length > 0 ? formatPrice(product.sizes[0].price) : 'N/A'}
                      </span>
                      {product.sizes && product.sizes.length > 0 && product.sizes[0].originalPrice && (
                        <span className="text-base sm:text-lg text-gray-500 line-through">
                          {formatPrice(product.sizes[0].originalPrice)}
                        </span>
                      )}
                    </div>
                    {product.sizes && product.sizes.length > 0 && product.sizes[0].originalPrice && (
                      <span className="text-sm text-emerald-600 font-semibold">
                        ¡Ahorra {((product.sizes[0].originalPrice - product.sizes[0].price) / product.sizes[0].originalPrice * 100).toFixed(0)}%!
                      </span>
                    )}
                  </div>
                  <button 
                    onClick={() => handleWhatsAppContact(product)}
                    className="bg-emerald-500 text-white px-4 sm:px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Contactar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Badges */}
        <div className="flex justify-center items-center space-x-8 mt-16 pt-12 border-t border-gray-200">
          <div className="flex items-center space-x-2 text-emerald-600">
            <Award className="h-6 w-6" />
            <span className="font-semibold">Calidad Premium</span>
          </div>
          <div className="flex items-center space-x-2 text-emerald-600">
            <Leaf className="h-6 w-6" />
            <span className="font-semibold">100% Natural</span>
          </div>
          <div className="flex items-center space-x-2 text-emerald-600">
            <Shield className="h-6 w-6" />
            <span className="font-semibold">Elaboración Artesanal</span>
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const element = document.querySelector('#products');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-block bg-white border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-500 hover:text-white transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Ver Todos los Productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;