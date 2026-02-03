import React from 'react'
import PageLayout from '../components/common/page-layout/Page-layout'
import { SEO } from '../components/common/SEO'
import AboutUs from '../components/home/about-us/About-us'
import SocialValues from '../components/home/socials-values/Socials-values'

const Home = () => {
    return (
        <PageLayout>
            <section className="home">
                <AboutUs />
                <SocialValues />
            </section>
        </PageLayout>
    )
}

export const Head = () => (
    <SEO
        title="Cooporativa Alcarricoop"
        description="Alcarricoop es una cooperativa de ahorro, crédito y servicios múltiples, con la idea de
                        aportar al sistema cooperativo y a nuestros socios la ayuda de obtener los bienes y
                        servicios a un precio justo con igualdad y condición."
    />
)

export default Home
