import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Footer = () => {

    return <FooterWrapper>
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
    </FooterWrapper>
}

export default Footer

//styles


const FooterWrapper = styled.div`
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