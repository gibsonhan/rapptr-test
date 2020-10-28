import React from 'react'
import './Input.css'

const Input = ({ height, width, name, placeholder, type }) => {
    const inputStyle = {
        height: parseInt(height),
        width: parseInt(width),
    }
    const inputName = 'Input__' + name
    return <div className="Input__container">
        <input
            className="Input__main"
            id={inputName} type={type}
            placeholder={placeholder}
            style={inputStyle}
        />
    </div>
}

export default Input