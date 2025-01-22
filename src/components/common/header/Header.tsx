import React from 'react'
import './header.scss'
import { Link } from 'gatsby'
import SubMenu, { ISubMenu } from '../sub-menu/Sub-menu'
import MediaSocials from '../media-socials/Media-socials'

interface IHeader {
    toggleMenu: () => void
    isShowMenu: boolean
}

export const links = [
    { to: '/alianza-ecologica', label: 'Alianza ecologica', hasSubMenu: false },
    { to: '/certificado-financiero', label: 'Certificado financiero', hasSubMenu: false },
    {
        to: '/servicios',
        label: 'Servicios',
        hasSubMenu: true,
        options: [
            { label: 'Financiamientos', to: '/servicios' },
            { label: 'Electrodomésticos ', to: '/servicios' },
            { label: 'Motores', to: '/servicios' },
            { label: 'Pasolas', to: '/servicios' },
            { label: 'Solares', to: '/servicios' },
            { label: 'Bonos de compra', to: '/servicios' },
            { label: 'Medicamentos o farmacia', to: '/servicios' },
            { label: 'Optica', to: '/servicios' },
            { label: 'Pago de Luz', to: '/servicios' },
        ],
    },
    {
        to: '/prestamos',
        label: 'Prestamos',
        hasSubMenu: true,
        options: [
            { label: 'Personales hipotecarios', to: '/prestamos' },
            { label: 'Vehículos', to: '/prestamos' },
            { label: 'Reparacion de vivienda', to: '/prestamos' },
            { label: 'Negocio', to: '/prestamos' },
            { label: 'Aportaciones', to: '/prestamos' },
            { label: 'Útiles escolares', to: '/prestamos' },
        ],
    },
    { to: '/cuenta-de-ahorro', label: 'Cuenta de ahorro', hasSubMenu: false },
    { to: '/cuenta-de-aportación', label: 'Cuenta de aportación', hasSubMenu: false },
]

const Header = ({ isShowMenu, toggleMenu }: IHeader) => {
    return (
        <div className="header">
            <nav className="header__nav">
                <Link data-aos="fade-down" data-aos-delay="300" className="header__link-logo" to="/">
                    <img className="header__logo" src="/logo.svg" alt="Alcarricoop" />
                </Link>
                <img
                    className="header__btn-menu"
                    onClick={toggleMenu}
                    src="/header/btn-menu.svg"
                    alt="icon menu"
                />

                <ul className="header__ul">
                    {links.map((link, index) => (
                        <li
                            data-aos-duration={index + 1 * 200}
                            data-aos="fade-zoom-in"
                            key={index}
                            className="header__li"
                        >
                            <Link data-aos="fade-down" className="header__link link" to={link.to}>
                                {link.label}

                                {link.hasSubMenu ? (
                                    <SubMenu items={link.options as ISubMenu[]} key={index} />
                                ) : null}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <MediaSocials className="header__media-socials" />
            <div className="header__banner" data-aos="zoom-out-right" />
        </div>
    )
}

export default Header
