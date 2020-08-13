import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Login from '../Login/login'
import Signup from '../Signup/signup'
import LoginToggler from '../LoginToggler/logintoggler'

const Home = () => {

    // const [pageState, setPagestate] = useState(true)

    // const BlockManager = () => {
    //     return pageState ? <Login/> : <Signup/>
    // }

    return <Fragment>
        <Splash>
            {/* {BlockManager()} */}
            <Login/>
            {/* <LoginToggler/> */}
        </Splash>
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
    </Fragment>
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

const Footer = styled.div`
    position: fixed;
    bottom: 5vh;
    display: flex;
    width: 50vw;
    padding: 0 25vw;
    font-size: 12px;
    flex-direction: row;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: gray;
    }
`