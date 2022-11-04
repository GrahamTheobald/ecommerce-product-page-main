import React from 'react'
import CartItem from './CartItem'

export default function Cart({items}) {
  return (
    <div className="cart">
      <div className="cart__title">Cart</div>
      <div className="cart__content">
        {
          items ?
            items.map((item, i) => <CartItem key={i} item={item}/>)
              :
            "Your cart is empty."
        }
      </div>
    </div>
  )
}
