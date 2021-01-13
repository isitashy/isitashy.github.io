import React from "react"
import {Link, graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
  //background-color: lightblue;
  width: 70px;
  object-fit: contain !important;
  transition: all .3s ease-in;
  
  @media (max-width: 768px) {
    transition: all .3s ease-in;
    width: 90px;
    object-fit: contain !important;
  }
`

const Logo = () => {
    const data = useStaticQuery(graphql`
        query {
            file(name: { eq: "logo" }, extension: { eq: "png" }) {
                childImageSharp {
                  fluid(maxWidth: 100, pngQuality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
        }
    `)

    return (
      <Container>
        <Link to="/">
          <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
        </Link>
      </Container>
    )
}

export default Logo