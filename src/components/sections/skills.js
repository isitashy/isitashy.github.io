import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from 'gatsby'


const SkillSection = styled.div`
  min-height: 50vh;
  background-color: #354E5B;
  padding: 0rem 8rem;
  padding-top: 50px;
  width: 100%;
  height: 100%;
  display: block;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
  }

  hr{
    border-top: 4px solid #D9B310;
    border-radius: 3px;
    width: 100px;
    margin: 20px auto;
    
    @media (max-width: 768px) {
      width: 30%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 10px;
    }
  }
`

const Heading = styled.h1`
  text-align: center;
  color: white;
`

const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const SkillItem = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
  width: 200px;
  margin: 40px;

  @media (max-width: 768px) {
    width: 100%;
    margin: auto;
  }

  img {
    height: 120px;
    width: 120px;

    @media (max-width: 768px) {
      display: block;
      margin: auto;
    }
  }

  h3 {
    text-align: center;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-variant: small-caps;
  }

  p {
    text-align: center;
    color: white;
  }
`

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Skills = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          skills {
            image
            title
            description
          }
        }
      }
    }
  `)

  return (
    <SkillSection id="skills">
      <Heading>Skills</Heading>
      <hr />
        
      <SkillGrid>
        {data.site.siteMetadata.skills.map((skills) => {
          return (
            <SkillItem>
              <img src={skills.image} alt={skills.title} />
              <h3>{skills.title}</h3>
              <p>{skills.description}</p>
            </SkillItem>
          )
        })}
      </SkillGrid>

    </SkillSection>
        
  )
}
  
export default Skills