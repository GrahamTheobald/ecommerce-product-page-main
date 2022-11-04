import React from 'react'
import Menu from './Menu'

export default function Header() {
  return (
    <header className="header"> 
      <div>
        <img 
          className="header__menu-btn" 
          src="./images/icon-menu.svg"
          alt="open menu"
          />
        <Menu/>
      </div>
      <div>
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

    </header>
  )
}
