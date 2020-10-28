import React from 'react'
import './Logo.css'

const Logo = ({ link, img, name }) => {
    const logoAlt = name + ' logo'
    return <div className="Logo__container">
        <a className="Logo__link" href={link}>
            <img className="Logo__img" src={img} alt={logoAlt} />
            <h5 className="Logo__name">{name}</h5>
        </a>
    </div>
}

export default Logo