import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"



const AboutContainer = styled.section`  
  min-height: 50vh;
  padding: 3rem 15% 0rem;
  display: block;

  @media (max-width: 768px){
    display: block;
    justify-content: center;
    text-align: center;
  }
  
  hr{
    border-top: 4px solid #D9B310;
    border-radius: 3px;
    width: 180px;
    margin: 20px, 20px;

    @media (max-width: 768px) {
      width: 40%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 10px;
    }
  }
  
  h1,h2{
    color: white;
    font-family: 'Open Sans', sans-serif;

    @media (max-width: 768px) {
      text-align: center;
      width: 100%;
      margin: 0px;
    }
  }

  p{
    color: white;
    padding: 0px 20px;
    margin-top: 30px;
  }

  .aboutimg {
    float: right;
    margin: 0px 0px 15px 50px;
    width: 300px;
    height: 400px;
    box-shadow: -10px 10px 0 0 #354E5B;
    
    
    @media (max-width: 768px) {
      float: none;
      width: 60%;
      height: 60%;
      margin: auto;
    }
  }  
`
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "profileImage" }, extension: { eq: "jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <AboutContainer id="about">
      <h1>About Me</h1>
      <hr />
      <Img className="aboutimg" fluid={data.file.childImageSharp.fluid} alt="Shysell Isita" />
      <p>
        Hi there! <span role="img" aria-label="Waving Hand">👋</span> My name is Shysell Isita (most people call me Shy). <br />
        I am computer science major at Kennesaw State University. 
        I love programming and interested in solving real world problems. 
        I spend most days practicing my coding skills and learning new techniques. 
        I mainly develop web, mobile, and desktop applications. 
      </p>
      <p><b> Aside from my programming, I have a few other interests: </b></p>
      <p>
        <span role="img" aria-label="Musical Note">🎵</span> Music: I enjoy listening to music and discovering new artists. I'll make sure to give most songs a listen before I make up my mind.
        <br /> <br />
        <span role="img" aria-label="Boxing Glove">🥊</span> Sports: I love watching sports and am happy to recreationally participate. I follow boxing, NFL, NBA, and the MLB. 
      </p>
      <br />
      <h2>Education</h2>
      <p><span role="img" aria-label="Graduation Cap">🎓</span> B.S. in Computer Science <br /> &emsp;&emsp;Kennesaw State University</p>
    </AboutContainer>
  )
}

export default About
