import React from 'react'
import {graphql,useStaticQuery} from 'gatsby'
import styled from "styled-components"

const ArchiveContainer = styled.div`  
    min-height: 90vh;
    width: 100%;
    position: relative;
    display: block;
    margin: 150px 0px;
    padding: 0px 200px;

    @media (max-width: 768px){
        display: block;
        justify-content: center;
        padding: 0px 50px;
        margin: 150px 0px;
    }

    li {
        display: inline-block;
        padding: 1px 3px;
      }
    
    .linkImg{
        width: 20px;
        height: 20px;
        margin: 0px 7px;
    }
`
const ArchiveHeading = styled.h1`  
    color: white;
    
    @media (max-width: 768px){
        
    }

    p {
        color: lightgrey;
        font-size: 20px;
        font-weight: 100;
    }
`

const ArchiveTable = styled.table`  
    color:  #D9B310;
    font-size: 20px;
    font-weight: 100;
    
    @media (max-width: 768px){
        
    }
`

const ArchiveItems = styled.tr`  
    color: white;
    font-size: 18px;
    font-weight: 100;
    
    :hover {
        background-color: #293a45;
    }
    
    @media (max-width: 768px){
        
    }

    p {
        color: #D9B310;
        font-size: 18px;
        font-weight: 100;
    }
    
    td {
        padding: 15px 20px;
    }
`




const Archive = () => {
    
    const pageQuery = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/archive/"}}, sort: {fields: [frontmatter___date], order: ASC}) {
                edges {
                    node {
                        frontmatter {
                            date
                            external
                            github
                            tech
                            title
                        }
                    }
                }
            }
        }
    `)

    return (
        <ArchiveContainer>
            <ArchiveHeading>
                Archive
                <p>A few more things I've worked on.</p>
            </ArchiveHeading>
            <ArchiveTable>
                <tr>
                    <th>Title</th>
                    <th>Made With</th>
                    <th>Link</th>
                </tr>
                
                {pageQuery.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <ArchiveItems>                
                            <td>{edge.node.frontmatter.title}</td>
                            <td>
                                {edge.node.frontmatter.tech.map((tech) => {
                                    return (
                                        <li>
                                            {tech}
                                        </li> 
                                    )
                                })}
                            </td>
                            <td>
                                {edge.node.frontmatter.external && (
                                    <a href={edge.node.frontmatter.external} aria-label="External Link" target="_blank" rel="noreferrer">
                                        <img className="linkImg" src="/images/archive/external-link.png" alt=""/>
                                    </a>
                                )}
                                
                                {edge.node.frontmatter.github && (
                                    <a href={edge.node.frontmatter.github} aria-label="Github Link" target="_blank" rel="noreferrer">
                                        <img className="linkImg" src="/images/archive/github.png" alt=""/>
                                    </a>
                                )}
                            </td>
                        </ArchiveItems>
                    )
                })}
            </ArchiveTable>
        </ArchiveContainer>
    )
}

export default Archive