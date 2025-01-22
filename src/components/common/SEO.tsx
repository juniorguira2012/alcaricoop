import React from 'react'
import { useSiteMetadata } from '../../hooks/use-site-metadata'

interface Props {
    title?: string
    description?: string
    pathname?: string
    children?: any
    image?: string
    phoneNumber?: string
}

export const SEO = ({ title, description, pathname, children }: Props) => {
    const { title: defaultTitle, description: defaultDescription, siteUrl, image, phoneNumber } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`,
        image,
        phoneNumber,
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <link rel="icon" href={seo.image} />
            {children}
        </>
    )
}
