import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route        
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';


function App() {
  return (
    <Router>
      <Routes>
        {/* Route grab: <Route path='' element={} /> */}
        <Route path='/' element={<HomePage /> } />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/about-us' element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
