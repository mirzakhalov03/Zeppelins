import React from 'react'
import './cards.scss'
import { NavLink } from 'react-router-dom'
import card1 from '../../img/card1.png'
import card2 from '../../img/card2.png'
import { useTranslation } from 'react-i18next'

const Cards = () => {
    const { t } = useTranslation()
  return (
    <div className='cards'>
        <div className="container">
            <div className="cards__wrapper">
                <div className="cards__card">
                    <div className="card-img">
                        <img src={card1} alt="" />
                    </div>
                    <div className="card-info">
                        <span>{t('card-date')}</span>
                        <br />
                        <h2>{t('card-title')}</h2>
                        <p>{t('card-text')}</p>
                        <br />
                        <a href="#">{t('card-link')}</a>
                    </div>
                </div>
                <div className="cards__card">
                    <div className="card-img">
                        <img src={card2} alt="" />
                    </div>
                    <div className="card-info">
                        <span>{t('card-date')}</span>
                        <br />
                        <h2>{t('card-title')}</h2>
                        <p>{t('card-text')}</p>
                        <br />
                        <a href="#">{t('card-link')}</a>
                    </div>
                </div>
                <div className="cards__card">
                    <div className="card-img">
                        <img src={card1} alt="" />
                    </div>
                    <div className="card-info">
                        <span>{t('card-date')}</span>
                        <br />
                        <h2>{t('card-title')}</h2>
                        <p>{t('card-text')}</p>
                        <br />
                        <a href="#">{t('card-link')}</a>
                    </div>
                </div>
                <div className="cards__card">
                    <div className="card-img">
                        <img src={card2} alt="" />
                    </div>
                    <div className="card-info">
                        <span>{t('card-date')}</span>
                        <br />
                        <h2>{t('card-title')}</h2>
                        <p>{t('card-text')}</p>
                        <br />
                        <a href="#">{t('card-link')}</a>
                    </div>
                </div>
                <div className="cards__card">
                    <div className="card-img">
                        <img src={card1} alt="" />
                    </div>
                    <div className="card-info">
                        <span>{t('card-date')}</span>
                        <br />
                        <h2>{t('card-title')}</h2>
                        <p>{t('card-text')}</p>
                        <br />
                        <a href="#">{t('card-link')}</a>
                    </div>
                </div>
                <div className="cards__card">
                    <div className="card-img">
                        <img src={card2} alt="" />
                    </div>
                    <div className="card-info">
                        <span>{t('card-date')}</span>
                        <br />
                        <h2>{t('card-title')}</h2>
                        <p>{t('card-text')}</p>
                        <br />
                        <a href="#">{t('card-link')}</a>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Cards