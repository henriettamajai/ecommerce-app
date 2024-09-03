import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Filter from '../../components/filter/Filter';
import ProductList from '../../components/productList/ProductList';
import Footer from '../../components/footer/Footer';
import styles from './ProductsPage.module.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Navbar />
      <Banner />
      <div className={styles.productListContainer}>
        <Filter />
        <ProductList products={products} showButton={false} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
