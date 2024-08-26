import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css'; 
import Button from '../button/Button'; 

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path); 
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => handleNavigate('/')} style={{ cursor: 'pointer' }}>
        <img src="/logo.svg" alt="Logo" />
      </div>
      <ul className={styles.menu}>
        <li><Button variant="ghost" size="medium">Home</Button></li>
        <li><Button variant="ghost" size="medium">Shop</Button></li>
        <li><Button variant="ghost" size="medium">Products</Button></li>
      </ul>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <img src="/search-icon.svg" alt="Search" />
        </div>
        <div className={styles.icon} onClick={() => handleNavigate('/login')} style={{ cursor: 'pointer' }}>
          <img src="/user-icon.svg" alt="Account" />
        </div>
        <div className={styles.icon}>
          <img src="/cart-icon.svg" alt="Cart" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
