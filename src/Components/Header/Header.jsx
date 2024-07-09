import React from 'react'
import '../Header/Header.css'
import logo from '../../assets/logo.png'
function Header() {
  return (
     <div className='header'>
         <div className="header__container">
               <img src={logo} alt="" className='header__img' />
               <ul className='header__list'>
                  <li className='header__item'><a href="" className='header__link'>Продукция</a></li>
                  <li className='header__item'><a href="" className='header__link'>Сертификаты</a></li>
                  <li className='header__item'><a href="" className='header__link'>Наша команда</a></li>
                  <li className='header__item'><a href="" className='header__link'>О нас</a></li>
                  <li className='header__item'><a href="" className='header__link'>Новости</a></li>
                  <li className='header__item'><a href="" className='header__link'>Ваканции</a></li>
                  <li className='header__item'><a href="" className='header__link'>Контакты</a></li>
               </ul>
               <ul className='header__lang'>
                  <li className='header__item2'><a href=""className='header__link2'>RU | EN</a></li>
                  
               </ul>
         </div>
     </div>
  )
}

export default Header
