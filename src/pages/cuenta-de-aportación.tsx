import React from 'react'
import PageLayout from '../components/common/page-layout/Page-layout'
import { SEO } from '../components/common/SEO'
import '../assets/styles/pages/contribution-account.scss'
import { StaticImage } from 'gatsby-plugin-image'

const ContributionAccount = () => {
    return (
        <PageLayout modificator="ahorro-page">
            <div className="contribution-account">
                <div className="contribution-account__content-title">
                    <h1 data-aos="fade-up-right" className="contribution-account__title">
                        Cuenta de aportación
                    </h1>
                    <p data-aos="fade-up" className="contribution-account__description">
                        Eres nuestro socio y parte importante de nuestra cooperativa, abre tu cuenta y construyamos
                        un mejor país.
                    </p>
                </div>
                <div className="contribution-account__content-background">
                    <StaticImage
                        className="contribution-account__background"
                        src="../assets/images/contribution-account/background.jpg"
                        alt="contribution account"
                    />
                </div>
            </div>
        </PageLayout>
    )
}

export const Head = () => (
    <SEO
        title="Cuenta de aportación - Alcarricop"
        pathname="cuenta-de-aportación"
        description="Eres nuestro socio y parte importante de nuestra cooperativa, abre tu cuenta y construyamos
                        un mejor país."
    />
)

export default ContributionAccount
