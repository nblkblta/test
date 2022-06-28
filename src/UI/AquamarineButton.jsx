import React from 'react';

const AquamarineButton = ({children, onClick}) => {
    return (
        <button onClick={onClick}>{children}</button>
    );
};

export default AquamarineButton;