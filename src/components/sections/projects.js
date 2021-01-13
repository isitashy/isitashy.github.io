import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from "styled-components"
import Img from "gatsby-image"



const ProjectContainer = styled.div`
  padding: 3rem 8rem 0rem 8rem;
  background-color: #1F2C34;
  text-align: center;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
  }
  
  h1{
    text-align: center;
    color: white;
    font-weight: 700;
  }
  
  h3{
    margin: 10px 0 10px 0;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
  }
  
  p{
    text-align: center;
    color: #1F2C34;
  }
  
  .subheading {
    text-align: center;
    color: white;
    font-size: 25px;
  }
  
  li{
    display: inline-block;
    padding: 0px 5px;
    background-color: #D3D3D3;
    margin: 2px;
    font-size: .8rem;
    text-align: center;
    font-family:"Lucida Console", Monaco, monospace;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  

  .gridContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 30px;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-bottom: 40px;

    
    @media (max-width: 768px) {
      margin:0px;
      padding:20px;
      width: 100%;
      display: grid;
      grid-template-columns: auto;
      grid-gap: 30px;
      justify-content: center;
      align-content: center;
    }
    
  }

  .gridItem {
    width: 100%;
    background-color: white;
    padding: 10px;
    text-align: center;
    box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    
    @media (max-width: 768px) {
      width: 80%;
      margin: auto;
    }
    
  }

  .gridItem:hover {
    box-shadow: 0 16px 16px 0 black;
      -ms-transform: scale(1.05); /* IE 9 */
      -webkit-transform: scale(1.05); /* Safari 3-8 */
      transform: scale(1.05); 
  }

  button{
    line-height: initial;
    background-color: #D9B310;
    border: 1px solid;
    border-radius: 25px;
    color: #1F2C34;
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
    padding: 10px 20px;
    outline: none;
    font-weight: 600;
    
    box-shadow: 0px 0px 5px #D9B310; 
    border-color: #D9B310;  

    @media (max-width: 768px) {
      margin-top: 70px;
    }
}
    
button:hover {
    background-color: #1F2C34;
    color: white;
    box-shadow: 0px 0px 6px #D9B310;
    font-weight: 600;
}

hr{
  border-top: 4px solid #D9B310;
  border-radius: 3px;
  width: 200px;
  margin: 20px auto;
}
`

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Projects = () => {

  const pageQuery = useStaticQuery(graphql`
        query{
          allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}) {
            edges {
              node {
                frontmatter {
                  title
                  date
                  github
                  tech
                  cover {
                    childImageSharp {
                      fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                html
              }
            }
          }
        }
    `)
    
    return (
      <ProjectContainer id="projects">
        <h1>Projects</h1>
        <hr />
        <p className="subheading">Just a few things I have built.</p>
        <div className="gridContainer">
          {pageQuery.allMarkdownRemark.edges.map((edge) => {
            return (
              <a href={edge.node.frontmatter.github} target="_blank" rel="noreferrer" >
              <div className="gridItem" >
                <div className="imgcard"><Img fluid={edge.node.frontmatter.cover.childImageSharp.fluid} /></div>
                <h3>{edge.node.frontmatter.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: edge.node.html}} />            
                    {edge.node.frontmatter.tech.map((tech) => {
                        return (
                            <li>
                                {tech}
                            </li> 
                        )
                    })}
                </div>
              </a>
            )            
          })}         
        </div>
        
        <button type="button"><Link to="/portfolio/">View More Projects</Link></button>
  
      </ProjectContainer>
        
    )
  }
  
  export default Projects