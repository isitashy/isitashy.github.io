import React from "react"
import styled from "styled-components"
import email from "../../images/contact/email.png"
import github from "../../images/contact/github.png"
import linkedin from "../../images/contact/linkedin.png"

const ContactContainer = styled.div`
  //min-height: 40vh;
  padding: 3rem 8rem;
  background-color: #354E5B;
  width: 100%;
  text-align: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
  }

  h1{
    text-align: center;
    color: white;
  }

  div{
    display: table;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    
  }

  img{
    margin-right: 20px;
    margin-left: 20px;
    transition: transform .3s;
  }
  
  img:hover {
    -ms-transform: scale(1.5); /* IE 9 */
    -webkit-transform: scale(1.5); /* Safari 3-8 */
    transform: scale(1.5); 
    color: white;
  }

  h2{
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    color: lightgrey;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 110%;
    }
  }

  p{
    text-align: center;
    color: white;
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 100%;
    }
  }

  hr{
    border-top: 4px solid #D9B310;
    border-radius: 3px;
    width: 250px;
    margin: 20px auto;

    @media (max-width: 768px) {
      width: 40%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 10px;
    }
  }
`
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Contacts = () => {
  return (
    <ContactContainer id="contact">
      <h1>Get In Touch</h1>
      <hr />
      
      <h2>Want to work together? Have a question? <br /> Need help with your software project? </h2>
      <p>
          Send me a message, I'd love to help.
      </p>    
      <div>
        <a href="mailto:isita.shy@gmail.com" target="_blank" rel="noreferrer" ><img src={email} alt="Email" height="30" width="40" /></a>
        <a href="https://github.com/isitashy" target="_blank" rel="noreferrer" ><img src={github} alt="Github" height="40" width="40" /></a>
        <a href="https://www.linkedin.com/in/isitashy/" target="_blank" rel="noreferrer" ><img src={linkedin} alt="Linkedin" height="40" width="40" /></a>
      </div>
      
    </ContactContainer>
      
  )
}

export default Contacts