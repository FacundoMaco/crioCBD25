export interface ProductVariant {
  type: 'Indica' | 'Sativa' | 'Híbrida';
  description: string;
  effects: string[];
}

export interface DosageInfo {
  level: string;
  drops: string;
  volume: string;
}

export interface ProductSize {
  volume: string; // e.g., "5 ML", "10 ML", "20 ML", "30 ML"
  price: number;
  originalPrice?: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  category: string;
  inStock: boolean;
  features: string[];
  ingredients: string[];
  usage: string;
  variants?: ProductVariant[];
  dosage?: DosageInfo[];
  sizes: ProductSize[]; // Made required since all products should have sizes
}