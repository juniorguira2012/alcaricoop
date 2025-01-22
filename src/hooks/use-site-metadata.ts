import { graphql, useStaticQuery } from 'gatsby'

interface IMetaData {
    title: string
    description: string
    siteUrl: string
    image: string
    phoneNumber: string
}

export const useSiteMetadata = (): IMetaData => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    siteUrl
                    image
                    phoneNumber
                }
            }
        }
    `)

    return data.site.siteMetadata
}
