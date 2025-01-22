import React, { useState } from 'react'
import Header from '../header/Header'
import Menu from '../menu/Menu'
import Footer from '../footer/Footer'
import './page-layout.scss'

interface IPageLayout {
    children: React.ReactNode
    modificator?: 'service-page' | 'ahorro-page'
}

const PageLayout = ({ children, modificator }: IPageLayout) => {
    const [isShowMenu, setIsShowMenu] = useState(false)
    const handleToggleMenu = () => setIsShowMenu(!isShowMenu)

    return (
        <div
            className={`page-layout ${modificator ? `page-layout--${modificator}` : ''}`}
            style={isShowMenu ? { height: '100vh', overflow: 'hidden' } : {}}
        >
            <Header isShowMenu={isShowMenu} toggleMenu={handleToggleMenu} />
            <Menu isShowMenu={isShowMenu} toggleMenu={handleToggleMenu} />
            <main className="page-layout__main">{children}</main>
            <Footer modificator={modificator} />
        </div>
    )
}

export default PageLayout
