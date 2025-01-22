import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'Alcarricoop',
        siteUrl: 'https://alcarricoop.org/',
        description:
            'Alcarricoop es una cooperativa de ahorro, crédito y servicios múltiples, que nace en los Alcarrizos con la idea de aportar al sistema cooperativo y a nuestros socios la ayuda de obtener los bienes y servicios a un precio justo de igualdad de condición y llegar a los sectores más vulnerables ofreciendo educación cooperativa.',
        phoneNumber: '809-938-6652',
        image: '/logo.svg',
    },
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/assets/images',
            },
            __key: 'images',
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: './src/assets/images/alcarricoop.png',
            },
        },
    ],
}

export default config
