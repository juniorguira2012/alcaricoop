import { Link } from 'gatsby'
import React from 'react'
import './sub-menu.scss'

export interface ISubMenu {
    label: string
    to: string
}

const SubMenu = ({ items, isMoodLinks }: { items: ISubMenu[]; isMoodLinks?: boolean }) => {
    if (isMoodLinks)
        return (
            <div className="sub-menu">
                <div className="sub-menu__content">
                    {items.map(({ label, to }, index) => (
                        <Link to={to} className="sub-menu__link" key={index}>
                            <img className="sub-menu__icon" src="/menu/asterisk.svg" alt="asteristik" />
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        )
    return (
        <div className="sub-menu">
            <div className="sub-menu__content">
                {items.map(({ label, to }, index) => (
                    <div className="sub-menu__link" key={index}>
                        <img className="sub-menu__icon" src="/menu/asterisk.svg" alt="asteristik" />
                        {label}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SubMenu
