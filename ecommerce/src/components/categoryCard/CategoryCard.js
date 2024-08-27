import React from 'react';
import styles from './CategoryCard.module.css';
import Button from '../button/Button';

const CategoryCard = ({ title, backgroundImage }) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <Button variant="link" size="medium">Shop Now</Button>
      </div>
    </div>
  );
};

export default CategoryCard;
