import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, FlaskRound as Flask, Microscope, TestTube, Settings, Clipboard, GraduationCap, Phone, ChevronDown } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import GlobalSearch from './GlobalSearch';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: null },
    { path: '/lab-chemicals', label: 'Lab Chemicals', icon: Flask },
    { path: '/lab-instruments', label: 'Lab Instruments', icon: Microscope },
    { path: '/lab-glasswares', label: 'Lab Glasswares', icon: TestTube },
    { path: '/miscellaneous', label: 'Miscellaneous', icon: Settings },
    { path: '/himedia', label: 'HIMEDIA', icon: Clipboard },
    { path: '/school-lab-needs', label: 'School Lab Needs', icon: GraduationCap },
    { path: '/contact', label: 'Contact Us', icon: Phone }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white shadow-md'
        }`}
      >
        {/* Top Bar */}
        <div className="bg-blue-600 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>📍 Plot No:22 B, Bharathiyar Street, Cholavaram Nagar, Chromepet, Chennai -600044</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>📞 Call: 9840382223</span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Company Name */}
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 p-2 rounded-lg"
              >
                <Flask className="h-8 w-8 text-white" />
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">A.G.S Scientific Company</h1>
                <p className="text-sm text-gray-600">Serving India since 2004</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Search and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
              >
                <Search className="h-5 w-5" />
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 bg-gray-100 rounded-lg"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Global Search */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t bg-white px-4 py-4"
            >
              <div className="max-w-7xl mx-auto">
                <GlobalSearch onClose={() => setShowSearch(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <nav className="px-4 py-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-blue-50'
                      }`}
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      
      {/* Spacer for fixed header */}
      <div className="h-32"></div>
    </>
  );
};

export default Header;