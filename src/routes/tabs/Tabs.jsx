import React from 'react'
import { useTranslation } from 'react-i18next'
import './tabs.scss'
import { NavLink } from 'react-router-dom'

const Tabs = () => {
    const { t } = useTranslation()
  return (
    <div className='tabs'>
        <div className="container">
            <ul>
                <li><NavLink to="/">{t("tab1")}</NavLink></li>
                <li><NavLink to="/ui">{t("tab2")}</NavLink></li>
                <li><NavLink to="/ux">{t("tab3")}</NavLink></li>
                <li><NavLink to="/product">{t("tab4")}</NavLink></li>
                <li><NavLink to="/article">{t("tab5")}</NavLink></li>
                <li><NavLink to="/tutorials">{t("tab6")}</NavLink></li>
                <li><NavLink to="/news">{t("tab7")}</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Tabs