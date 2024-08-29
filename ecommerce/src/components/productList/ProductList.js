import React from 'react';
import ProductCard from '../productCard/ProductCard';
import styles from './ProductList.module.css';
import Button from '../button/Button';

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
      <Button variant='ghost' size='large'>View All</Button>
    </div>
  );
};

export default ProductList;