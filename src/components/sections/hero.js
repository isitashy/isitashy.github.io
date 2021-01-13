import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"
import Typical from 'react-typical'

const HeroSection = styled.section`
    min-height: 110vh;
    z-index:1;
    width: 100%;
    position: relative;   
`

const HeroImage = styled(Img)`
    min-height: 110vh;
    z-index:1;
    width: 100%;
    position: relative;
`

const HeroTitle = styled.div`    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 80%;
    padding: 20px;
    text-align: center;
    transition: all .3s linear;

    @media (max-width: 768px){
        width: 100%;
        padding: 10px;
    }

    p{
        color: #D9B310;
        font-family:"Lucida Console", Monaco, monospace;
        font-size: 40px;
        transition: all .3s linear;
        
        @media (max-width: 768px){
            font-size: 150%;
        }
    }

    h1{
        color: white;
        font-size: 4rem;
        transition: all .3s linear;
        
        @media (max-width: 768px){
            font-size: 270%;
        }
    }
    
    .description{
        color: white;
        font-size: 30px;
        font-family: 'Poppins', sans-serif;
        transition: all .3s linear;

        @media (max-width: 768px){
            font-size: 100%;
        }
    }

    button{
        line-height: initial;
        background-color: #D9B310;
        border: 1px solid;
        color: #1F2C34;
        text-decoration: none;
        font-size: 1rem;
        cursor: pointer;
        padding: 10px 15px;
        
        margin: 20px 0px;
        font-weight: 600;
        box-shadow: 0px 0px 5px #D9B310; 
        border-color: #D9B310;  
        
    }
        
    button:hover {
        background-color: #1F2C34;
        color: white;
        box-shadow: 0px 0px 6px #D9B310;
        font-weight:600;
    }

`

const Hero = () => {
    const data = useStaticQuery(graphql`
        query {
            file(name: { eq: "heroImage" }, extension: { eq: "jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 3080, quality: 100){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
        }
    `)

    return (
        <HeroSection>
            <HeroImage fluid={data.file.childImageSharp.fluid} />
            <HeroTitle>
                <p>Hello, World!</p>
                <h1>I'm {' '} 
                    <Typical
                        loop={1}
                        wrapper="span"
                        steps={['Shysell Isita.', 2500,
                                'a software developer 💻', 2500,
                                'a music lover 🎧', 2500,
                                'a sports fan 🥊', 2500,
                                'an adventure seeker 🧭', 2500,
                                'Shysell Isita.']}
                    />
                </h1>
                
                <Link to="#about"><button type="button"> Know More</button></Link>
            </HeroTitle>
            
        </HeroSection>
    )
}

export default Hero