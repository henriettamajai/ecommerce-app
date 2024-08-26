import React from 'react';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>Login</h2>
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
            <button type="submit" className={styles.button}>
              Log In
            </button>
          </form>
        </div>
      </div>
      <div className={styles.rightContainer}>
      </div>
    </div>
  );
};

export default LoginPage;
