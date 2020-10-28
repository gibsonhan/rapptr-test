import React from 'react'
import './Subscribe.css'

import Input from './common/Input'
import Btn from './common/Btn'

const Subscribe = ({ }) => {
    return <div className="Subscribe__container">
        <h2 className="Subscribe__h2">SUBSCRIBE TO NEWS LETTER</h2>
        <div className="Subscribe__input-container">
            <Input
                placeholder="Your email"
                name="email"
                type="text"
                height="49"
                width="276" />
            <Btn
                title="Subscribe"
                height="49"
                width="165"
                bkColor="#2F2E2E" />
        </div>
    </div>
}

export default Subscribe