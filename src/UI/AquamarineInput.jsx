const AquamarineInput = ({placeholder, onChange,value}) => {

    return (
        <input value={value} onChange={event => onChange(event.target.value)}
                placeholder={placeholder} type="text"/>
    );
};

export default AquamarineInput;