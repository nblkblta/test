import React from 'react';
import style from '../Styles/AquamarineButton.css'
const AquamarineButton = ({children, onClick}) => {
    return (
        <button className={style.aquaMarineButton} onClick={onClick}>{children}</button>
    );
};

export default AquamarineButton;