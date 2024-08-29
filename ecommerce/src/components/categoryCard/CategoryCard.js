import React from 'react';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ title, backgroundImage }) => {
  return (
    <div className={styles.cardContainer}>
      <div 
        className={styles.cardImage} 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
