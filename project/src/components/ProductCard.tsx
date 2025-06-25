import React from 'react';
import { motion } from 'framer-motion';
import { Package, Building } from 'lucide-react';
import { Product } from '../context/ProductContext';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <Package className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full">
            <Building className="h-3 w-3 text-gray-600" />
            <span className="text-xs font-medium text-gray-600">{product.brand}</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full capitalize">
            {product.category.replace('-', ' ')}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Enquire Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;