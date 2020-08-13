import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LoginToggler = (props) => {

    const LinkHandler = () => {
        if (props.loginstate){
            return <p>Don't Have An Account? <Link to='/signup'>Sign Up</Link></p>
        }
        else{
            return <p>Have an account? <Link to='/login'>Log in</Link></p>
        }
    }

    return <ToggleBlock>
        {LinkHandler()}
    </ToggleBlock>
}

export default LoginToggler

//styles

const ToggleBlock = styled.div`
    width: 20%;
    height: 7.5%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
        text-decoration: none;
        font-weight: bold;
    }
`