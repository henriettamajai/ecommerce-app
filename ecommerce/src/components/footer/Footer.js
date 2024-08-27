import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.leftSection}>
          <div className={styles.logo}>
            <img src={'/Logo.svg'} alt="Logo" className={styles.logoImage} />
          </div>
          <p className={styles.copy}>
            Lorem ipsum dolor sit amet consectetur. Sagittis tristique et ultramcorper morcenas laucis massa.
          </p>
          <div className={styles.socialMedia}>
            <a href="https://facebook.com" aria-label="Facebook" className={styles.socialLink}>
                <img src="/facebook.svg" alt="Facebook" className={styles.socialIcon} />
            </a>
             <a href="https://instagram.com" aria-label="Instagram" className={styles.socialLink}>
                <img src="/instagram.svg" alt="Instagram" className={styles.socialIcon} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className={styles.socialLink}>
                <img src="/twitter.svg" alt="Twitter" className={styles.socialIcon} />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className={styles.socialLink}>
                <img src="/email.svg" alt="YouTube" className={styles.socialIcon} />
            </a>
        </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Shop</h3>
            <ul className={styles.menu}>
              <li><a href="/">Home</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/cart">Products</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Information</h3>
            <ul className={styles.menu}>
              <li><a href="/shipping-policy">Shipping Policy</a></li>
              <li><a href="/refund">Refund</a></li>
              <li><a href="/cookies">Cookies</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Customer Service</h3>
            <ul className={styles.menu}>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2024 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
