import React from 'react'; 
import styles from './Cta.module.css'; 
import Button from '../button/Button';

const Cta = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Join our newsletter</h1>
        <p className={styles.heroSubtitle}>Stay updated on the latest gadgets, exclusive deals, and tech tips!</p>
        <div className={styles.inputContainer}>
            <input type="email" placeholder="Enter your email" className={styles.input} />
            <Button variant='outline' size='medium' >Sign up</Button>
        </div>

      </div>
    </header>
  );
};

export default Cta;
