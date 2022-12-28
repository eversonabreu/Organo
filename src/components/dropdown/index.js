import './dropdown.css'

const DropDown = (props) => {

    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select onChange={event => props.onChange(event.target.value)} value={props.value} required={props.required}>
                <option value=''></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropDown;