import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signup/SignUpPage'
import ProductsPage from './pages/products/ProductsPage';
import SearchResult from './pages/searchResult/SearchResultPage';
import './styles/global.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/search" element={<SearchResult />} />
      </Routes>
    </Router>
  );
};

export default App;
