import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled from "styled-components"
import Img from "gatsby-image"

const LightSection = styled.section`
    min-height: 100px;
    z-index:1;
    width: 100%;
    position: relative;   
`
const LightImg = styled(Img)`
    min-height: 100px;
    z-index:1;
    width: 100%;
    position: relative;
`

const LightSeparator = () => {
    const data = useStaticQuery(graphql`
        query {
            file(name: { eq: "Light-Dark-Bottom" }, extension: { eq: "png" }) {
                childImageSharp {
                    fluid(maxWidth: 3080, quality: 100){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
        }
    `)

    return (
        <LightSection>
            <LightImg fluid={data.file.childImageSharp.fluid} />
        </LightSection>
      )
    }
    
export default LightSeparator

