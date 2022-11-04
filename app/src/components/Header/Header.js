import React from 'react'
import Menu from './Menu'
import Cart from '../Cart/Cart'
import '../../css/header.css'

export default function Header({cart = false}) {
  return (
    <header className="header"> 
      <div className="header__left">
        <img 
          className="header__menu-btn" 
          src="./images/icon-menu.svg"
          alt="open menu"
          />
        <img
          src="./images/logo.svg"
          alt="logo"
        />
        <Menu/>
      </div>
      <div className="header__right">
        <img 
          className="header__cart-btn"
          src="./images/icon-cart.svg"
          alt="toggle cart"
        />
        <div className="header__photo">
          <img 
            src="./images/image-avatar.png"
            alt="profile"
          />
        </div>
      </div>
      { cart && <Cart/> }
    </header>
  )
}
