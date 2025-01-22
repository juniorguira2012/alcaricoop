import React from 'react'
import './about-us.scss'
import Carrousel from '../carrousel/Carrousel'

const AboutUs = () => {
    return (
        <article className="about-us">
            <div className="about-us__content">
                <Carrousel />
                <div className="about-us__content-information">
                    <h1 data-aos="fade-right" className="about-us__title">
                        ¿Qué es <span className="about-us__title-span">Alcarricoop?</span>
                    </h1>
                    <p data-aos="fade-up-left" className="about-us__description">
                        Alcarricop es una cooperativa de ahorro, crédito y servicios múltiples, con la idea de
                        aportar al sistema cooperativo y a nuestros socios la ayuda de obtener los bienes y
                        servicios a un precio justo con igualdad y condición.
                    </p>
                </div>
            </div>
        </article>
    )
}

export default AboutUs
