import React from 'react'
import './card.scss'

interface ICardHome {
    title: string
    iconUrl: string
    description: string
    modificator?: 'card-home--expand' | 'card-home--yellow' | ''
    className?: string
    [key: number]: string
}

const CardHome = ({ description, iconUrl, title, modificator, className, ...props }: ICardHome) => {
    return (
        <div {...props} className={`card-home ${className ?? ''} ${modificator ?? ''}`}>
            <p className="card-home__title">
                {title}
                <img className="card-home__icon" src={iconUrl} alt="mission icono" />
            </p>
            <p className="card-home__description">{description}</p>
        </div>
    )
}

export default CardHome
