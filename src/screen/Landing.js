import React from 'react'

import BodyText from '../component/BodyText'
import Footer from '../component/Footer'
import Hero from '../component/Hero'
import Subscribe from '../component/Subscribe'
import OurApp from '../component/OurApp'

const Landing = ({ setScreen }) => {
    const navToLogin = () => {
        setScreen('main')
    }
    return <div className="Landing__container">
        <Hero loginCAT={navToLogin} />
        <BodyText />
        <OurApp />
        <Subscribe />
        <Footer />
    </div>
}

export default Landing