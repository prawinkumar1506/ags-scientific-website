import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-blue-400">A.G.S Scientific Company</h3>
            <p className="text-gray-300">
              Established by Mr. A.G. Sridhar in 2004, serving clients across India for 20 years 
              with premium quality laboratory equipment and chemicals.
            </p>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">Since 2004 • 20+ Years Experience</span>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-blue-400">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Plot No:22 B, Bharathiyar Street,<br />
                    Cholavaram Nagar, Chromepet,<br />
                    Chennai - 600044
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="font-semibold text-blue-400">Ordering Contact:</p>
                  <p className="text-gray-300">9840382223</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300">info@agsscientific.com</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-blue-400">Our Products</h3>
            <div className="grid grid-cols-1 gap-2">
              {[
                'Lab Chemicals',
                'Lab Instruments',
                'Lab Glasswares',
                'HIMEDIA Products',
                'School Lab Equipment',
                'Miscellaneous Items'
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  • {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 A.G.S Scientific Company. All rights reserved. | 
            Designed for excellence in scientific supply chain management.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;