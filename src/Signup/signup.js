import React, {useState, Fragment} from 'react'
import styled from 'styled-components'
import LoginToggler from '../LoginToggler/logintoggler'

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

    return <Fragment>
        <SignupBlock onSubmit={(e)=>handleOnSubmit(e)}>
            <LogoPlaceholder>Delayagram</LogoPlaceholder>
            <Input value={contact} onChange={e=>setContact(e.target.value)}></Input>
            <Input value={fullname} onChange={e=>setFullname(e.target.value)}></Input>
            <Input value={identity} onChange={e=>setIdentity(e.target.value)}></Input><br/>
            <Input value={password} type='password' onChange={e=>setPassword(e.target.value)}></Input><br/>
            <Submit type="submit">Sign Up</Submit>
        </SignupBlock>
        <LoginToggler loginstate={false}/>
    </Fragment>
}

export default Signup

//styles

const SignupBlock = styled.form`
    width: 20%;
    height: 40%;
    margin: 10px 0;
    border: 1px solid black;
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