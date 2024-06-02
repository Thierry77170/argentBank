import './input.css'

function Input({title, id, htmlFor, value, onChange }) {

    return (
        <label htmlFor={htmlFor}>
            <p>{title}</p>
            <input
                type="text"
                id={id} 
                className="input"     
                value={value}
                onChange={onChange}    
            />
        </label>
    )
}

export default Input;