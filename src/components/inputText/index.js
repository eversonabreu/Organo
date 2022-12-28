import './inputText.css'

export const InputText = (props) => {

    const onChange = (event) => {
        props.onChange(event.target.value)
    };

    return (
        <div className='input-text'>
            <label>{props.label}</label>
            <input required={props.required} placeholder={props.placeholder} value={props.value} onChange={onChange}/>
        </div>
    )
}