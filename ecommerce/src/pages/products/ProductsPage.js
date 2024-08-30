import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Filter from '../../components/filter/Filter';
import ProductList from '../../components/productList/ProductList';
import Footer from '../../components/footer/Footer';
import styles from './ProductsPage.module.css';

const ProductsPage = () => {
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
        <div>
            <Navbar />
            <Banner />
            <div className={styles.productListContainer}>
                <Filter />
                <ProductList products={products} showButton={false} />
            </div>
            <Footer />
            
        </div>
    );
}

export default ProductsPage;