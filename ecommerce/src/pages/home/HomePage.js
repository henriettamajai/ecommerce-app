import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer';
import Carousel from '../../components/carousel/Carousel';
import FeatureCard from '../../components/featureCard/FeatureCard';
import ProductList from '../../components/productList/ProductList'; 
import Cta from '../../components/ctaSection/Cta';
import styles from './HomePage.module.css';

const HomePage = () => {
    
    const carouselItems = [
        { title: "VR Glasses", backgroundImage: "/vrCategory.png" },
        { title: "Cameras", backgroundImage: "/cameraCategory.png" },
        { title: "Headphones", backgroundImage: "/headsetCategory.png" },
        { title: "Computers", backgroundImage: "/pcCategory.png" }];

    const products = [
        { image: "/product.jpg", title: "Product 1", price: 120, discountedPrice: 100 },
        { image: "/product.jpg", title: "Product 2", price: 200 },
        { image: "/product.jpg", title: "Product 3", price: 150, discountedPrice: 130 },
        { image: "/product.jpg", title: "Product 4", price: 180 },
        { image: "/product.jpg", title: "Product 5", price: 300, discountedPrice: 250 },
        { image: "/product.jpg", title: "Product 6", price: 350 },
        { image: "/product.jpg", title: "Product 7", price: 350 },
        { image: "/product.jpg", title: "Product 8", price: 350 }
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
            <section className={styles.productSection}>
                <h2 className={styles.sectionTitle}>Featured Products</h2>
                <ProductList products={products} />
            </section>
            <Cta />
            <Footer />
        </div>
    );
};

export default HomePage;