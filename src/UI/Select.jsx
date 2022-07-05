import React from 'react';

const Select = ({value, selects, onChange, theme}) => {
    return (
        <div>
            <select className={theme.select} value={value} onChange={event => onChange(event)}>
                {selects.map((val) => <option value={val} key={val}>{val}</option>)}
            </select>
        </div>
    );
};

export default Select;