import React from 'react';
import Button from '../button/Button';
import styles from './ProductCard.module.css';

const ProductCard = ({ image, title, price, discountedPrice }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title}/>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.priceContainer}>
          {discountedPrice ? ( <>
              <span className={styles.discountedPrice}>${discountedPrice}</span>
              <span className={styles.originalPrice}>${price}</span>
            </>
          ) : (
            <span className={styles.price}>${price}</span>
          )}
        </div>
        <Button variant='filled' size="small"  className={styles.fullWidthButton}>Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
