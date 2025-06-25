import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Search, Filter } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import AlphabetFilter from '../components/AlphabetFilter';
import ExcelUpload from '../components/ExcelUpload';

const HiMedia: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const { getProductsByLetter, searchProducts } = useProducts();

  useEffect(() => {
    let results = [];
    
    if (selectedLetter) {
      results = getProductsByLetter(selectedLetter, 'himedia');
    } else {
      results = searchProducts(searchQuery, 'himedia');
    }
    
    setFilteredProducts(results);
  }, [searchQuery, selectedLetter, getProductsByLetter, searchProducts]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <Typewriter
              words={['HIMEDIA Products']}
              typeSpeed={100}
              cursor={false}
            />
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete range of microbiological media, biochemicals, and laboratory 
            reagents from HIMEDIA - India's leading biotechnology company.
          </p>
        </motion.div>

        {/* Brand Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-8 mb-8"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">HIMEDIA Laboratories</h2>
            <p className="text-lg opacity-90 max-w-4xl mx-auto">
              As an authorized distributor of HIMEDIA products, we offer the complete range 
              of culture media, stains, indicators, and biochemicals trusted by laboratories 
              worldwide for over 40 years.
            </p>
          </div>
        </motion.div>

        {/* Excel Upload */}
        <ExcelUpload category="himedia" />

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-6 mb-6"
        >
          <div className="flex items-center space-x-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search HIMEDIA products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="h-5 w-5" />
              <span className="text-sm font-medium">
                {filteredProducts.length} products found
              </span>
            </div>
          </div>
        </motion.div>

        {/* Alphabet Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <AlphabetFilter
            selectedLetter={selectedLetter}
            onLetterSelect={setSelectedLetter}
          />
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🧫</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No HIMEDIA products found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or upload product data.
              </p>
            </div>
          )}
        </motion.div>

        {/* Featured Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            HIMEDIA Product Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Culture Media',
              'Stains & Indicators',
              'Biochemicals',
              'Antibiotics',
              'Plant Tissue Culture',
              'Clinical Diagnostics',
              'Food Microbiology',
              'Water Testing',
              'Industrial Media',
              'Research Media',
              'Quality Control',
              'Molecular Biology'
            ].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 border-orange-500"
              >
                <div className="text-2xl mb-2">🧫</div>
                <div className="text-sm font-medium text-gray-700">{category}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HiMedia;