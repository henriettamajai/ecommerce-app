import React, { useState } from 'react';
import styles from './Filter.module.css';

const Filter = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleCheckboxChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((item) => item !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <div className={styles.filterContainer}>
      <h2 className={styles.title}>Filter</h2>
      <p className={styles.description}>Apply filters to the data</p>
      <h3 className={styles.productTypeTitle}>Product Type</h3>
      <div className={styles.checkboxContainer}>
        <label>
          <input type="checkbox" value="Type1" onChange={() => handleCheckboxChange('Type1')} /> 
          Type1
        </label>
        <label>
          <input type="checkbox" value="Type2" onChange={() => handleCheckboxChange('Type2')} /> 
          Type2
        </label>
        <label>
          <input type="checkbox" value="Type3" onChange={() => handleCheckboxChange('Type3')} /> 
          Type3
        </label>
      </div>
      <h3 className={styles.productTypeTitle}>Brand</h3>
      <div className={styles.checkboxContainer}>
        <label>
          <input type="checkbox" value="Brand" onChange={() => handleCheckboxChange('Brand')} /> 
          Brand1
        </label>
        <label>
          <input type="checkbox" value="Brand2" onChange={() => handleCheckboxChange('Brand2')} /> 
          Brand2
        </label>
        <label>
          <input type="checkbox" value="Brand3" onChange={() => handleCheckboxChange('Brand3')} /> 
         Brand3
        </label>
      </div>
    </div>
  );
};

export default Filter;