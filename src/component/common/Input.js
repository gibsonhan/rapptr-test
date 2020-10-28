import React from 'react'
import './Input.css'

const Input = ({ bgColor, height, width, name, placeholder, inputRef, marginBottom, type }) => {
    const inputStyle = {
        backgroundColor: bgColor || '#ffffff',
        height: parseInt(height),
        width: parseInt(width),
        marginBottom: parseInt(marginBottom) || 0,
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
        />
    </div>
}

export default Input