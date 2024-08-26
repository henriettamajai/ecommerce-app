import React from 'react';
import styles from './Button.module.css';

const Button = ({ 
  size = 'medium', 
  variant = 'filled', 
  state = 'default', 
  children, 
  onClick,
}) => {
  const className = `
    ${styles.button} 
    ${styles[size]} 
    ${styles[variant]} 
    ${styles[state]}
  `;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
