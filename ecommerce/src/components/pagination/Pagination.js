import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className={styles.paginationContainer}>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`${styles.pageNumber} ${currentPage === index + 1 ? styles.active : ''}`}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
