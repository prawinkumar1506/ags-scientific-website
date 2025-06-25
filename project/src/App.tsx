import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LabChemicals from './pages/LabChemicals';
import LabInstruments from './pages/LabInstruments';
import LabGlasswares from './pages/LabGlasswares';
import Miscellaneous from './pages/Miscellaneous';
import HiMedia from './pages/HiMedia';
import SchoolLabNeeds from './pages/SchoolLabNeeds';
import Contact from './pages/Contact';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lab-chemicals" element={<LabChemicals />} />
              <Route path="/lab-instruments" element={<LabInstruments />} />
              <Route path="/lab-glasswares" element={<LabGlasswares />} />
              <Route path="/miscellaneous" element={<Miscellaneous />} />
              <Route path="/himedia" element={<HiMedia />} />
              <Route path="/school-lab-needs" element={<SchoolLabNeeds />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;