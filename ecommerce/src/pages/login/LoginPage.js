import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import Button from '../../components/button/Button';

const LoginPage = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
      navigate('/');
    };
  return (
    <div className={styles.container}>
        <img src="/logo.svg" alt="Logo" className={styles.logo} onClick={handleLogoClick}  />
      <div className={styles.leftContainer}>
        
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>Login</h2>
          <p className={styles.subtitle}>Please enter your credentials to access your account.</p>
          <form className={styles.form}>
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
            />
            <Button size="medium">Login</Button>
          </form>
        </div>
      </div>
      <div className={styles.rightContainer}>
      </div>
    </div>
  );
};

export default LoginPage;
