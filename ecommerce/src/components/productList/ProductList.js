import React from 'react';
import ProductCard from '../productCard/ProductCard';
import styles from './ProductList.module.css';

const ProductList = ({ products }) => {
  return (
    <div className={styles.productListContainer}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          price={product.price}
          discountedPrice={product.discountedPrice}
        />
      ))}
    </div>
  );
};

export default ProductList;