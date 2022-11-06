import React from 'react'
import '../../css/add-to-cart.css'

export default function AddToCart(props) {
  const {
    handler,
    resetQ,
    quantity,
    product
  } = props

  return (
    <button
      onClick={() => {
        handler(product, quantity)
        resetQ(0)
      }}
      className="add-to-cart button">
      <img 
        src='./images/icon-cart.svg'
        alt='cart'
      />
        <div>
          Add to cart
        </div>
    </button>
  )
}
