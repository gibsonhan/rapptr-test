import React from 'react'
import './Btn.css'

const Btn = ({ bkColor, CAT, color, height, width, title, type }) => {
    const btnStyle = {
        backgroundColor: bkColor,
        width: parseInt(width),
        height: parseInt(height),
        color: color || '#ffffff',
    }
    return <button className="Btn__container" onClick={CAT} style={btnStyle} type={type}>
        {title}
    </button>
}

export default Btn