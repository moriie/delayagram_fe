import React, {useState} from 'react'
import styled from 'styled-components'

const Signup = () => {

    const [contact, setContact] = useState('')
    const [identity, setIdentity] = useState('')
    const [fullname, setFullname] = useState('')
    const [password, setPassword] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(identity)
        console.log(password)

        
    }

    return <SignupBlock onSubmit={(e)=>handleOnSubmit(e)}>
        <Input value={contact} onChange={e=>setContact(e.target.value)}></Input>
        <Input value={fullname} onChange={e=>setFullname(e.target.value)}></Input>
        <Input value={identity} onChange={e=>setIdentity(e.target.value)}></Input><br/>
        <Input value={password} type='password' onChange={e=>setPassword(e.target.value)}></Input><br/>
        <Submit type="submit">Sign Up</Submit>
    </SignupBlock>
}

export default Signup

//styles

const SignupBlock = styled.form`
    width: 20%;
    height: 40vh;
    margin: 30vh auto;
    border: 1px solid black;
`

const Input = styled.input`
    border: 1px solid black;
    border-radius: 3px;
`

const Submit = styled.button`

`