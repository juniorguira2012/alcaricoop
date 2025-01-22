import React from 'react'
import './socials-values.scss'
import CardHome from '../card/Card'

const socialsValues = [
    {
        title: 'Visión',
        description:
            'Ser una cooperativa líder en nuestro país, cumplir con el fortalecimiento del cooperativismo, el desarrollo social y económico de nuestras comunidades.',
        iconUrl: '/home/vision.svg',
    },
    {
        title: 'Misión',
        description:
            'Fomentar la expansión e integración del movimiento cooperativo, impulsando una cultura de ahorro y estabilidad en nuestra sociedad.',
        iconUrl: '/home/mission.svg',
    },
    {
        title: 'Valores',
        description:
            'Solidaridad, igualdad equidad, responsabilidad social, honestidad, Democracia, actitud resetiva, auto ayuda y respeto a los demás.',
        iconUrl: '/home/values.svg',
    },
]

const partnerRequirements = [
    'Presentarse a nuestra cooperativa.',
    'Llenar el formulario de ingreso.',
    'Copia de la cédula.',
    'Tomar la charla de inducción cooperativa.',
]

const SocialValues = () => {
    return (
        <section className="socials-values">
            <h2 data-aos="fade-left" className="socials-values__title">
                ¿Cómo puedo hacerme socio?
            </h2>
            <ul className="socials-values__ul">
                {partnerRequirements.map((requirement, index) => (
                    <li
                        data-aos="fade-down"
                        data-aos-duration={200 * index + 1}
                        className={`socials-values__li ${index % 2 !== 0 ? 'socials-values__li--yellow' : ''}`}
                        key={index}
                    >
                        <img className="socials-values__icon-li" src="/menu/asterisk.svg" alt="asteristik" />
                        {requirement}
                    </li>
                ))}
            </ul>

            <div className="socials-values__content">
                <div className="socials-values__content-cards">
                    {socialsValues?.map((socialValue, index) => (
                        <CardHome
                            data-aos="zoom-out-up"
                            data-aos-duration={200 * index + 1}
                            key={index}
                            description={socialValue.description}
                            iconUrl={socialValue.iconUrl}
                            title={socialValue.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SocialValues
