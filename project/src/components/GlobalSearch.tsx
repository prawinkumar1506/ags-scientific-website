import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';

interface GlobalSearchProps {
  onClose: () => void;
}

const GlobalSearch: React.FC<GlobalSearchProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const { searchProducts } = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 2) {
      const searchResults = searchProducts(query);
      setResults(searchResults.slice(0, 8)); // Limit to 8 results
    } else {
      setResults([]);
    }
  }, [query, searchProducts]);

  const handleProductClick = (product: any) => {
    navigate(`/${product.category}`);
    onClose();
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search across all categories..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          autoFocus
        />
        <button
          onClick={onClose}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50"
          >
            <div className="p-2">
              <div className="text-sm text-gray-500 p-2 border-b">
                Found {results.length} results
              </div>
              {results.map((product, index) => (
                <motion.button
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleProductClick(product)}
                  className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="font-medium text-gray-800">{product.name}</div>
                  <div className="text-sm text-gray-600">{product.brand}</div>
                  <div className="text-xs text-blue-600 capitalize">
                    {product.category.replace('-', ' ')}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GlobalSearch;