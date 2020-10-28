import React from 'react'

import BodyText from '../component/BodyText'
import Footer from '../component/Footer'
import Hero from '../component/Hero'
import Subscribe from '../component/Subscribe'
import OurApp from '../component/OurApp'

const Landing = ({ setScreen }) => {
    return <div className="Landing__container">
        <Hero />
        <BodyText />
        <OurApp />
        <Subscribe />
        <Footer />
    </div>
}

export default Landing