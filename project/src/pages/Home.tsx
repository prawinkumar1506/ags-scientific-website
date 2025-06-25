import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Award, Users, Globe, CheckCircle, FlaskRound as Flask, Microscope, TestTube, Building, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: '20+ Years Experience',
      description: 'Serving the scientific community since 2004'
    },
    {
      icon: Users,
      title: '5000+ Satisfied Clients',
      description: 'Trusted by researchers across India'
    },
    {
      icon: Globe,
      title: 'Pan-India Service',
      description: 'Delivering excellence nationwide'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'Premium products from trusted brands'
    }
  ];

  const categories = [
    {
      title: 'Lab Chemicals',
      description: 'High-purity chemicals for all laboratory applications',
      icon: Flask,
      path: '/lab-chemicals',
      color: 'bg-blue-500'
    },
    {
      title: 'Lab Instruments',
      description: 'Precision instruments for accurate measurements',
      icon: Microscope,
      path: '/lab-instruments',
      color: 'bg-green-500'
    },
    {
      title: 'Lab Glasswares',
      description: 'Quality glassware for reliable experiments',
      icon: TestTube,
      path: '/lab-glasswares',
      color: 'bg-purple-500'
    },
    {
      title: 'HIMEDIA Products',
      description: 'Complete range of microbiological media',
      icon: Building,
      path: '/himedia',
      color: 'bg-orange-500'
    }
  ];

  const brands = [
    'Merck', 'SRL', 'Eutech', 'Shimadzu', 'Borosil', 'HIMEDIA', 'Riviera', 'Labomed'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                A.G.S Scientific Company
              </h1>
              <div className="text-xl md:text-2xl text-blue-100 h-16">
                <Typewriter
                  words={[
                    'Established by Mr. A.G. Sridhar in 2004.',
                    'Serving clients across India for 20 years!',
                    'Your trusted partner in scientific excellence.',
                    'Quality products. Reliable service. Expert support.'
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              From laboratory chemicals to precision instruments, we provide comprehensive
              scientific solutions to research institutions, educational facilities, and
              industrial laboratories across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/lab-chemicals"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Browse Products
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Animated Train */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100vw' }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-4 text-4xl"
        >
          🚂💨
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose AGS Scientific?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two decades of excellence in serving India's scientific community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Product Categories
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for all your laboratory needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Link to={category.path} className="block">
                    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className={`${category.color} p-6 text-white`}>
                        <Icon className="h-12 w-12 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 mb-4">{category.description}</p>
                        <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                          <span>Explore Products</span>
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Trusted Brands We Represent
            </h2>
            <p className="text-xl text-gray-600">
              Partnering with industry leaders for quality assurance
            </p>
          </motion.div>

          <div className="overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-100%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="flex space-x-12 whitespace-nowrap"
            >
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white px-8 py-4 rounded-lg shadow-md flex items-center justify-center min-w-[200px]"
                >
                  <span className="text-2xl font-bold text-gray-700">{brand}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust AGS Scientific
              for their laboratory needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <span>Get Quote Today</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <a
                href="tel:9840382223"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                📞 Call: 9840382223
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;