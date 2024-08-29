import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer';
import Carousel from '../../components/carousel/Carousel'; // Ensure you have this component
import FeatureCard from '../../components/featureCard/FeatureCard';
import styles from './HomePage.module.css';

const HomePage = () => {
    // Data for the carousel
    const carouselItems = [
        { title: "VR Glasses", backgroundImage: "/vrCategory.png" },
        { title: "Cameras", backgroundImage: "/cameraCategory.png" },
        { title: "Headphones", backgroundImage: "/headsetCategory.png" },
        { title: "Computers", backgroundImage: "/pcCategory.png" }
    ];

    return (
        <div className={styles.wrapper}>
            <Navbar />
            <Hero />
            <section className={styles.featureSection}>
                <FeatureCard icon='/truck.svg' title="Free Shipping Worldwide" text="Global delivery at no cost." />
                <FeatureCard icon='/smile.svg' title="24/7 Customer Support" text="Help available around the clock." />
                <FeatureCard icon='/credit-card.svg' title="Secure Payment Options" text="Protected and reliable payments." />
                <FeatureCard icon='/package.svg' title="Hassle-Free Returns" text="Easy returns, no stress." />
            </section>
            <section className={styles.categorySection}>
                <h2 className={styles.sectionTitle}>Shop by Categories</h2>
                <Carousel items={carouselItems} />
            </section>
            <Footer />
        </div>
    );
};

export default HomePage;
