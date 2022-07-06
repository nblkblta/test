import React from 'react';

const Select = ({value, selects, onChange, theme, children}) => {
    return (
        <div>{children}
            <select className={theme.select} value={value} onChange={onChange}>
                {selects.map((val) => <option value={val} key={val}>{val}</option>)}
            </select>
        </div>
    );
};

export default Select;