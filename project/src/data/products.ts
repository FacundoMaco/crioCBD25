import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Aceite Cannabis Premium',
    description: 'Aceite de cannabis elaborado con materia prima de máxima calidad y aceite de palta orgánico. Cada gota contiene extracto premium de cannabis en base oleosa natural. Disponible en tres variedades para diferentes efectos.',
    rating: 4.9,
    reviews: 23,
    image: '/products/AceiteCBD.png',
    badge: 'Más Vendido',
    category: 'Aceites',
    inStock: true,
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
    features: [
      'Materia prima de máxima calidad',
      'Con aceite de palta orgánico',
      'Extracción premium',
      'Base oleosa natural',
      'Concentración equilibrada por gota',
      'Disponible en Indica, Sativa e Híbrida',
      'Disfruta cannabis sin combustión'
    ],
    ingredients: [
      'Extracto de cannabis orgánico',
      'Aceite de palta (aguacate) orgánico',
      'Terpenos naturales'
    ],
    usage: 'Tomar 1-2 gotas bajo la lengua, 2 veces al día',
    variants: [
      {
        type: 'Indica',
        description: 'Ideal para relajación y descanso nocturno',
        effects: ['Relajante', 'Sedante', 'Anti-estrés']
      },
      {
        type: 'Sativa',
        description: 'Perfecto para energía y creatividad diurna',
        effects: ['Energizante', 'Creativo', 'Eufórico']
      },
      {
        type: 'Híbrida',
        description: 'Balance perfecto entre relajación y energía',
        effects: ['Equilibrado', 'Versátil', 'Adaptable']
      }
    ],
    dosage: [
      { level: 'Dosis Baja', drops: '5 gotas', volume: 'aprox 0,25ml' },
      { level: 'Dosis Media Baja', drops: '10 gotas', volume: 'aprox 0,5ml' },
      { level: 'Dosis Media', drops: '15 gotas', volume: 'aprox 0,75ml' },
      { level: 'Dosis Alta', drops: '20 gotas', volume: 'aprox 1ml' }
    ]
  },
  {
    id: 2,
    name: 'Crema Cannabis Premium',
    description: 'Crema tópica con cannabis elaborada con materia prima de máxima calidad y aceite de palta orgánico. Presentación de 100 gr. Ideal para aplicación local y alivio natural.',
    rating: 4.8,
    reviews: 18,
    image: '/products/cremaCBD.png',
    badge: 'Nuevo',
    category: 'Tópicos',
    inStock: true,
    sizes: [
      {
        volume: '100 gr',
        price: 59.00,
      },
    ],
    features: [
      'Con aceite de palta orgánico',
      'Absorción rápida',
      'Sin parabenos',
      'Materia prima premium',
      'Ideal para uso tópico',
      'Disfruta cannabis sin combustión'
    ],
    ingredients: [
      'Extracto de cannabis',
      'Aceite de palta (aguacate) orgánico',
      'Manteca de karité',
      'Cera de abeja natural'
    ],
    usage: 'Aplicar en la zona deseada 2-3 veces al día con masaje suave'
  }
];

export const categories = [
  'Todos',
  'Aceites',
  'Tópicos'
];