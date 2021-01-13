import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

const Head = ({title}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                    authorDescription
                    description
                    icon
                    keyWords
                }
            }
        }
    `)

    return (
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`} >
        

        <html lang="en" />
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="image" content={data.site.siteMetadata.icon} />

        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta property="og:description" content={data.site.siteMetadata.description} />
        <meta property="og:image" content={data.site.siteMetadata.icon} />
        <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
        <meta property="og:type" content="website" />

        <meta name="keywords" content={data.site.siteMetadata.keyWords} />


    </Helmet>

    )   
}

export default Head