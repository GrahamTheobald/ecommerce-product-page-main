import React from 'react'
import '../../css/add-to-cart.css'

export default function AddToCart() {
  return (
    <button 
      className="add-to-cart"
    >
      <img 
        src='./images/icon-cart.svg'
        alt='cart'
      />
      Add to cart
    </button>
  )
}
