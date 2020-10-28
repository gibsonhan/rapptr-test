import React, { useEffect, useState } from 'react'
import rapttrLogo from '../assets/logo_rapptr.png'
import './Main.css'

import Btn from '../component/common/Btn'
import Input from '../component/common/Input'
import { findRenderedComponentWithType } from 'react-dom/test-utils'


const Main = ({ setScreen }) => {
    const [formState, setForm] = useState('signUp')
    const mainBtnText = formState === 'signUp' ? 'Sign Up' : 'Login'
    const display = {
        'signUp': <SignUp />,
        'login': <Login />
    }

    const navToLanding = () => {
        setScreen('landing')
    }
    return <div className="Main__container">
        <img className="Main__logo" src={rapttrLogo} alt="rapptr-logo" onClick={navToLanding} />
        <HeaderSelect formState={formState} setForm={setForm} />
        <form className="Main__form-container">
            {display[formState]}
            <Btn
                title={mainBtnText}
                height="49"
                width="360"
                bkColor="#2F2E2E"
                marginTop='20'
                type="submit"
            />
        </form>
    </div>
}

const HeaderSelect = ({ formState, setForm }) => {

    const selected = {
        color: '#ffffff',
        textDecoration: 'underline'
    }

    const notSelected = {
        color: '#ffffff',
        opacity: '.6',
        textDecoration: 'none',
    }

    const signUpStyle = formState === 'signUp' ? selected : notSelected
    const loginStyle = formState === 'login' ? selected : notSelected

    const setFormSignUp = () => {
        setForm('signUp')
    }
    const setFormLogin = () => {
        setForm('login')
    }
    return (
        <div className="Main__select-container">
            <h3 className="Main__SignUp-h3" style={signUpStyle} onClick={setFormSignUp}>Sign Up</h3>
            <h3 className="Main__Login-h3" style={loginStyle} onClick={setFormLogin}>Login</h3>
        </div>
    )
}

const inputStyle = {
    bgColor: 'rgba(232, 232, 232, 0.30)',
    height: '52',
    width: '340',
    marginBottom: '12'
}

const SignUp = () => {
    const signUpInputs = ['username', 'email', 'password']
    return (
        <div className="SignUp__container">
            {signUpInputs.map(ele =>
                <Input
                    key={'SignUp__Input-' + ele}
                    name={ele}
                    placeholder={ele}
                    {...inputStyle}
                />)
            }
        </div>)
}

const Login = () => {
    const loginInputs = ['email', 'password']
    return (
        <div className="Login__container">
            {loginInputs.map(ele =>
                <Input
                    key={'Login__Input-' + ele}
                    name={ele}
                    placeholder={ele}
                    {...inputStyle}
                />)
            }
        </div>
    )
}

export default Main