import React from 'react'
import { findRenderedComponentWithType } from 'react-dom/test-utils'
import './Btn.css'

const Btn = ({ bkColor, CAT, color, height, width, title }) => {
    const btnStyle = {
        backgroundColor: bkColor,
        width: parseInt(width),
        height: parseInt(height),
        color: color || '#ffffff',
    }
    return <div className="Btn__container" onClick={CAT} style={btnStyle}>
        {title}
    </div>
}

export default Btn