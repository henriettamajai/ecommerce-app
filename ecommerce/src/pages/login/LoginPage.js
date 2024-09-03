import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './LoginPage.module.css';
import LoginForm from '../../components/loginForm/LoginForm';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    const handleSubmit = async (formData) => {
        try {
            const response = await axios.post('http://localhost:5000/login', formData);

            if (response.status === 200) {
                navigate('/');
            } else {
                console.error('Login failed:', response.data);
            }
        } catch (error) {
            console.error('Error during login:', error);
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
                    <h2 className={styles.title}>Login</h2>
                    <p className={styles.subtitle}>Please enter your credentials to access your account.</p>
                    <LoginForm onSubmit={handleSubmit} /> 
                </div>
            </div>
            <div className={styles.rightContainer}></div>
        </div>
    );
};

export default LoginPage;
