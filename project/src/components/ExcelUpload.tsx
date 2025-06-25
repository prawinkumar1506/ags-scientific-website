import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileSpreadsheet } from 'lucide-react';
import * as XLSX from 'xlsx';
import { useProducts } from '../context/ProductContext';
import toast from 'react-hot-toast';

interface ExcelUploadProps {
  category: string;
}

const ExcelUpload: React.FC<ExcelUploadProps> = ({ category }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { products, setProducts } = useProducts();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        const newProducts = jsonData.map((row: any, index: number) => ({
          id: `${category}-${Date.now()}-${index}`,
          name: row.Name || row.name || row.Product || row.product || '',
          brand: row.Brand || row.brand || row.Manufacturer || row.manufacturer || '',
          description: row.Description || row.description || row.Details || row.details || '',
          category: category
        }));

        // Remove existing products of this category and add new ones
        const filteredProducts = products.filter(p => p.category !== category);
        setProducts([...filteredProducts, ...newProducts]);
        
        toast.success(`Successfully uploaded ${newProducts.length} products!`);
      } catch (error) {
        toast.error('Error parsing Excel file. Please check the format.');
      }
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center space-x-3 mb-4">
        <FileSpreadsheet className="h-6 w-6 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-800">Upload Product Data</h3>
      </div>
      
      <p className="text-gray-600 mb-4">
        Upload an Excel file with columns: Name, Brand, Description
      </p>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Upload className="h-5 w-5" />
        <span>Choose Excel File</span>
      </motion.button>
      
      <input
        ref={fileInputRef}
        type="file"
        accept=".xlsx,.xls"
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  );
};

export default ExcelUpload;