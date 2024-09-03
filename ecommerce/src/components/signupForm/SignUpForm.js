import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import styles from './SignUpForm.module.css';

const SignUpForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrorMessage(''); 
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const validateForm = () => {
        const { firstName, lastName, email, password, confirmPassword } = formData;

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            return 'Please fill out all fields.';
        }
        if (password !== confirmPassword) {
            return 'Passwords do not match.';
        }
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
        if (!passwordRegex.test(password)) {
            return 'Password must contain at least 6 characters and at least one number and one special character.';
        }
        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');

        const validationError = validateForm();
        if (validationError) {
            setErrorMessage(validationError);
            return;
        }

        onSubmit(formData);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
                <div className={styles.inputWrapper}>
                    <label htmlFor="firstName" className={styles.label}>First name*</label>
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="Enter first name"
                        className={styles.input}
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="lastName" className={styles.label}>Last name*</label>
                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Enter last name"
                        className={styles.input}
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className={styles.inputWrapper}>
                <label htmlFor="email" className={styles.label}>Email*</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className={styles.inputFullWidth}
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>

            <div className={styles.inputWrapper}>
                <label htmlFor="password" className={styles.label}>Password*</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Create password"
                    className={styles.inputFullWidth}
                    value={formData.password}
                    onChange={handleInputChange}
                />
            </div>

            <div className={styles.inputWrapper}>
                <label htmlFor="confirmPassword" className={styles.label}>Confirm password*</label>
                <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Enter password again"
                    className={styles.inputFullWidth}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                />
            </div>

            {errorMessage && <p className={styles.error}>{errorMessage}</p>}

            <Button size="medium" variant="filled" type="submit" className={styles.buttonFullWidth}>
                Sign Up
            </Button>

            <button type="button" className={`${styles.googleIcon} ${styles.buttonFullWidth}`}>
                <img src="/googleIcon.svg" alt="Google Icon" className={styles.googleButton}/>
                <span>Sign Up with Google</span>
            </button>

            <div className={styles.loginLink}>
                <span>Already have an account?</span>
                <Button size='extraSmall'variant='link' state='active' onClick={handleLoginClick}>Log In</Button>
            </div>
        </form>
    );
};

export default SignUpForm;
