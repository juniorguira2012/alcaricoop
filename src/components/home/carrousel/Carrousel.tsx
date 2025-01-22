import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image'
import './carrousel.scss'
import 'swiper/css'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

const query = graphql`
    query ImagesSlide {
        allFile(filter: { relativePath: { regex: "/home/" }, ext: { ne: ".crdownload" } }) {
            nodes {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    }
`

interface ICarrousel {
    allFile: {
        nodes: IGatsbyImageData[]
    }
}

const Carrousel = () => {
    const { allFile } = useStaticQuery<ICarrousel>(query)
    console.log({ allFile })

    return (
        <Swiper
            className="carrousel"
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
        >
            {allFile.nodes.map((image, index) => {
                const parserImage = getImage(image)

                return (
                    <SwiperSlide key={index} className="carrousel__slide">
                        <GatsbyImage
                            className="carrousel__image"
                            alt="Image slide"
                            image={parserImage as IGatsbyImageData}
                        />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Carrousel
