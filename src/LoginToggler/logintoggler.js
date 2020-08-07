import React, { useState } from 'react'
import styled from 'styled-components'

const LoginToggler = () => {

    const [loginState, setLoginState] = useState(false)

    return <ToggleBlock>
        
    </ToggleBlock>
}

export default LoginToggler

//styles

const ToggleBlock = styled.div`
    width: 20%;
    height: 10%;
    border: 1px solid black;
`