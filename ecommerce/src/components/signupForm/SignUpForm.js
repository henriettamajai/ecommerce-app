import React, { useState } from 'react';
import Button from '../button/Button';
import styles from './SignUpForm.module.css';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
                <div className={styles.inputWrapper}>
                    <label htmlFor="firstName" className={styles.label}>First Name</label>
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className={styles.input}
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="lastName" className={styles.label}>Last Name</label>
                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className={styles.input}
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={styles.inputFullWidth}
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="password" className={styles.label}>Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={styles.inputFullWidth}
                    value={formData.password}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
                <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className={styles.inputFullWidth}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                />
            </div>
            <Button size="medium" variant="filled" type="submit" className={styles.buttonFullWidth}>
                Sign Up
            </Button>
        </form>
    );
};

export default SignUpForm;
