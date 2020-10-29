import React from 'react'
import './Btn.css'

const Btn = ({ bkColor, color, height, width, marginTop, title, type }) => {
    const btnStyle = {
        backgroundColor: bkColor,
        width: parseInt(width),
        height: parseInt(height),
        color: color || '#ffffff',
        marginTop: parseInt(marginTop) || 0,
    }
    return <button className="Btn__container" style={btnStyle} type={type}>
        {title}
    </button>
}

export default Btn