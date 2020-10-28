import React from 'react'

const Landing = () => {
    return <div className="Landing">
        Landing
    </div>
}

const Hero = () => {
    return <div className="Hero__container">
        <div className="Hero__login-btn"> Login </div>
        <div className="Hero__main-logo">Main</div>
        <div className="Hero__main-text">App Design & Development Agency</div>
    </div>
}

const Body = () => {
    return <div className="body__container">
        <div className="body__title"></div>
        <div className="body__text"></div>
    </div>
}

const Clients = () => {
    return <div className="client__container">
        <div className="client__title">OUR APPS</div>
        <div clasName="client__logos">

        </div>
    </div>
}

const Logo = ({ img, name }) => {
    return <div className="Logo__container">
        <div className="Logo__img">
            <img></img>
        </div>
        <div className="Logo__name">{name}</div>
    </div>
}


export default Landing