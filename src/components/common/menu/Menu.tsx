import React, { MutableRefObject, useRef, useEffect, useState, useMemo } from 'react'
import { links } from '../header/Header'
import { Link } from 'gatsby'
import SubMenu, { ISubMenu } from '../sub-menu/Sub-menu'
import './menu.scss'

interface IMenu {
    toggleMenu: () => void
    isShowMenu: boolean
}

const Menu = ({ toggleMenu, isShowMenu }: IMenu) => {
    const ref: MutableRefObject<HTMLDivElement | null> = useRef(null)
    const [clusturedElementIndices, setClusturedElementIndices] = useState<{ [key: number]: boolean }>({})

    useEffect(() => {
        const dataClusturedElementIndices = links.reduce((current: { [key: number]: boolean }, link, index) => {
            current[index] = false
            return current
        }, {})
        setClusturedElementIndices(dataClusturedElementIndices)
    }, [])

    useEffect(() => {
        return () => ref.current?.removeEventListener('animationend', addAnimationToMenu)
    }, [isShowMenu])

    const handleCLoseMenu = () => {
        if (ref.current) {
            ref.current.classList.add('menu--animation-closed')
            ref.current.addEventListener('animationend', addAnimationToMenu)
        }
    }

    const addAnimationToMenu = ({ animationName }: AnimationEvent) => {
        if (animationName === 'hiddeMenu') {
            ref.current?.classList.add('menu--hidden')
            toggleMenu()
        }
    }

    return (
        <div ref={ref} className={`menu ${isShowMenu ? 'menu--show' : ''}`}>
            <div className="menu__header">
                <Link to="/">
                    <img className="menu__logo" src="/logo.svg" alt="Alcarricoop" />
                </Link>
                <img
                    data-aos={isShowMenu ? 'zoom-in-right' : ''}
                    className="menu__btn-close"
                    onClick={handleCLoseMenu}
                    src="/menu/close.svg"
                    alt="icon close"
                />
            </div>

            <ul className="menu__ul">
                {links.map((link, index) => {
                    if (link.hasSubMenu) {
                        return (
                            <div
                                onClick={() =>
                                    setClusturedElementIndices({
                                        ...clusturedElementIndices,
                                        [index]: !clusturedElementIndices[index],
                                    })
                                }
                                className={`menu__sub-menu ${
                                    clusturedElementIndices[index] ? 'menu__link--active' : ''
                                }`}
                            >
                                <div className="menu__content-sub-menu">
                                    <img
                                        className="menu__icon-arrow"
                                        src="/menu/arrow-up.svg"
                                        alt="icon arrow-up"
                                    />
                                    <span className="menu__label-sub-menu">{link.label}</span>
                                </div>
                                <SubMenu isMoodLinks items={link.options as ISubMenu[]} key={index} />
                            </div>
                        )
                    }
                    return (
                        <li className="menu__li" key={index}>
                            <img className="menu__icon-arrow" src="/menu/asterisk.svg" alt="icon asterisk" />
                            <Link className="menu__link" to={link.to}>
                                {link.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Menu
