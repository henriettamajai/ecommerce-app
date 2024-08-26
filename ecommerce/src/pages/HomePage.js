import React from 'react';
import Button from '../components/button/Button';
import Card from '../components/categoryCard/CategoryCard';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles['text-container']}>
          <h1 className={styles.title}>Welcome to Our Site</h1>
          <p className={styles.paragraph}>
            Here is a short paragraph describing what we do and inviting users to get started with our services.
          </p>
          <Button size="large" variant="filled">Get Started</Button>
          </div>
        </div>
  
        <div className={styles.cardRow}>
          <Card 
            title="Vr Glasses" 
            backgroundImage="/vrCategory.png" 
          />
          <Card 
            title="Cameras" 
            backgroundImage="/cameraCategory.png" 
          />
          <Card 
            title="Headphones" 
            backgroundImage="/headsetCategory.png" 
          />
        </div>
      </div>
    );
  };
  
  export default HomePage;