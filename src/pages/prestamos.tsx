import React from 'react'
import PageLayout from '../components/common/page-layout/Page-layout'
import { SEO } from '../components/common/SEO'
import CardHome from '../components/home/card/Card'
import '../assets/styles/pages/loans.scss'

const prestamos = [
    {
        name: 'Hipotecarios',
        description:
            'Te proporcionamos el poder de cumplir tu sueño de tener tu casa propia, alcarricoop te ayuda.',
        icon: '/loans/money.svg',
    },
    {
        name: 'Vehiculo',
        description: 'Alcarricoop te monta en el vehiculo de tu prefencia, de acuerdo con tu necesidades.',
        icon: '/loans/money.svg',
    },
    {
        name: 'Reparacion de viviendas',
        description: 'Repara o construye tu casa con un 1.4% anual.',
        icon: '/loans/money.svg',
    },
    {
        name: 'Negocio',
        description:
            'Préstamos atractivos y al mejor financiamiento, para qué puedas seguir con la visión de realizar tú sueño.',
        icon: '/loans/money.svg',
    },
    {
        name: 'Utiles escolares',
        description:
            ' Financiamiento a la mejor taza del mercado con hasta un 1.2% de interez mensual por un año.',
        icon: '/loans/money.svg',
    },
]

const Loans = () => {
    return (
        <PageLayout>
            <div className="loans">
                <h1 data-aos="zoom-in-left" className="loans__title">
                    Prestam<span className="about-us__title-span">os</span>
                </h1>

                <ul className="loans__content-ul">
                    <ul className="loans__ul">
                        {prestamos?.map((prestamo, index) => (
                            <CardHome
                                data-aos="zoom-out-up"
                                data-aos-duration={200 * index + 1}
                                key={index}
                                description={prestamo.description}
                                iconUrl={prestamo.icon}
                                title={prestamo.name}
                                modificator={index % 2 !== 0 ? 'card-home--yellow' : ''}
                            />
                        ))}
                    </ul>
                </ul>
            </div>
        </PageLayout>
    )
}

export const Head = () => <SEO title="Prestamos - Alcarricop" pathname="prestamos" />

export default Loans
