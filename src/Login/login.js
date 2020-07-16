import React, {useState} from 'react'
import styled from 'styled-components'

const Login = () => {

    const [identity, setIdentity] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(identity)
    }

    return <LoginBlock onSubmit={(e)=>handleOnSubmit(e)}>
        <IdentityInput value={identity} onChange={e=>setIdentity(e.target.value)}></IdentityInput><br/>
        <Submit type="submit">Submit</Submit>
    </LoginBlock>
}

export default Login

//styles

const LoginBlock = styled.form`

`

const IdentityInput = styled.input`
    border: 1px solid black;
`

const PasswordInput = styled.input`
    border: 1px solid black;
`

const Submit = styled.button`

`