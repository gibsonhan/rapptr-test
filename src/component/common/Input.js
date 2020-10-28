import React from 'react'
import './Input.css'

const Input = ({ height, width, name, placeholder, inputRef, type }) => {
    const inputStyle = {
        height: parseInt(height),
        width: parseInt(width),
    }
    const inputName = 'Input__' + name
    return <div className="Input__container">
        <input
            ref={inputRef}
            className="Input__main"
            id={inputName}
            type={type}
            placeholder={placeholder}
            style={inputStyle}
            onChange={console.log('hello')}
        />
    </div>
}

export default Input