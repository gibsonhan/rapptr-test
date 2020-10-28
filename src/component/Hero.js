import React from 'react'
import heroImg from '../assets/hero_img.png'
import rapttrLogo from '../assets/logo_rapptr.png'
import './Hero.css'

const Hero = () => {
    return <div className="Hero__container">
        <div classname="Hero__img-container">
            <img src={heroImg} alt="hero_img" />
        </div>
        <h3 className="Hero__login-nav"> Login </h3>
        <div className="Hero__main-content">
            <img className="Hero__main-logo" src={rapttrLogo} alt="rapptr_logo" />
            <h1 className="Hero__main-text">App Design & Development Agency</h1>
        </div>
    </div>
}

export default Hero