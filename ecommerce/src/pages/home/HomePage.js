import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Button from '../../components/button/Button';
import Card from '../../components/categoryCard/CategoryCard';
import styles from './HomePage.module.css';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Hero';

const HomePage = () => {
    return (
        <div className={styles.wrapper}>
            <Navbar />
            <Hero />
                <section className={styles.categorySection}>
                    <h2 className={styles.sectionTitle}>Shop by Categories</h2>
                    <div className={styles.cardRow}>
                        <Card title="VR Glasses" backgroundImage="/vrCategory.png" />
                        <Card title="Cameras" backgroundImage="/cameraCategory.png"/>
                        <Card title="Headphones" backgroundImage="/headsetCategory.png"/>
                        <Card title="Computers" backgroundImage="/pcCategory.png"/>
                    </div>
                </section>
            <Footer />
        </div>
    );
};

export default HomePage;
