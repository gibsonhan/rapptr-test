import React, { useState } from 'react'
import rapttrLogo from '../assets/logo_rapptr.png'
import './Main.css'

import Btn from '../component/common/Btn'
import Input from '../component/common/Input'
import createInputObject from '../util/createInputObj'
import selectRequest from '../util/selectMainFormRequest'

const Main = ({ setScreen }) => {
    const [state, setState] = useState('signUp')
    const mainBtnText = state === 'signUp' ? 'Sign Up' : 'Login'
    const displayForm = {
        'signUp': <SignUp />,
        'login': <Login />
    }
    const navToLanding = () => {
        setScreen('landing')
    }
    const handleFormSubmit = async (event) => {
        event.preventDefault()
        try {
            const data = createInputObject(state)
            const request = selectRequest(state)
            const response = await request(data)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    return <div className="Main__container">
        <img className="Main__logo" src={rapttrLogo} alt="rapptr-logo" onClick={navToLanding} />
        <SelectForm state={state} setState={setState} />
        <form className="Main__form-container" onSubmit={handleFormSubmit}>
            {displayForm[state]}
            <Btn
                title={mainBtnText}
                height="49"
                width="360"
                bkColor="#2FCBFC"
                marginTop='20'
                type="submit"
            />
        </form>
    </div>
}

const SelectForm = ({ state, setState }) => {
    const selected = {
        color: '#ffffff',
        textDecoration: 'underline'
    }
    const notSelected = {
        color: '#ffffff',
        opacity: '.6',
        textDecoration: 'none',
    }
    const signUpStyle = state === 'signUp' ? selected : notSelected
    const loginStyle = state === 'login' ? selected : notSelected
    const setStateSignUp = () => {
        setState('signUp')
    }
    const setStateLogin = () => {
        setState('login')
    }
    return (
        <div className="Main__select-container">
            <h3 className="Main__select-SignUp-h3" style={signUpStyle} onClick={setStateSignUp}>Sign Up</h3>
            <h3 className="Main__select-Login-h3" style={loginStyle} onClick={setStateLogin}>Login</h3>
        </div>
    )
}

const inputStyle = {
    bgColor: 'rgba(232, 232, 232, 0.30)',
    height: '52',
    width: '360',
}

// /https://stackoverflow.com/questions/56870188/find-form-input-without-jquery
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