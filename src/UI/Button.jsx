import React from 'react';

const Button = ({children, onClick, theme}) => {
    return (
        <button className={theme.button} onClick={onClick}>{children}</button>
    );
};

export default Button;