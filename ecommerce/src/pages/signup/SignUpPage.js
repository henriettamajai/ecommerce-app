import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUpPage.module.css';
import SignUpForm from '../../components/signupForm/SignUpForm';


const SignUpPage = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
        navigate('/');
    };
  const handleSubmit = (formData) => {
    navigate('/'); 
  };

  return (
    <div className={styles.container}>
      <img src="/logo.svg" alt="Logo" className={styles.logo} onClick={handleLogoClick}  />
      <div className={styles.leftContainer}>
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>Sign Up</h2>
          <p className={styles.subtitle}>Create your account to get started.</p>
          <SignUpForm onSubmit={handleSubmit} />
        </div>
      </div>
      <div className={styles.rightContainer}></div>
    </div>
  );
};

export default SignUpPage;
