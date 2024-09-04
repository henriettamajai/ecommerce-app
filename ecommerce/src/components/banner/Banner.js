import React from 'react';
import styles from './Banner.module.css'; 

const Hero = ({ title }) => {
  return (
    <header className={styles.banner}>
           <h1 className={styles.bannerTitle}>{title}</h1>
    </header>
  );
};

export default Hero;
