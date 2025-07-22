import React, { useState } from 'react';
import { Star, MessageCircle, Filter, Search, Heart, Check, X } from 'lucide-react';
import { products, categories } from '../data/products';
import { Product, ProductSize } from '../types/Product';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'Todos' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          const aPrice = a.sizes && a.sizes.length > 0 ? a.sizes[0].price : 0;
          const bPrice = b.sizes && b.sizes.length > 0 ? b.sizes[0].price : 0;
          return aPrice - bPrice;
        case 'price-high':
          const aPriceHigh = a.sizes && a.sizes.length > 0 ? a.sizes[0].price : 0;
          const bPriceHigh = b.sizes && b.sizes.length > 0 ? b.sizes[0].price : 0;
          return bPriceHigh - aPriceHigh;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const formatPrice = (price: number): string => {
    return `S/ ${price.toFixed(2)}`;
  };

  const handleWhatsAppContact = (product: Product, variant?: string, size?: ProductSize) => {
    const variantText = variant ? ` - Variedad: ${variant}` : '';
    let sizeText = '';
    let priceText = '';
    if (size) {
      sizeText = ` - Tamaño: ${size.volume}`;
      priceText = ` - ${formatPrice(size.price)}`;
    } else if (product.sizes && product.sizes.length > 0) {
      // Use first size as default if no size is selected
      sizeText = ` - Tamaño: ${product.sizes[0].volume}`;
      priceText = ` - ${formatPrice(product.sizes[0].price)}`;
    }
    const message = `Hola! Me interesa el producto: ${product.name}${variantText}${sizeText}${priceText}. ¿Podrían darme más información?`;
    const whatsappUrl = `https://wa.me/51962952178?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const ProductModal = ({ product, onClose }: { product: Product; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={() => {
              setSelectedSize(null);
              setSelectedVariant('');
              onClose();
            }}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-contain rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 p-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/6231874/pexels-photo-6231874.jpeg?auto=compress&cs=tinysrgb&w=800';
                  }}
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium z-20 shadow-lg">
                    {product.badge}
                  </span>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center rounded-xl">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium">
                      Agotado
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
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
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} reseñas)
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(selectedSize ? selectedSize.price : (product.sizes && product.sizes[0] ? product.sizes[0].price : 0))}
                </span>
                {selectedSize?.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(selectedSize.originalPrice)}
                  </span>
                )}
              </div>

              {product.sizes && product.sizes.length > 1 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Selecciona tu tamaño:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.sizes.map((size, index) => (
                      <div
                        key={index}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedSize?.volume === size.volume
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        <h4 className="font-semibold text-gray-900 mb-1">{size.volume}</h4>
                        <p className="text-sm text-gray-600">{formatPrice(size.price)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Características</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Ingredientes</h3>
                <p className="text-gray-600">{product.ingredients.join(', ')}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Modo de Uso</h3>
                <p className="text-gray-600">{product.usage}</p>
              </div>

              {product.variants && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Selecciona tu variedad:</h3>
                  <div className="grid gap-3">
                    {product.variants.map((variant, index) => (
                      <div
                        key={index}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedVariant === variant.type
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}
                        onClick={() => setSelectedVariant(variant.type)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-1">{variant.type}</h4>
                            <p className="text-sm text-gray-600 mb-2">{variant.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {variant.effects.map((effect, effectIndex) => (
                                <span
                                  key={effectIndex}
                                  className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                                >
                                  {effect}
                                </span>
                              ))}
                            </div>
                          </div>
                          {selectedVariant === variant.type && (
                            <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.dosage && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Guía de Dosificación:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {product.dosage.map((dose, doseIndex) => (
                      <div key={doseIndex} className="bg-emerald-50 p-3 rounded-lg">
                        <div className="text-sm font-medium text-emerald-800">{dose.level}</div>
                        <div className="text-sm text-emerald-600">{dose.drops}</div>
                        <div className="text-xs text-gray-500">{dose.volume}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex space-x-4">
                <button
                  onClick={() => handleWhatsAppContact(product, selectedVariant, selectedSize || (product.sizes && product.sizes[0]))}
                  disabled={!product.inStock}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 ${
                    product.inStock
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>{product.inStock ? 'Contactar por WhatsApp' : 'Agotado'}</span>
                </button>
                <button className="p-3 border-2 border-gray-300 rounded-lg hover:border-emerald-500 hover:text-emerald-600 transition-colors duration-200">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-emerald-600">Productos</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra gama completa de productos CBD premium, cuidadosamente elaborados para tu bienestar
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="name">Ordenar por Nombre</option>
              <option value="price-low">Precio: Menor a Mayor</option>
              <option value="price-high">Precio: Mayor a Menor</option>
              <option value="rating">Mejor Calificación</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[4/3] object-contain bg-gradient-to-br from-emerald-50 to-teal-50 p-4 group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/6231874/pexels-photo-6231874.jpeg?auto=compress&cs=tinysrgb&w=800';
                  }}
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium z-30 shadow-lg">
                    {product.badge}
                  </span>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium">
                      Agotado
                    </span>
                  </div>
                )}
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
                >
                  <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium">
                    Ver Detalles
                  </span>
                </button>
              </div>
              
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 mt-auto">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">
                      {product.sizes && product.sizes.length > 0 ? formatPrice(product.sizes[0].price) : 'N/A'}
                    </span>
                    {product.sizes && product.sizes.length > 0 && product.sizes[0].originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(product.sizes[0].originalPrice)}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleWhatsAppContact(product)}
                    disabled={!product.inStock}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 w-full sm:w-auto ${
                      product.inStock
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>
                      {product.inStock ? 'Contactar' : 'Agotado'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron productos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => {
            setSelectedProduct(null);
            setSelectedSize(null);
            setSelectedVariant('');
          }}
        />
      )}
    </div>
  );
};

export default ProductsPage;