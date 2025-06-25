import React from 'react';
import { motion } from 'framer-motion';

interface AlphabetFilterProps {
  selectedLetter: string;
  onLetterSelect: (letter: string) => void;
}

const AlphabetFilter: React.FC<AlphabetFilterProps> = ({ selectedLetter, onLetterSelect }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Filter by First Letter:</h3>
      <div className="flex flex-wrap gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onLetterSelect('')}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            selectedLetter === ''
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </motion.button>
        {letters.map((letter) => (
          <motion.button
            key={letter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onLetterSelect(letter)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedLetter === letter
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {letter}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default AlphabetFilter;