import React, { useRef } from 'react'
import './Subscribe.css'

import Input from './common/Input'
import Btn from './common/Btn'

import { subscribe } from '../util/service'
import validate from '../util/validateEmail'

const Subscribe = () => {
    const emailRef = useRef(null)

    const handleSubscribe = async (event) => {
        event.preventDefault()
        try {
            validate(emailRef.current.value)
            await subscribe(emailRef.current.value)
            alert('Thank you for subscribing to our Newsletter')
        }
        catch (error) {
            alert('Failed to subscribe to news letter, error:', error)
        }
    }

    return <div className="Subscribe__container">
        <h2 className="Subscribe__h2">SUBSCRIBE TO NEWS LETTER</h2>
        <form id="Subscribe__form" onSubmit={handleSubscribe}>
            <div className="Subscribe__input-container">
                <Input
                    inputRef={emailRef}
                    family="subscribe"
                    placeholder="Your email"
                    name="email"
                    type="text"
                    height="49"
                    width="276" />
                <Btn
                    title="Subscribe"
                    height="49"
                    width="165"
                    bkColor="#2F2E2E"
                    type="submit"
                />
            </div>

        </form>
    </div>
}

export default Subscribe