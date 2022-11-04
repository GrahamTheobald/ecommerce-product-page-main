import React from 'react'

export default function Menu({hidden = true}) {
  return (
    <div 
      className={hidden ? "header__menu hidden" : "header__menu"}>
      <img 
        className="header__menu__close-menu-btn" 
        src="./images/icon-close.svg"
        alt="close menu"
      />
      <ul className="header__menu__links">
        <li>Collections</li> 
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}
