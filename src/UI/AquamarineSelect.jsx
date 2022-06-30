import React from 'react';

const AquamarineSelect = ({value, selects, onChange }) => {
    return (
        <div>
            <select value={value} onChange={event => onChange(event)}>
                {selects.map((val) => <option value={val} key={val}>{val}</option>)}
            </select>
        </div>
    );
};

export default AquamarineSelect;