// import React from 'react';

// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import ServicesPage from './pages/ServicesPage';

// import AboutUsPage from './pages/AboutUsPage';
// import ContactUsPage from './pages/ContactUsPage';
// import ProductsPage from './pages/ProductPage';
// import { Route, Routes } from 'react-router-dom';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/services" element={<ServicesPage />} />
//         <Route path="/products" element={<ProductsPage/>} />
//         <Route path="/about" element={<AboutUsPage />} />
//         <Route path="/contact" element={<ContactUsPage />} />
//       </Routes>
//       <Footer />
//     </div>
      
    
//   );
// };

// export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css"

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import ProductsPage from './pages/ProductPage';
import Topbar from './components/Topbar';

const App = () => {
  return (
    <>
    <Navbar />
    <Topbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

