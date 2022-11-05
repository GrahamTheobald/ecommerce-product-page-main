import React, {useContext, useState} from 'react'
import { HandlerContext } from '../App'
import Menu from './Menu'
import Cart from '../Cart/Cart'
import '../../css/header.css'

export default function Header({cart = false}) {
  const {handleModal, cartTotal} = useContext(HandlerContext)
  const [menu, setMenu] = useState(true)
  const [displayCart, setDisplayCart] = useState(false)
  function handleMenuClose() {
    setMenu(true)
  }
  return (
    <header className="header"> 
      <div className="header__left">
        <img
          onClick={() => {
            handleModal(true)
            setMenu(false)
          }} 
          className="header__menu-btn" 
          src="./images/icon-menu.svg"
          alt="open menu"
          />
        <img
          src="./images/logo.svg"
          alt="logo"
        />
        <Menu hidden={menu} handleClose={handleMenuClose}/>
      </div>
      <div className="header__right">
        <div 
          className="header__cart-btn">
          <img 
            onClick={() => setDisplayCart(i => !i)}
            src="./images/icon-cart.svg"
            alt="toggle cart"
          />
          <div className="header__cart-btn-notify">
            {cartTotal ? cartTotal : ""}
          </div>
        </div>
        <div className="header__photo">
          <img 
            src="./images/image-avatar.png"
            alt="profile"
          />
        </div>
      </div>
      { displayCart && <Cart hidden={displayCart}/> }
    </header>
  )
}
