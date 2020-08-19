import React, { useState, Fragment } from 'react'
import styled from 'styled-components'

import Routes from "../routes"

const Home = () => {


    return <Splash>
        <Routes />
    </Splash>
}

export default Home

//styles

const Splash = styled.div`
    background-color: rgb(250, 250, 250);
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
