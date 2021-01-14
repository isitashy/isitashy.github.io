import React from 'react'
import { Link , graphql, useStaticQuery } from 'gatsby'
import styled from "styled-components"

const Container = styled.div`
    //background-color: blue;
    margin-top: 3px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    @media (max-width: 768px) {
        //background-color: yellow;
        display: block;
        text-align: center;
        width: 100%;
        height: 100%;
    }
    
`
const NavLink = styled(props => <Link {...props} />)`

    font-family: 'Open Sans', sans-serif;
    color: white;
    font-size: 16px;
    margin-right: 1.33rem;
    text-decoration: none;
    transition: all .3s ease-in;

    .active{
        color: blue;
        transition: all .3s ease-in;
        text-decoration: none;
        border-bottom: 1px solid #D9B310;
    }

    :hover{
        color: #D9B310;
        transition: all .3s ease-in;
        text-decoration: none;
        border-bottom: 1px solid #D9B310;
    }
    
    @media (max-width: 768px) {
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 1.5rem;
        display: block;
        width: 100%;
        
    }
`
const Resume = styled.button`
    line-height: initial;
    background-color: #D9B310;
    border: 1px solid;
    color: #1F2C34;
    text-decoration: none;
    font-size: .9rem;
    padding: 8px;
    box-shadow: 0px 0px 5px hsl(49, 86%, 46%); 
    border-color: #D9B310;  
    outline: none;
    font-weight: 600;

    @media (max-width: 768px) {
        padding: 10px;
        font-size: 1.5rem;
        margin-top: 5vh;
    }

    :hover {
        background-color: #1F2C34;
        color: white;
        box-shadow: 0px 0px 6px #D9B310;
    }

    :focus {
        outline: none !important;
    }

    a{
        text-decoration: none;
        color: inherit;
    }
`

const NavbarLinks = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    navLinks {
                        name
                        url
                    }
                }
            }
        }
    `)

    return (
        <Container>
            {data.site.siteMetadata.navLinks.map((navLinks) => {
                return (
                    <NavLink to={navLinks.url} id={navLinks.name}>
                        {navLinks.name}
                    </NavLink>
                )
            })}
            <Resume type="button">
                <a href="/documents/ShysellIsita-Resume.pdf" target="_blank">Resume</a>
            </Resume>
        </ Container>
    )
}

export default NavbarLinks 