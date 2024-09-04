import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './SearchResultPage.module.css';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import ProductCard from '../../components/productCard/ProductCard'; 
import Pagination from '../../components/pagination/Pagination'; 

const SearchResultPage = () => {
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchResults = async (page = 1) => {
    const query = new URLSearchParams(window.location.search).get('query');
    if (!query) {
      setError('No search query provided.');
      setLoading(false);
      return;
    }
    try {
      const response = await axios.get(`http://localhost:5000/search`, {
        params: { query, page }
      });
      console.log('API Response:', response.data); 
      setResults(response.data || []);
      setTotalPages(1);
      setCurrentPage(page);
    } catch (err) {
      console.error('Failed to fetch search results:', err);
      setError('Failed to fetch search results.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchResults(page);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <Banner title={`Search result for: ${new URLSearchParams(window.location.search).get('query')}`} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {results.length > 0 ? (
        <div className={styles.productListWrapper}>
          <div className={styles.productListContainer}>
            {results.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                discountedPrice={product.discountedPrice}
              />
            ))}
          </div>
          {totalPages > 1 && (
            <Pagination 
              totalPages={totalPages} 
              currentPage={currentPage} 
              onPageChange={handlePageChange} 
            />
          )}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResultPage;
