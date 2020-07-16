import React, {useState} from 'react'
import styled from 'styled-components'

const Login = () => {

    const [identity, setIdentity] = useState('')
    const [password, setPassword] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(identity)
        console.log(password)

        
    }

    return <LoginBlock onSubmit={(e)=>handleOnSubmit(e)}>
        <IdentityInput value={identity} onChange={e=>setIdentity(e.target.value)}></IdentityInput><br/>
        <PasswordInput value={password} type='password' onChange={e=>setPassword(e.target.value)}></PasswordInput><br/>
        <Submit type="submit">Login</Submit>
    </LoginBlock>
}

export default Login

//styles

const LoginBlock = styled.form`
    width: 20%;
    height: 40vh;
    margin: 30vh auto;
    border: 1px solid black;
`

const IdentityInput = styled.input`
    border: 1px solid black;
    border-radius: 3px;
`

const PasswordInput = styled.input`
    border: 1px solid black;
    border-radius: 3px;
`

const Submit = styled.button`

`