import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './SignUpPage.module.css';
import SignUpForm from '../../components/signupForm/SignUpForm';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/signup', formData);

      if (response.status === 201) {
        console.log('User signed up successfully!');
        navigate('/login'); 
      } else {
        console.error('Sign-up failed:', response.data);
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
    }
  };

  return (
    <div className={styles.container}>
      <img
        src="/logo.svg"
        alt="Logo"
        className={styles.logo}
        onClick={handleLogoClick}
      />
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
