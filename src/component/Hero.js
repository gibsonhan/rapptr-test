import React from 'react'
import heroImg from '../assets/bg_hero.png'
import rapttrLogo from '../assets/logo_rapptr.png'
import './Hero.css'

const Hero = ({ loginCAT }) => {
    return <div className="Hero__container">
        <img className="Hero__background-img" src={heroImg} alt="hero_img" />
        <h3 className="Hero__login-nav" onClick={loginCAT}> Login </h3>
        <div className="Hero__main-content">
            <img className="Hero__main-logo" src={rapttrLogo} alt="rapptr_logo" />
            <h1 className="Hero__main-h1">App Design & Development Agency</h1>
        </div>
    </div>
}

export default Hero