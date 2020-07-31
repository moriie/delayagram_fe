import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {

    return <Splash>
        <Footer>
            <Link to="/about">ABOUT</Link>
            <Link to="/help">HELP</Link>
            <Link to="/press">PRESS</Link>
            <Link to="/api">API</Link>
            <Link to="/jobs">JOBS</Link>
            <Link to="/privacy">PRIVACY</Link>
            <Link to="/terms">TERMS</Link>
            <Link to="/locations">LOCATIONS</Link>
            <Link to="/topaccounts">TOP ACCOUNTS</Link>
            <Link to="/hashtags">HASHTAGS</Link>
            <Link to="/language">LANGUAGE</Link>
        </Footer>
    </Splash>
}

export default Home

//styles

const Splash = styled.div`
    background-color: rgb(250, 250, 250);
    height: 100vh;
    width: 100vw;
`

const Footer = styled.div`
    display: flex;
    /* font-size: 12px; ---FIX LATER--- */
    margin: 0 20vw;
    flex-direction: row;
    justify-content: space-between;
`