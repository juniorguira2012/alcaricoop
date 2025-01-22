import React from 'react'
import { Link } from 'gatsby'
import './media-socials.scss'

interface IMediaSocials {
    className?: string
}

const icons = [
    {
        iconUrl: '/footer/phone.svg',
        alt: 'Phone',
        to: 'tel:+8099386652',
    },
    {
        iconUrl: '/header/instagram.svg',
        alt: 'Social Instagram',
        to: '',
    },
    {
        iconUrl: '/header/facebook.svg',
        alt: 'Social Facebook',
        to: '',
    },
    {
        iconUrl: '/footer/whatsapp.svg',
        alt: 'Social Whatsapp',
        to: 'https://api.whatsapp.com/send/?phone=18099386652',
    },
]

const MediaSocials = ({ className }: IMediaSocials) => {
    return (
        <div className={`media-socials ${className ?? ''}`}>
            {icons.map((icon, index) => (
                <Link
                    data-aos-duration={index + 1 * 200}
                    data-aos="fade-zoom-in"
                    target="_blank"
                    className="border-hover media-socials__link"
                    key={index}
                    to={icon.to}
                >
                    <img src={icon.iconUrl} alt="Social Instagram" />
                </Link>
            ))}
        </div>
    )
}

export default MediaSocials
