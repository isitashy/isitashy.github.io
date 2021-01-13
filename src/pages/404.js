import React from "react"
import styled from "styled-components"
import { Layout } from '../components'

const NotFoundContainer = styled.div`
    min-height: 90vh;
    padding: 10rem 8rem;
    background-color: #354E5B;

    h1{
      text-align: center;
      font-size: 7rem;
      color: white;
      font-family: "Open Sans", sans-serif;
      text-shadow: 2px 2px 4px #000000;

      @media (max-width: 768px){
        font-size: 6rem;
      }
    }

    h2{
      text-align: center;
      color: white;
      font-family: "Open Sans", sans-serif;
      
      @media (max-width: 768px){
        font-size: 1.2rem;
      }
    }

    h3{
      text-align: center;
      color: white;
      font-family: "Open Sans", sans-serif;
      font-weight: 100;
    }

    hr{
      border-top: 4px solid #D9B310;
      border-radius: 3px;
      width: 250px;
      margin: 20px auto;
      
      @media (max-width: 768px) {
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
      }
    }
`
const notFoundPage = () => {
  return (
    <Layout>
        <NotFoundContainer>
            <h1>404</h1>
            <h2>PAGE NOT FOUND</h2>
            <hr />
            <h3>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</h3>
        </NotFoundContainer>
    </Layout>
  )
}

export default notFoundPage

