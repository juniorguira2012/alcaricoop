import React from 'react'
import PageLayout from '../components/common/page-layout/Page-layout'
import { SEO } from '../components/common/SEO'
import '../assets/styles/pages/saving.scss'
import { StaticImage } from 'gatsby-plugin-image'

const Saving = () => {
    return (
        <PageLayout modificator="ahorro-page">
            <div className="saving">
                <div className="saving__content-title">
                    <h1 data-aos="fade-down-left" className="saving__title">
                        Cuenta de ahorro
                    </h1>
                    <p data-aos="fade-up" className="saving__description">
                        La vida es más fácil cuando ahorras, tu dinero está siempre disponible y los retiras cuando
                        quieras y sin deducciones.
                    </p>
                </div>
                <div className="saving__content-background">
                    <StaticImage
                        className="saving__background"
                        src="../assets/images/ahorro/background.jpg"
                        alt="ahorro"
                    />
                </div>
            </div>
        </PageLayout>
    )
}

export const Head = () => (
    <SEO
        title="Cuenta de ahorro - Alcarricop"
        pathname="cuenta-de-ahorro"
        description=" La vida es más fácil cuando ahorras, tu dinero está siempre disponible y los retiras cuando
                        quieras y sin deducciones."
    />
)

export default Saving
