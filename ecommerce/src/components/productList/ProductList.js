import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../productCard/ProductCard';
import styles from './ProductList.module.css';
import Button from '../button/Button';

const ProductList = ({ products }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/products'); 
  };

  return (
    <div className={styles.productListWrapper}>
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
      <div className={styles.buttonContainer}>
        <Button variant='ghost' size='large' onClick={handleClick}>View All</Button>
      </div>
    </div>
  );
};

export default ProductList;
