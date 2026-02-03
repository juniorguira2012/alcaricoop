import React from 'react'
import { SEO } from '../components/common/SEO'
import PageLayout from '../components/common/page-layout/Page-layout'
import '../assets/styles/pages/services.scss'

const services = [
    { name: 'Electrodomesticos', icon: '/services/electrodomestico.svg' },
    { name: 'Motores', icon: '/services/motorbike.svg' },
    { name: 'Pasolas', icon: '/services/pasola.svg' },
    { name: 'Solares', icon: '/services/solar.svg' },
    { name: 'Bonos de compra', icon: '/services/bono.svg' },
    { name: 'Medicamentos de farmacia', icon: '/services/farmacia.svg' },
    { name: 'Optica', icon: '/services/optica.svg' },
    { name: 'Pago de luz', icon: '/services/pay.svg' },
]

const Servicios = () => {
    return (
        <PageLayout modificator="service-page">
            <div className="services">
                <div data-aos="zoom-out-down" className="services__content-title">
                    <h1 className="services__title">
                        Servicios{' '}
                        <img
                            className="services__icon-title"
                            src="/services/icon-service.svg"
                            alt="service icon"
                        />
                    </h1>
                    <p className="services__description">
                        Alcarricoop te ofrece los mejores <span className="about-us__title-span">servicios</span>{' '}
                        con la mejor taza del mercado y financiamientos de hasta un{' '}
                        <span className="about-us__title-span">1.5 % anual.</span>
                    </p>
                </div>
                <ul className="services__ul">
                    <img className="services__logo" src="/logo.svg" alt="Alcarricoop" />
                    <p className="services__sub-title">
                        Financiamientos <span className="about-us__title-span">disponibles</span>
                    </p>
                    <div className="services__content-ul">
                        {services.map((service, index) => (
                            <li
                                data-aos="zoom-in-right"
                                data-aos-offset="-300"
                                data-aos-duration={200 * index + 1}
                                className="services__li"
                                key={index}
                            >
                                {service.name}{' '}
                                <img className="services__icon-li" src={service.icon} alt={service.name} />
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </PageLayout>
    )
}

export const Head = () => (
    <SEO
        title="Servicios - Alcarricoop"
        pathname="servicios"
        description="Alcarricoop te ofrece los mejores servicios con la mejor taza del mercado y financiamientos de hasta un"
    />
)

export default Servicios
