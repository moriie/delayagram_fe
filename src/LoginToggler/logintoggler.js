import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LoginToggler = () => {

    const [loginState, setLoginState] = useState(false)

    return <ToggleBlock>
        <p>Don't Have An Account? <Link to='/signup'>Sign Up</Link></p>
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