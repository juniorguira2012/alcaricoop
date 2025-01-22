import React from 'react'
import PageLayout from '../components/common/page-layout/Page-layout'
import { SEO } from '../components/common/SEO'
import '../assets/styles/pages/ecological-alliance.scss'
import { StaticImage } from 'gatsby-plugin-image'

const EcologicalAlliance = () => {
    return (
        <PageLayout modificator="ahorro-page">
            <div className="ecological-alliance">
                <div className="ecological-alliance__content-title">
                    <h1 data-aos="zoom-in-down" className="ecological-alliance__title">
                        Alianza ecológica
                    </h1>
                    <p data-aos="fade-up" className="ecological-alliance__description">
                        Nuestro compromiso con la naturaleza nos impulsa a constribuir con el sostenimiento de
                        nuestro medio ambiente por un país mejor.
                    </p>
                </div>
                <div className="ecological-alliance__content-background">
                    <StaticImage
                        className="ecological-alliance__background"
                        src="../assets/images/ecological-alliance/background.jpg"
                        alt="ecological alliance"
                    />
                </div>
            </div>
        </PageLayout>
    )
}

export const Head = () => (
    <SEO
        title="Alianza ecológica - Alcarricop"
        pathname="alianza-ecológica"
        description="Nuestro compromiso con la naturaleza nos impulsa a constribuir con el sostenimiento de
                        nuestro medio ambiente por un país mejor."
    />
)

export default EcologicalAlliance
