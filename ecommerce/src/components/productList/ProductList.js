import React, { useState } from 'react';
import ProductCard from '../productCard/ProductCard';
import Pagination from '../pagination/Pagination'; 
import styles from './ProductList.module.css';
import Button from '../button/Button';

const ProductList = ({ products, showButton = true, showPagination = true }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={styles.productListWrapper}>
      <div className={styles.productListContainer}>
        {currentProducts.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            discountedPrice={product.discountedPrice}
          />
        ))}
      </div>
      {showButton && (
        <div className={styles.buttonContainer}>
          <Button variant='ghost' size='large'>View All</Button>
        </div>
      )}
      {showPagination && (
        <Pagination 
          totalPages={totalPages} 
          currentPage={currentPage} 
          onPageChange={handlePageChange} 
        />
      )}
    </div>
  );
};

export default ProductList;
