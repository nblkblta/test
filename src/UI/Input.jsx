import style from '../Styles/AquamarineInput.module.css'
const Input = ({placeholder, onChange,value}) => {

    return (
        <input className={style.aquaMarineInput} value={value} onChange={event => onChange(event.target.value)}
                placeholder={placeholder} type="text"/>
    );
};

export default Input;