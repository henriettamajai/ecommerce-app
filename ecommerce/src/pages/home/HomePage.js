import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Card from '../../components/categoryCard/CategoryCard';
import styles from './HomePage.module.css';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Hero';
import FeatureCard from '../../components/featureCard/FeatureCard';

const HomePage = () => {
    return (
        <div className={styles.wrapper}>
            <Navbar />
            <Hero />
            <div className={styles.featureSection}>
                <FeatureCard icon='/truck.svg' title="Free Shipping Worldwide" text="Global delivery at no cost." />
                <FeatureCard icon='/smile.svg' title="24/7 Customer Support" text="Help available around the clock." />
                <FeatureCard icon='/credit-card.svg' title="Secure payment options" text="Protected and reliable payments." />
                <FeatureCard icon='/package.svg' title="Hassle-free returns" text="Easy returns, no stress." />
            </div>
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
