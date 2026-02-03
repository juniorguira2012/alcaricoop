import React from 'react'
import PageLayout from '../components/common/page-layout/Page-layout'
import { SEO } from '../components/common/SEO'
import '../assets/styles/pages/certificate-financial.scss'
import { StaticImage } from 'gatsby-plugin-image'

const FinancialCertificate = () => {
    return (
        <PageLayout modificator="ahorro-page">
            <div className="certificate-financial">
                <div className="certificate-financial__content-title">
                    <h1 data-aos="fade-up-left" className="certificate-financial__title">
                        Certificado financiero
                    </h1>
                    <p data-aos="fade-up" className="certificate-financial__description">
                        Nuestros certificados te garantizan una mayor rentabilidad en tu inversion, con una
                        atractiva taza de interés.
                    </p>
                </div>
                <div className="certificate-financial__content-background">
                    <StaticImage
                        className="certificate-financial__background"
                        src="../assets/images/certificate-financial/background.jpg"
                        alt="certificado financiero"
                    />
                </div>
            </div>
        </PageLayout>
    )
}

export const Head = () => (
    <SEO
        title="Certificado financiero - Alcarricoop"
        pathname="certificado-financiero"
        description=" Nuestros certificados te garantizan una mayor rentabilidad en tu inversion, con una
                        atractiva taza de interés."
    />
)

export default FinancialCertificate
