import React, { useState } from 'react'
import styled from "styled-components"
import Logo from "./navbar/logo"
import NavbarLinks from "./navbar/navbarLinks"

const Navigation = styled.nav`
    overflow: hidden;
    max-height: 8vh; 
    background-color: #1F2C34;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 5px;
    box-shadow: 0px 1px 7px black;
    z-index: 2;
    transition: all .3s ease-in;
    
    @media (max-width: 768px){
        min-height: 75px; 
        
        top: 0;
        width: 100%;
        transition: all .3s ease-in;
    }
`

const Toggle = styled.div`
    display: none;
    

    @media (max-width: 768px) {
        display:flex;    
    }
`

const Navbox = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
    transition: left 0.3s;
    
    @media (max-width: 768px) {
        background-color: #1F2C34;
        position: fixed;
        top: 11vh;
        width: 100%;

        transition: all 0.3s ease-in;
        left: ${props => (props.open ? "-100%" : "0")};  
    }

`

const Hamburger = styled.div`
    background-color: #D9B310;
    width: 35px;
    height: 3px;
    transition: all .3s linear;
    align-self: center;
    position: relative;
    transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

    ::before,
    ::after {
        width: 35px;
        height: 3px;
        background-color: #D9B310;
        content: "";
        position: absolute;
        transition: all 0.3s linear;
    }

    ::before {
        transform: ${props => props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
        top: -10px;
    }

    ::after {
        opacity: ${props => (props.open ? "0" : "1")};
        transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
        top: 10px;
    }
    
`

if (typeof window !== `undefined`) {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0px";
        } else {
            document.getElementById("navbar").style.top = "-70px";
        }
        prevScrollpos = currentScrollPos;
    }
}

function lockNavbar() {
    if (typeof window !== `undefined`) {
        window.onscroll = function() {
            document.getElementById("navbar").style.top = "0px";
        }
    }
}

function unlockNavbar() {
    if (typeof window !== `undefined`) {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0px";
            } else {
                document.getElementById("navbar").style.top = "-70px";
            }
            prevScrollpos = currentScrollPos;
        }
    }
}



const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <Navigation id="navbar">
            <Logo />
            <Toggle navbarOpen={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen, lockNavbar())} >
                {navbarOpen ? <Hamburger open /> : <Hamburger />}
            </Toggle>
            {navbarOpen ? ( 
                <Navbox navbarOpen={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen, unlockNavbar())}>
                    <NavbarLinks  />
                </Navbox>
            ) : (
                <Navbox open>
                    <NavbarLinks />
                </Navbox>
            )}
        </Navigation>
    )
}

export default Header 