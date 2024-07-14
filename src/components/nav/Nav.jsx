import React from 'react'
import i18n from '../../locales/i18next'
import navLogo from '../../img/sad-zeppelins.svg'
import hireMe from '../../img/Hire-Me.svg'
import { useTranslation } from 'react-i18next'

import './nav.scss'

const Nav = () => {
    const data = useTranslation()
    const { t } = useTranslation() 
  return (
    <nav className='nav'>
        <div className="container">
            <div className="nav__img">
                <img src={navLogo} alt="" />
                <img src={hireMe} alt="" />
            </div>
            <ul>
                <select defaultValue={data.i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
                    <option value="en">En</option>
                    <option value="ru">Ru</option>
                    <option value="uz">Uz</option>
                </select>
                <li>{t('portfolio')}</li>
                <li>{t('blog')}</li>
                <li>{t('CV')}</li>
                <li>{t('store')}</li>
                <li>{t('freelance')}</li>
                <li>{t('aboutMe')}</li>
                <li>{t('contact')}</li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav