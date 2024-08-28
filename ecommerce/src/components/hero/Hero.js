import React from 'react';
import Button from '../button/Button'; 
import styles from './Hero.module.css'; 

const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to Our Store</h1>
        <p className={styles.heroSubtitle}>Discover the best products at unbeatable prices. Start exploring now!</p>
        <Button variant='filled' size="large">Get Started</Button>
      </div>
    </header>
  );
};

export default Hero;
