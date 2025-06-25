import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  category: string;
  image?: string;
}

interface ProductContextType {
  products: Product[];
  setProducts: (products: Product[]) => void;
  searchProducts: (query: string, category?: string) => Product[];
  getProductsByLetter: (letter: string, category: string) => Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([
    // Sample products for demonstration
    {
      id: '1',
      name: 'Acetone (AR Grade)',
      brand: 'Merck',
      description: 'High purity acetone for analytical applications',
      category: 'lab-chemicals'
    },
    {
      id: '2',
      name: 'Benzene (LR Grade)',
      brand: 'SRL',
      description: 'Laboratory reagent grade benzene',
      category: 'lab-chemicals'
    },
    {
      id: '3',
      name: 'Digital pH Meter',
      brand: 'Eutech',
      description: 'Portable digital pH meter with automatic calibration',
      category: 'lab-instruments'
    },
    {
      id: '4',
      name: 'Analytical Balance',
      brand: 'Shimadzu',
      description: 'High precision analytical balance 0.1mg readability',
      category: 'lab-instruments'
    },
    {
      id: '5',
      name: 'Beaker Set (100ml-1000ml)',
      brand: 'Borosil',
      description: 'Borosilicate glass beakers set with spout',
      category: 'lab-glasswares'
    },
    {
      id: '6',
      name: 'Volumetric Flask 250ml',
      brand: 'Riviera',
      description: 'Class A volumetric flask with stopper',
      category: 'lab-glasswares'
    },
    {
      id: '7',
      name: 'Nutrient Agar',
      brand: 'HIMEDIA',
      description: 'General purpose medium for cultivation of bacteria',
      category: 'himedia'
    },
    {
      id: '8',
      name: 'MacConkey Agar',
      brand: 'HIMEDIA',
      description: 'Selective medium for gram-negative bacteria',
      category: 'himedia'
    },
    {
      id: '9',
      name: 'Student Microscope Set',
      brand: 'Labomed',
      description: 'Complete microscope set for educational use',
      category: 'school-lab-needs'
    },
    {
      id: '10',
      name: 'Chemistry Lab Kit',
      brand: 'AGS',
      description: 'Complete chemistry kit for school laboratories',
      category: 'school-lab-needs'
    }
  ]);

  const searchProducts = (query: string, category?: string): Product[] => {
    const filtered = category 
      ? products.filter(p => p.category === category)
      : products;
    
    if (!query) return filtered;
    
    return filtered.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.brand.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
  };

  const getProductsByLetter = (letter: string, category: string): Product[] => {
    return products.filter(product =>
      product.category === category &&
      product.name.toLowerCase().startsWith(letter.toLowerCase())
    );
  };

  return (
    <ProductContext.Provider value={{
      products,
      setProducts,
      searchProducts,
      getProductsByLetter
    }}>
      {children}
    </ProductContext.Provider>
  );
};