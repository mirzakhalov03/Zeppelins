import React from 'react'
import { useTranslation } from 'react-i18next'
import linkedin from '../../img/linked.svg'
import medium from '../../img/medium.svg'
import twitter from '../../img/twitter.svg'
import heroImg from '../../img/hero.png'
import './home.scss'

const Home = () => {
    const { t } = useTranslation() 

  return (
    <div className='hero'>
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__intro">
                    <h1>{t('hero-title')}</h1>
                    <p>{t('hero-title2')}</p>
                    <span>{t('hero-text')}</span>
                    <div className="social-links">
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={medium} alt="" />
                    </div>
                </div>
                <img src={heroImg} alt="" />
            </div>
        </div>
    </div>

    
  )
}

export default Home