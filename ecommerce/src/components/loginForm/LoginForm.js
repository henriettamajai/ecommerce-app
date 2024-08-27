import React, { useState } from 'react';
import Button from '../button/Button'; 
import styles from './LoginForm.module.css'; 
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
        console.log('Login form data:', formData);
    };
    const navigate = useNavigate();
    const handleSignUpClick = () => {
        navigate('/signup'); 
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input id="email" type="email" name="email" placeholder="Email" className={styles.inputFullWidth} value={formData.email} onChange={handleInputChange} />
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="password" className={styles.label}>Password</label>
                <input id="password" type="password" name="password" placeholder="Password" className={styles.inputFullWidth} value={formData.password} onChange={handleInputChange} />
            </div>

            <Button size="medium" variant="filled" type="submit" className={styles.buttonFullWidth}>
                Log In
            </Button>
            <div className={styles.signupLink}>
                <span>Don't have an account?</span>
                <Button size='extraSmall' variant='link' state='active' onClick={handleSignUpClick}> Sign up now </Button>
            </div>
        </form>
    );
};

export default LoginForm;
