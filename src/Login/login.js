import React, {useState, Fragment} from 'react'
import styled from 'styled-components'

import LoginToggler from '../LoginToggler/logintoggler'

const Login = () => {

    const [identity, setIdentity] = useState('')
    const [password, setPassword] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault()
        
        fetch('http://localhost:8000/api/user/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "identity": identity,
                "password": password
            })
        })
        .then()
        
    }

    return <Fragment>
        <LoginBlock onSubmit={(e)=>handleOnSubmit(e)}>
            <LogoPlaceholder>Delayagram</LogoPlaceholder>
            <Input placeholder={"Phone number, username, or email"} value={identity} onChange={e=>setIdentity(e.target.value)}></Input><br/>
            <Input placeholder={"Password"} value={password} type='password' onChange={e=>setPassword(e.target.value)}></Input><br/>
            <Submit type="submit">Log In</Submit>
        </LoginBlock>
        <LoginToggler loginstate={true}/>
    </Fragment>
}

export default Login

//styles

const LoginBlock = styled.form`
    width: 20%;
    height: 40%;
    border: 1px solid black;
    margin: 10px 0;
`

const Input = styled.input`
    border: 1px solid black;
    border-radius: 3px;
    font-size: 12px;
    width: 75%;
    height: 7.5%;
    margin-bottom: 2.5%;
`

const LogoPlaceholder = styled.p`
    font-size: 28px;
`

const Submit = styled.button`
    border: none;
    border-radius: 3px;
    background-color: #63C7EC;
    color: white;
    width: 75%;

    &:hover {
        background-color: #5AB0D0;
    }
`

const Signup = styled.button`

`