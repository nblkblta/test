import style from '../Styles/AquamarineInput.module.css'
const AquamarineInput = ({placeholder, onChange,value}) => {

    return (
        <input className={style.aquaMarineInput} value={value} onChange={event => onChange(event.target.value)}
                placeholder={placeholder} type="text"/>
    );
};

export default AquamarineInput;