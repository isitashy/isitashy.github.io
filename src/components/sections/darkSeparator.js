import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled from "styled-components"
import Img from "gatsby-image"

const DarkSection = styled.section`
    min-height: 100px;
    z-index:1;
    width: 100%;
    position: relative;   
`
const DarkImg = styled(Img)`
    min-height: 100px;
    z-index:1;
    width: 100%;
    position: relative;
`

const DarkSeparator = () => {
    const data = useStaticQuery(graphql`
        query {
            file(name: { eq: "Dark-Light-Bottom" }, extension: { eq: "png" }) {
                childImageSharp {
                    fluid(maxWidth: 3080, quality: 100){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
        }
    `)

    return (
        <DarkSection>
            <DarkImg fluid={data.file.childImageSharp.fluid} />
        </DarkSection>
      )
    }
    
export default DarkSeparator
