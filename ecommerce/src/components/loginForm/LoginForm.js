import React, { useState } from 'react';
import Button from '../button/Button'; 
import styles from './LoginForm.module.css'; 
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState(''); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrorMessage('');
    };

    const validateForm = () => {
        const { email, password } = formData;
        if (!email || !password) {
            return 'Please fill out both email and password fields.';
        }
        return null; 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const validationError = validateForm();
        if (validationError) {
            setErrorMessage(validationError);
            return;
        }

        onSubmit(formData);
    };

    const navigate = useNavigate();
    const handleSignUpClick = () => {
        navigate('/signup'); 
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
           
            
            <div className={styles.inputWrapper}>
                <label htmlFor="email" className={styles.label}>Email*</label>
                <input id="email" type="email" name="email" placeholder="Enter your email" className={styles.inputFullWidth} value={formData.email} onChange={handleInputChange} />
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="password" className={styles.label}>Password*</label>
                <input id="password" type="password" name="password" placeholder="Enter your password" className={styles.inputFullWidth} value={formData.password} onChange={handleInputChange} />
            </div>
            
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}

            <Button size="medium" variant="filled" type="submit" className={styles.buttonFullWidth}>Log In</Button>

            <div className={styles.signupLink}>
                <span>Don't have an account?</span>
                <Button size='extraSmall' variant='link' state='active' onClick={handleSignUpClick}> Sign up now </Button>
            </div>
        </form>
    );
};

export default LoginForm;
