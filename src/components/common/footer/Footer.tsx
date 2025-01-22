import React from 'react'
import MediaSocials from '../media-socials/Media-socials'
import './footer.scss'

interface IFooter {
    modificator?: string
}

const Footer = ({ modificator }: IFooter) => {
    return (
        <footer className={`footer ${modificator ? `footer--${modificator}` : ''}`}>
            <div className="footer__content">
                <div className="footer__content-media-socials">
                    <span className="footer__span" />
                    <MediaSocials className="footer__media-socials" />
                    <span className="footer__span" />
                </div>
                <p className="footer__ubication">
                    Estamos ubicados en C/duarte No 241 2do nivel, Los Alcarrizos, Sto,Dom, Oeste, Santo Domingo,
                    Dominican Republic
                </p>
                <p className="footer__copyright">© Copyright alcarricop 2023</p>
            </div>
        </footer>
    )
}

export default Footer
