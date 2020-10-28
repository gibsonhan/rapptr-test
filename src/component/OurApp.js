import React from 'react'
import './OurApp.css'

import data from '../global/AppListData'
import Logo from './Logo'

const OurApp = () => {
    return <div className="OurApp__container">
        <h2 className="OurApp__title">OUR APPS</h2>
        <div className="OurApp__logo-list">
            {data.map(ele => <Logo key={ele.name} link={ele.link} img={ele.img} name={ele.name} />)}
        </div>
    </div>
}

export default OurApp