import React, { useEffect } from 'react'
import Icon from './Icon'
import './Input.css'

const Input = ({
    bgColor,
    family,
    height,
    width,
    name,
    placeholder,
    inputRef,
    marginBottom,
    type
}) => {
    //hack: on render load style for subscribe's input 
    useEffect(() => {
        (async () => {
            if (family === 'subscribe') {
                await import('./InputSubscribe.css')
            }
        })();
    }, [])

    const inputStyle = {
        backgroundColor: bgColor || '#ffffff',
        height: parseInt(height),
        width: parseInt(width),
        marginBottom: parseInt(marginBottom) || 0,

        /* inline styling of place holder does not work apparently?
        '&::placeholder': {
            content: `''`,
            color: 'white'
        },
        */
    }
    const inputName = 'Input__' + name
    return <div className="Input__container">
        <div className="Input__main-container">
            <img className="Input__main-icon" src={Icon[name]} alt={name + '-icon'} />
            <input
                ref={inputRef}
                className="Input__main"
                id={inputName}
                type={type}
                placeholder={placeholder}
                style={inputStyle}
            />
        </div>
    </div>
}

export default Input